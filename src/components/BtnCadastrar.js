import React from 'react';
import { Link } from 'react-router-dom';
import { RxPlus } from 'react-icons/rx';
import style from './BtnCadastrar.module.css';
function BtnCadastrar({para, adicionaroque}) {
  return(
  <div className={style.fd}>
    <Link to={para}>
      <button type="button" class="btn btn-primary"><RxPlus />
        Cadastrar {adicionaroque}
      </button>
    </Link>
  </div>)
}
export default BtnCadastrar;