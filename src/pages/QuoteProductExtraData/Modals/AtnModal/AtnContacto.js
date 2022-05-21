import React from 'react';
import { useDispatch } from 'react-redux';
import { postAtn} from '../../../../actions/newQuoteAction';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';

export const AtnContacto = (props) => {

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    firstName: '',
    secondName: '',
    firstLastName: '',
    secontLastName: '',
  });

  const { firstName, secondName, firstLastName, secontLastName } = formValues;

  const handleContact = (e) => {
    e.preventDefault();
    const atn = {
      FirstName: firstName,
      SecondName: secondName,
      FirstLastname: firstLastName,
      SecondLastname: secontLastName,    
    }
    dispatch(postAtn(atn));
    props.toggle();
  };
  return (
    <form className="c-contact" onSubmit={handleContact}>
      <div className="c-contact-c-list-items">
        <div className="c-contact-c-item">
          <input
            className="c-contact-item-name"
            type="text"
            placeholder="*Primer nombre"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="c-contact-c-item">
          <input
            className="c-contact-item-name"
            type="text"
            placeholder="Segundo nombre"
            name="secondName"
            value={secondName}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div className="c-contact-c-item">
          <input
            className="c-contact-item-name"
            type="text"
            placeholder="*Primer Apellido"
            name="firstLastName"
            value={firstLastName}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="c-contact-c-item">
          <input
            className="c-contact-item-name"
            type="text"
            placeholder="*Segundo Apellido"
            name="secontLastName"
            value={secontLastName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="c-contact-button">
        CONTINUAR
      </button>
    </form>
  );
};
AtnContacto.propTypes = {
  toggle: PropTypes.any,
};