import React from 'react'
import "./mcard.css"

function card(props) {
  return (
   <>

              <div class="dcard">

                <figure class="dcard-banner">
                  
                    <img src={props.img} loading="lazy"
                      alt="Walking On Air" class="dimg-cover"/>
               
                </figure>

                <h3 class="h3 dcard-title">
                  {props.name}
                </h3>

                <span class="dcard-author">
                  Owned ID: <p class="dauthor-link">{props.owner}</p>
                </span>

                <div class="dwrapper">
                  <data class="dwrapper-item" value="1.5">$ {props.price}</data>

                </div>

                <button class="btn">

                  <span>Buy</span>
                </button>

              </div>
            
   </>
  )
}

export default card