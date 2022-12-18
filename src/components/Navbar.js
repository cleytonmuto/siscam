import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Navbar.module.css';
// import {FaHandsHelping} from 'react-icons/fa';
// import {VscLaw,VscHome} from 'react-icons/vsc';
// import Logo from './Logo.svg';
// import Logo_titulos from './Logo_titulos.svg';
// import Logo_advogados from './Logo_advogados.svg';
// import Logo_home from './Logo_home.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import logo_pge from '../images/logo-pge.png'
//import { FcBinoculars } from 'react-icons/fc'; 
import { FcBusinessman } from 'react-icons/fc'; 
import { FcSearch } from "react-icons/fc";
import {FcInternal} from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() { 
  return ( 
    <nav className={"navbar navbar-expand-lg bg-light"}>
    <div className="container fluid">
   
      <Link className='navbar-brand' to='/'><span className={style.brand_sis}><img alt="Logo" src={logo_pge}/> SISCAM</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={'nav-link'} aria-current="page" to="/home"><FcHome />Home</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/advogados'><FcBusinessman/>Advogados</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/titulos'><FcSearch />Títulos</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/sigin'><FcInternal/>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;