import React, { useState } from 'react';
import users from '../users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SigninScreen = (props) => {
  const Navigate = useNavigate();
  const [user, setuser] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prvVal) => ({ ...prvVal, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = users.find(
      (val) =>
        val.email.toLowerCase() === user.email.toLowerCase() &&
        val.password === user.password
    );
    if (newUser) {
      props.setuserInfo(newUser);
      Navigate('/');
    } else toast.error('email or password did not match');
  };
  return (
    <div className='signin'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={user.name}
          className='input'
          placeholder="Enter your email address"
        />
        <br />
        <label htmlFor="pswd">Password</label>
        <br />
        <input
          id="pswd"
          name="password"
          type="password"
          onChange={handleChange}
          value={user.name}
          className='input'
          placeholder="Enter your password"
        />
        <br />
        <button type="submit" className='btn-signin'>Signin</button>
      </form>
    </div>
  );
};

export default SigninScreen;
