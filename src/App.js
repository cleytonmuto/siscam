import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from './services/auth.service';

import Home from './components/home/Home';
import NavigationBar from './components/navbar/NavigationBar.js';
import Advogado from './pages/Advogado.js';
import Advogados from './components/advogados/Advogados.js';
import Titulos from './components/titulos/Titulos.js';
import Login from './components/login/Login.js';
import NovoAdvogado from './pages/NovoAdvogado.js';
import NovoTitulo from './pages/NovoTitulo.js';
import Dash from './pages/Dash.js';
import CadastroAdvogado from './components/cadastro-advogado/CadastroAdvogado';
import CadastroTitulo from './components/cadastro-titulo/CadastroTitulo';

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowAdmin(user.roles.includes('ROLE_ADMIN'));
    }
  },[]);
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {showAdmin && (<Route path='/advogados' element={<Advogados />}/>)}
          {showAdmin && (<Route path='/titulos' element={<Titulos />}/>)}
          <Route path='/login' element={<Login />}/>
          {showAdmin && (<Route path='/novoadvogado' element={<NovoAdvogado />}/>)}
          {showAdmin && (<Route path='/advogado/:id' element={<Advogado />}/>)}
          {showAdmin && (<Route path='/novotitulo' element={<NovoTitulo />}/>)}
          <Route path='/dash' element={<Dash />}/>
          {showAdmin && (<Route path='/cadastroAdvogado' element={<CadastroAdvogado />}/>)}
          {showAdmin && (<Route path='/cadastroTitulo' element={<CadastroTitulo />}/>)}
        </Routes>
      </Router>
    </>
  );
} 

export default App;
