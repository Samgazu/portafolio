import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormATQModal} from './FormATQModal';
import imgTimeDelivery from '../../../../assets/img/126PX/Icono_Tiempo-Bco_126px.png';

export const ATQModal = (props) => {

    const modalBody = () => {
        return (
            <FormATQModal toggle={props.toggle}  />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                imgModal={imgTimeDelivery} 
                title="ATQ"
                body={modalBody()}
        />
    );
}

ATQModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
