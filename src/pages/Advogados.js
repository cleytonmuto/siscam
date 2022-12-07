import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Advogados.module.css';
function Advogados() {
  const [dadosAdvogados, setDadosAdvogados] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/api/usuarios/short')
      .then((dados) => {
        setDadosAdvogados(dados.data);
        console.log(dados.data)
      })
      .catch((erro) => {
        console.log("não foi possível recuperar os dados da rota digitada")
      })

  }, [])
  let colunas = []
  if (dadosAdvogados !== []) {
    for (const x in dadosAdvogados[0]) {
      colunas.push(x);
    }
  }
  return (
    <div className='container-fluid' style={{ "borderRadius": "25px", "margin": "1em", "height": "100%", "width": "98%", "padding": "10px", "backgroundColor": "#fbfbfb", "justifyContent": "center" }}>
      {dadosAdvogados.length > 0 && (<table className='table table-striped table-hover'>
        <thead>
          <tr>
            {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas.toUpperCase()}</th>) })}
          </tr>
        </thead>
        <tbody>
          {dadosAdvogados.map((elemento, i) => {
            return (<tr>
              {colunas.map(col => {
                return (
                  <td className={style.tdin + ' text-center col'}>
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
export default Advogados;