import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={'container-fluid '.concat(style.fundo)}>
      <div className={'container-fluid '.concat(style.cobertura)}>
        <div className={'container-fluid '.concat(style.background_img)}>
          <p>Bem-vindo(a) ao<br /> SISCAM-PGE/PA</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
