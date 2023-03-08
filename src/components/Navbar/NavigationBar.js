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
          <Navbar.Brand className="NavLogo" as={Link} to="/" ><img src={LogoPGE}/><span className="textSISCAM my-2">SISCAM</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="mx-2" as={Link} to="/"><FaHome /> Inicio</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/advogados"><GoLaw/> Advogados</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/titulos"><FaFileContract/> Títulos</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/signin"><FaSignInAlt/> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}

export default NavigationBar;