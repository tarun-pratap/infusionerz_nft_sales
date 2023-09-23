import React from 'react'
import Tpcard from '../explore/tpcard'
import Tscard from '../explore/tscard'
import "./mynft.css"

function mynft() {
    return (
        <>
            <div className="mynftpage">


                <article>
                    <h1>OWNED</h1>
                </article>
                <div class="containernftt" >
                    <div class="rowtpcardttt">

                        <Tpcard pdate="Nov-24-2021 08:01:17 AM" price="1.01 ETH ($1,390.44)" name="DeadFellaz #3564" img="https://api.reservoir.tools/assets/v1?asset=36109e01a0f463f89d0054dfb865c355814e73000779cff19c745153c0940b623fa8982f372ed3a4186108f1d6420bc7ec3ee067ddbc09e6ebc9e4671f27f8fb61cd00fb37aa4a6d6d279c27a99aeab657e44d1f12ca09b32c772d6f89c69dc71222a641bda83382cc3b5645edb1be107a4285172dbd659211740fb1a0997ae515b9985fe42c027c343f5f193c878a31"/>
                        <Tpcard pdate="Aug-16-2021 06:54:24 AM" price="3.25 ETH ($4,474.18)" name="Cool Cat #1639" img="https://api.reservoir.tools/assets/v1?asset=36109e01a0f463f89d0054dfb865c355814e73000779cff19c745153c0940b6260b60c6883d3391fc27d648b35a295bd02a281b495813c54b985fdf89b9b4b3768f5cb320dca61d2921cf62f9dad0cccba489d223499fb8b23857bc665e37aa014c87f31e7177119e6fd5f09ec5438e72ceea2406a81f303a484021170b7535b45c2a204135238e7829253caa96e82ed"/>
                        <Tpcard pdate="Oct-21-2021 08:10:24 PM" price="2.8505 ETH ($3,924.20)" name="Pudgy Penguin #2592" img="https://api.reservoir.tools/assets/v1?asset=36109e01a0f463f89d0054dfb865c355814e73000779cff19c745153c0940b62ad40728092375215ff1082e9a927a14e0f7b12bafb90885df4438703dbcc76ec57eebfa90d719ac14307dd9ca6b6266fc93629e5855f6aba627b546205ae9fb6e44b42a3966f80db8fe4e8bf5d808c6f164c544b55710f48a7f9236bcafabe6dcfa871faa5de16482cea7d404c7452b5"  />
                        <Tpcard pdate="Oct-22-2021 11:28:51 PM" price="0.079 ETH ($108.76)" name="Clayling #1335" img="https://api.reservoir.tools/assets/v1?asset=48c6a93ad3e19fdc576c82ff40977656170e5f1d49bc16b7529813736a8c6da5782ee0dadf18948f454d7cc0aec9d7f2" />
 

                    </div>
                </div>
                <article id='smarg'>
                    <h1>SOLD</h1>
                </article>
                <div class="containernfts" >
                    <div class="rowtpcardttts">
        <br />
                        <h3>NO NFTs Sold Yet</h3>
                        {/* <Tscard />
                        <Tscard />
                        <Tscard />
                        <Tscard /> */}
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default mynft