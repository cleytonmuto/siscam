import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Label, Col, Row } from 'react-bootstrap';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import style from './Login.module.css';
import AuthService from '../services/auth.service';
import {IoIosLogIn} from 'react-icons/io';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Informe seu email.')
      .email('O email deve conter "@" e ponto "."'),
    password: Yup.string()
      .required('Informe sua senha.')
  });

  const navigate = useNavigate();

  const handleLogin = (data) => {
    AuthService.login(data)
      .then((response) => {
        console.log(`handleLogin response = ${response}`);
        alert(response.data.message);
        navigate('/obrasresumidas');
        window.location.reload();
      })
      .catch((error) => {
        alert('Login ou senha inválidos!');
        console.log(error);
      });
  };

  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={handleLogin}>
      {() => (
        <Form className={"container-fluid ".concat(style.div_form)}>
          <Label className="text-center" style={{ "padding-bottom": "10px" }}>
            <h1 className={style.h1}>LOGIN</h1>
          </Label>
          <FormGroup>
            <FormLabel className={"mb-3 ".concat(style.campo)}>Email</FormLabel>
            <Field required type="text" id="login" className="form-control shadow h4 mx-0 mb-2" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className={"mb-3 ".concat(style.campo)}>Senha</FormLabel>
            <Field required type="password" id="password" className="form-control shadow h4 mx-0 mb-2" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </FormGroup>
          <Row className="mt-4 mx-0">
            <Col>
              <FormGroup className={"mb-3 text-center ".concat(style.divButton)}>
                <Button type="submit" className="btn btn-primary btn-block col-4">
                  <BsCheckLg /><span className="mx-2"><IoIosLogIn /> ENTRAR</span>
                </Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="text-center">
                <Button type="button" onClick={() => navigate(-1)} className="btn btn-primary btn-block col-4">
                  <BsXLg /><span className="mx-2">CANCELAR</span>
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
