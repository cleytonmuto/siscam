import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GoLaw } from 'react-icons/go';
import { FaSignInAlt, FaHome } from 'react-icons/fa';
import { FaFileContract } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import LogoPGE from '../img/logo-pge.png';
import './NavigationBar.scss';

const NavigationBar = (props) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdmin(user.roles.includes('ROLE_ADMIN'));
    }
  },[]);

  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    alert('Logout efetuado com sucesso.');
    setShowAdmin(false);
    setCurrentUser(null);
    navigate('/');
  }

  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand className="NavLogo" as={Link} to="/" >
          <img src={LogoPGE} alt="" /><span className="textSISCAM">SISCAM</span>
        </Navbar.Brand>
        <Nav className="navlinks">
          <Nav.Link className="mx-2" as={Link} to="/"><FaHome className="iconNav" />
            Início
          </Nav.Link>
          {showAdmin && (
            <Nav.Link className="mx-2" as={Link} to="/advogados"><GoLaw className="iconNav" />
              Advogados
            </Nav.Link>)}
          {showAdmin && (
            <Nav.Link className="mx-2" as={Link} to="/titulos"><FaFileContract className="iconNav" />
              Títulos
            </Nav.Link>)}
          <Nav.Link className="mx-2" as={Link} to="/login"><FaSignInAlt className="iconNav" />
            Login
          </Nav.Link>
          <Nav.Link className="mx-2" as={Link} to="https://bit.ly/3n1T7lO" target="_blank">
            Sugestões
          </Nav.Link>
          {currentUser && (
            <Nav.Link  onClick={logout} variant="white" className="mx-4" >
              <BiLogOut />&nbsp;&nbsp;Logout
            </Nav.Link>)}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;