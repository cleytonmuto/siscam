import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css';

function Home() {
  return (
    <div className={'container-fluid ' + style.fundo}>
      <div className={'container-fluid '+style.cobertura}>
        <div className={'container-fluid ' + style.backgroundimg}>
          <p>Bem-vindo ao<br /> SISCAM-PGE/PA</p>
        </div>
      </div>
    </div>
  )
}

export default Home;