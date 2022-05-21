import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../shared/Modal';
import { FactoryConfigModalAddProduct } from './FactoryConfigModalAddProduct';

export const FactoryConfigContainModalProduct = (props) => {

    const modalBody = () => {
        return (
            <FactoryConfigModalAddProduct 
                toggle={props.toggle}  
                selectedProduct={props.selectedProduct}
                configuration={props.configuration}
                newConfig={props.newConfig}
                setNewProductModal={props.setNewProductModal}
            />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                title="Cantidad"
                body={modalBody()}
        />
    )

}

FactoryConfigContainModalProduct.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    selectedProduct: PropTypes.any,
    configuration: PropTypes.any,
    newConfig: PropTypes.any,
    setNewProductModal: PropTypes.any,
};
