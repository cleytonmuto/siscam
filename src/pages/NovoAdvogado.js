// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdvogadoForm from '../components/advogado/AdvogadoForm';
import styles from './NovoAdvogado.module.css';

function NovoAdvogado() {

    const navigate = useNavigate();

    function createPost(advogado) {

            fetch('http://localhost:7000/api/usuarios/add', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(advogado),
            }).then((resp) => resp.json())
              .then((data) => {
                    console.log(data);
                    // redirect
                    navigate('/advogados', {state: {message: data.message}});
                })
                .catch((err) => {
                    console.log(err.message);
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