import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormOfferModal } from './FormOfferModal';
import imgOfferModal from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';


export const OfferValidityModal = (props) => {


    const modalBody = () => {
        return (
            <FormOfferModal toggle={props.toggle} />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                imgModal={imgOfferModal}
                title="VALIDEZ DE LA OFERTA"
                body={modalBody()}
        />
    );
}

OfferValidityModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
