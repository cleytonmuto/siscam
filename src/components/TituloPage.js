import React from 'react';
import './TituloPage.scss';

const TituloPage = ({titulo}) => {
  return(
    <>
      <div className='titulo'>
        {titulo}
      </div>
      <hr/>
    </>
  );
}

export default TituloPage;