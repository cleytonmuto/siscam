import React from 'react';
import './SemCorrespondencia.scss';
import NaoEncontrei from '../images/NaoEncontrei.svg';


const SemCorrespondencia = () => {
  return(
    <div className='container-fluid div_container'>
    <div className='semCorrespondencia'>
     <div className='colums'><img src={NaoEncontrei} alt='Não enontrei'/></div> 
      <div className='colums'>Não há resultados para a sua consulta!</div>
    </div>
  </div>
  )
}
export default SemCorrespondencia;