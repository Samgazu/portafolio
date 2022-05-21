import React, { useEffect } from 'react';
import { FactoryMaterialItemsCard } from './FactoryMaterialItemsCard';
import { FactoryMaterialSearch } from './FactoryMaterialSearch';
import './sass/styles.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FactoryMaterialListRequire = ( { bundleSelected, listProducts, systemsRequeriments } ) => {
    // searchRequireProducts
    // searchOptionalProducts
    // SearchSystem

    const searchRequireProducts = useSelector((state) => state.scheduleSurgery.searchRequireProducts);
    const [listProductsReq, setListProductsReq] = useState(listProducts);
    useEffect(() => {
        if(searchRequireProducts && searchRequireProducts.length > 0){
            setListProductsReq(searchRequireProducts.filter( el => {
                if(el.productCode === bundleSelected.product.productCode) return;
                    if(  systemsRequeriments && systemsRequeriments.some(item => el.productCode === item.product.productCode && item.isOptional)){
                        return ;
                    }
                    return el;
                
            }));
        }else if(searchRequireProducts && searchRequireProducts.length === 0 || !searchRequireProducts ){
            setListProductsReq( listProducts && listProducts.filter( el => {
                if(  systemsRequeriments && systemsRequeriments.some(item => el.productCode === item.product.productCode && item.isOptional)){
                    return ;
                }
                return el;
            }));
        }
    }, [searchRequireProducts, listProducts])

    return (
        <>
            <div className="FactoryMaterial_list_component_container_title">
                <h3 className="FactoryMaterial_list_component_title"> Material Obligatorio </h3>
            </div>

            <FactoryMaterialSearch searchListProductsReq={'searchListProductsReq'} />

            <FactoryMaterialItemsCard bundleSelected={bundleSelected} listProductsReq={listProductsReq} systemsRequeriments={systemsRequeriments} />
        </>
    )
}

FactoryMaterialListRequire.propTypes = {
    bundleSelected:         PropTypes.any,
    listProducts:           PropTypes.any,
    systemsRequeriments:    PropTypes.any,
}
