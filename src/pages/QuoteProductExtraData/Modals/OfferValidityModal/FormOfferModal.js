import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOfferValidityQuote } from '../../../../actions/newQuoteAction';
import Calendar from 'react-calendar';
import moment from 'moment';

export const FormOfferModal = (props) => {

  const [selectedDate, selectedDateOnChange] =  useState(new Date());
  const dispatch = useDispatch();
  const handleDate = (e) => {
      e.preventDefault();
      let date = new Date();
      let dateForm = `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${moment(selectedDate).format('DD')}T${('00' + date.getUTCHours()).slice(-2)}:${('00' + date.getUTCMinutes()).slice(-2)}:${('00' + date.getUTCSeconds()).slice(-2)}`
      dispatch(dispatch(updateOfferValidityQuote(dateForm)));
      props.toggle();
  }
//   const formatDate = () => {
//       return `${moment(selectedDate).format('DD')} de ${moment(selectedDate).format('MMMM')} del ${moment(selectedDate).format('YYYY')}`;
//   }
  return (
      <div  className='c-date'>
          <div className='c-date-c-title'>
              <h3 className='c-date-title'>Fecha</h3>
          </div>
          <Calendar
              onChange={selectedDateOnChange}
              value={selectedDate}
          />
          {/*<span>{  formatDate() }</span>*/}
          <button className='c-date-button' onClick={handleDate}>
              CONTINUAR
          </button>
      </div>
  )
};

FormOfferModal.propTypes = {
  toggle: PropTypes.any,
};