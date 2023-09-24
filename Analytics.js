import React from 'react'
import "./analytics.css"
import { Chart } from "react-google-charts";
import { InfinitySpin } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Analytics(props) {
  

  
 var y= new Date().setFullYear(new Date().getFullYear() + 1)
 // plus 1 month
 var m= new Date().setMonth(new Date().getMonth() + 1)
 //  console.log(m,y)
 
 
 const location = useLocation();
 const [trans, setTrans] = useState([]);
 const [det, setDet] = useState([]);
 const [reg, setReg] = useState([]);
 const [pri, setPri] = useState();
 const [isLoading, setisLoading] = useState(true);
 
 
 
 var fetchnft = async () => {
    var nft;
    const options = { method: 'GET', headers: { accept: '*/*', 'x-api-key': "9dbbac30-c0b5-5822-88ca-81ebe7f2ff8c" } };

    const urlp = 'https://api.reservoir.tools/stats/v2?token= + location.state.collection + %3A + location.state.nid'

    await fetch(urlp, options)
      .then(response => response.json())
      .then(response => {
        nft = response.stats.market;
      })
      .catch(err => console.error(err));
      setPri([nft]);
      
      
      console.log("pri",pri)
  }


  
  var fetchml = async () => {
    var ri,rs;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "contract_address": location.state.collection,
        "token_id": location.state.nid
      })
    };
    await fetch('/predict', requestOptions)
    .then(response => response.json())
    .then((responseJSON) => {
      // do stuff with responseJSON here...
      ri=responseJSON.reg_intercept;
      rs=responseJSON.reg_coef;
      console.log(responseJSON);
    })
    .catch(err => console.error(err));
     await setReg([rs,ri]);
    
  }
  
  
  var fetchnfttransfer = async () => {
    var nftdet;
    var arr = [];
    
    const options = { method: 'GET', headers: { accept: '*/*', 'x-api-key': "9dbbac30-c0b5-5822-88ca-81ebe7f2ff8c" } };
    // const addresses=["0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7","0x1A92f7381B9F03921564a437210bB9396471050C","0x2acAb3DEa77832C09420663b0E1cB386031bA17B","0x60E4d786628Fea6478F785A6d7e704777c86a7c6","0x9372b371196751dd2F603729Ae8D8014BbeB07f6","0x8630cDEaA26D042f0F9242ca30229b425E7f243f","0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"];
    
    const address = location.state.collection;
    const tokenid = location.state.nid;
    const urlt = 'https://api.reservoir.tools/transfers/v2?token= + address + %3A + tokenid + &limit=20'
    // const urlp=https://api.reservoir.tools/tokens/v5?collection=+address+&sortBy=floorAskPrice&limit=10&includeTopBid=false&includeAttributes=false'
    // console.log(urlt);
    await fetch(urlt, options)
    .then(response => response.json())
    .then(response => { nftdet = response.transfers[0].token; return response.transfers })
    .then(response => {
      response.forEach(ele => {
        ele.price && arr.push([new Date(ele.timestamp * 1000), ele.price, (reg[0] * (ele.timestamp * 1000) + reg[1])])
        //  console.log(9.402446557376842e-18*(ele.timestamp*100))
      });
    }
    
    )
    .catch(err => console.error(err));
    var last= Object.values(arr[trans.length])[1];
    console.log("last",[new Date(m),last,reg[0]*(m)+reg[1]])
    // arr=[[new Date(m),last,0],reg[0]*(m)+reg[1]]
    // arr=[[new Date(y),last,0],reg[0]*(y)+reg[1]]
    
    setTrans([...trans, ...arr]);
    console.log(trans)
    setDet(nftdet)
  }
  
 
  useEffect(() => {
    // setisLoading(true);
    fetchml();
    fetchnft();
    setisLoading(false);
    fetchnfttransfer();
    

  },[]);
  useEffect(() => {
    console.log(trans)
  }, [reg]);

  
  
  
  
  if (isLoading) {
    return (
      <div className="loadermp" style={{ paddingLeft: "41.5vw", paddingTop: "30vh" }}>

        <InfinitySpin
          width='200'
          color="aqua"
          />
      </div>
    )

  }
  else{

    
    return (
      <>
      <div className="anahead">
        <h3>Analytics</h3>
      </div>
      <div className="anfirst">
        <div className="nftanaldet">
          <div className="nftpic">
            <img className='nftdp'  src={det.image} alt="" />
          </div>
          <div className="nftpdet">
            <h3 style={{ "paddingTop": "1rem" }}>{det.name}</h3>
            <h5>Contract Address:</h5>
            <h6 style={{ "fontSize": "0.7rem" }}>{det.contract}</h6>
            {/* {console.log("bello",pri)} */}
            {/* {pri.floorAsk&&
            <h5>price: {pri.floorAsk.price.amount.usd} USD( {pri.floorAsk.price.amount.native} {pri.floorAsk.price.currency.symbol} )</h5>} */}
          </div>

        </div>
          {/* {console.log(trans)} */}
          {console.log(reg)}
        <div className="regraph">
         { trans.length?
            <Chart
            chartType="LineChart"
            data={[["Transaction Date", "Transaction Amount(ETH)", "prediction"], ...trans]}
            width="95%"
            height="95%"
            options={{ "backgroundColor": "aqua",legend: { position: "bottom" }  , "colors": ["#ec1f7f", "green"],pointSize: 7,crosshair: { trigger: 'both' },animation: {
              startup: true,
              easing: "linear",
              duration: 500,
            } }}
            legendToggle
            style={{ "backgroundColor": "aqua" }}
            
            loader={<InfinitySpin
              width='200'
              color="aqua"
              />}
              />:<h3>Transaction History Not Available</h3>
            }
            
        </div>
      </div>
      <div className="nftanalysis">
        <h3>Analysis</h3>
        <div className="anadeta">
          {/* {pri.topBid&&<div className="rarity"> Top Bid: &nbsp; {pri.topBid.price.amount.usd} USD( {pri.topBid.price.amount.native} {pri.topBid.price.currency.symbol} )</div>} */}
          <div className="priceaft">Price after 1 month:{reg[0]*(m)+reg[1]}  ETH</div>
          <div className="priceaft">Price after 1 Year: {reg[0]*(y)+reg[1]} ETH</div>
        </div>

      </div>
    </>
  )
}
}

export default Analytics