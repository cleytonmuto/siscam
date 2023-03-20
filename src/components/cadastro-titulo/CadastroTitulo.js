import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Row, Col } from 'react-bootstrap';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import './CadastroTitulo.scss';

const CadastroTitulo = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Informe o nome completo do advogado')
      .min(5,'Informe o nome completo do advogado'),
    numero: Yup.string()
      .required('Informe o número do título')
      .length(20,'O número do título deve estar no formato xxxxxxx-xx.xxxx.x.xx.xxxx'),
    assistido: Yup.string()
      .required('Informe o nome do assistido')
      .min(5,'Informe o nome completo'),
    assistido: Yup.string()
      .required('Informe o nome do assistido')
      .min(5,'Informe o nome completo do assistido'),
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
    acordado:'',
    judicial: '',
    situacao: ''
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      >
        {() => (
        <Form className="container card card-titulo my-3">
          <h1 className='text-center p-4'>Cadastro de Títulos</h1>
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
            <Field placeholder='Informe o valor judicial'  name="judicial" type="number" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="judicial" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Situação:</FormLabel>
            <Field placeholder='Informe a situação'  name="situacao" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
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