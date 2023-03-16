import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

import './ErroBD.scss';

const ErroBD = () => {
  return (
    <div className='divErro'>
        <BsFillExclamationTriangleFill className='alertIcon'/>
      <div>
        Houve um erro na conexão com o Banco de Dados! 
      </div>
    </div>
    )
}

export default ErroBD;
