const StudentLife = [
    {
      id: 0,
      name: 'Ассоциация общественных объединений студентов',
    },
    {
      id: 1,
      name: 'Клуб «Горицвет»',
    },
    {
      id: 2,
      name: 'Студенческий спортивный клуб',
    },
  ];
  
export default function StudentLifeList() {
    const listItems = StudentLife.map((StudentLife) => (
      <li
        key={StudentLife.id}>{StudentLife.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}