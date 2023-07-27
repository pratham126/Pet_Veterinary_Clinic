import React from 'react';
import AboutScreen from '../Components/About.jsx';
import Contact from '../Components/Contact.jsx';
import Service from '../Components/Service.jsx';
import { Link } from 'react-router-dom';
const HomeScreen = (props) => {
  return (
    <div className="home">
      {props.userInfo &&
        props.userInfo.email.toLowerCase() === 'admin@gmail.com' && (
          <div className="admin-lane">
            <p className="admin-txt">
              Welcome back! Admin, see the list of customers accessing our
              services: <Link to="/dashboard">Dashboard</Link>
            </p>
          </div>
        )}
      <div className="picture">
        <img
          className="middle-img"
          src="https://plus.unsplash.com/premium_photo-1664298594141-923a4fd7e490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="pic of a pet"
        />
        <div
          className={
            'txt-img ' +
            (props.userInfo &&
            props.userInfo.email.toLowerCase() === 'admin@gmail.com'
              ? 'txt-img-admin'
              : '')
          }
        >
          <h1>Experts in the field of care</h1>Specializing in the treatment of
          animals with Knowledge and Compassion.
          <br />
          <br />
          <a href="/contact" className="a-contactus">
            Contact us
          </a>
        </div>
        <Service services={props.services} />
        <AboutScreen />
        <div className="btn-div">
          <button type="button" className="btn">
            <Link
              to="/about"
              className="nav-link btn-link"
              style={{ color: 'white' }}
            >
              About us
            </Link>
          </button>
        </div>
        <Contact />
        <div className="btn-div">
          <button type="button" className="btn">
            <Link
              to="/contact"
              className="nav-link btn-link"
              style={{ color: 'white' }}
            >
              Contact us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
