import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ChooseUs from './components/ChooseUs/ChooseUs';
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
    </div>
  );
}

export default App;
