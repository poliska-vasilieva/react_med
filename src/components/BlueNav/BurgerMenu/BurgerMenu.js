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
                        {/* <li><a href="#">Сотрудникам</a></li>
                        <li><a href="#">Об университете</a></li>
                        <li><a href="#">Факультеты и кафедры</a></li>
                        <li><a href="#">Школьникам</a></li>
                        <li><a href="#">Научная деятельность</a></li>
                        <li><a href="#">Сведения об образовательной организации</a></li>
                        <li><a href="#">Многофункциональный центр</a></li>
                        <li><a href="#">Новости</a></li> */} 
                        <ul className='UlBurgerMenu'>
                            <div class="DropdownBurgerMenu">
                                <button class="DropbtnBurgerMenu">Абитуриентам</button>
                                <div class="Dropdown-contentBurgerMenu">
                                    <div className='BlocksBurgerMenu'>
                                        <div>
                                            <a href="#">Бакалавриат и специалитет</a>
                                            <a href="#">Магистратура</a>
                                            <a href="#">Ординатура</a>
                                            <a href="#">Аспирантура</a>
                                            <a href="#">Среднее профессиональное образование</a>
                                            <a href="#">Целевое обучение</a>
                                            <a href="#">Инвалидам и лицам с ОВЗ</a>
                                            <a href="#">Иностранным гражданам</a>
                                            <a href="#">Приёмная комиссия</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="DropdownBurgerMenu">
                                <button class="DropbtnBurgerMenu">Студентам</button>
                                <div class="Dropdown-contentBurgerMenu">
                                    <div className='BlocksBurgerMenu'>
                                        <div>
                                            <a href="#">Сведения об образовательной организации</a>
                                            <a href="#">Факультеты и кафедры</a>
                                            <a href="#">Об Университете</a>
                                            <a href="#">История</a>
                                            <a href="#">Руководство</a>
                                            <a href="#">Учёный совет</a>
                                            <a href="#">Преподаватели</a>
                                            <a href="#">Факультеты и кафедры</a>
                                            <a href="#">Клуб выпускников ОрГМУ</a>
                                            <a href="#">Контакты</a>
                                            <a href="#">Противодействие терроризму и экстремизму</a>
                                            <a href="#">Противодействие коррупции</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BurgerMenu;