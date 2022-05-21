import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../shared/Modal';
import { AddObservationModalForm } from './AddObservationModalForm';


export const AddObservationOrNoteModal = ({isOpen, toggle, nameAndTypeModal}) => {
    const modalBody = () => {
        return (
            <AddObservationModalForm toggle={toggle} nameAndTypeModal={nameAndTypeModal} />
        );
    };

    return (
        <CustomModal
                isOpen={isOpen}
                toggle={toggle}
                title={nameAndTypeModal.titleModal}
                body={modalBody()}
        />
    )

}

AddObservationOrNoteModal.propTypes = {
    isOpen:             PropTypes.any,
    toggle:             PropTypes.any,
    typeView:           PropTypes.any,
    nameAndTypeModal:   PropTypes.any,
};

