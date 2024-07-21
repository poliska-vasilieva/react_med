import './Header.css';
import logo from "./img/Logo 2.png";

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
                <a href="#" id='Title'>Структура и история</a>
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
              </div>
              <div>
                <a href="#" id='Title'>Сотруднику</a>
                <a href="#">Личный кабинет</a>
                <a href="#">Профсоюзный комитет</a>
                <a href="#">Отдел кадров</a>
                <a href="#">Нормативные документы</a>
                <a href="#">Дополнительное образование</a>
              </div>
              <div>
                <a href="#" id='Title'>Выпускникам</a>
                <a href="#">Подлинность диплома</a>
                <a href="#">Дубликат диплома</a>
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
                <a href="#">Бакалавриат и специалитет</a>
                <a href="#">Магистратура</a>
                <a href="#">Ординатура</a>
                <a href="#">Аспирантура</a>
                <a href="#">Среднее профессиональное образование</a>
                <a href="#">Целевое обучение</a>
                <a href="#">Инвалидам и лицам с ОВЗ</a>
              </div>
              <div>
                <a href="#" id='Title'>Иностранным гражданам</a>
                <a href="#" id='Title'>Приемная комиссия</a>
                <a href="#">Личный кабинет</a>
                <a href="#">Календарь поступающего</a>
                <a href="#">Правила приёма</a>
                <a href="#">Чек-лист абитуриента</a>
                <a href="#">Контакты</a>
                <a href="#">Частые вопросы</a>
              </div>
              <div>
                <a href="#" id='Title'>Школьникам</a>
                <a href="#">О довузовском образовании </a>
                <a href="#">Курсы и интенсивы для подготовки к поступлению</a>
                <a href="#">Олимпиады</a>
                <a href="#">Школа «Юный медик»</a>
                <a href="#">Cопровождение химико-биологических классов</a>
                <a href="#">Тестирование на профпригодность</a>
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