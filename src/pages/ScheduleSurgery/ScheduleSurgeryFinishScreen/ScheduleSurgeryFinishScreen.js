import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './sass/styles.scss';
// ASSETS
import iconOrderSuccess from '../../../assets/img/512PX/Icono_CXProgramada_512px.png';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { resetToInitialStateSchedule } from '../../../actions/scheduleSurgeryAction';

export const ScheduleSurgeryFinishScreen = () => {

    const newAppointmentCreated = useSelector(state => state.scheduleSurgery.newAppointmentCreated);
    const [getNewAppointment, setGetNewAppointment] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(newAppointmentCreated){
            setGetNewAppointment(newAppointmentCreated);
        }
        return () => {
            dispatch(resetToInitialStateSchedule());
        }
    }, [newAppointmentCreated]);
    
    const history = useHistory();

    const handleFirtsPage = () => {
        dispatch(resetToInitialStateSchedule());
        history.replace(`/Inicio`);
      }

    const handleSchedulePage = () => {
        dispatch(resetToInitialStateSchedule());
        history.replace(`/agenda/inicio`);
      }


    return (

        <div className={"schedule_surgery_finish"}>
            <div className={"schedule_surgery_finish_general_c"}>
              <div className={"quote-images"}>
                <img className="quote-success-img" src={iconOrderSuccess} alt="" />
              </div>
              <h4 className={"schedule_surgery_finish_title"}>CIRUGÍA PROGRAMADA</h4>
              <p className={"schedule_surgery_finish-subtitle"}>Tu número de PQX es:</p>
              <p className={"quoteSucess-number"}>#{ getNewAppointment && getNewAppointment.id && getNewAppointment.id}</p>
              <div className={"order_buttons"}>
                <button
                  className="quote-white-button"
                  onClick={ handleFirtsPage }
                >
                  <span> FINALIZAR </span>
                </button>
                <button
                  className="quote-transparent-button"
                  onClick={ handleSchedulePage }
                >
                  <span> VER AGENDA </span>
                </button>
              </div>
            </div>
        </div>
    )
}
