import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import imgDateModal from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';

import './styles.sass';
import { DateInputModal } from './DateInputModal';

export const DateModal = (props) => {

  const modalBody = () => {
    return <DateInputModal toggle={props.toggle} />;
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

DateModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
};
