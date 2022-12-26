import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Titulos.module.css';
import Pagination from '../components/Pagination.js'
import apiurl from '../services/apiurl';
import SearchInput from '../components/SearchInput.js'
import BtnCadastrar from '../components/BtnCadastrar';
import SemCorrespondencia from '../components/SemCorrespondencia';
import Loader from '../components/Loader.js';
import ErroBD from '../components/ErroBD';
const LIMIT = 10
function Titulos() {
  const [removeLoader, setRemoveLoader] = useState(false);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0)
  const [erroBD, setErroBD] = useState('');
  const [dadosTitulos, setDadosTitulos] = useState([]);
  const [totalTitulos, setTotalTitulos] = useState([]);

  const [campoPesquisa, setCampoPesquisa] = useState('');

  useEffect(() => {
    axios.post(`${apiurl()}/api/titulos/search?offset=${offset}&page=${page}&limit=${LIMIT}`, { termo: campoPesquisa })
      .then((dados) => {
        setDadosTitulos(dados.data.rows);
        setTotalTitulos(dados.data.count);
        setRemoveLoader(true);
        setErroBD(false);
      })
      .catch((erro) => {
        console.log("não foi possível recuperar os dados da rota digitada")
        setRemoveLoader(true);
        setErroBD(true);
        
      })

  }, [campoPesquisa, offset, page])

  let colunas = [];

  if (dadosTitulos !== []) {
    for (const x in dadosTitulos[1]) {
      colunas.push(x);
    } 
  }
  return (
    <div className={'container-fluid'} >
      <BtnCadastrar para={"/novotitulo"} adicionaroque={"Título"} />
      <SearchInput value={campoPesquisa} onChange={(search) => setCampoPesquisa(search)} />
      <Pagination limit={LIMIT} total={totalTitulos} offset={offset} setOffset={setOffset} setPage={setPage} />
      <div className={'container-fluid ' + style.div_container}>

        { !erroBD ? (dadosTitulos.length> 0?
         ( <div className='table-responsive'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas.toUpperCase()}</th>) })}
                </tr>
              </thead>
              <tbody>
                {dadosTitulos.map((elemento, i) => {
                  return (<tr>
                    {colunas.map((col, i) => {
                      if (i % 6 === 0 && i > 1) {
                        return (
                          <td className={style.tdin + ' text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}

                          </td>);
                      }
                      if (i % 7 === 0 && i > 1) {
                        return (
                          <td className={style.tdin + ' text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}

                          </td>);
                      }
                      if (i % 8 === 0 && i > 1) {
                        return (
                          <td className={style.tdin + ' text-center col-1'}>
                            {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}

                          </td>);
                      }
                      return (
                        <td className={style.tdin + ' text-center col-1'}>
                          {elemento[col].length > 40 ? elemento[col].substring(0, 40) + "..." : elemento[col]}

                        </td>);
                    })}
                  </tr>)
                })}
              </tbody>
            </table>
          </div>): <SemCorrespondencia/>
        ) : <ErroBD />}
  {!removeLoader && <Loader />}
      </div>
    </div>

  );
}
export default Titulos;