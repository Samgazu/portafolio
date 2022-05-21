import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './sass/styles.scss';
import { FactoryMaterialItemsCard } from './FactoryMaterialItemsCard';
import { FactoryMaterialSearch } from './FactoryMaterialSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getSystems } from '../../actions/systemsAction';

export const FactoryMaterialBundles = ({bundleSelected, setBundleSelected}) => {

    const dispatch = useDispatch();
    const listBundles = useSelector(state => state.systems.systemsTemplate)
    
    useEffect(() => {
        dispatch(getSystems());
    }, []);

    const searchSystem = useSelector((state) => state.scheduleSurgery.searchSystem);
    const [listSystem, setListSystem] = useState(listBundles);

    useEffect(() => {
        if(searchSystem && searchSystem.length > 0){
            setListSystem(searchSystem);
        }else if(searchSystem && searchSystem.length === 0 || !searchSystem ){
            setListSystem(listBundles);
        }
    }, [searchSystem, listBundles])

    return (
        <div className="container_FactoryMaterial_list_component container_FactoryMaterial_list_component_sistems">
            <div className="FactoryMaterial_list_component_container_title">
                <h3 className="FactoryMaterial_list_component_title"> Sistemas </h3>
            </div>

            <FactoryMaterialSearch searchSystem={'searchSystem'} />

            <FactoryMaterialItemsCard bundleSelected={bundleSelected} setBundleSelected={setBundleSelected} listBundles={listSystem}/>
        </div>
    )
}

FactoryMaterialBundles.propTypes = {
    bundleSelected: PropTypes.any,
    setBundleSelected: PropTypes.any,
}
