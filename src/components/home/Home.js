import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import LogoADV from '../img/logo_advogados.svg';
import LogoTIT from '../img/logo_titulos.svg';
import LogoLogin from '../img/logo_login.svg';

import './Home.scss';

const Home = () => {
    return (

        <section id="home">

            <h1>Bem-vindo (a) ao <span className="title">SISCAM-PGE/PA</span></h1>
            <Container className="cardHome">
                <Row>
                    <Col>
                        <Card as={Link} to="/advogados" style={{ width: '18rem' }}>
                            <Card.Img src={LogoADV} />
                            <Card.Body className="cardbody">
                                <Button as={Link} to="/advogados" className="btn my-4" variant="info">Advogados</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card as={Link} to="/titulos" style={{ width: '18rem' }}>
                            <Card.Img src={LogoTIT} />
                            <Card.Body>
                                <Button as={Link} to="/titulos" className="btn my-4" variant="info">Títulos</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card as={Link} to="/signin" style={{ width: '18rem' }}>
                            <Card.Img src={LogoLogin} />
                            <Card.Body>
                                <Button as={Link} to="/signin" className="btn my-4" variant="info">Login</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;