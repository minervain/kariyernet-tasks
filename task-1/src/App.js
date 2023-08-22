import './App.css';
import  Header  from '../src/components/partials/header';
import Footer from './components/partials/footer';
import Home from './components/home';
import { Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import About from './components/about';
import Post from './components/post';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
            <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path="/Post" element={<Post />} />


    
  </Routes>
      <Header/>
      <Outlet/>
      

  <Footer/>

    </div>
  );
}

export default App;
 