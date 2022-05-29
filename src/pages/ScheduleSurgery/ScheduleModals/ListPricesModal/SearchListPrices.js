import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchPriceListToSchedule } from '../../../../actions/scheduleSurgeryAction';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';

export const SearchListPrices = () => {

  const dispatch = useDispatch();
  const [searchPriceList, setSearchPriceList] = useState(null);


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchPriceListToSchedule(searchPriceList));
  }

  return (
    <div className="c-listPrices-c-search">
      <form onSubmit={handleSearch} className="c-listPrices-tools-c-input-search">
        <button className="c-listPrices-c-tools-search-icobuscar">
          <img src={icoBuscarGris} alt="" />
        </button>
        <input
          type="text"
          placeholder="Buscar..."
          name="search"
          onChange={({ target }) => setSearchPriceList(target.value)}
          value={searchPriceList}
          className="c-listPrices-tools-input-search"
        />
      </form>
    </div>
  )
}
