import './Header.css';
import logo from "./img/Logo 2.png";
import StructureandHistoryList from './DropdownList/University/StructureHistory'
import EmployeeList from './DropdownList/University/Employee'
import GraduatesList from './DropdownList/University/Graduates'
import EntranceList from './DropdownList/Incoming/Entrance'
import AdmissionCommitteeList from './DropdownList/Incoming/AdmissionCommittee'
import SchoolchildList from './DropdownList/Incoming/Schoolchild'
import StudentLifeList from './DropdownList/Students/StudentLife'
import FreshmenList from './DropdownList/Students/Freshmen'
import ForStudentsList from './DropdownList/Students/ForStudents'
import ScientificActivityList from './DropdownList/Scientific activity/ScientificActivity'

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
                <SchoolchildList />
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
                <br/>
                <a href="#" id='Title'>Студенческая жизнь</a>
                <StudentLifeList />
                <a href="#" id='Title'>Первокурсникам</a>
                <FreshmenList />
              </div>
              <div className='ForStudents'>
                <a href="#" id='Title'>Студентам</a>
                <ForStudentsList />
              </div>
            </div>
          </div>
        </div>

        <div class="Dropdown">
          <button class="Dropbtn">Научная деятельность</button>
          <div class="Dropdown-content">
          <div className='Blocks'>
              <div>
                <ScientificActivityList />
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header;