import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import AdvogadoForm from '../components/advogado/AdvogadoForm';
import styles from './NovoAdvogado.module.css';

function NovoAdvogado() {

    // const navigate = useNavigate();

    function createPost(advogado) {

        // useEffect(() => { // não usa o userEffect()?
            axios.post('http://localhost:7000/api/usuarios/add', { // é nesse add mesmo?
                /* nome: 'nome', // aqui puxarei os campos
                oab: 'oab',
                cpf: 'cpf',
                telefone: 'telefone',
                endereco: 'endereco',
                observacao: 'observacao',
                senha: 'senha' */
                body: JSON.stringify(advogado),
            })
                .then((dados) => {
                    console.log(dados);
                    // redirect
                })
                .catch((erro) => {
                    console.log(erro);
                })
        // }, []);
    
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