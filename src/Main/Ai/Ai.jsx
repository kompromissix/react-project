import './Ai.css'
import { textinfo } from './date.js'
import Vector from './Ai-assets/Vector.png'


function Infobox(box){
    return(
        <>
            <div className='boxing'>
                <div>
                    <img src={Vector} alt="" />
                    <p>{box.text}</p>
                </div>
            </div>
        </>
    )
}

export default function Ai() {
    return(
        <>
            <section className='background2'>
                <div className='Ai-block'>
                    <p><span>Искусственный интеллект </span>- это круто? </p>
                    <div className='box-info-block'>
                        {textinfo.map((way) =>(
                            <Infobox {...way}/>
                        ))}
                    </div>
                    <div className='buttom-aqua'>
                        <p>Записаться на ознакомительный вебинар</p>
                    </div>
                </div>
                <div className='absolute-image'>
                    
                </div>
            </section>
        </>
    )
}