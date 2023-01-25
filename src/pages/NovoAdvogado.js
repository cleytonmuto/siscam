// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdvogadoForm from '../components/advogado/AdvogadoForm';
import styles from './NovoAdvogado.module.css';

function NovoAdvogado() {

  const navigate = useNavigate();

  function createPost(advogado) {
    fetch(`${process.env.REACT_APP_APIURL}/api/usuarios/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(advogado),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate('/advogados', {
          state: {
            message: data.message,
            type: data.type
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className={styles.novoadvogado_container}>
      <h1>Cadastro de Advogados</h1>
      <AdvogadoForm handleSubmit={createPost} btnText="Cadastrar Advogado"></AdvogadoForm>
    </div>
  );
}

export default NovoAdvogado;
