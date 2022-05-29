/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './sass/styles.sass';
import imgInstitution from '../../../../assets/img/126PX/Icono_Institucion_126px.png';
import { SearchInstitutionModal } from './SearchInstitutionModal';


export const InstitutionModal = (props) => {


    const modalBody = () => {
        return (
            <SearchInstitutionModal toggle={props.toggle}
                setOpenModal={props.setOpenModal}
                setLastOpenModal={props.setLastOpenModal}
                setMessageModal={props.setMessageModal} />
        );
    };

    return (
        <CustomModal
            isOpen={props.isOpen}
            toggle={props.toggle}
            imgModal={imgInstitution}
            title="Instituciones"
            body={modalBody()}
        />
    );
}

InstitutionModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
