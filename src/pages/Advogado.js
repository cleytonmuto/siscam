import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import AdvogadoForm from '../components/advogado/AdvogadoForm';
import './Advogado.scss';

const Advogado = () => {

  const { id } = useParams();
  const [advogado, setAdvogado] = useState([]);
  const [mostraAdvogadoForm, setMostraAdvogadoForm] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/api/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAdvogado(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const editPost = (advogado) => {
    fetch(`${process.env.REACT_APP_APIURL}/api/usuarios/update`, {
      id: id,
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(advogado),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAdvogado(data);
        setMostraAdvogadoForm(false);
      })
      .catch((err) => console.log(err));
  }

  const toggleProjectForm = () => {
    setMostraAdvogadoForm(!mostraAdvogadoForm);
  }

  return (
    <div className='advogado_details'>
      <h1>{advogado.nome}</h1>
      {!mostraAdvogadoForm ? (
        <div className='advogado_info'>
          <p><span>OAB:</span> {advogado.oab}</p>
          <p><span>CPF:</span> {advogado.cpf}</p>
          <p><span>Telefone:</span> {advogado.telefone}</p>
          <p><span>E-mail:</span> {advogado.email}</p>
          <p><span>Endereco:</span> {advogado.endereco}</p>
          <p><span>Observação:</span> {advogado.observacao}</p>
          <p><span>Senha:</span> {advogado.password}</p>
        </div>
      ) : (
        <div className='advogado_info'>
          <AdvogadoForm
            handleSubmit={editPost}
            btnText="Concluir edição"
            advogadoData={advogado}
          ></AdvogadoForm>
        </div>
      )}
      <Button className='editBtn' onClick={toggleProjectForm}>
        {!mostraAdvogadoForm ? 'Editar advogado' : 'Fechar'}
      </Button>
    </div>
  );
}

export default Advogado;
