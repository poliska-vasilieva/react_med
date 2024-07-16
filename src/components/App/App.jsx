import './App.css';
import Header from '../Header/Header'
import SmallNews from '../Event/News/SmallNews/SmallNews'
import MainNews from '../Event/News/MainNews/MainNews'
import Divisions from '../Event/News/Divisions/Divisions'
import BlueNav from '../BlueNav/BlueNav'
import MainImg from '../Header/MainImg/MainImg'
import BannersNews from '../Event/Banners/Banners'

function App() {
  return (
    <div className='app'>
      <div> <BlueNav/></div>
      <div className='container'>
        <Header />
        <MainImg />
        <BannersNews />
        <div className='EventBlock'>
          <MainNews />
          <SmallNews />
          <Divisions />
        </div>
      </div>
    </div>
  );
}

export default App;
