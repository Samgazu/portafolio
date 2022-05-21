import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CalendarBase.scss';
import Calendar from 'react-calendar';
import moment from 'moment';
import CalendarComponent from '../../Calendar/CalendarComponent';
import Search from '../../../pages/Schedule/Search';


export const CalendarBase = (props) => {
    const formatDate = () => {
        return `${moment(props.selectedDate).format('DD')} de ${moment(props.selectedDate).format('MMMM')} del ${moment(props.selectedDate).format('YYYY')}`;
    }

    return (
        <div className="calendar_base_content">
            <div className={ props.typeCalendar !== "ATQ" ? "dateSelected_content dateSelected_content_standar" : "dateSelected_content dateSelected_content_ATQ"}>
                <span className={'bar-date-selected'}>{  formatDate() }</span>
            </div>
            <CalendarComponent
                selectedDateOnChange={props.selectedDateOnChange}
                selectedDate={props.selectedDate}
                setNewFinalDayMonth={props.setNewFinalDayMonth}
                newFinalDayMonth={props.newFinalDayMonth}
                page={props.page ?props.page :'nada'}
                changeMonth={props.changeMonth}
            />
        </div>
    );
}
CalendarBase.propTypes = {
    selectedDate: PropTypes.any,
    selectedDateOnChange: PropTypes.any,
    setNewFinalDayMonth: PropTypes.any,
    typeCalendar: PropTypes.any,
};
