import React, { useState } from 'react';
import icoBuscarGris from '../../assets/img/126PX/Icono_Buscar_Gris_126px.png';

export const SearchChatComponent = () => {

    const [searchUser, setSearchUser] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
        // console.log(searchUser)
        setSearchUser('');
    };

    return (
        <form onSubmit={handleSearch} className="SearchChatComponent-tools-c-input-search">
          <button className="c-SearchChatComponent-tools-search-icobuscar" type='submit'>
            <img src={icoBuscarGris} alt="" />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            onChange={({ target }) => setSearchUser(target.value)}
            value={searchUser}
            className="SearchChatComponent-tools-input-search"
            autoComplete="off"
          />
        </form>
    )
};

