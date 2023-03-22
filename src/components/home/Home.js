import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
  return (
    <div className='container textHome'>
      <h1>Bem-vindo (a) ao  <span className='text-SISCAM'>SISCAM-PGE/PA</span></h1>
      <Button as={Link} to="/login" className='btn-login my-4'><FaSignInAlt className="iconNav"/> Login</Button>
    </div>
  );
}

export default Home;
