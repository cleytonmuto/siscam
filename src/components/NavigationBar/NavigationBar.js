import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { GoLaw } from 'react-icons/go';
import { FaSignInAlt, FaHome } from 'react-icons/fa';
import { FaFileContract } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';

import NavLogo from '../img/brasao.png';

const NavigationBar = (props) => {
  const [showAdmin, setShowAdmin] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      Object.keys(user).forEach((prop) => console.log(prop, ':', user[prop]));
      setCurrentUser(user);
      setShowAdmin(user.roles.includes('ROLE_ADMIN'));
      console.log('showAdmin =', showAdmin);
    }
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    alert('Logout efetuado com sucesso.');
    setShowAdmin(false);
    setCurrentUser(null);
    navigate('/');
  }

  const closeNavbar = () => {
    if (window.innerWidth < 768) {
      document.querySelector(".navbar-toggler").click();
    }
  };


  return (
    <section>

      <div className='NavigationLogo'>
        <Navbar.Brand className='LogoComponent'>
          <img src={NavLogo} alt='' />
        </Navbar.Brand>

        <div className='NavText'>
          <h1>SISCAM</h1>
          <p>Procuradoria Geral do Estado do Pará</p>
        </div>

      </div>

      <Navbar className="NavigationLinks" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="mx-2" activeClassName="active" to="/" as={Link} onClick={closeNavbar}> <FaHome size={20} className="iconNav" /> Inicio</NavLink>
              <NavLink className="mx-2" activeClassName="active" to="/advogados" as={Link} onClick={closeNavbar}> <GoLaw size={20} className="iconNav" /> Advogados</NavLink>
              <NavLink className="mx-2" activeClassName="active" to="/titulos" as={Link} onClick={closeNavbar}> <FaFileContract size={20} className="iconNav" /> Títulos</NavLink>
            </Nav>
            <div className='btnLogin'>
              <Button to="/login" as={Link} onClick={closeNavbar} className="btn mx-2"> <FaSignInAlt size={20} className="iconNav" /> Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavigationBar;