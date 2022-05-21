import React from 'react';
import PropTypes from 'prop-types';
import { UserComponentsSellersSearch } from './UserComponentsSellersSearch';
import { UserComponentsSellersItemsCard } from './UserComponentsSellersItemsCard';
import './sass/styles.scss';

export const UserComponentsSellers = ({titleContainerCards, typeComponent, listElements, sellerUser, listSpecific}) => {

    return (
        <div className="container_FactoryMaterial_list_component container_FactoryMaterial_list_component_sistems UserComponentsSellers_list_component">
            <div className="FactoryMaterial_list_component_container_title">
                <h3 className="FactoryMaterial_list_component_title"> {titleContainerCards} </h3>
            </div>
            <UserComponentsSellersSearch typeSearch={typeComponent}  />
            
            <UserComponentsSellersItemsCard 
                typeComponent={typeComponent} 
                listItems={listElements} 
                sellerUser={sellerUser} 
                listSpecific={listSpecific} 
            />

        </div>
    )
}

UserComponentsSellers.propTypes = {
    titleContainerCards: PropTypes.any,
    typeComponent: PropTypes.any,
    listElements: PropTypes.any,
    sellerUser: PropTypes.any,
    listSpecific: PropTypes.any,
}
