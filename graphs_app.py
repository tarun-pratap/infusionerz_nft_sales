from asyncio.windows_events import NULL
from email.headerregistry import Address
import pandas as pd
import requests
import json
import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression
from datetime import datetime
import uvicorn

from fastapi import FastAPI

from pydantic import BaseModel



class transdet(BaseModel):
    contract_address: str
    token_id: str
    

def fetchnfttrans(addc,ti):
        address=addc
        id=ti
        url = "https://api.reservoir.tools/transfers/v2?token="+address+"%3A"+id+"&limit=20"
        headers = {
            "accept": "*/*",
            "x-api-key": "9dbbac30-c0b5-5822-88ca-81ebe7f2ff8c"
        }
        response = requests.get(url, headers=headers)
        transdata= json.loads(response.text).get("transfers")
        # print(transdata)
        
        transarr=[]
        for trans in transdata:
            if(trans.get('price') is not None):
                # print([datetime.fromtimestamp(trans['timestamp']),trans['price']])
                transarr.append([trans['timestamp']*1000,trans['price']])
        
        
        df = df = pd.DataFrame(transarr, columns=['date','price'])
        # print(df)
    
        lin_reg = LinearRegression()
        LinearRegression(copy_X=True, fit_intercept=True, n_jobs=None,normalize=False)
        lin_reg.fit(df.date.values.reshape(-1,1), 
                    df.price.values.reshape(-1,1))
        
        return(lin_reg.intercept_[0],lin_reg.coef_[0][0])


app = FastAPI()

@app.get('/')

def index():

    return "bello infusionerz"

@app.get('/apiv1/{name}')

def api1(name: str):

    return {'message': f'Hello! @{name}'}

@app.get('/apiv2/')
def api2(name: str):

    return {'message': f'Hello! @{name}'}


@app.post('/predict')
def api3(data: transdet):
    recived=data.dict()
    global colladd,tokenid
    colladd=recived['contract_address']
    tokenid=recived['token_id']

    interc,slo=fetchnfttrans(colladd,tokenid)

    return{"reg_intercept":interc,"reg_coef": slo}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=4000, debug=True)


