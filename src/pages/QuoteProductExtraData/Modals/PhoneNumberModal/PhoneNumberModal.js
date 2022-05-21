import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormPhoneModal } from './FormPhoneModal';
import imgPhoneModal from '../../../../assets/img/126PX/Icono_Telefono_126px.png';

export const PhoneNumberModal = (props) => {

    const modalBody = () => {
        return (
            <FormPhoneModal  toggle={props.toggle}/>
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                imgModal={imgPhoneModal}
                title="NÚMERO TELEFÓNICO"
                body={modalBody()}
        />
    );
}

PhoneNumberModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};