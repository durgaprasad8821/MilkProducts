import './App.css';
import Navabar from './Components/Navabar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import { Route,Routes } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navabar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/product" element = {<Product/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
    </div>
  );
}

export default App;
