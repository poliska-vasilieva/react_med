import './Banners.css';
import OpenDoor from './img/banner.png'
import Choice from './img/Banner306x306 1.png'

function BannersNews() {
    return (
        <div className='Bn'>
        <img 
        src={OpenDoor}
        className='p1'/>

        <img 
        src={Choice}
        className='p2'/>

        </div>
    )
}

export default BannersNews;