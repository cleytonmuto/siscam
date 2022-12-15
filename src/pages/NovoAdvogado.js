import AdvogadoForm from '../advogado/AdvogadoForm';

import styles from './NovoAdvogado.module.css';

function NovoAdvogado() {

    return(
        <div className={styles.novoadvogado_container}>
            <h1>Cadastro de Advogados</h1>
            <p>Cadastre os dados do advogado</p>
            <AdvogadoForm></AdvogadoForm>
        </div>
    );
}

export default NovoAdvogado;