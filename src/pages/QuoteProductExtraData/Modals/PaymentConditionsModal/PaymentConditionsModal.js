import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import imgWayToPay from '../../../../assets/img/126PX/Icono_Pago-Bco_126px.png';

import { PaymentConditionModalAddDescription } from './PaymentConditionModalAddDescription';

export const PaymentConditionsModal = (props) => {

    const modalBody = () => {
        return (
            <PaymentConditionModalAddDescription toggle={props.toggle} />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                imgModal={imgWayToPay}
                title="CONDICIONES DE PAGO"
                body={modalBody()}
        />
    );
}

PaymentConditionsModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
