import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';
import { ATQModalData } from './ATQModalData';
import { setATQToSchedule } from '../../../../actions/scheduleSurgeryAction';

export const FormATQModal = (props) => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    whitATQ: '',
  });

  const { whitATQ } = formValues;

  const handlePay = (e) => {
    e.preventDefault();
    reset();
    dispatch(setATQToSchedule(whitATQ));
    props.toggle();
  };

  return (
    <form className="c-atqToSchedule" onSubmit={handlePay}>
      <form className="c-atqToSchedule-c-list-items">
        {ATQModalData &&
          ATQModalData.map((item) => (
            <div key={item.id} className="c-atqToSchedule-c-item">
              <span className="c-atqToSchedule-item-name">{item.name}</span>
              <input
                className="c-atqToSchedule-item-check"
                type="radio"
                name="whitATQ"
                checked={whitATQ === item.name}
                value={item.name}
                onChange={handleInputChange}
              />
            </div>
          ))}
      </form>
      <button type="submit" className="c-atqToSchedule-button">
        CONTINUAR
      </button>
    </form>
  );
};
FormATQModal.propTypes = {
  toggle: PropTypes.any,
};
