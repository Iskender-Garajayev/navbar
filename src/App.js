import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './pages/ProductScreen';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Galery from './pages/Galery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/ProductScreen' element={<ProductScreen/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/galery' element={<Galery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
