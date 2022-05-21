import React  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { postNewQuote } from '../../../actions/newQuoteAction';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm';

export const FormQuoteNameModal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const newQuote = useSelector((state) => state.newQuote);

  const [formValues, handleInputChange] = useForm({
    nameQuote: '',
  });

  const { nameQuote } = formValues;

  const handlNameQuote = (e) => {
    e.preventDefault();
    if(nameQuote.trim().length !== 0){
      dispatch(postNewQuote(newQuote, props.globalTotal, nameQuote));
      history.replace('/orden_solicitada')
      props.toggle();
    }
  };
  return (
    <form className="c-mail" onSubmit={handlNameQuote}>
      <div className="c-mail-c-item">
        <input
          className="c-mail-item-name"
          type="text"
          required
          placeholder="Nombre Cotización"
          name="nameQuote"
          value={nameQuote}
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
FormQuoteNameModal.propTypes = {
  toggle: PropTypes.any,
  globalTotal: PropTypes.any,
};
