import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postNewQuote } from '../../../../../actions/newQuoteAction';
import { useForm } from '../../../../../hooks/useForm';
import PropTypes from 'prop-types';


export const FormNameModal = (props) => {
  const newQuote = useSelector((state) => state.newQuote);
  // const systems = useSelector((state) => state.systems);
  const [formValues, handleInputChange] = useForm({
    name: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = formValues;

  const pendingQuoteName = (e) => {
    e.preventDefault();
    history.replace(`/Inicio`);
    
    dispatch(postNewQuote(newQuote, null , name, true ));

    props.toggle();
  };
  return (
    <form className="c-name" onSubmit={pendingQuoteName}>
      <div className="c-name-c-item">
        <input
          className="c-name-item-name"
          type="text"
          placeholder="*Nombre de Cotización"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </div>
      <button type="submit" className="c-name-button">
        GUARDAR
      </button>
    </form>
  );
};


FormNameModal.propTypes = {
  toggle: PropTypes.any,
};