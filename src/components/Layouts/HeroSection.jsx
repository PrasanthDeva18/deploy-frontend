import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { logout } from '../../actions/AuthAction';
import { useDispatch,useSelector } from 'react-redux';
function HeroSection() {

 

  const { isAuthenticated, user } = useSelector(state => state.AuthState);
  const dispatch = useDispatch();
  const logoutHandler = () => {
      dispatch(logout);
  }
  return (
    <div className='hero-container'>
      {/* <img src='/images/img background.png' alt="bg" /> */}
      <h1>SAMUDHRIKA LAKSHANA</h1>
      <p>HANDCRAFTED BEAUTY</p>
      <button onClick={logoutHandler}>Logout</button>
      <div className='hero-btns'>

      </div>
    </div>
  );
}

export default HeroSection;