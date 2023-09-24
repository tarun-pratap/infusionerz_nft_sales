import React from 'react'
function topcollectionscard(props) {
  return (
    <>

    <div class="topcollectionscard">
                 
             <div className='avatardiv'>
             <img src= {props.avimage} alt="" className='bimg' />
                </div>   
                 <img src={props.avvimage} alt="" className='aimg' />
                 <h3 className='nftnameinsidecollection'>
                    {props.collectionname}
                 </h3>
                 <h3 className='contractaddress' style={{"fontSize":"0.6rem","textAlign":"center"}}>
                  <a href={props.link} target="_blank" className='anchortag'>{props.contractaddress}</a>

                 </h3>
                 <div className='floorandvolumediv'>
                 <p>
                    Total NFT's = {props.tc}
                  </p>
                 
                 </div>
                  
                </div>
                
                

    </>
  )
}

export default topcollectionscard