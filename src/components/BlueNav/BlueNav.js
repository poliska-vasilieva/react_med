import './BlueNav.css';
import BurgerMenu from '../BlueNav/BurgerMenu/BurgerMenu'
import MFC from './BlueNavImg/mfc.png'
import Search from './BlueNavImg/search.png'
import VK from './BlueNavImg/vk.png'
import TG from './BlueNavImg/tg.png'
import YT from './BlueNavImg/youtube.png'
import RT from './BlueNavImg/rutube.png'
import OD from './BlueNavImg/odnokl.png'
import Dzen from './BlueNavImg/dzen.png'
import Rus from './BlueNavImg/rus.png'
import Eng from './BlueNavImg/eng.png'
import Eye from './BlueNavImg/eye.png'



function Nav(props) {
  return (
    <div>
      <a href={props.link}><img src={props.src} alt={props.alt} /></a>
    </div>
  )
}
function BlueNav() {
  return (
    <div className='BlueNav'>
      <BurgerMenu />
      <div className='Icons'>
        <div className='FirstIcons'>
          <Nav
            src={MFC}
            alt='MFC'
            link='#' />

          <Nav
            src={Search}
            alt='Search'
            link='#' />
        </div>

        <div className='SecondIcons'>
          <Nav
            src={VK}
            alt='VK'
            link='#' />

          <Nav
            src={TG}
            alt='TG'
            link='#' />

          <Nav
            src={YT}
            alt='YT'
            link='#' />

          <Nav
            src={RT}
            alt='RT'
            link='#' />

          <Nav
            src={OD}
            alt='OD'
            link='#' />

          <Nav
            src={Dzen}
            alt='Dzen'
            link='#' />
        </div>

        <div className='ThirdIcons'>
          <Nav
            src={Rus}
            alt='Rus'
            link='#' />
          <Nav
            src={Eng}
            alt='Eng'
            link='#' />
            <Nav
            src={Eye}
            alt='Eye'
            link='#' />
        </div>
      </div>
    </div>
  )
}

export default BlueNav;