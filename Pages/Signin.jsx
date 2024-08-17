import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import { Player } from '@lottiefiles/react-lottie-player'; 

function Signin() {
  const [isChecked, setIsChecked] = useState(false);
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    name: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { username, email, name, password } = signupData;
    if (username && email && name && password) {
      try {
        console.log(signupData);
        await axios.post('http://localhost:1000/register', signupData);
        alert('User Created');
        toggleCheck();
      } catch (error) {
        alert('Error creating user');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (email && password) {
      try {
        const response = await axios.get('http://localhost:1000/get');
        const userExist = response.data.some(
          (data) => data.email === email && data.password === password
        );
        if (userExist) {
          alert('Login successful');
          navigate("/home");
        } else {
          alert('User Not Found');
        }
      } catch (error) {
        console.error('Error fetching users', error);
        alert('Error logging in');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className='signin-container'>
      <div className='signin-page'>
        <div className="signin-project-info">
          <h1>
            <span className="signin-highlight">MY TUTOR</span>! Learn easily with your personal AI-based assistance.
          </h1>
          <Player
            src="https://lottie.host/7a0c85e2-e26e-4c1e-a70b-ebae3f4695e8/LVS0OQ1Dnh.json" 
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }} 
            loop
            autoplay
          />
        </div>
        <div className="signin-main">
          <input
            type="checkbox"
            id="signin-chk"
            aria-hidden="true"
            checked={isChecked}
            onChange={toggleCheck}
          />

          <div className="signin-signup">
            <form onSubmit={handleSignupSubmit}>
              <label htmlFor="signin-chk" aria-hidden="true" className="signin-form-label">
                Sign up
              </label>
              <input
                type="text"
                name="username"
                placeholder="User name"
                required
                className="signin-input-field"
                onChange={handleSignupChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="signin-input-field"
                onChange={handleSignupChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="signin-input-field"
                onChange={handleSignupChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="signin-input-field"
                onChange={handleSignupChange}
              />
              <button className="signin-submit-button" type="submit">
                Sign up
              </button>
            </form>
          </div>

          <div className="signin-login">
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="signin-chk" aria-hidden="true" className="signin-form-label">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="signin-input-field"
                onChange={handleLoginChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="signin-input-field"
                onChange={handleLoginChange}
              />
              <button className="signin-submit-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
