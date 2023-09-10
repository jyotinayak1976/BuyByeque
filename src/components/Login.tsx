import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Attention, All Restaurant Owners and Managers</h1>
          <p>
            Are you a restaurant owner or manager looking to streamline your operations, enhance customer experiences, and boost your business's success? Look no further! Join BuyByeQ and unlock a world of possibilities.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/Registration" >   
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Already an Esteemed Customer. Access all web-based products and reports here.</h1>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
