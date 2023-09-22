import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Col, Row } from 'react-bootstrap';
import AuthService from '../../services/auth.service';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = (props) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Informe o número da OAB')
      .min(6, 'Informe os 6 digitos da OAB '),
    password: Yup.string()
      .required('Informe sua senha.')
  });

  const navigate = useNavigate();

  const handleLogin = (data) => {
    AuthService.login(data)
      .then((response) => {
        console.log(`handleLogin response = ${response}`);
        alert(response.data.message);
        navigate('/titulos');
        window.location.reload();
      })
      .catch((error) => {
        alert('Login ou senha inválidos!');
        console.log(error);
      });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={handleLogin}>
      {() => (
        <Form className="container card card-login my-5">
          <h2 className='text-center'>Login</h2>
          <FormGroup>
            <FormLabel className="h6 mx-1 my-2">OAB</FormLabel>
            <Field name="email" type="email" size="lg" className="form-control h4 mx-0 mb-2" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h6 mx-1 my-2">Senha</FormLabel>
            <Field name="password" type="password" size="lg" className="form-control h4 mx-0 mb-2" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </FormGroup>
          <Row className="btns-login mt-2">
            <Col>
              <div className="my-4 mb-2">
                <Button className='btn-entrar' size="lg">
                  Entrar
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
