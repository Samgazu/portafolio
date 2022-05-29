/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './sass/styles.sass';
import { SearchInstitutionModal } from './SearchInstitutionModal';
import imgInstitution from '../../../../assets/img/126PX/Icono_Institucion_126px.png';


export const InstitutionModal = (props) => {


    const modalBody = () => {
        return (
            <SearchInstitutionModal toggle={props.toggle}
                type={props.type}
                setResult={props.setResult} />
        );
    };

    return (
        <CustomModal
            isOpen={props.isOpen}
            toggle={props.toggle}
            imgModal={imgInstitution}
            title="Institucion"
            body={modalBody()}
        />
    );
}

InstitutionModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
