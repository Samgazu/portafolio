import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './sass/styles.sass';
import { postCreatePatientSchedule} from '../../../../actions/scheduleSurgeryAction';

export const AddPatient = (props) => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
  });

  const { firstName, secondName, firstLastName, secondLastName } = formValues;

  const handlePatient = (e) => {
    e.preventDefault();
    dispatch(postCreatePatientSchedule(firstName, secondName, firstLastName, secondLastName));
    props.toggle();
  };
  return (
    <form className="c-patient-Schedule" onSubmit={handlePatient}>
      <div className="c-patient-Schedule-c-list-items">
        <div className="c-patient-Schedule-c-item">
          <input
            className="c-patient-Schedule-item-name"
            type="text"
            placeholder="Primer nombre *"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
        </div>
        <div className="c-patient-Schedule-c-item">
          <input
            className="c-patient-Schedule-item-name"
            type="text"
            placeholder="Segundo nombre"
            name="secondName"
            value={secondName}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </div>
        <div className="c-patient-Schedule-c-item">
          <input
            className="c-patient-Schedule-item-name"
            type="text"
            placeholder="Primer Apellido *"
            name="firstLastName"
            value={firstLastName}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
        </div>
        <div className="c-patient-Schedule-c-item">
          <input
            className="c-patient-Schedule-item-name"
            type="text"
            placeholder="Segundo Apellido *"
            name="secondLastName"
            value={secondLastName}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </div>
      </div>
      <button type="submit" className="c-patient-Schedule-button">
        CONTINUAR
      </button>
    </form>
  );
};

AddPatient.propTypes = {
  toggle: PropTypes.any,
};