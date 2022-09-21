import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx'
import Skills from './components/Skills.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
