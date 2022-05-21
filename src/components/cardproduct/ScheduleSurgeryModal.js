import React from 'react'
import CustomModal from '../shared/Modal';
import PropTypes from 'prop-types';
import { ScheduleSurgeryTypeSurgeyModal } from './ScheduleSurgeryTypeSurgeyModal';

export const ScheduleSurgeryModal = (props) => {

    const modalBody = () => {
        return (
            <ScheduleSurgeryTypeSurgeyModal toggle={props.toggle} itemProductBundle={props.itemProductBundle} itemProduct={props.itemProduct} modalOrSystem={props.modalOrSystem} />
        );
    };


    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                title="SUGERENCIA DE MATERIAL"
                body={modalBody()}
        />
    );
}

ScheduleSurgeryModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    modalOrSystem: PropTypes.any,
    itemProductBundle: PropTypes.any,
    itemProduct: PropTypes.any,
};

