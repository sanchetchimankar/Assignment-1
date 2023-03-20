
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './components/pages/Grid/Grid';
import {} from "mdb-react-ui-kit";
import Users from './components/pages/Users';
import UserManager from './components/pages/UserManager';
import Home from './components/Home';



function App() {



  return (
    <>
    <Router>
      
       <Routes>
       <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/users" element={<Users />} />
          <Route path="/usermanager" element={<UserManager />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
       

    </Router>
    
    
    </>
  );
}

export default App;
