import React from "react";
import Navbar from "../../components/Navbar";
import Login from "../../components/Login";
import './landingPage.scss'

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <div className="login-container">
        <Login />
      </div>
  
    </div>
  );
};

export default LandingPage;
