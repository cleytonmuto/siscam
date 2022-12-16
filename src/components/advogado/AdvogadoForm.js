import Input from '../form/Input';
import styles from './AdvogadoForm.module.css';

function AdvogadoForm() {

    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="nome"
                placeholder="Digite o nome do advogado">
            </Input>
            <Input
                type="text"
                text="OAB"
                name="oab"
                placeholder="Digite a OAB do advogado">
            </Input>
            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Digite o CPF do advogado">
            </Input>
            <Input
                type="text"
                text="Telefone"
                name="telefone"
                placeholder="Digite o telefone do advogado">
            </Input>
            <Input
                type="text"
                text="E-mail"
                name="email"
                placeholder="Digite o e-mail do advogado">
            </Input>
            <Input
                type="text"
                text="Endereço"
                name="endereco"
                placeholder="Digite o endereço do advogado">
            </Input>
            <Input
                type="text"
                text="Observação"
                name="observacao"
                placeholder="Digite uma observação">
            </Input>
            <Input
                type="text"
                text="Senha"
                name="senha"
                placeholder="Digite uma senha">
            </Input>
            <div><input type="submit" value="Cadastrar advogado"></input></div>
        </form>
    );
}

export default AdvogadoForm;