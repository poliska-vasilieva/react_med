const Graduates = [
    {
      id: 0,
      name: 'Подлинность диплома',
    },
    {
      id: 1,
      name: 'Дубликат диплома',
    }    
  ];
  
export default function GraduatesList() {
    const listItems = Graduates.map((Graduates) => (
      <li
        key={Graduates.id}>{Graduates.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
}