import './App.css';
import Header from '../Header/Header'
import Activity from '../Event/News/Activity/Activity'
import Divisions from '../Event/News/Divisions/Divisions'
import BlueNav from '../BlueNav/BlueNav'
import MainImg from '../Header/MainImg/MainImg'
import BannersNews from '../Event/Banners/Banners'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className='App'>
      <div> <BlueNav/></div>
      <main>
      <div className='Container'>
        <Header />
        <MainImg />
        <BannersNews />
        <div className='EventBlock'>
          <Activity />
          <Divisions />
        </div>
      </div>
      <Footer />
      </main>
          
    </div>
  );
}

export default App;
