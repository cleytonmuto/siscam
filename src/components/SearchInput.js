import React from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcSearch } from 'react-icons/fc';
import useDebounce from './useDebounce';
import './SearchInput.scss';

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500)
  function handleChange(event) {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
    <div className="campopesq input-group mb-1">
      <input required type="search" value={displayValue} onChange={handleChange} className="form-control" placeholder="Pesquisar..." aria-label="Recipient's username" aria-describedby="btnPesquisarAdv" />
      <button class="btn btn-outline-secondary" type="button" id="btnPesquisarAdv"><FcSearch /></button>
    </div>
  );
};

export default SearchInput;