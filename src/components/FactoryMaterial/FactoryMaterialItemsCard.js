import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AddSystemSurgeryRequirement, deleteSystemSurgeryRequirement } from '../../actions/scheduleSurgeryAction';

export const FactoryMaterialItemsCard = (
    {
        bundleSelected, 
        setBundleSelected, 
        listBundles, 
        listProductsReq, 
        systemsRequeriments, 
        listProductsOpt
    }
) => {
    
    const dispatch = useDispatch();
    const [itemSelected, setItemSelected] = useState(null);
    const [listItems, setListItems] = useState(null);
    const listSystemRequirements = useSelector(state => state.scheduleSurgery.listSystemRequirements);
    

    useEffect(() => {
        if(listBundles){
            setListItems(listBundles);
        }
        if(listProductsReq){
            setListItems(listProductsReq);
        }
        if(listProductsOpt){
            setListItems(listProductsOpt);
        }
    }, [listBundles, listProductsReq, listProductsOpt])

    useEffect(() => {
        if(listBundles){
            setBundleSelected(itemSelected);
        }
    }, [itemSelected])

    const handleSelectItemCardClick = (item) => {
            setItemSelected(item);

            if(listProductsReq && listSystemRequirements.every(el => 
                (el.product.productCode !== item.productCode)
                || (el.product.productCode === item.productCode && el.isOptional )
            )){
                dispatch(AddSystemSurgeryRequirement({
                    SystemId    : bundleSelected.id,
                    ProductId   : item.id,
                    IsOptional  : false,
                    IsRequired  : true, 
                    }));
            }else if(listProductsReq && listSystemRequirements.some(el => el.product.productCode === item.productCode)){

                const deleteItem = listSystemRequirements.find(el => el.product.productCode === item.productCode && el.isRequired );
                dispatch(deleteSystemSurgeryRequirement(deleteItem.id));
            }
            if(listProductsOpt && listSystemRequirements.every(el => 
                        (el.product.productCode !== item.productCode)
                        || (el.product.productCode === item.productCode && el.isRequired )
            )){
                dispatch(AddSystemSurgeryRequirement({
                    SystemId    : bundleSelected.id,
                    ProductId   : item.id,
                    IsOptional  : true,
                    IsRequired  : false, 
                    }));
            }else if(listProductsOpt&& listSystemRequirements.some(el => el.product.productCode === item.productCode)){
                const deleteItem = listSystemRequirements.find(el => el.product.productCode === item.productCode && el.isOptional );
                dispatch(deleteSystemSurgeryRequirement(deleteItem.id));
            }
    }

    return (
        <div className="FactoryMaterial_list_component_container_cards">
                {
                    listItems && listItems.length > 0 &&
                        listItems.map( el => (
                            <>
                            <div className={
                                            listBundles ?
                                                (
                                                    itemSelected && itemSelected.id === el.id
                                                    ? 'FactoryMaterial_list_component_container_card_selected' 
                                                    : 'FactoryMaterial_list_component_container_card' 
                                                )
                                            : listProductsReq && bundleSelected ?
                                                (   
                                                    systemsRequeriments && 
                                                    systemsRequeriments.length > 0 &&
                                                    systemsRequeriments.some(item => el.productCode ===  item.product.productCode && item.isRequired)
                                                    ? 'FactoryMaterial_list_component_container_card_selected' 
                                                    : 'FactoryMaterial_list_component_container_card'
                                                )
                                            : listProductsOpt && bundleSelected &&
                                                (   
                                                    systemsRequeriments && 
                                                    systemsRequeriments.length > 0 &&
                                                    systemsRequeriments.some(item => el.productCode ===  item.product.productCode && item.isOptional)
                                                    ? 'FactoryMaterial_list_component_container_card_selected' 
                                                    : 'FactoryMaterial_list_component_container_card'
                                                )
                                            }
                                    onClick={() => handleSelectItemCardClick(el)} 
                                    key={el.userID}
                            >
                                <div className="FactoryMaterial_list_component_card_container_info">
                                    {
                                            <>
                                                <span className="FactoryMaterial_list_component_card_container_info_name">
                                                    { listBundles && el.product.productDescription}
                                                    { listProductsReq && el.productDescription}
                                                    { listProductsOpt && el.productDescription}
                                                </span>
                                            </>
                                    }
                                </div>
                                <div className="FactoryMaterial_list_component_card_container_arrow">
                                    <span className='arrowRight'></span>
                                </div>

                            </div>
                            </>
                        ))
                }
            </div>
    )
}

FactoryMaterialItemsCard.propTypes = {
    bundleSelected: PropTypes.any,
    setBundleSelected: PropTypes.any,
    listBundles: PropTypes.any,
    listProductsReq: PropTypes.any,
    systemsRequeriments: PropTypes.any,
    listProductsOpt: PropTypes.any,
}
