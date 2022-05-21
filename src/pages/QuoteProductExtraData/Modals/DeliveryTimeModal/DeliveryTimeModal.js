import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormDelivery } from './FormDelivery';
import imgTimeDelivery from '../../../../assets/img/126PX/Icono_Tiempo-Bco_126px.png';

export const DeliveryTimeModal = (props) => {



    const modalBody = () => {
        return (
            <FormDelivery toggle={props.toggle}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                imgModal={imgTimeDelivery} 
                title="TIEMPO DE ENTREGA"
                body={modalBody()}
        />
    );
}

DeliveryTimeModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
