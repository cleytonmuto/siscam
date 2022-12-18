import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css'
function Home() {
  return (
    <div className={'container-fluid ' + style.fundo}>
      <div className={'container-fluid ' + style.ca}>
        <div className={'container-fluid ' + style.backgroundimg}>
          Bem-Vindo ao Sistema da Câmara de Conciliação da PGE-PA
        </div>
      </div>
    </div>
  )
}

export default Home;