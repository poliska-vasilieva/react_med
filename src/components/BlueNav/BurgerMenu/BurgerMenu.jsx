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

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default BurgerMenu;