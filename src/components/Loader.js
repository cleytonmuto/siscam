import React from "react";
import style from './Loader.module.css';
function Loader() {
  return (
    <div className={style.Loader}>
    <div className={style['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    Carregando...
    </div>);
}

export default Loader;