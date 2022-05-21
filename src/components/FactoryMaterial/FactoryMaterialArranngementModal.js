import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../shared/Modal';
import { FactoryMaterialArranngementModalForm } from './FactoryMaterialArranngementModalForm';

export const FactoryMaterialArranngementModal = ({isOpen, toggle, itemselected}) => {



    const modalBody = () => {
        return (
            <FactoryMaterialArranngementModalForm itemselected={itemselected} toggle={toggle}/>
        );
    };

    return (
        <CustomModal
                isOpen={isOpen}
                toggle={toggle}
                title="Nuevo Requerimiento"
                body={modalBody()}
        />
    )

}

FactoryMaterialArranngementModal.propTypes = {
    isOpen:             PropTypes.any,
    toggle:             PropTypes.any,
    itemselected:       PropTypes.any,
    setItemselected:    PropTypes.any,
    typeView:           PropTypes.any,
};
