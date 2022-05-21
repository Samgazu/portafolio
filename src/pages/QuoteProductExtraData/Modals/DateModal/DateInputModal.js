import React from 'react'
import { useDispatch } from 'react-redux';
import { updateDateQuote } from '../../../../actions/newQuoteAction';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';

export const DateInputModal = (props) => {

    const dateNow = new Date();

    const dispatch = useDispatch();
    const [ formValues, handleInputChange, reset ] = useForm({
        dd: dateNow.getDate(),
        mm: (dateNow.getMonth() +1),
        aaaa: dateNow.getFullYear(),
    });

    let { dd, mm, aaaa } = formValues;

    const handleDate = (e) => {
        e.preventDefault();
        let date = new Date();
        if(mm < 10){
            mm = `0${mm}`
        }
        if(dd < 10){
            dd = `0${dd}`
        }
        let dateForm = `${aaaa}-${mm}-${dd}T${('00' + date.getUTCHours()).slice(-2)}:${('00' + date.getUTCMinutes()).slice(-2)}:${('00' + date.getUTCSeconds()).slice(-2)}`
        // alert(dateForm)
        reset();
        dispatch(updateDateQuote(dateForm));
        props.toggle();
    }
    return (
        <form  className='c-date' onSubmit={handleDate}>
            <div className='c-date-c-title'>
                <h3 className='c-date-title'>Fecha</h3>
            </div>
            <div className='c-date-c-info'>
                <input type="number"
                    min="1" max="31"
                    className='c-date-info'
                    name='dd'
                    value={dd}
                    onChange={handleInputChange}
                    placeholder='dd' />
                <input type="number"
                    min="1" max="12" 
                    className='c-date-info'
                    name='mm'
                    value={mm}
                    onChange={handleInputChange} 
                    placeholder='mm'/>
                <input type="number"
                    min="2000" max="2100"
                    className='c-date-info'
                    name='aaaa'
                    value={aaaa}
                    onChange={handleInputChange}
                    placeholder='aaaa' />
            </div>
            <button type='submit' className='c-date-button'>
                CONTINUAR
            </button>
    </form>
    )
}

DateInputModal.propTypes = {
    toggle: PropTypes.any,
};
  