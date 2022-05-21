import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchOptionalProducts, searchOptionalProductsSuccess, searchRequireProducts, searchRequireProductsSuccess, SearchSystem, searchSystemSuccess } from '../../actions/scheduleSurgeryAction';

export const FactoryMaterialSearch = ({searchListProductsReq, searchListProductsOpt, searchSystem }) => {

    const dispatch = useDispatch();
    const [typeSearchProduct, setTypeSearchProduct] = useState('productCode');
    const [searchItem, setSearchItem] = useState('');
    
    const handleSearchItem = (e) => {
        e.preventDefault();
        if(searchListProductsReq === 'searchListProductsReq' && typeSearchProduct){
            dispatch(searchRequireProducts(searchItem, typeSearchProduct, true));
        }
        if(searchListProductsOpt === 'searchListProductsOpt' && typeSearchProduct){
            dispatch(searchOptionalProducts(searchItem, typeSearchProduct, true));
        }
        if(searchSystem === 'searchSystem'){
            dispatch(SearchSystem(searchItem));
        }
    }
    
    
    useEffect(() => {
      if (searchItem.trim().length !== 0 && searchListProductsReq === 'searchListProductsReq') {
        dispatch(searchRequireProducts(searchItem, typeSearchProduct? typeSearchProduct:'productCode' , true));
      }else if(searchItem.trim().length === 0 && searchListProductsReq === 'searchListProductsReq'){
        dispatch(searchRequireProductsSuccess(null));
      }
      if (searchItem.trim().length !== 0 && searchListProductsOpt === 'searchListProductsOpt') {
        dispatch(searchOptionalProducts(searchItem, typeSearchProduct? typeSearchProduct:'productCode', true));
      }else if(searchItem.trim().length === 0 && searchListProductsOpt === 'searchListProductsOpt'){
        dispatch(searchOptionalProductsSuccess(null));
      }
      if (searchItem.trim().length !== 0 && searchSystem === 'searchSystem') {
        dispatch(SearchSystem(searchItem));
      }else if(searchItem.trim().length === 0 && searchSystem === 'searchSystem'){
        dispatch(searchSystemSuccess(null));
      }
    }, [searchItem]);
  

    return (
        <form className={(  
                            searchListProductsReq === 'searchListProductsReq' 
                            || searchListProductsOpt === 'searchListProductsOpt') 
                            ? "FactoryMaterial_list_component_container_search_with_combo"
                            : "FactoryMaterial_list_component_container_search"}
                onSubmit={handleSearchItem}
        >
            <input type="text"
                autoComplete="off"
                name="searchItem"
                value={searchItem}
                onChange={({ target }) => setSearchItem(target.value)}
                placeholder='Buscar...'
                className="FactoryMaterial_list_component_search"
            />
            {
                (searchListProductsReq === 'searchListProductsReq' || searchListProductsOpt === 'searchListProductsOpt') &&
                    <select id="cars" 
                            onChange={(e) => setTypeSearchProduct(e.target.value)} 
                            value={typeSearchProduct} 
                            className='FactoryMaterial_list_search_input_combobox' 
                            multiple={false}>
                        <option 
                                value={'productCode'}>
                                Codigo del producto
                        </option>
                        <option 
                                value={'productDescription'}>
                                Descripción de producto
                        </option>
                    </select>
            }
        </form>
    )
}

FactoryMaterialSearch.propTypes = {
    searchListProductsReq: PropTypes.any,
    searchListProductsOpt: PropTypes.any,
    searchSystem: PropTypes.any,
}
