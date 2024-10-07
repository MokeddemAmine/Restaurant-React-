import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Banner/>
      <ChooseUs/>
      <About/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
