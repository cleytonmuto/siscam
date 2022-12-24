import React from 'react';
import style from './SemCorrespondencia.module.css';
import NaoEncontrei from '../images/NaoEncontrei.svg'
function SemCorrespondencia(){
  return(
    <div className={'container-fluid ' + style.div_container}>
    <div className={style.semCorrespondencia}>
     <div className={style.colums}><img src={NaoEncontrei} alt='Não enontrei'/></div> 
      <div className={style.colums}>Não há resultados para a sua pesquisa!</div>
    </div>
  </div>
  )
}
export default SemCorrespondencia;