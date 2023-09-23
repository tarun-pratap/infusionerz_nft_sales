import React from 'react'

function tpcard(props) {
  return (
    <>
    <div class="card-slt">
                    <div class="card-imaget">
                        <img
                           src={props.img} />
                    </div>

                    {/* <div class="heartaction" onclick="hearty()" id="hrtc" href="#"> <img src="heart.png" class="heartimg" alt=""/> </div> */}
                    <div class="card-headingt" style={{"color":"aqua"}}>
                    <center>{props.name}</center>
                    </div>
                    <div class="card-textt" style={{"fontSize":"0.8rem"}}>
                     
                   Purchased on <span style={{"color":"#D3D3D3","fontSize":"1rem"}}> {props.pdate}</span>
                    </div>
                    <div class="card-textt" style={{"color":"#66FF00"}}>
                      <center>  {props.price}</center>
                    </div>
                    <a href="#" class="card-buttont"> Purchased</a>
                </div>
    </>
  )
}

export default tpcard