//import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/> 
     <AboutMe/> 
     <Skill/> 
     <Project/> 
     
    </div>
  );
}

export default App;
