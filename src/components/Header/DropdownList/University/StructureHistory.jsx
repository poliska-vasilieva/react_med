const StructureandHistory = [
    {
      id: 0,
      name: 'Сведения об образовательной организации',
      href: 'https://www.orgma.ru/',
    },
    {
      id: 1,
      name: 'Факультеты и кафедры',
    },
    {
      id: 2,
      name: 'Об Университете',
    },
    {
      id: 3,
      name: 'История',
    },
    {
      id: 4,
      name: 'Руководство',
    },
    {
      id: 5,
      name: 'Учёный совет',
    },
    {
      id: 6,
      name: 'Преподаватели',
    },
    {
      id: 7,
      name: 'Клуб выпускников ОрГМУ',
    },
    {
      id: 8,
      name: 'Контакты',
    },
    {
      id: 9,
      name: 'Противодействие терроризму и экстремизму',
    },
    {
      id: 10,
      name: 'Противодействие коррупции',
    },
  ];
  
export default function StructureandHistoryList() {
    const listItems = StructureandHistory.map((StructureandHistory) => (
      <li
        key={StructureandHistory.id}>{StructureandHistory.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}