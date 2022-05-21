import React, { useEffect, useState } from 'react';
import { FactoryMaterialItemsCard } from './FactoryMaterialItemsCard';
import { FactoryMaterialSearch } from './FactoryMaterialSearch';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const FactoryMaterialListOptional = ({ bundleSelected, listProducts, systemsRequeriments }) => {

    const searchOptionalProducts = useSelector((state) => state.scheduleSurgery.searchOptionalProducts);
    const [listProductsOpt, setListProductsOpt] = useState(listProducts);

    useEffect(() => {
        if(searchOptionalProducts && searchOptionalProducts.length > 0){
            setListProductsOpt(searchOptionalProducts.filter( el => {
                if(el.productCode === bundleSelected.product.productCode) return;
                    if(  systemsRequeriments && systemsRequeriments.some(item => el.productCode === item.product.productCode && item.isRequired)){
                        return ;
                    }
                    return el;
                
            } ));
        }else if(searchOptionalProducts && searchOptionalProducts.length === 0 || !searchOptionalProducts ){
            setListProductsOpt(listProducts &&listProducts.filter( el => {
                if(  systemsRequeriments && systemsRequeriments.some(item => el.productCode === item.product.productCode && item.isRequired)){
                    return ;
                }
                return el;
            }));
        }
    }, [searchOptionalProducts, listProducts])

    return (
        <>
            <div className="FactoryMaterial_list_component_container_title">
                <h3 className="FactoryMaterial_list_component_title"> Material Opcional </h3>
            </div>

            <FactoryMaterialSearch searchListProductsOpt={'searchListProductsOpt'}/>

            <FactoryMaterialItemsCard bundleSelected={bundleSelected} listProductsOpt={listProductsOpt} systemsRequeriments={systemsRequeriments} />
        </>
    )
}

FactoryMaterialListOptional.propTypes = {
    bundleSelected:         PropTypes.any,
    listProducts:           PropTypes.any,
    systemsRequeriments:    PropTypes.any,
}
