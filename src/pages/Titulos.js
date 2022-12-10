import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Titulos.module.css';

function Titulos() {
  const [dadosTitulos, setDadosTitulos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/api/titulos/short')
      .then((dados) => {
        setDadosTitulos(dados.data);
        console.log(dados.data)
      })
      .catch((erro) => {
        console.log("não foi possível recuperar os dados da rota digitada")
      })

  }, [])

  let colunas = [];

  if (dadosTitulos !== []) {
    for (const x in dadosTitulos[0]) {
      colunas.push(x);
    }
  }
  return (

    <div className='container-fluid' style={{ "borderRadius": "15px", "margin": "1em", "height": "100%", "width": "98%", "padding": "10px", "backgroundColor": "#fff", "justifyContent": "center" }}>

      {dadosTitulos.length > 0 && (<table className='table table-striped table-hover' style={{ "backgroundColor": "#Fbfbfb", "borderRadius": "15px","minWidth":"100%", "minHeight":"100%" }}>
        <thead>
          <tr>
            {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas.toUpperCase()}</th>) })}
          </tr>
        </thead>
        <tbody>
          {dadosTitulos.map((elemento, i) => {
            return (<tr>
              {colunas.map(col => {
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

  );
}
export default Titulos;