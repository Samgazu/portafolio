import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './sass/styles.sass';
import { SearchPatientModal } from './SearchPatientModal';
import imgPatient from '../../../../assets/img/126PX/Icono_Paciente-Bco_126px.png';

export const PatientModal = (props) => {


    const modalBody = () => {
        return (
            <SearchPatientModal toggle={props.toggle} />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                imgModal={imgPatient}
                title="PACIENTE"
                body={modalBody()}
        />
    );
}

PatientModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
