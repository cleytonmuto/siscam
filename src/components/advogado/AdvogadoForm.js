import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './AdvogadoForm.module.css';

function AdvogadoForm({ handleSubmit, btnText, advogadoData }) {

  const [advogado, setAdvogado] = useState(advogadoData || []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(advogado);
  }

  function handleChange(e) {
    setAdvogado({ ...advogado, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome"
        name="nome"
        placeholder="Digite o nome do advogado"
        handleOnChange={handleChange}
        value={advogado.nome}>
      </Input>
      <Input
        type="text"
        text="OAB"
        name="oab"
        placeholder="Digite a OAB do advogado"
        handleOnChange={handleChange}
        value={advogado.oab}>
      </Input>
      <Input
        type="text"
        text="CPF"
        name="cpf"
        placeholder="Digite o CPF do advogado"
        handleOnChange={handleChange}
        value={advogado.cpf}>
      </Input>
      <Input
        type="text"
        text="Telefone"
        name="telefone"
        placeholder="Digite o telefone do advogado"
        handleOnChange={handleChange}
        value={advogado.telefone}>
      </Input>
      <Input
        type="text"
        text="E-mail"
        name="email"
        placeholder="Digite o e-mail do advogado"
        handleOnChange={handleChange}
        value={advogado.email}>
      </Input>
      <Input
        type="text"
        text="Endereço"
        name="endereco"
        placeholder="Digite o endereço do advogado"
        handleOnChange={handleChange}
        value={advogado.endereco}>
      </Input>
      <Input
        type="text"
        text="Observação"
        name="observacao"
        placeholder="Digite uma observação"
        handleOnChange={handleChange}
        value={advogado.observacao}>
      </Input>
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Digite uma senha"
        handleOnChange={handleChange}
        value={advogado.password}>
      </Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default AdvogadoForm;
