const Entrance = [
    {
      id: 0,
      name: 'Бакалавриат и специалитет',
    },
    {
      id: 1,
      name: 'Магистратура',
    },
    {
      id: 2,
      name: 'Ординатура',
    },
    {
      id: 3,
      name: 'Аспирантура',
    },
    {
      id: 4,
      name: 'Среднее профессиональное образование',
    },
    {
      id: 5,
      name: 'Целевое обучение',
    },
    {
      id: 6,
      name: 'Инвалидам и лицам с ОВЗ',
    },
    
  ];
  
export default function EntranceList() {
    const listItems = Entrance.map((Entrance) => (
      <li
        key={Entrance.id}>{Entrance.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}