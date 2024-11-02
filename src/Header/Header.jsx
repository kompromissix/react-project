import logo from './Header-assets/logo.png'
import phone from './Header-assets/phone.png'
import ushi from './Header-assets/ushi.png'
import './Header.css'
import diplom from './Header-assets/diplom.png'
import Button from './button/button'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <div>
                        <img src={phone} alt="" />
                        <p>+ 82 (10) 7526-9192 </p>
                    </div>
                </nav>
                <div className='header-bottom'>
                    <div className='glaz-na-kovkaz'>
                        <div>
                            <div>
                                <img src={ushi} alt="" />
                            </div>
                        </div>
                        <p>Бесплатная консультация</p>
                    </div>
                    <div className='VeraVla'>
                        <div>
                            <div className='VeraVlaEdu'>
                                <p>Добро пожаловать в онлайн школу </p>
                                <h1>VeraVla edu!</h1>
                                <h2>Переквалифицируйся в разработчика искусственного интеллекта и получи высокооплачиваемую работу    </h2>
                            </div>
                            <div className='diplom-div'>
                                <div className='backgr'>
                                    <img src={diplom} alt="" />
                                </div>
                                <p><span>Мы обучаем с гарантией!</span><br />Первый месяц действует гарантия 100% возврата  денег, если тебя не устроят наши курсы</p>
                            </div>
                            <Button/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}