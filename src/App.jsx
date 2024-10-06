import './App.css';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Banner/>
    </div>
  );
}

export default App;
