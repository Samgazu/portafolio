import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { updateFormDeliveryQuote } from '../../../../actions/newQuoteAction';
import PropTypes from 'prop-types';

export const FormDelivery = (props) => {

  const dispatch = useDispatch();

    const [ formValues, handleInputChange] = useForm({
        dias: '', 
        semanas: '', 
        meses:'',
        deliveryRadio: '',

    });

    const { dias, semanas, meses, deliveryRadio} = formValues;

    const handleDelivery = (e) => {
        e.preventDefault();
        let result = '';

        if(deliveryRadio === 'In'){
          result = 'Inmediata'
        } else if(dias && deliveryRadio === 'dias'){
          result = `${dias} ${dias == 1 ? 'día': 'días'}`;
        }else if(semanas && deliveryRadio === 'semanas'){
          result = `${semanas} ${semanas == 1 ? 'semana': 'semanas'}`;
        }else if(meses && deliveryRadio === 'meses'){
          result = `${meses} ${meses == 1 ? 'mes': 'meses'}`;
        }
        dispatch(updateFormDeliveryQuote(result));
        props.toggle();
    }

  return (
    <form className="c-deliveryTimeModal" onSubmit={handleDelivery}>
      <div className="c-deliveryTimeModal-c-list-items">
        <div className="c-deliveryTimeModal-c-item">
          <p className="c-deliveryTimeModal-item-name"> Inmediata </p>
          <input
            className="c-deliveryTimeModal-item-check"
            type="radio"
            name="deliveryRadio"
            value={'In'}
            checked={ deliveryRadio === 'In'}
            onChange={handleInputChange}
          />
        </div>
        <div className="c-deliveryTimeModal-c-item">
          <input
            type="number"
            name="dias"
            min='1'
            onChange={handleInputChange}
            value={dias}
            className="c-deliveryTimeModal-item-input"
          />
          <span className="c-deliveryTimeModal-item-name"> Días </span>
          <input
            className="c-deliveryTimeModal-item-check"
            type="radio"
            name="deliveryRadio"
            value={'dias'} 
            checked={deliveryRadio.includes('dia')}
            onChange={handleInputChange}
          />
        </div>
        <div className="c-deliveryTimeModal-c-item">
          <input
            type="number"
            name="semanas"
            min='1'
            onChange={handleInputChange}
            value={semanas}
            className="c-deliveryTimeModal-item-input"
          />
          <p className="c-deliveryTimeModal-item-name"> Semanas </p>
          <input
            className="c-deliveryTimeModal-item-check"
            type="radio"
            name="deliveryRadio"
            value={'semanas'} 
            checked={deliveryRadio.includes('semana')}
            onChange={handleInputChange}
          />
        </div>
        <div className="c-deliveryTimeModal-c-item">
          <input
            type="number"
            name="meses"
            min='1'
            onChange={handleInputChange}
            value={meses}
            className="c-deliveryTimeModal-item-input"
          />
          <p className="c-deliveryTimeModal-item-name"> Meses </p>
          <input
            className="c-deliveryTimeModal-item-check"
            type="radio"
            name="deliveryRadio"
            value={'meses'} 
            checked={deliveryRadio.includes('mes')}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type='submit' className="c-deliveryTimeModal-button">CONTINUAR</button>
    </form>
  );
};
FormDelivery.propTypes = {
  toggle: PropTypes.any,
};