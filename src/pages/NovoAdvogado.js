import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import AdvogadoForm from '../components/advogado/AdvogadoForm';
import styles from './NovoAdvogado.module.css';

function NovoAdvogado() {

    // const navigate = useNavigate();

    function createPost(advogado) {

            axios.post('http://localhost:7000/api/usuarios/add', { // é nesse add mesmo?
                body: JSON.stringify(advogado),
            })
                .then((dados) => {
                    console.log(dados.data);
                    // redirect
                })
                .catch((erro) => {
                    console.log(erro);
                });

    }

    return (
        <div className={styles.novoadvogado_container}>
            <h1>Cadastro de Advogados</h1>
            <p>Cadastre os dados do advogado</p>
            <AdvogadoForm handleSubmit={createPost} btnText="Cadastrar advogado"></AdvogadoForm>
        </div>
    );
}

export default NovoAdvogado;