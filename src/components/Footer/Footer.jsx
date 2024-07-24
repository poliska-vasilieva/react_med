import './Footer.css';

function Footer () {
    return (        
        <div className='Footer'>
            <div className='Ftr'>
            <div className="contact">
                <p>Россия, 460000, г. Оренбург, ул. Советская, 6<br></br>
                Тел. +7 (3532) 50-06-20
                <br></br>
                E-mail: office@orgma.ru</p>
                <p className='Pbold'>Приёмная комиссия: +7 (3532) 50-06-03</p>
            </div>
            <div className='LinkFirst'>
                <ul>
                    <a href="#"><li>Контакты</li></a>
                    <a href="#"><li>Часто задаваемые вопросы</li></a>
                    <a href="#"><li>Обратная связь</li></a>
                    <a href="#"><li>Реквизиты для перечисления</li></a>
                {/* </ul>
            </div>
            <div className='LinkSecond'>
                <ul> */}
                    <a href="#"><li>Противодействие коррупции</li></a>
                    <a href="#"><li>Сведения о доходах</li></a>
                    <a href="#"><li>Антитеррористическая безопасность</li></a>
                    <a href="#"><li>Политика обработки персональных данных ОрГМУ</li></a>
                </ul>
            </div>
        </div>
        <div className='Down'>
        <p className='orgma__f'>© 2023 федеральное государственное бюджетное образовательное учреждение высшего образования «Оренбургский государственный медицинский университет» Министерства здравоохранения Российской Федерации. Все права защищены. Использование новостных материалов сайта возможно только при наличии активной ссылки на <span className='White'>https://www.orgma.ru</span></p>
        <p className='tech'>Техподдержка сайта: www@orgma.ru</p>
        </div>
        </div>
    )
}

export default Footer;