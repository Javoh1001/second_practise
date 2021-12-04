import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Home/>
      <About/>
    </Router>
  );
}

export default App;
