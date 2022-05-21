import React, { useState } from 'react';
import './Search.scss';
import searchIcon from '../../assets/img/512PX/Icono_Buscar_blue_512px.png';



const Search = (props) => {
    const [typeSearchProduct, setTypeSearchProduct] = useState('');

    return (
        <div className='searchBas'>
            
        <select id="cars" 
                onChange={(e) => setTypeSearchProduct(e.target.value)} 
                value={[typeSearchProduct]} 
                className='SearchInput-search-input-combobo' 
                multiple={false}>
                <option 
                value={-1}>
                
                </option>
                <option 
                        value={10}>
                        TODAS
                </option>
                <option 
                        value={1}>
                        MEDICO
                </option>
                <option 
                        value={2}>
                        ATQ
                </option>
                <option 
                        value={4}>
                        HOSPITAL
                </option>
                
            </select>
            <div className='search-im'
             onClick={() => props.handleSearch(typeSearchProduct)}> 
                <img src={searchIcon} alt=""/> 
            </div>
        </div>
    )
};

export default Search;
