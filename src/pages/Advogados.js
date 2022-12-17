import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Advogados.module.css';
import './Advogados.module.css';
import { FiEdit } from 'react-icons/fi'
import { VscEye } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { RxPlus } from 'react-icons/rx'
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
    <div>
      <div className={style.fd}><Link to="/novoadvogado">
        <button type="button" class="btn btn-primary"><RxPlus />
          Cadastrar Advogados
        </button></Link>
      </div>
      <div className={'container-fluid ' + style.div_container} >
        {dadosAdvogados.length > 0 && (<>
          <div className='table-responsive'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  {colunas.map((colunas, i) => { return (<th scope='row' className='col-1 text-center' key={i}>{colunas.toUpperCase()}</th>) })}
                  <th scope='row' className='col-1 text-center' key={210}><strong>AÇÕES</strong></th>
                </tr>
              </thead>
              <tbody>
                {dadosAdvogados.map((elemento, i) => {
                  return (<tr>
                    {colunas.map((col, i) => {
                      return (<>
                        <td className={style.tdin + ' text-center col'}>
                          {elemento[col].length > 40 ? elemento[col].substring(0, 40) + "..." : elemento[col]}

                        </td>

                      </>);

                    })}
                    <td className='text-center'>
                      <span className='align-middle'>
                        <Link>
                          <FiEdit /> Editar
                        </Link>
                      </span>
                      <span className='align-middle'>
                        <Link >
                          <VscEye /> Visualizar
                        </Link>
                      </span>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </>)}
      </div>
    </div>
  );
}
export default Advogados;