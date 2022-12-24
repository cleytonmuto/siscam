import React from "react";
import Style from './Loader.module.css';
function Loader() {
  return (
    <div>
    <div className={Style['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    Carregando...
    </div>);
}

export default Loader;