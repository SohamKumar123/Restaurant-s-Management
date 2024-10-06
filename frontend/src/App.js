import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [showSignup,setSignup]=useState(false);
  return (
    <div>
      <NavBar onAppear ={()=>setShowModal(true)} onVisible ={()=>setSignup(true)} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/booking" element={<Booking/>}/>

      </Routes>
      <Footer/>
      {showModal && <Login onDisappear ={()=>setShowModal(false)} signupVisible={()=>setSignup(true)}/>}
      {showSignup && <Signup onNotVisible ={()=> setSignup(false)} loginVisible={()=>setShowModal(true)}/>}
    </div>
  );
}

export default App;
