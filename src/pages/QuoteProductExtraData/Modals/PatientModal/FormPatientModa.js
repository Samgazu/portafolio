import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import { postCreatePatient } from '../../../../actions/newQuoteAction';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './sass/styles.sass';

export const AddPatient = (props) => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    firstName: '',
    secondName: '',
    firstLastName: '',
    secontLastName: '',
  });

  const { firstName, secondName, firstLastName, secontLastName } = formValues;

  const handlePatient = (e) => {
    e.preventDefault();
    dispatch(postCreatePatient(firstName, secondName, firstLastName, secontLastName));
    props.toggle();
  };
  return (
    <form className="c-patient" onSubmit={handlePatient}>
      <div className="c-patient-c-list-items">
        <div className="c-patient-c-item">
          <input
            className="c-patient-item-name"
            type="text"
            placeholder="*Primer nombre"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
        </div>
        <div className="c-patient-c-item">
          <input
            className="c-patient-item-name"
            type="text"
            placeholder="Segundo nombre"
            name="secondName"
            value={secondName}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </div>
        <div className="c-patient-c-item">
          <input
            className="c-patient-item-name"
            type="text"
            placeholder="*Primer Apellido"
            name="firstLastName"
            value={firstLastName}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
        </div>
        <div className="c-patient-c-item">
          <input
            className="c-patient-item-name"
            type="text"
            placeholder="*Segundo Apellido"
            name="secontLastName"
            value={secontLastName}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </div>
      </div>
      <button type="submit" className="c-patient-button">
        CONTINUAR
      </button>
    </form>
  );
};

AddPatient.propTypes = {
  toggle: PropTypes.any,
};