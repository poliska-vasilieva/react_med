const Schoolchild = [
    {
      id: 0,
      name: 'О довузовском образовании',
    },
    {
      id: 1,
      name: 'Курсы и интенсивы для подготовки к поступлению',
    },
    {
      id: 2,
      name: 'Олимпиады',
    },
    {
      id: 3,
      name: 'Школа «Юный медик»',
    },
    {
      id: 4,
      name: 'Cопровождение химико-биологических классов',
    },
    {
      id: 5,
      name: 'Тестирование на профпригодность',
    }    
  ];
  
export default function SchoolchildList() {
    const listItems = Schoolchild.map((Schoolchild) => (
      <li
        key={Schoolchild.id}>{Schoolchild.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}