import TituloForm from '../components/titulo/TituloForm';
import styles from './NovoTitulo.module.css';

function NovoTitulo() {

  return(
    <div className={styles.novotitulo_container}>
      <h1>Cadastrar Título</h1>
      <TituloForm btnText="Cadastrar Título"></TituloForm>
    </div>
  );
}

export default NovoTitulo;