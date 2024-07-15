import './Header.css';
import logo from "./img/Logo 2.png";

const Header = () => {
  return (
    <div className='Nav'>
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <ul>
        <div class="DropdownHeader">
          <button class="DropbtnHeader">Университет</button>
          <div class="Dropdown-contentHeader">
            <div className='Blocks'>
              <div>
                <a href="#" className='main'>Структура и история</a>
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
              <div>
                <a href="#" className='main'>Сотруднику</a>
                <a href="#">Личный кабинет</a>
                <a href="#">Профсоюзный комитет</a>
                <a href="#">Отдел кадров</a>
                <a href="#">Нормативные документы</a>
                <a href="#">Дополнительное образование</a>
              </div>
              <div>
                <a href="#" className='main'>Выпускникам</a>
                <a href="#">Подлинность диплома</a>
                <a href="#">Дубликат диплома</a>
              </div>

            </div>
          </div>
        </div>

        <div class="DropdownHeader">
          <button class="DropbtnHeader">Поступающим</button>
          <div class="Dropdown-contentHeader">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="DropdownHeader">
          <button class="DropbtnHeader">Обучающимся</button>
          <div class="Dropdown-contentHeader">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="DropdownHeader">
          <button class="DropbtnHeader">Научная деятельность</button>
          <div class="Dropdown-contentHeader">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header;