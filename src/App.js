import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import DashboardScreen from './Screens/DashboardScreen';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import SigninScreen from './Screens/SigninScreen';
import { useState } from 'react';
import users from './users';
import services from './services';

function App() {
  const [userInfo, setuserInfo] = useState();
  const petList = users;
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="box">
        <Navbar userInfo={userInfo} />
        <Routes>
          <Route
            path="/"
            element={<HomeScreen userInfo={userInfo} services={services} />}
          />
          <Route
            path="/dashboard"
            element={<DashboardScreen services={services} users={petList} userInfo = {userInfo}/>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signin"
            element={<SigninScreen setuserInfo={setuserInfo} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
