import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from './TituloForm.module.css';

function TituloForm({ btnText }) {

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do advogado"
        name="advogado"
        placeholder="Digite o nome do advogado">
      </Input>
      <Input
        type="text"
        text="Número judicial"
        name="numero"
        placeholder="Digite o número judicial">
      </Input>
      <Input
        type="text"
        text="Nome do assistido"
        name="assistido"
        placeholder="Digite o nome do assistido">
      </Input>
      <Input
        type="text"
        text="Serviço prestado"
        name="servico"
        placeholder="Digite o serviço prestado">
      </Input>
      <Input
        type="text"
        text="Número do acesso"
        name="acesso"
        placeholder="Digite o número do acesso">
      </Input>
      <Input
        type="text"
        text="Valor arbitrado"
        name="arbitrado"
        placeholder="Digite o o valor arbitrado pelo(a) juiz(a)">
      </Input>
      <Input
        type="text"
        text="Total pleiteado"
        name="pleiteado"
        placeholder="Digite o valor total pleiteado">
      </Input>
      <Input
        type="text"
        text="Valor do acordo"
        name="acordado"
        placeholder="Digite o valor do acordo">
      </Input>
      <Input
        type="text"
        text="Processo judicial"
        name="judicial"
        placeholder="Digite o processo judicial do acordo">
      </Input>
      <Input
        type="text"
        text="Situação"
        name="situacao"
        placeholder="Digite a situação">
      </Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default TituloForm;