import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePhoneNumberQuote } from '../../../../actions/newQuoteAction';
// import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export const FormPhoneModal = (props) => {

  const dispatch = useDispatch();
  const [phone, setPhone] = useState(0);
  const handlPhone = (e) => {
    e.preventDefault();
    if(phone.length >= 10 || phone === 0){
      phone === 0 
      ? dispatch(updatePhoneNumberQuote(null))
      : dispatch(updatePhoneNumberQuote(phone));
      props.toggle();
    }
  };
  return (
    <form className="c-phone" onSubmit={handlPhone}>
      <div className="c-phone-c-item">
      <NumberFormat thousandSeparator={true} onValueChange={(values) => {
        const {value} = values;
        // formattedValue = $2,223
        // value ie, 2223
        setPhone(value)
      }} format="(##) ##-##-##-##" 
      mask="_"
      placeholder="NÚMERO TELEFÓNICO"
      autoFocus
      className="c-phone-item-name" />
      </div>
      <button type="submit" className="c-phone-button">
        CONTINUAR
      </button>
    </form>
  );
};
FormPhoneModal.propTypes = {
  toggle: PropTypes.any,
};
