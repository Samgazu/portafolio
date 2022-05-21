import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';
import { useForm } from '../../../../hooks/useForm';
import { updatePaymentConditionQuote } from '../../../../actions/newQuoteAction';
import { paymentConditionsData } from './paymentConditionsData';
import { useDispatch } from 'react-redux';


export const PaymentConditionModalAddDescription = (props) => {

    const dispatch = useDispatch();

    const [ formValuesInput, handleInputChange, reset] = useForm({
        payment: ''
    });

    const { payment } = formValuesInput;

    const handlePayment = (e) => {
        e.preventDefault();
        reset();
        dispatch(updatePaymentConditionQuote(payment));
        props.toggle();
    }
    return (

        <form className='c-paymentCondition' onSubmit={handlePayment}>
                <div className='c-paymentCondition-c-list-items'>
                    {
                        paymentConditionsData && (
                            paymentConditionsData.map( item => (
                                <div key={item.id} className="c-paymentCondition-c-item">
                                    <p className='c-paymentCondition-item-name'>{item.name}</p>
                                    <input className='c-paymentCondition-item-check'
                                        name="payment" 
                                        type="radio"
                                        checked={payment === item.name}
                                        value={item.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))
                        )
                    }
                    <div className="c-paymentCondition-input-container-add" >
                        <input className='c-paymentCondition-item-add'
                            name="payment" 
                            type="text"
                            placeholder='Agregar...'
                            autoComplete='off'
                            value={payment}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            <button className='c-paymentCondition-button' type='submit'>
                CONTINUAR
            </button>
        </form>
    )
}

PaymentConditionModalAddDescription.propTypes ={
    toggle: PropTypes.any ,
}
