import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';
import { FormDateModal } from './FormDateModal';
import imgCity from '../../../../assets/img/126PX/Icono_CdEstado-Bco_126px.png'
import CustomModal from '../../../../components/shared/Modal';

export const DateModal = (props) => {

    const modalBody = () => {
        return (
            <FormDateModal toggle={props.toggle}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                imgModal={imgCity}
                title="Fecha y hora de CX"
                body={modalBody()}
        />
    );
}

DateModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
