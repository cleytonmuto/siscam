import React from "react";
import './CadastroAdvogado.scss';
import { Card, Form } from "react-bootstrap";
import * as Yup from 'yup';


const CadastroAdvogado = () => {
    return (
        <section id="CadastroAdvogados">

            <Card className="container my-3">
                <h1>Cadastro de Advogados</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">Nome</Form.Label>
                        <Form.Control className="formInput" type="email" placeholder="Informe o nome do advogado" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">OAB</Form.Label>
                        <Form.Control className="formInput" type="number" placeholder="Informe a OAB do advogado" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">CPF</Form.Label>
                        <Form.Control className="formInput" type="number" placeholder="Informe o CPF do advogado" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">Contato</Form.Label>
                        <Form.Control className="formInput" type="number" placeholder="Informe o contato do advogado" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">Email</Form.Label>
                        <Form.Control className="formInput" type="email" placeholder="Informe o email do advogado" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formTitle mx-1">Endereço</Form.Label>
                        <Form.Control className="formInput" type="email" placeholder="Informe o email do advogado" />
                    </Form.Group>
                </Form>
            </Card>
        </section>
    );
}

export default CadastroAdvogado;