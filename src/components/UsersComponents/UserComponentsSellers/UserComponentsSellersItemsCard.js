import React from 'react';
import PropTypes from 'prop-types';
import { addUserSpecificBundle, addUserSpecificGroup, addUserSpecificPricelist, deleteSpecificBundle, removeUserSpecificPricelist, removeUserSpecificProductGroup } from '../../../actions/allUsersAction';
import { useDispatch } from 'react-redux';

export const UserComponentsSellersItemsCard = ({listItems, typeComponent, sellerUser, listSpecific}) => {

    const dispatch = useDispatch();
    /* console.log(listItems) */

    const handleSelectAllItems = () => {
        let listUnselectedItems = [];


        if(typeComponent ===  'PRODUCTS' && listItems && listItems.filter( el=> !listSpecific.map(item=> item.groupKey).includes(el)).length > 0)
                {
                        listItems.forEach( el =>
                            {
                                if(!listSpecific.map(item=> item.groupKey).includes(el)){
                                    listUnselectedItems.push({
                                        GroupKey: el,
                                        UserId: sellerUser.userID
                                    })
                                }
                            }
                        )
                        
                        dispatch(addUserSpecificGroup(listUnselectedItems))
                }else if(typeComponent ===  'PRODUCTS' && listItems && listSpecific&&listSpecific.length > 0 && listItems.filter( el=> listSpecific.map(item=> item.groupKey).includes(el))){
                        listItems.forEach( el=> {
                            if(listSpecific.map(item=> item.groupKey).includes(el)){
                                listUnselectedItems.push({
                                    GroupKey: el,
                                    userId: sellerUser.userID,
                                })
                            }
                            
                        })
                        dispatch(removeUserSpecificProductGroup(listUnselectedItems))
                    
                }

        if(typeComponent ===  'SYSTEMS' && listItems&& listSpecific && listSpecific.length === 0  && listItems.filter( el=> !listSpecific.map(item=> item.idSystem).includes(el.id)).length > 0){

                    listItems.forEach( el=> {
                        if(!listSpecific.map(item=> item.idSystem).includes(el.id)){
                            listUnselectedItems.push(
                                {
                                    idSystem: el.id,
                                    userId: sellerUser.userID,
                                }
                            )
                        }
                    })

                    dispatch(addUserSpecificBundle(listUnselectedItems))
                }else if (typeComponent ===  'SYSTEMS' && listSpecific &&listSpecific.length > 0 ){
                    listItems.forEach( el => {
                        listUnselectedItems.push(
                            {
                                systemId: el.id,
                                userId: sellerUser.userID,
                            }
                            )
                        }
                        )
                    dispatch(deleteSpecificBundle(listUnselectedItems))
                }

        if(typeComponent ===  'PRICELIST' && listItems && listItems.filter( el=> !listSpecific.map(item=> item).includes(el.id)).length > 0){
            listItems&&listItems.forEach( el=> {
                        if(!listSpecific.map(item=> item).includes(el.id)){
                            listUnselectedItems.push(
                                {
                                    PricelistId: el.id,
                                    UserId: sellerUser.userID,
                                }
                            )
                        }
                        dispatch(addUserSpecificPricelist(listUnselectedItems))
                    
                    })    
                }else if(typeComponent ===  'PRICELIST' &&listSpecific&&listSpecific.length > 0){
                    listItems.forEach( el=> {
                        if(listSpecific.map(item=> item).includes(el.id)){
                            listUnselectedItems.push({
                                UserId: sellerUser.userID,
                                PricelistId: el.id,
                            })
                        }
                    })
                    dispatch(removeUserSpecificPricelist(listUnselectedItems))
                }
    }

    const handleSelectItemCardClick = (item) => {

        if(typeComponent ===  'PRICELIST' && sellerUser){
            let exist = {};
            if(listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item).includes(item.id)){
                exist['item']= item;
                exist['existItem'] = listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item).includes(item.id);
            }
            if(exist.existItem){
                dispatch(removeUserSpecificPricelist(
                    [{
                        UserId: sellerUser.userID,
                        PricelistId: item.id,
                    }]
                ))
                
            }else if(!exist.existItem){
                dispatch(addUserSpecificPricelist(
                    [{
                        PricelistId: item.id,
                        UserId: sellerUser.userID,
                    }]
                ))
            }
        }
    
        if(typeComponent ===  'PRODUCTS' && sellerUser){
            let exist = {};
            if(listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item.groupKey).includes(item)){
                exist['item']= item;
                exist['existItem'] = listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item.groupKey).includes(item);
            }
            if(exist.existItem){
                dispatch(removeUserSpecificProductGroup(
                    [{
                        GroupKey: item,
                        userId: sellerUser.userID,
                    }]
                ))
                
            }else if(!exist.existItem){
                dispatch(addUserSpecificGroup(
                    [{
                        GroupKey: item,
                        UserId: sellerUser.userID,
                    }]
                ))
            }
        }
        if(typeComponent ===  'SYSTEMS'){
           
            let exist = {};
            if(listSpecific&&listSpecific.length > 0 && listSpecific.map(el=> el.idSystem).includes(item.id)){
                exist['items']= listSpecific.filter(el=> el.idSystem === item.id);
                exist['existItem'] = listSpecific&&listSpecific.length > 0 && listSpecific.map(el=> el.idSystem).includes(item.id);
            }
            // console.log(exist)
            
            if(exist.existItem && exist.items){
                dispatch(deleteSpecificBundle(
                    [{
                        systemId: exist.items[0].idSystem,
                        userId: sellerUser.userID
                    }]
                ))
            }else if(!exist.existItem){
                dispatch(addUserSpecificBundle(
                    [{
                        idSystem: item.id,
                        userId: sellerUser.userID,
                    }]
                ))
                
            }
        }
    }



    return (
        <>
        <button className="UserComponentsSellersItemsCard_list_component_container_cards_button_select_all" onClick={handleSelectAllItems}>Seleccionar Todo</button>
        <div className="FactoryMaterial_list_component_container_cards">
        
        {
            listItems && listItems.length > 0 &&
                listItems.map( el => (
                    <>
                    <div className={
                                    typeComponent ===  'PRODUCTS' ?
                                        (
                                            listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item.groupKey).includes(el)
                                            ? 'FactoryMaterial_list_component_container_card_selected' 
                                            : 'FactoryMaterial_list_component_container_card' 
                                        )
                                    : typeComponent ===  'SYSTEMS' ?
                                        (   
                                            listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item.idSystem).includes(el.id)
                                            ? 'FactoryMaterial_list_component_container_card_selected' 
                                            : 'FactoryMaterial_list_component_container_card'
                                        )
                                    : typeComponent ===  'PRICELIST' &&
                                        (   
                                            listSpecific&&listSpecific.length > 0 && listSpecific.map(item=> item).includes(el.id)
                                            ? 'FactoryMaterial_list_component_container_card_selected' 
                                            : 'FactoryMaterial_list_component_container_card'
                                        )
                                    }
                            onClick={() => handleSelectItemCardClick(el)} 
                            key={el.id}
                    >
                        <div className="FactoryMaterial_list_component_card_container_info">
                            {
                                    <>
                                      {/*   {console.warn("1",el)} */}

                                        <span className="FactoryMaterial_list_component_card_container_info_name">
                                            { typeComponent ===  'PRICELIST' && el.description}
                                            { typeComponent ===  'PRODUCTS' && el}
                                            { typeComponent ===  'SYSTEMS' && el.product.productDescription}
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
    </>
    )
}


UserComponentsSellersItemsCard.propTypes = {
    listItems: PropTypes.any,
    typeComponent: PropTypes.any,
    sellerUser: PropTypes.any,
    listSpecific: PropTypes.any,
}
