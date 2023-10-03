import React from "react";
import './Login.scss';
import { Button, Card, Container, Form } from "react-bootstrap";

const Login = () => {
    return (
        <section id="Login">

            <Container>
                <Card className="cardLogin">
                    <h1 className="mb-3">LOGIN</h1>

                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Usuário</label>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom">Senha</label>
                    </Form.Floating>
                    <Button className="btnLogin text-center">
                        Entrar
                    </Button>
                </Card>
            </Container>

        </section>
    );
}

export default Login;