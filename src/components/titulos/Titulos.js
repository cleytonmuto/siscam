import axios from 'axios';
import {useState, useEffect} from 'react';
import './Titulos.scss';
import Pagination from '../Pagination'
import SearchInput from '../SearchInput'
import {useLocation} from 'react-router-dom';
import Message from '../Message';
import BtnCadastrar from '../button-cadastrar/BtnCadastrar';
import SemCorrespondencia from '../SemCorrespondencia';
import Loader from '../Loader';
import ErroBD from '../ErroBD';
import TituloPage from '../TituloPage';

const LIMIT = 10;

const Titulos = () => {

  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [dadosTitulos, setDadosTitulos] = useState([]);
  const [totalTitulos, setTotalTitulos] = useState([]);
  const [campoPesquisa, setCampoPesquisa] = useState('');

  const [semCorrespondenciaState, setSemCorrespondenciaState] = useState(false);
  const [erroBD, setErroBD] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(true);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_APIURL}/api/titulos/search?offset=${offset}&page=${page}&limit=${LIMIT}`, { termo: campoPesquisa })
      .then((dados) => {
        setDadosTitulos(dados.data.rows);
        setTotalTitulos(dados.data.count);
        setRemoveLoader(false);
        setErroBD(false);
        setSemCorrespondenciaState(true);
      })
      .catch((erro) => {
        console.log('não foi possível recuperar os dados da rota digitada');
        setErroBD(true);
        setRemoveLoader(false);
        setSemCorrespondenciaState(false);
      });
  }, [campoPesquisa, offset, page]);

  const colunas = [];
  if (dadosTitulos.length !== 0) {
    for (const x in dadosTitulos[0]) {
      colunas.push(x);
    }
  }

  const location = useLocation();
  let message = '';
  let type = '';

  if (location.state) {
    message = location.state.message;
    type = location.state.type;
  }

  return (
    <div className="container-fluid">
      <div>{message && <Message type={type} msg={message}></Message>}</div>
      <BtnCadastrar dest={'/cadastroTitulo'} entity={'Título'}/>
      <SearchInput value={campoPesquisa} onChange={(search) => setCampoPesquisa(search)} />
      <Pagination limit={LIMIT} total={totalTitulos} offset={offset} setOffset={setOffset} setPage={setPage} />

      <div className={'container-fluid div_container'}>
        <TituloPage titulo="TÍTULOS" />

        {(dadosTitulos.length > 0 ?
          (<div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas}</th>) })}
                </tr>
              </thead>
              <tbody>
                {dadosTitulos.map((elemento, i) => {
                  return (<tr>
                    {colunas.map((col, i) => {
                      if (i % 6 === 0 && i > 1) {
                        return (
                          <td className={'tdin text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}
                          </td>);
                      }
                      if (i % 7 === 0 && i > 1) {
                        return (
                          <td className={'tdin text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}
                          </td>);
                      }
                      if (i % 8 === 0 && i > 1) {
                        return (
                          <td className={'tdin text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}
                          </td>);
                      }
                      return (
                        <td className={'tdin text-center col-1'}>
                          {elemento[col].length > 40 ? elemento[col].substring(0, 40) + "..." : elemento[col]}
                        </td>);
                    })}
                  </tr>);
                })}
              </tbody>
            </table>
          </div>) : erroBD ? <ErroBD /> : semCorrespondenciaState && <SemCorrespondencia />)}
        {removeLoader && (<Loader />)}
      </div>
    </div>
  );
}

export default Titulos;