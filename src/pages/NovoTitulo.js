import { useNavigate } from 'react-router-dom';
import TituloForm from '../components/titulo/TituloForm';
import styles from './NovoTitulo.module.css';

function NovoTitulo() {

  const navigate = useNavigate();

  function createPost(titulo) {
    fetch(`${process.env.REACT_APP_APIURL}/api/titulos/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(titulo),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      // redirect
      navigate('/titulos', {
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
    <div className={styles.novotitulo_container}>
      <h1>Cadastrar Título</h1>
      <TituloForm handleSubmit={createPost} btnText="Cadastrar Título"></TituloForm>
    </div>
  );
}

export default NovoTitulo;
