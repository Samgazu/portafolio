import React, { useState } from 'react';
import './SearchInput.scss';

// ICONS
import icoSearch from '../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';


const SearchInput = (props) => {

    

    const [typeSearchProduct, setTypeSearchProduct] = useState('');

    return (
        <div className='searchBase'>
            <div className='search-img'> 
                <img src={icoSearch} alt=""/> 
            </div>
            
            <input className='search-input' 
                   type="text"
                   name="searchUser"
                   placeholder='Buscar...'
            />

            <select id="cars" 
                    onChange={(e) => setTypeSearchProduct(e.target.value)} 
                    value={[typeSearchProduct]} 
                    className='SearchInput-search-input-combobox' 
                    multiple={false}>
                <option 
                        value={1}>
                        MEDICO
                </option>
                <option 
                        value={2}>
                        ATQ
                </option>
                <option 
                        value={3}>
                        ATQ SECUNDARIA
                </option>
                <option 
                        value={4}>
                        HOSPITAL
                </option>
                <option 
                        value={5}>
                        COTIZACIÓN
                </option>
                <option 
                        value={6}>
                        PACIENTE
                </option>
                <option 
                        value={7}>
                        CLIENTE
                </option>
                <option 
                        value={8}>
                        LISTA DE PRECIOS
                </option>
                <option 
                        value={9}>
                        CREADOR USUARIO
                </option>
                <option 
                        value={10}>
                        ALMACÉN COMPLETO
                </option>
                <option 
                        value={11}>
                        ALMACÉN_INCOMPLETO
                </option>
                <option 
                        value={12}>
                        LOGÍSTICA COMPLETA
                </option>
                <option 
                        value={13}>
                        LOGISTICA_INCOMPLETA
                </option>
            </select>
        </div>
    )
};

export default SearchInput;