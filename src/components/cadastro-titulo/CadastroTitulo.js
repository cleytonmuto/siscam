import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Row, Col, Accordion } from 'react-bootstrap';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import './CadastroTitulo.scss';

const CadastroTitulo = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Informe o nome completo do advogado')
      .min(5, 'Informe o nome completo do advogado'),
    numero: Yup.string()
      .required('Informe o número do título')
      .length(20, 'O número do título deve estar no formato xxxxxxx-xx.xxxx.x.xx.xxxx'),
    assistido: Yup.string()
      .required('Informe o nome do assistido')
      .min(5, 'Informe o nome completo do assistido'),
    acesso: Yup.string()
      .required('Informe o acesso')
      .min(5, 'Informe o acesso'),
    arbitrado: Yup.string()
      .required('Informe o arbitrado'),
    pleiteado: Yup.string()
      .required('Informe o valor pleiteado'),
    acordado: Yup.string()
      .required('Informe o valor acordado'),
    judicial: Yup.string()
      .required('Informe o valor judicial'),
    situacao: Yup.string()
      .required('Informe a situação'),
  });

  const navigate = useNavigate();




  const initialValues = {
    name: '',
    numero: '',
    assistido: '',
    arbitrado: '',
    pleiteado: '',
    acordado: '',
    judicial: '',
    situacao: ''
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}
    >
      {() => (
        <Form className="container card-titulo my-3">

          <div className='divAvisos'>

            <h1 className='text-center p-4'>Cadastro de Títulos</h1>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Descrição e informações</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <FormGroup>
            <FormLabel className="h5 my-2 ">Nome do advogado:</FormLabel>
            <Field placeholder='Informe o nome do advogado' name="name" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Número:</FormLabel>
            <Field placeholder='Informe o número do título' name="numero" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="numero" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Assistido:</FormLabel>
            <Field placeholder='Informe o nome do assistido' name="assistido" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="assistido" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Arbitrado:</FormLabel>
            <Field placeholder='Informe o nome do arbitrado' name="arbitrado" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="arbitrado" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Pleiteado:</FormLabel>
            <Field placeholder='Informe o valor pleiteado' name="pleiteado" type="number" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="pleiteado" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Acordado:</FormLabel>
            <Field placeholder='Informe o valor acordado' name="acordado" type="number" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="acordado" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Judicial:</FormLabel>
            <Field placeholder='Informe o valor judicial' name="judicial" type="number" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="judicial" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Situação:</FormLabel>
            <Field placeholder='Informe a situação' name="situacao" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="situacao" component="div" className="text-danger" />
          </FormGroup>
          <Row className="btns mx-0">
            <Col>
              <FormGroup className="text-center">
                <Button type="submit" className="btnSubmit shadow-lg">
                  <BsCheckLg /><span className="mx-2">Cadastrar</span>
                </Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="text-center">
                <Button type="button" onClick={() => navigate(-1)} className="btnCancel btn-danger shadow-lg">
                  <BsXLg /><span className="mx-2">CANCELAR</span>
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CadastroTitulo;