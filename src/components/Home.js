import React from 'react';
import './Home.css';
import { Routes, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='Home'>
          <nav className="navbar navbar-dark bg-secondary">
<header>
  <div id="header">
    
    <Link to="/login">Login</Link>
   <div>
      <h1>Welcome to React</h1>
      
   </div>

  </div>
</header>
</nav>
<img src="https://www.zconsolutions.com/wp-content/uploads/2020/02/zconlogowith-tagline-1-1.svg"  alt="" />
    </div>
  );
}

export default Home;