import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import {GoLaw} from 'react-icons/go';
import {FaSignInAlt,FaHome} from 'react-icons/fa';
import {FaFileContract} from 'react-icons/fa';

import './NavigationBar.scss';

import LogoPGE from '../img/logo-pge.png';


const NavigationBar = () =>{
    return(
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="NavLogo" as={Link} to="/" ><img src={LogoPGE} alt="" /><span className="textSISCAM">SISCAM</span></Navbar.Brand>
          <Nav className="navlinks">
            <Nav.Link className="mx-2" as={Link} to="/"><FaHome className="iconNav" /> Inicio</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/advogados"><GoLaw className="iconNav"/> Advogados</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/titulos"><FaFileContract className="iconNav"/> Títulos</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/signin"><FaSignInAlt className="iconNav"/> Login</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="https://bit.ly/3n1T7lO" target="_blank"> Sugestões</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}

export default NavigationBar;