import React from 'react';
import { useDispatch } from 'react-redux';
import { updateEmailQuote } from '../../../../actions/newQuoteAction';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';

export const FormEMailModal = (props) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        email: '',
    
      });
    
      const { email } = formValues;
    
      const handlEmail = (e) => {
        e.preventDefault();
        reset();
        email.trim().length === 0
        ? dispatch(updateEmailQuote( null ))
        : dispatch(updateEmailQuote( email ));
        props.toggle();
      };
  return (
    <form className="c-mail" onSubmit={handlEmail}>
      <div className="c-mail-c-item">
        <input
          className="c-mail-item-name"
          type="text"
          pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          placeholder="Correo"
          name="email"
          autoFocus
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <button type="submit" className="c-mail-button">
        CONTINUAR
      </button>
    </form>
  );
};
FormEMailModal.propTypes = {
  toggle: PropTypes.any,
};