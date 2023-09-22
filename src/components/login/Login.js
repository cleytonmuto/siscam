import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Col, Row } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import AuthService from '../../services/auth.service';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = (props) => {
  const initialValues = {
    user: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .required('Informe o login de usuário'),
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
        alert('Usuário ou Senha inválidos!');
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
            <FormLabel className="h6 mx-1 my-2">Usuário</FormLabel>
            <Field name="user" type="string" size="lg" className="form-control h4 mx-0 mb-2" />
            <ErrorMessage name="user" component="div" className="text-danger" />
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
                  <FaSignInAlt className='iconBtn' size={20} />
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
