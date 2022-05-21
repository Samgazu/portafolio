import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { FormEMailModal } from './FormEMailModal';
import imgCorreoModal from '../../../../assets/img/126PX/Icono_Correo_126px.png';



export const EmailModal = (props) => {


  const modalBody = () => {
    return (
        <FormEMailModal  toggle={props.toggle} />
    );
  };

  return (
    <CustomModal
      isOpen={props.isOpen}
      toggle={props.toggle}
      imgModal={imgCorreoModal}
      title="CORREO ELECTRONICO"
      body={modalBody()}
    />
  );
};

EmailModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
};
