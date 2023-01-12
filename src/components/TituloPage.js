import React from 'react'
import style from './TituloPage.module.css'
function TituloPage({titulo}){
  return(<><div className={style.titulo}>{titulo}</div><hr/></>)
}
export default TituloPage;