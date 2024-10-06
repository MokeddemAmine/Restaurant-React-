import './App.css';
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
    </div>
  );
}

export default App;
