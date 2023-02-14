import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo_pge from '../images/logo-pge.png'
import {GoLaw} from 'react-icons/go';
import {FaFileContract} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSignInAlt,FaHome} from 'react-icons/fa';
// https://www.iconfinder.com/iconsets/basic-user-interface-elements - site de ícones
function Navbar() { 
  return ( 
    <nav className={"navbar navbar-expand-lg "} >
    <div className={"container fluid "+style.navprin}>
   
      <Link className='navbar-brand' to='/'><span className={style.brand_sis}><img alt="Logo" src={logo_pge}/> SISCAM</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={"navbar-nav me-auto mb-2 mb-lg-0 "+style.ul}>
          <li className="nav-item">
            <Link className={'nav-link'} aria-current="page" to="/"><FaHome /> HOME</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/advogados'><GoLaw/> ADVOGADOS</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/titulos'><FaFileContract className={style.contract} /> TÍTULOS</Link>
          </li>
          <li className="nav-item">
           <Link className={'nav-link'} to='/signin'><FaSignInAlt/> LOGIN</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;