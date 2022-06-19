import './App.css';
import Anouncement from './components/Anouncement/Anouncement';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <Anouncement/>
      <Navbar/>
      <Slider/>
    </div>
  );
}

export default App;
