import React from 'react';
import style from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosLogIn } from 'react-icons/io';

function Login() {
  return (
    <div className={'container-fluid ' + style.div_form}>
      <div className='text-center' style={{ "padding-bottom": "10px" }}>
        <h1 className={style.h1}>LOGIN</h1>
      </div>
      <form>
        <div className={"mb-3 " + style.campo}>
          <input required type="text" id="login" className="form-control" />
          <label for="login">Usuário</label>
        </div>
        <div className={"mb-3 " + style.campo}>
          <input required type="password" id="password" className="form-control" />
          <div className={style.line}></div>
          <label for="password">Senha</label>
        </div>
        <div className={'mb-3 text-center '+style.divButton }>
          <button type="button" className="btn btn-primary btn-block col-4"> <IoIosLogIn /> ENTRAR</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
