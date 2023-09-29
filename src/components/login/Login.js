import React from "react";
import './Login.scss';
import { Button, Card, Container, Form } from "react-bootstrap";

const Login = () => {
    return (
        <section id="Login">

            <Container>
                <Card className="cardLogin">
                    <h1>LOGIN</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="mx-1">Usuário</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="mx-1">Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button className="btnLogin text-center">
                            Entrar
                        </Button>
                    </Form>
                </Card>
            </Container>

        </section>
    );
}

export default Login;