import React from 'react';
import { BodyATQ } from '../../../components/Agenda/BodyATQ';
import PropTypes from 'prop-types';
import CustomModal from '../../../components/shared/Modal';

export const ATQModal = (props) => {
    
    const modalBody = () => {
        return (
            <BodyATQ  toggle={props.toggle}
                    setResult = {props.setResult}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                title="VENDEDORES"
                body={modalBody()}
        />
    );
}

ATQModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    setResult: PropTypes.any,
};