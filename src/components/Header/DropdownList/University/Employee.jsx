const Employee = [
    {
      id: 0,
      name: 'Личный кабинет',
    },
    {
      id: 1,
      name: 'Профсоюзный комитет',
    },
    {
      id: 2,
      name: 'Отдел кадров',
    },
    {
      id: 3,
      name: 'Нормативные документы',
    },
    {
      id: 4,
      name: 'Дополнительное образование',
    },
    
  ];
  
export default function EmployeeList() {
    const listItems = Employee.map((Employee) => (
      <li
        key={Employee.id}>{Employee.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}