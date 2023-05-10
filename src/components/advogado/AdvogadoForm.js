import {useState} from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import './AdvogadoForm.scss';

const AdvogadoForm = ({handleSubmit, btnText, advogadoData}) => {

  const [advogado, setAdvogado] = useState(advogadoData || []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(advogado);
  }

  const handleChange = (e) => {
    setAdvogado({...advogado, [e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={submit} className='form'>
      <Input
        type="text"
        text="Nome"
        name="nome"
        placeholder="Informe o nome do advogado"
        handleOnChange={handleChange}
        value={advogado.nome}>
      </Input>
      <Input
        type="text"
        text="OAB"
        name="oab"
        placeholder="Informe a OAB do advogado"
        handleOnChange={handleChange}
        value={advogado.oab}>
      </Input>
      <Input
        type="text"
        text="CPF"
        name="cpf"
        placeholder="Informe o CPF do advogado"
        handleOnChange={handleChange}
        value={advogado.cpf}>
      </Input>
      <Input
        type="text"
        text="Telefone"
        name="telefone"
        placeholder="Informe o telefone do advogado"
        handleOnChange={handleChange}
        value={advogado.telefone}>
      </Input>
      <Input
        type="text"
        text="E-mail"
        name="email"
        placeholder="Informe o e-mail do advogado"
        handleOnChange={handleChange}
        value={advogado.email}>
      </Input>
      <Input
        type="text"
        text="Endereço"
        name="endereco"
        placeholder="Informe o endereço do advogado"
        handleOnChange={handleChange}
        value={advogado.endereco}>
      </Input>
      <Input
        type="text"
        text="Observação"
        name="observacao"
        placeholder="Informe uma observação"
        handleOnChange={handleChange}
        value={advogado.observacao}>
      </Input>
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Informe uma senha"
        handleOnChange={handleChange}
        value={advogado.password}>
      </Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default AdvogadoForm;
