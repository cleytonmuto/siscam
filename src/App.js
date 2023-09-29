import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from './services/auth.service';

import Login from './components/Login/Login';

import Home from './components/Home';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Advogados from './components/Advogados/Advogados';
import Titulos from './components/Titulos/Titulos';


const App = () => {
  const [showAdmin, setShowAdmin] = useState(true);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowAdmin(user.roles.includes('ROLE_ADMIN'));
    }
  }, []);
  return (

    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          {showAdmin && (<Route path='/advogados' element={<Advogados />} />)}
          {showAdmin && (<Route path='/titulos' element={<Titulos />} />)}

        </Routes>
      </Router>
    </>
  );
}

export default App;
