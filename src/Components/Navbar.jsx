import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="nav-brand">
        <Link className="nav-link" to="/">
          PetVet
        </Link>
      </span>
      <div className="nav-right">
        <Link
          to="/signin"
          className="user"
          title="Click to signin with another account"
        >
          {!props.userInfo ? 'Signin' : props.userInfo.name}
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
