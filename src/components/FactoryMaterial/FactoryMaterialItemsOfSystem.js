import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteSystemSurgeryRequirement } from '../../actions/scheduleSurgeryAction';

export const FactoryMaterialItemsOfSystem = ({listItems, tabActive, setTabActive}) => {

    const dispatch = useDispatch();
    const [listTypeItems, setListTypeItems] = useState(null);

    useEffect(() => {
        if(listItems){
            if(tabActive === 'require'){
                const requireItems = listItems.filter(el => el.isRequired);
                setListTypeItems(requireItems);
            }
            if(tabActive === 'optional'){
                const requireItems = listItems.filter(el => el.isOptional);
                setListTypeItems(requireItems);
            }
        }

    }, [listItems, tabActive]);


    const handleSelectItemCardClick = (item) => {
        dispatch(deleteSystemSurgeryRequirement(item.id));
    }

    return (
        <div className="container_FactoryMaterial_list_component container_FactoryMaterial_list_component_materials_to_sistem">

            <div className="container_FactoryMaterial_container_tab_buttons">
                <button className={ tabActive === 'require' ?"container_FactoryMaterial_tab_buttons_active ":"container_FactoryMaterial_tab_buttons "} onClick={() => setTabActive('require')}>Requerido</button>
                <button className={ tabActive === 'optional' ?"container_FactoryMaterial_tab_buttons_active ":"container_FactoryMaterial_tab_buttons"} onClick={() => setTabActive('optional')}>Opcional</button>
            </div>

            <div className="FactoryMaterial_list_component_container_title">
                <h3 className="FactoryMaterial_list_component_title"> Material del sistema </h3>
            </div>

            <div className="FactoryMaterial_list_component_container_cards">
            {
                listTypeItems && listTypeItems.length > 0 &&
                    listTypeItems.map( el => (
                        <>
                        <div className={ 'FactoryMaterial_list_component_container_card_selected'}
                                key={el.userID}
                                onClick={() => handleSelectItemCardClick(el)}
                        >
                            <div className="FactoryMaterial_list_component_card_container_info">
                                {
                                        <>
                                            <span className="FactoryMaterial_list_component_card_container_info_name">
                                                { el.product.productDescription}
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
    </div>
    )
}

FactoryMaterialItemsOfSystem.propTypes = {
    listItems: PropTypes.any,
    tabActive: PropTypes.any,
    setTabActive: PropTypes.any,
}
