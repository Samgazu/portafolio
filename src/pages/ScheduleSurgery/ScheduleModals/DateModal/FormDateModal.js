import React, { useEffect, useState } from 'react';
import { useDispatch,} from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from '../../../../hooks/useForm';
import { setHourToSchedule } from '../../../../actions/scheduleSurgeryAction';
import DatePicker from 'react-date-picker';
import moment from 'moment';

export const FormDateModal = (props) => {
  const [getDate, setGetDate] = useState(new Date());

  const dispatch = useDispatch();
  const [ formValues, handleInputChange ] = useForm({
      hr: '',
      min: '',
  });
  let { hr, min } = formValues;

useEffect(() => {
  let validatehrs = null;
  let validateMin = null;
if(hr && hr <= 9){
      validatehrs = `0${hr}`; 
}
if(min && min <= 9 && min.length < 2){
  validateMin = `0${min}`;
}
if(validatehrs !== null ){
  hr = validatehrs
}
if(validateMin !== null ){
  min = validateMin
}


  
}, [formValues]);



  const handleDate = (e) => {
      e.preventDefault();
      let date = new Date();
      if(!hr){
  
        hr = new Date().getHours();
      }
      if(!min){
          min = new Date().getMinutes();
      }
      let completeDate = `${moment(getDate).format('YYYY')}-${moment(getDate).format('MM')}-${moment(getDate).format('DD')}T${hr < 9 ? `0${Math.abs(hr)}`:`${hr}`}:${min < 9 && min > 0 ? `0${Math.abs(min)}`:`${min}`}:${('00' + date.getUTCSeconds()).slice(-2)}`;
      let dateForm = `${moment(getDate).format('DD')}/${moment(getDate).format('MM')}/${moment(getDate).format('YYYY')}`;
      let hourDate = `${hr < 9 ? `0${Math.abs(hr)}`:`${hr}`}:${min < 9 && min > 0
       ? `0${Math.abs(min)}`:`${min}`} ${hr >= 0 && hr<=11 ?'AM': 'PM'}`;
      let hourDateToAPI = `${hr < 9 ? `0${Math.abs(hr)}`:`${hr}`}:${min < 9 && min > 0
       ? `0${Math.abs(min)}`:`${min}`}`;
      dispatch(setHourToSchedule(
          { 
            completeDate,
            hourDate,
            dateForm,
            hourDateToAPI
        }));
      props.toggle();
  }
  return (

      <form  className='c-date-calendar' onSubmit={handleDate}>
          <div className='c-date-calendar-c-title'>
              <h3 className='c-date-calendar-title'>Fecha</h3>
          </div>
          <div className='c-date-calendar-c-info'>
            <DatePicker
                className='c-date-calendar-info-calendar-date'
                onChange={setGetDate}
                value={getDate}
                format={"d/M/yyyy"}
            />
          </div>
          <div className='c-date-calendar-c-title'>
              <h3 className='c-date-calendar-title'>Hora - Formato 24hrs</h3>
              {
                ( !hr || !min ) &&
                <h4 className='c-date-calendar-title-message-alert'>Campos Obligatorios</h4>

              }
          </div>
          <div className='c-date-calendar-c-info'>
              <input type="number"
                  min="0" max="24"
                  className='c-date-calendar-info'
                  name='hr'
                  value={hr <= 24 && hr >= 0 && hr.length < 3? hr : ''}
                  onChange={handleInputChange}
                  
                  placeholder='Hr' />
              <span> : </span>
              <input type="number"
                  min="0" max="60" 
                  className='c-date-calendar-info'
                  name='min'
                  value={ min <= 59 && min >= 0 && min.length < 3 ? min : ''}
                  onChange={handleInputChange} 
                  placeholder='Min'/>
          </div>
          <button type='submit' className={ ( hr && min ) ? 'c-date-calendar-button' : 'c-date-calendar-button_disabled'} disabled={ ( hr && min ) ? false: true} >
              CONTINUAR
          </button>
  </form>
  );
};
FormDateModal.propTypes = {
  toggle: PropTypes.any,
};
