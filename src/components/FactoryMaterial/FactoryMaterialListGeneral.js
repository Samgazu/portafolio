import React from 'react';
import { FactoryMaterialListOptional } from './FactoryMaterialListOptional';
import { FactoryMaterialListRequire } from './FactoryMaterialListRequire';
import PropTypes from 'prop-types';

export const FactoryMaterialListGeneral = ({bundleSelected, listProducts, systemsRequeriments, tabActive, setTabActive}) => {

    

    return (
        <div className="container_FactoryMaterial_list_component container_FactoryMaterial_list_component_materials">

            <div className="container_FactoryMaterial_container_tab_buttons">
                <button className={ tabActive === 'require' ?"container_FactoryMaterial_tab_buttons_active ":"container_FactoryMaterial_tab_buttons "} onClick={() => setTabActive('require')}>Requerido</button>
                <button className={ tabActive === 'optional' ?"container_FactoryMaterial_tab_buttons_active ":"container_FactoryMaterial_tab_buttons"} onClick={() => setTabActive('optional')}>Opcional</button>
            </div>

            {
                bundleSelected && tabActive === 'require' && 
                <FactoryMaterialListRequire bundleSelected={bundleSelected} listProducts={listProducts} systemsRequeriments={systemsRequeriments} />
            }
            {
                bundleSelected && tabActive === 'optional' &&
                <FactoryMaterialListOptional bundleSelected={bundleSelected} listProducts={listProducts} systemsRequeriments={systemsRequeriments} />
            }
        </div>
    )
}

FactoryMaterialListGeneral.propTypes = {
    bundleSelected:         PropTypes.any,
    listProducts:           PropTypes.any,
    systemsRequeriments:    PropTypes.any,
    tabActive:              PropTypes.any,
    setTabActive:           PropTypes.any,
    
}
