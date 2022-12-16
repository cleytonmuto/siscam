import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Titulos.module.css';
import Pagination from '../components/Pagination.js'
const LIMIT = 10
function Titulos() {

  const [offset, setOffset] = useState(0);
  const [page,setPage] = useState(0)

  const [dadosTitulos, setDadosTitulos] = useState([]);
  const [totalTitulos, setTotalTitulos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/api/titulos/short?offset=${offset}&page=${page}&limit=${LIMIT}`)
      .then((dados) => {
        setDadosTitulos(dados.data);
  
      })
      .catch((erro) => {
        console.log("não foi possível recuperar os dados da rota digitada")
      });

    axios.get(`http://localhost:7000/api/titulos/countRows`)
    .then((dados)=>{
      setTotalTitulos(dados.data.numLinhas);
      console.log("fsad",dados.data.numLinhas);
     
    }) .catch((erro) => {
      console.log("não foi possível recuperar os dados da rota digitada")
    });

  }, [offset, page])

  let colunas = [];

  if (dadosTitulos !== []) {
    for (const x in dadosTitulos[0]) {
      colunas.push(x);
    }
  }
  return (<>
    <Pagination limit={LIMIT} total={totalTitulos} offset={offset} setOffset={setOffset} setPage={setPage}/>

    <div className='container-fluid' style={{ "borderRadius": "15px", "margin": "1em", "height": "100%", "width": "98%", "padding": "10px", "backgroundColor": "#fff", "justifyContent": "center" }}>

      {dadosTitulos.length > 0 && (<table className='table table-striped table-hover' style={{ "backgroundColor": "#Fbfbfb", "borderRadius": "15px", "minWidth": "100%", "minHeight": "100%" }}>
        <thead>
          <tr>
            {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas.toUpperCase()}</th>) })}
          </tr>
        </thead>
        <tbody>
          {dadosTitulos.map((elemento, i) => {
            return (<tr>
              {colunas.map((col,i) => {
                if(i%6===0 && i>1){
                  return (
                    <td className={style.tdin + ' text-center col-1'}>
                      {elemento[col].length > 40 ?  (Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})).substring(0, 40) + "..." :(Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}
  
                    </td>);
                }
                if(i%7===0 && i>1){
                  return (
                    <td className={style.tdin + ' text-center col-1'}>
                      {elemento[col].length > 40 ?  (Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}
  
                    </td>);
                }
                if(i%8===0 && i>1){
                  return (
                    <td className={style.tdin + ' text-center col-1'}>
                      {elemento[col].length > 40 ? (Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})).substring(0, 40) + "..." : (Number(elemento[col]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}
  
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
      </table>)}

    </div>
  </>

  );
}
export default Titulos;