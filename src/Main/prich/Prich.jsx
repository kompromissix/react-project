import './Prich.css'
import { ways } from './date.js'
function Blockinfo(Info){
    return(
        <>
            <div className='Blockinfo'>
                <div>
                    <img src={Info.img} alt="" />
                    <p>{Info.p}</p>
                </div>
            </div>
        </>

    )
}
function Blockinfo2(Info){
    return(
        <>
            <div className='Blockinfo2'>
                <div>
                    <img src={Info.img} alt="" />
                    <p>{Info.p}</p>
                </div>
            </div>
        </>

    )
}

export default function Prich() {
    return(
        <>
            <section className='background1'>
                <div>
                    <div>
                        <p><span>7 причин </span>почему именно мы? </p>
                    </div>
                    <div className='info-blocks'>
                        <div>
                            <Blockinfo {...ways[0]}/>
                            <Blockinfo {...ways[1]}/>
                            <Blockinfo {...ways[2]}/>
                            <Blockinfo {...ways[3]}/>

                        </div>
                        <div>
                            <Blockinfo2 {...ways[4]}/>
                            <Blockinfo2 {...ways[5]}/>
                            <Blockinfo2 {...ways[6]}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}