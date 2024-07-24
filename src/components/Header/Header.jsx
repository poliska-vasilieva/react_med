import './Header.css';
import logo from "./img/Logo 2.png";
import StructureandHistoryList from './DropdownList/University/StructureHistory'
import EmployeeList from './DropdownList/University/Employee'
import GraduatesList from './DropdownList/University/Graduates'
import EntranceList from './DropdownList/Incoming/Entrance'
import AdmissionCommitteeList from './DropdownList/Incoming/AdmissionCommittee'
import Schoolchild from './DropdownList/Incoming/Schoolchild'

function Header () {
  return (
    <div className='Nav'>
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <ul>
        <div class="Dropdown">
          <button class="Dropbtn">Университет</button>
          <div class="Dropdown-content">
            <div className='Blocks'>
              <div>
                <div id='Title'>Структура и история</div>
                <StructureandHistoryList />
              </div>
              <div>
                <div id='Title'>Сотруднику</div>
                <EmployeeList />
              </div>
              <div>
                <div id='Title'>Выпускникам</div>
                <GraduatesList />
              </div>
            </div>
          </div>
        </div>

        <div class="Dropdown">
          <button class="Dropbtn">Поступающим</button>
          <div class="Dropdown-content">
          <div className='Blocks'>
              <div>
                <a href="#" id='Title'>Поступление</a>
                <EntranceList />
              </div>
              <div>
                <a href="#" id='Title'>Иностранным гражданам</a>
                <br />
                <a href="#" id='Title'>Приемная комиссия</a>
                <AdmissionCommitteeList />
              </div>
              <div>
                <a href="#" id='Title'>Школьникам</a>
                <Schoolchild />
              </div>
            </div>
          </div>
        </div>

        <div class="Dropdown">
          <button class="Dropbtn">Обучающимся</button>
          <div class="Dropdown-content">
          <div className='Blocks'>
              <div>
                <a href="#" id='Title'>Личный кабинет</a>
                <a href="#" id='Title'>Студенческая жизнь</a>
                <a href="#">Ассоциация общественных объединений студентов</a>
                <a href="#">Клуб «Горицвет»</a>
                <a href="#">Студенческий спортивный клуб</a>
                <a href="#" id='Title'>Первокурсникам</a>
                <a href="#">Прикрепление к Клинике адаптационной терапии</a>
                <a href="#">Проход в университет</a>
                <a href="#">Единая учётная запись</a>
                <a href="#">? Воинский учёт</a>
              </div>
              <div>
                <a href="#" id='Title'>Студентам</a>
                <a href="#">Среднее профессиональное образование </a>
                <a href="#">Лечебный факультет</a>
                <a href="#">Стоматологический факультет</a>
                <a href="#">Педиатрический факультет</a>
                <a href="#">Факультет клинической психологии</a>
                <a href="#">Медико-профилактический факультет</a>
                <a href="#">Факультет высшего сестринского образования</a>
                <a href="#">Факультет общественного здравоохранения</a>
                <a href="#">Фармацевтический факультет</a>
              </div>
              <div>
                <a href="#">Факультет иностранных студентов</a>
                <a href="#">Отдел производственной практики</a>
                <a href="#">Трудоустройство</a>
                <a href="#">Оплата обучения</a>
                <a href="#">Стипендии </a>
                <a href="#">Зарубежные стажировки</a>
                <a href="#">Симуляционный центр </a>
                <a href="#">Платные образовательные услуги</a>
                <a href="#">Совет студентов медицинских и фармацевтических вузов при Министерстве здравоохранения Российской Федерации</a>
                <a href="#">Общежития</a>
                <a href="#">Доступ к информационным системам</a>
              </div>
            </div>
          </div>
        </div>

        <div class="Dropdown">
          <button class="Dropbtn">Научная деятельность</button>
          <div class="Dropdown-content">
          <div className='Blocks'>
              <div>
                <a href="#">Основные направления исследований </a>
                <a href="#">Организация научной деятельности</a>
                <a href="#">Подготовка научно-педагогических кадров</a>
                <a href="#">Конкурсы, гранты</a>
                <a href="#">Научно-практические мероприятия</a>
                <a href="#">Патентная деятельность</a>
                <a href="#">Международная деятельность, академическая мобильность</a>
                <a href="#">Научно-инновационный центр координации исследований</a>
                <a href="#">Центры коллективного пользования</a>
                <a href="#">Совет молодых учёных</a>
                <a href="#">Студенческое научное общество</a>
                <a href="#">Отдел диссертационных исследований</a>
                <a href="#">Публикации</a>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header;