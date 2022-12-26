import React from "react";
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import style from '../components/ErroBD.css';
function ErroBD() {
  return (
    <div className={style.aqui}>
      <div className={style.ali}>
        <BsFillExclamationTriangleFill />
      </div>
      <div>
        Houve um erro ao Pesquisar no Banco de Dados!
      </div>
    </div>)
}

export default ErroBD;