import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.fundo}>
      <div className={'container-fluid ' + style.ca}>
        <div className={'container-fluid ' + style.backgroundimg}>
          <p>Bem-vindo!<br />SISCAM-PGE/PA</p>
        </div>
      </div>

    </div>
  )
}

export default Home;