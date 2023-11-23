import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/header';
import About from './components/about/about';
import Home from './components/home/home';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/7" element={<About/>}/>

      </Routes>
      
      <Footer/>
      </BrowserRouter>
     
      {/* <Home/>
      <About/> */}
    </div>
  );
}

export default App;
