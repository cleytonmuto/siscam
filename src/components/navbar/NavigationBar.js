import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GoLaw } from 'react-icons/go';
import { FaSignInAlt, FaHome } from 'react-icons/fa';
import { FaFileContract } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';

import LogoPGE from '../img/brasao.png';

const NavigationBar = (props) => {
  const [showAdmin, setShowAdmin] = useState(false);
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

  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="NavLogo" as={Link} to="/" >
          <img src={LogoPGE} alt="" /> <span className="textSISCAM">SISCAM</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks me-auto">
            <Nav.Link className="mx-2" as={Link} to="/"><FaHome size={20} className="iconNav" />
              Início
            </Nav.Link>
            {showAdmin && (
              <Nav.Link className="mx-2" as={Link} to="/advogados"><GoLaw size={20} className="iconNav" />
                Advogados
              </Nav.Link>)}
            {showAdmin && (
              <Nav.Link className="mx-2" as={Link} to="/titulos"><FaFileContract size={20} className="iconNav" />
                Títulos
              </Nav.Link>)}
            <Nav.Link className="mx-2" as={Link} to="/login"><FaSignInAlt size={20} className="iconNav" />
              Login
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="https://bit.ly/3n1T7lO" target="_blank">
              Sugestões
            </Nav.Link>
            {currentUser && (
              <Nav.Link onClick={logout} variant="white" className="mx-4" >
                <BiLogOut className='iconNav' />Logout
              </Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;