import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormLabel, Row, Col } from 'react-bootstrap';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import './CadastroAdvogado.scss';

const CadastroAdvogado = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Informe o nome completo do advogado')
      .min(5,'Informe o nome completo do advogado'),
    email: Yup.string()
      .required('Informe o email do advogado')
      .email('O email deve conter "@" e ponto "."'),
    phone: Yup.string()
      .required('Informe o telefone do advogado com ddd do estado')
      .length(11,'O número de telefone deve conter 11 digitos'),
    cpf: Yup.string()
      .required('Informe a CPF do advogado')
      .length(11,'CPF deve conter 11 dígitos'),
    inscription: Yup.string()
      .required('Informe a OAB do advogado')
      .length(8, 'O nº da OAB deve estar no formato UF999999 (duas letras para UF e seis dígitos para número).'),
    department: Yup.string()
      .required('Informe o endereço do advogado'),
    password: Yup.string()
      .required('Defina uma senha')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .max(20, 'A senha deve conter no máximo 20 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmação de senha necessária')
      .oneOf(
        [Yup.ref('password'), null],
        'A senha de confirmação é diferente da original.'
      ),
  });

  const navigate = useNavigate();

 

  const initialValues = {
    name: '',
    email: '',
    cpf: '',
    inscription: '',
    department: '',
    phone:'',
    password: '',
    confirmPassword: ''
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      >
        {() => (
        <Form className="container card-advogado my-4">
          <h1 className='text-center p-4'>Cadastro de Advogados</h1>
          <FormGroup>
            <FormLabel className="h5 my-2 ">Nome:</FormLabel> 
            <Field placeholder='Informe o nome do advogado' name="name" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">E-mail:</FormLabel>
            <Field placeholder='Informe o email do advogado' name="email" type="email" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">CPF:</FormLabel>
            <Field placeholder='Informe o CPF do advogado' name="cpf" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="cpf" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">OAB:</FormLabel>
            <Field placeholder='Informe a OAB do advogado' name="inscription" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="inscription" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Telefone:</FormLabel>
            <Field placeholder='Informe o telefone do advogado' name="phone" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="phone" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Endereço:</FormLabel>
            <Field placeholder='Informe o endereço do advogado' name="address" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="address" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Observação:</FormLabel>
            <Field as="textarea" placeholder='Adicione uma observação'  name="observation" type="text" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="observation" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Criar senha:</FormLabel>
            <Field placeholder='Digite uma senha' name="password" type="password" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="h5 my-2">Confirmação de senha:</FormLabel>
            <Field placeholder='Repita a senha digitada' name="confirmPassword" type="password" size="lg" className="form-control h5 mx-0 mb-2" />
            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
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

export default CadastroAdvogado;