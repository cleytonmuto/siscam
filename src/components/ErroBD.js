import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import style from '../components/ErroBD.css';
function ErroBD() {
  return (
    <div className={style.aqui} style={{height:'40vh',display:'flex', flexDirection:'column',alignContent:'center', justifyContent:'center', alignItems:'center', fontSize:'1.3em'}}>
        <BsFillExclamationTriangleFill style={{'fontSize':'5em','color':'#ffc300'}}/>
      <div>
        Houve um erro na conexão com o Banco de Dados! 
      </div>
    </div>
    )
}

export default ErroBD;
