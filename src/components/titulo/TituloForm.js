import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './TituloForm.module.css';

function TituloForm({ handleSubmit, btnText, tituloData }) {

  const[titulo, setTitulo] = useState(tituloData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(titulo);
  }

  function handleChange(e) {
    setTitulo({ ...titulo, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do advogado"
        name="advogado"
        placeholder="Digite o nome do advogado"
        handleOnChange={handleChange}
        value={titulo.advogado}>
      </Input>
      <Input
        type="text"
        text="Número judicial"
        name="numero"
        placeholder="Digite o número judicial"
        handleOnChange={handleChange}
        value={titulo.numero}>
      </Input>
      <Input
        type="text"
        text="Nome do assistido"
        name="assistido"
        placeholder="Digite o nome do assistido"
        handleOnChange={handleChange}
        value={titulo.assistido}>
      </Input>
      <Input
        type="text"
        text="Serviço prestado"
        name="servico"
        placeholder="Digite o serviço prestado"
        handleOnChange={handleChange}
        value={titulo.servico}>
      </Input>
      <Input
        type="text"
        text="Número do acesso"
        name="acesso"
        placeholder="Digite o número do acesso"
        handleOnChange={handleChange}
        value={titulo.acesso}>
      </Input>
      <Input
        type="text"
        text="Valor arbitrado"
        name="arbitrado"
        placeholder="Digite o o valor arbitrado pelo(a) juiz(a)"
        handleOnChange={handleChange}
        value={titulo.arbitrado}>
      </Input>
      <Input
        type="text"
        text="Total pleiteado"
        name="pleiteado"
        placeholder="Digite o valor total pleiteado"
        handleOnChange={handleChange}
        value={titulo.pleiteado}>
      </Input>
      <Input
        type="text"
        text="Valor do acordo"
        name="acordado"
        placeholder="Digite o valor do acordo"
        handleOnChange={handleChange}
        value={titulo.acordado}>
      </Input>
      <Input
        type="text"
        text="Processo judicial"
        name="judicial"
        placeholder="Digite o processo judicial do acordo"
        handleOnChange={handleChange}
        value={titulo.judicial}>
      </Input>
      <Input
        type="text"
        text="Situação"
        name="situacao"
        placeholder="Digite a situação"
        handleOnChange={handleChange}
        value={titulo.situacao}>
      </Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default TituloForm;