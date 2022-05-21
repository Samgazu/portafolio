import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { searchPriceListToSchedule, searchPriceListToScheduleSuccess, SearchSystem, searchSystemSuccess } from '../../../actions/scheduleSurgeryAction';
import { useDispatch } from 'react-redux';
import { searchProductGroups, searchProductGroupsSuccess } from '../../../actions/allUsersAction';

export const UserComponentsSellersSearch = ({typeSearch}) => {

    const [searchItem, setSearchItem] = useState('');
    const dispatch = useDispatch();

    const handleSearchItem = (e) => {
        e.preventDefault();
        if( typeSearch === 'PRICELIST' ){
            if( searchItem.length === 0 ){
                dispatch(searchPriceListToScheduleSuccess(null));
            }else{
                dispatch(searchPriceListToSchedule(searchItem));
            }
        }
        if( typeSearch === 'SYSTEMS' ){
            if( searchItem.length === 0 ){
                dispatch(searchSystemSuccess(null));
            }else{
                dispatch(SearchSystem(searchItem));
            }
        }

        if( typeSearch === 'PRODUCTS' ){
            if( searchItem.length === 0 ){
                dispatch(searchProductGroupsSuccess(null));
            }else{
                dispatch(searchProductGroups({keyword:searchItem}));
            }
            
        }
        setSearchItem('');
    }

    return (
        <form className={"FactoryMaterial_list_component_container_search_with_combo FactoryMaterial_list_component_container_search_with_combo_without"}
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

            </form>
    )
}

UserComponentsSellersSearch.propTypes = {
    typeSearch: PropTypes.any,
}