import React from 'react';
import {Link} from 'react-router-dom';
import {RxPlus} from 'react-icons/rx';
import style from './BtnCadastrar.module.css';

const BtnCadastrar = ({dest, entity}) => {
  return (
    <div className={style.fd}>
      <Link to={dest}>
        <button type="button" class="btn btn-primary"><RxPlus />
          Cadastrar {entity}
        </button>
      </Link>
    </div>
  );
}

export default BtnCadastrar;