import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Properties from "./components/pages/Properties";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Properties />
      <Contact/>
    </Router>
  );
}

export default App;
