import axios from 'axios';
import {useState, useEffect} from 'react';
import {FiEdit} from 'react-icons/fi';
import {VscEye} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import BtnCadastrar from '../button-cadastrar/BtnCadastrar';
import ErroBD from '../ErroBD';
import Loader from '../Loader';
import Message from '../Message';
import Pagination from '../Pagination';
import SearchInput from '../SearchInput';
import SemCorrespondencia from '../SemCorrespondencia';
import TituloPage from '../TituloPage';

import './Advogados.scss';


const LIMIT = 10;

const Advogados = () => {
  const [campoPesquisa, setCampoPesquisa] = useState('');
  const [totalAdvogados, setTotalAdvogados] = useState([]);
  const [dadosAdvogados, setDadosAdvogados] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

  const [semCorrespondenciaState, setSemCorrespondenciaState] = useState(false);
  const [erroBD, setErroBD] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(true);

  useEffect(() => {
    axios.post(
        `${process.env.REACT_APP_APIURL}/api/usuarios/search?offset=${offset}&page=${page}&limit=${LIMIT}`,
        { termo: campoPesquisa }
      )
      .then((dados) => {
        setDadosAdvogados(dados.data.rows);
        setTotalAdvogados(dados.data.count);
        setRemoveLoader(false);
        setErroBD(false);
        setSemCorrespondenciaState(true)
      })
      .catch((erro) => {
        console.log(
          'não foi possível recuperar os dados da rota digitada'
        );
        setErroBD(true);
        setRemoveLoader(false);
        setSemCorrespondenciaState(false);
      });
  }, [campoPesquisa, page, offset]);

  let colunas = [];
  if (dadosAdvogados.length !== 0) {
    for (const x in dadosAdvogados[0]) {
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
    <div className={'container-fluid divadvogados'}>
      <div>
        {message && <Message type={type} msg={message}></Message>}
      </div>
      <BtnCadastrar dest={'/cadastroAdvogado'} entity={'Advogado'} />
      <SearchInput
        value={campoPesquisa}
        onChange={(search) => setCampoPesquisa(search)}
      />
      <Pagination
        limit={LIMIT}
        total={totalAdvogados}
        offset={offset}
        setOffset={setOffset}
        setPage={setPage}
      />
      <div className={'container-fluid div_container'}>
        <TituloPage titulo='ADVOGADOS' />
        {dadosAdvogados.length > 0 ? (
          <div className='table-responsive'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  {colunas.map((colunas, i) => {
                    return (
                      <th
                        scope='row'
                        className='col-1 text-center'
                        key={i}
                      >
                        {colunas.toLowerCase()}
                      </th>
                    );
                  })}
                  <th
                    scope='row'
                    className='col-1 text-center'
                    key={210}
                  >
                    <strong>ações</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dadosAdvogados.map((elemento, i) => {
                  return (
                    <tr>
                      {colunas.map((col, i) => {
                        return (
                            <td
                              className={'tdin text-center col'}
                            >
                              {elemento[
                                col
                              ].length >
                                40
                                ? elemento[
                                  col
                                ].substring(
                                  0,
                                  40
                                ) +
                                '...'
                                : elemento[
                                col
                                ]}
                            </td>
                        );
                      })}
                      <td className='text-center'>
                        <span className='align-middle'>
                          <Link>
                            <FiEdit />{' '}
                            Editar
                          </Link>
                        </span>
                        <span className='align-middle'>
                          <Link
                            to={`/advogado/${dadosAdvogados[i].id}`}
                          >
                            <VscEye />{' '}
                            Visualizar
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        ) : erroBD ? <ErroBD /> : semCorrespondenciaState && <SemCorrespondencia />}
        {removeLoader && (<Loader />)}
      </div>
    </div>
  );
}
export default Advogados;