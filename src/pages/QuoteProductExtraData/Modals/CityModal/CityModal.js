import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormCityModal } from './FormCityModal';
import imgCity from '../../../../assets/img/126PX/Icono_CdEstado-Bco_126px.png'

export const CityModal = (props) => {

    const modalBody = () => {
        return (
            <FormCityModal toggle={props.toggle}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                imgModal={imgCity}
                title="CIUDAD Y ESTADO"
                body={modalBody()}
        />
    );
}

CityModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
