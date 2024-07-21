import './BurgerMenu.css'

const BurgerMenu = () => {
    return (
        <nav>
            <div class="navbar">
                <div class="container nav-container">
                    <input class="checkbox" type="checkbox" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <div class="menu-items">
                        <div class="section-filter">
                            <div class="blog-sb-widget multishopcategories_widget">
                                <div class="section-sb-current">
                                    <ul class="section-sb-list">

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Абитуриентам</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Бакалавриат и специалитет</a>
                                                </li>
                                                <li>
                                                    <a href="#">Магистратура</a>
                                                </li>
                                                <li>
                                                    <a href="#">Ординатура</a>
                                                </li>
                                                <li>
                                                    <a href="#">Аспирантура</a>
                                                </li>
                                                <li>
                                                    <a href="#">Среднее профессиональное образование</a>
                                                </li>
                                                <li>
                                                    <a href="#">Целевое обучение</a>
                                                </li>
                                                <li>
                                                    <a href="#">Инвалидам и лицам с ОВЗ</a>
                                                </li>
                                                <li>
                                                    <a href="#">Иностранным гражданам</a>
                                                </li>
                                                <li>
                                                    <a href="#">Приёмная комиссия</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Студентам</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Сотрудникам</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Об университете</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Факультеты и кафедры</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Школьникам</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="category-parent">
                                            <a href="#" className='LinkUppercase'>Научная деятельность</a>
                                            <ul class="category-children">
                                                <li>
                                                    <a href="#">Electricity1</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <div className="Links LinkUppercase">
                                            <a href="#">Сведения об образовательной организации</a>
                                            <a href="#">Многофункциональный центр</a>
                                            <a href="#">Новости</a>
                                        </div>
                                        <div className="contacts">
                                            <p>Россия, 460000, г. Оренбург, 
                                                ул. Советская, 6
                                                <br></br>
                                                Тел. +7 (3532) 50-06-20
                                                <br></br>
                                                E-mail: office@orgma.ru</p>
                                            <p className='Pbold'>Приёмная комиссия: +7 (3532) 50-06-03</p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <p className='orgma'>© 2023 федеральное государственное бюджетное образовательное учреждение высшего образования «Оренбургский государственный медицинский университет» Министерства здравоохранения Российской Федерации. Все права защищены. Использование новостных материалов сайта возможно только при наличии активной ссылки на <span className='White'>https://www.orgma.ru</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default BurgerMenu;