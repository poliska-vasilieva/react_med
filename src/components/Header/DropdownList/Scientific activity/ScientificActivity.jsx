const ScientificActivity = [
    {
      id: 0,
      name: 'Основные направления исследований',
    },
    {
      id: 1,
      name: 'Организация научной деятельности',
    },
    {
      id: 2,
      name: 'Подготовка научно-педагогических кадров',
    },
    {
      id: 3,
      name: 'Конкурсы, гранты',
    },
    {
      id: 4,
      name: 'Научно-практические мероприятия',
    },
    {
      id: 5,
      name: 'Патентная деятельность',
    },
    {
      id: 6,
      name: 'Международная деятельность, академическая мобильность',
    },
    {
      id: 7,
      name: 'Научно-инновационный центр координации исследований',
    },
    {
      id: 8,
      name: 'Центры коллективного пользования',
    },
    {
      id: 9,
      name: 'Совет молодых учёных',
    },
    {
      id: 10,
      name: 'Студенческое научное общество',
    },
    {
      id: 11,
      name: 'Отдел диссертационных исследований',
    },
    {
      id: 12,
      name: 'Публикации',
    },
  ];
  
export default function ScientificActivityList() {
    const listItems = ScientificActivity.map((ScientificActivity) => (
      <li
        key={ScientificActivity.id}>{ScientificActivity.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}