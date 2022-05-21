import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import imgDateModal from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';

import './styles.sass';
import { FormListPricesModal } from './FormListPricesModal';


export const ListPricesModal = (props) => {

  const modalBody = () => {
    return <FormListPricesModal toggle={props.toggle} 
                                setOpenModal={props.setOpenModal} 
                                setLastOpenModal={props.setLastOpenModal} 
                                setMessageModal={props.setMessageModal}
    />;
  };

  return (
    <CustomModal
      isOpen={props.isOpen}
      toggle={props.toggle}
      imgModal={imgDateModal}
      title="Fecha"
      body={modalBody()}
    />
  );
};

ListPricesModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
  setOpenModal: PropTypes.any,
  setLastOpenModal: PropTypes.any,
  setMessageModal: PropTypes.any,
};
