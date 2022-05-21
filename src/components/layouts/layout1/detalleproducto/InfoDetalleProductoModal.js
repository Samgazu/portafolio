import React from 'react';
import PropTypes from 'prop-types';
import { InfoDetalleProducto } from "./InfoDetalleProducto";
import CustomModal from '../../../shared/Modal';

export const InfoDetalleProductoModal = (props) => {

    const modalBody = () => {
        return (
            <div>
                <InfoDetalleProducto product={props.product} deteleProductHandler={props.deteleProductHandler} />
            </div>
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen || true}
                toggle={props.toggle} 
                title={props.product.name}
                body={modalBody()}
        />
    );
}


InfoDetalleProductoModal.propTypes = {
    product: PropTypes.any,
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    deteleProductHandler: PropTypes.any,
};
  