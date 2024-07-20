import './MainNews.css';
import MainImg from './Img/pic2 1.png'

function MainNew(props) {
    return (
        <div>
            <div><img src={MainImg} className="MainImg" alt="MainImg" /></div>
            <p className='Date'>{props.date}</p>
            <p className='Title'>{props.title}</p>
            <p className='About'>{props.about}</p>
            <a href={props.link} className='AllNews'>{props.allnews}</a>
        </div>

    )
}

function MainNews() {
    return (
        <div>
            <MainNew
                date="3 октября 2023"
                title="Второй этап конкурса на звание «Лучший врач педиатр участковый»" 
                about="3 октября 2023 года прошло тестирование практических навыков врачей педиатров участковых в обучающем ... " 
                allnews='Все новости >'
                link='#'/>
        </div>
    )
}

export default MainNews;