/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import { FormClientModal } from './FormClientModal';


export const ClientModal = (props) => {


  const modalBody = () => {
    return (
        <FormClientModal  toggle={props.toggle}
                          setOpenModal={props.setOpenModal}
                          setLastOpenModal={props.setLastOpenModal} 
                          setMessageModal={props.setMessageModal} />
    );
  };

  return (
    <CustomModal
      isOpen={props.isOpen}
      toggle={props.toggle}
      title="CLIENTE"
      body={modalBody()}
    />
  );
};

ClientModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
};
