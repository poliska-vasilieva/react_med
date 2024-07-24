const Freshmen = [
    {
      id: 0,
      name: 'Прикрепление к Клинике адаптационной терапии',
    },
    {
      id: 1,
      name: 'Проход в университет',
    },
    {
      id: 2,
      name: 'Единая учётная запись',
    },
    {
      id: 3,
      name: 'Воинский учёт',
    },   
  ];
  
export default function FreshmenList() {
    const listItems = Freshmen.map((Freshmen) => (
      <li
        key={Freshmen.id}>{Freshmen.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}