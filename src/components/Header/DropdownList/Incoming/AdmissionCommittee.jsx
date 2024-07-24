const AdmissionCommittee = [
    {
      id: 0,
      name: 'Личный кабинет',
    },
    {
      id: 1,
      name: 'Календарь поступающего',
    },
    {
      id: 2,
      name: 'Правила приёма',
    },
    {
      id: 3,
      name: 'Аспирантура',
    },
    {
      id: 4,
      name: 'Чек-лист абитуриента',
    },
    {
      id: 5,
      name: 'Контакты',
    },
    {
      id: 6,
      name: 'Частые вопросы',
    },
    
  ];
  
export default function AdmissionCommitteeList() {
    const listItems = AdmissionCommittee.map((AdmissionCommittee) => (
      <li
        key={AdmissionCommittee.id}>{AdmissionCommittee.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}