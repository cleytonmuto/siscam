import React from 'react'
import style from './Pagination.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const MAX_ITEMS = 5; //NUMERO MAXIMO DE BOTOES AO TODO
const MAX_LEFT = (MAX_ITEMS - 1) / 2; //NUMERO MAXIMO DE BOTOES A ESQUERDA

function Pagination({ limit, total, offset, setOffset, setPage }) {
  const currentPage = offset ? (offset / limit) + 1 : 1; //identifica qual a página atual
  const pages = Math.ceil(total / limit);  //diz a quantidade de páginas total
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(currentPage - MAX_LEFT, 1),
    maxFirst
  );// diz qual a primeira página usa max para não aparecer -2
  function OnPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <div className={'container-fluid ' + style.pagei}>
      <ul className={style.pagination}>
        <li>
          <button className={style.precedingAndNext} onClick={() => {
            OnPageChange(currentPage - 1)
            setPage(currentPage - 1)
          }} disabled={currentPage === 1}>

            Anterior

          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((elemento, index) => index + first).map((page) => (
          <li key={page}>
            <button className={page === currentPage ? style['pagination__item--active'] : null
            } onClick={() => {
              setOffset((page - 1) * limit);
              setPage(page)
            }}>
              {page}
            </button>
          </li>
        ))}
        <li>
          <button className={style.precedingAndNext} onClick={() => {
            OnPageChange(currentPage + 1)
            setPage(currentPage + 1);
          }} disabled={currentPage === pages}>Próximo</button>
        </li>
      </ul>
    </div>
  )
}
export default Pagination;