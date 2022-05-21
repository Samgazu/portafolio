import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../shared/Modal';
import './styles.sass';
import { FormNameModal } from './FormNameModal';


export const NameModal = (props) => {


  const modalBody = () => {
    return (
        <FormNameModal  toggle={props.toggle} />
    );
  };

  return (
    <CustomModal
      isOpen={props.isOpen}
      toggle={props.toggle}
      title="AGREGAR NOMBRE"
      body={modalBody()}
    />
  );
};

NameModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
};
