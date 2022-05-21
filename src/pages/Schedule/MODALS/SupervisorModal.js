import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../components/shared/Modal';
import { BodySupervisor } from '../../../components/Agenda/BodySupervisor';

export const SupervisorModal = (props) => {
    const modalBody = () => {
        return (
            <BodySupervisor  toggle={props.toggle}
                    setResult = {props.setResult}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                title="SUPERVISOR DE ZONA"
                body={modalBody()}
        />
    );
}

SupervisorModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    setResult: PropTypes.any,
};