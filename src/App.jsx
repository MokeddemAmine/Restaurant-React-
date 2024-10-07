import { createContext, useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const handleContext = createContext();
function App() {
  const [toggleLogin,setToggleLogin] = useState(false);
  
  const handleLogin = () => {
    setToggleLogin(true);
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])
  return (
    <div className="App">
      <handleContext.Provider value={handleLogin}>
        <Navbar/>
        <Hero/>
        <Banner/>
        <ChooseUs/>
        <About/>
        <Banner/>
        <Footer/>
        <Login toggleLogin={toggleLogin} setToggleLogin={setToggleLogin}/>
      </handleContext.Provider>
      
    </div>
  );
}

export default App;
