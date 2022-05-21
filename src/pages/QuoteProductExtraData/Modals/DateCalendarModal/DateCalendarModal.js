import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import imgDateModal from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';

import './styles.scss';
import { DateCalendarInputModal } from './DateCalendarInputModal';

export const DateCalendarModal = (props) => {

  const modalBody = () => {
    return <DateCalendarInputModal toggle={props.toggle} />;
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

DateCalendarModal.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.any,
};
