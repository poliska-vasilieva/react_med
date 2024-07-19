import './App.css';
import Header from '../Header/Header'
import Activity from '../Event/News/Activity/Activity'
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
          <Activity />
          <Divisions />
        </div>
      </div>
    </div>
  );
}

export default App;
