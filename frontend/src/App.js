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
import Loader from './components/Loader';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);
  const [showModal,setShowModal] = useState(false);
  const [showSignup,setSignup]=useState(false);
  // Manage the login state here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authenticate = async () => {
    const res = await axios.get("http://localhost:8000/form/authenticate", {
      withCredentials: true
    });

    if (res.data.success) {
      setIsLoggedIn(true)
    }
  }
  
  useEffect(() => {
    authenticate();
  }, [])
  // Simulate page load or API call
  useEffect(() => {
    // Simulate loading time with a timeout (you can replace this with actual data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout if the component is unmounted
  }, []);
  return (
    <div>
       {loading ? (
        <Loader />
      ) :(
        <div>
      <NavBar onAppear ={()=>setShowModal(true)} onVisible ={()=>setSignup(true)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/booking" element={<Booking isLoggedIn={isLoggedIn} loginVisible={()=>setShowModal(true)}/>}/>

      </Routes>
      <Footer isLoggedIn={isLoggedIn} loginVisible={()=>setShowModal(true)}/>
      {showModal && <Login onDisappear ={()=>setShowModal(false)} signupVisible={()=>setSignup(true)} setIsLoggedIn={setIsLoggedIn}/>}
      {showSignup && <Signup onNotVisible ={()=> setSignup(false)} loginVisible={()=>setShowModal(true)}/>}
      </div>
      )}
       <Toaster/>
    </div>
  );
}

export default App;
