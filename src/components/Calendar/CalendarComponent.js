import { FreeBreakfastRounded, MoveToInbox } from '@material-ui/icons';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import "./Calendar.scss";
import * as DateHolidays from 'date-holidays';

// import { 
//   HolidayRule,
//   Holidays,
// } from 'date-holidays';



const {
  format,
  isSameMonth,
  isSunday,
  isSameDay,

  startOfMonth,
  startOfWeek,
  startOfDay,

  endOfMonth,
  endOfWeek,

  addDays,
  getYear,
  addMonths,
  subMonths,
} = require('date-fns');


const setMonth = {
  January: 'Enero',
  February: 'Febrero',
  March: 'Marzo',
  April: 'Abril',
  May: 'Mayo',
  June: 'Junio',
  July: 'Julio',
  August: 'Agosto',
  September: 'Septiembre',
  October: 'Octubre',
  November: 'Noviembre',
  December: 'Diciembre'
};

function takeWeek(start) {
  let date = startOfWeek(startOfDay(start));

  return function () {
    const week = [...Array(7)].map((_, i) => addDays(date, i));
    date = addDays(week[6], 1);
    return week;
  };
}



function CalendarComponent({ selectedDateOnChange, selectedDate: selectedDateItem, setNewFinalDayMonth, page = 'agenda', newFinalDayMonth, changeMonth }) {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const appointmentsListCalendar = useSelector(state => state.storeHouse.appointmentsListCalendar);
  const listGuardDays = useSelector(state => state.atqAdministrador.holidays);
  const [holidayMessage, setHolidayMessage] = useState("");


  const holidays = new DateHolidays.default();
  holidays.init('MX');
  //console.warn(holidays)

  const formatDate = () => {
    return `${moment(selectedDate).format('DD')}-${moment(selectedDate).format('MM')}-${moment(selectedDate).format('YYYY')}`;
  }


  useEffect(() => {
    selectedDateOnChange(selectedDate);
  }, [selectedDate])

  function takeMonth(start = selectedDate) {
    let month = [];
    let date = start;

    function lastDayOfRange(range) {
      return range[range.length - 1][6];
    }

    return function () {
      const weekGen = takeWeek(startOfMonth(date));
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGen());

      while (lastDayOfRange(month) < endDate) {
        month.push(weekGen());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);

      return range;
    };
  }

  const compareDates = () => {
    if (format(selectedDate, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy')) {
      return "Hoy"
    } else {
      return format(selectedDate, 'dd/MM/yyyy')
    }
  }

  const dayColor = (day) => {
    if (!isSameMonth(day, selectedDate)) {
      return 'dissapear-text';
    } else {
      if (isSameDay(day, selectedDate)) {
        //return 'active';
      } else {
        if (isSunday(day, selectedDate)) {
          return 'green-sunday';
        }
      }
    }
  }

  const prevMonth = () => {
    if (page === 'agenda') {
      changeMonth()

    }
    setHolidayMessage("")
    setSelectedDate(subMonths(selectedDate, 1));

  }

  const nextMonth = () => {
    if (page === 'agenda') {
      changeMonth()
    }
    setHolidayMessage("")
    setSelectedDate(addMonths(selectedDate, 1));
  }

  const data = takeMonth()();
  useEffect(() => {
    let finalDayDate = 0;
    data.forEach(arrayDate => {
      arrayDate.forEach(item => {
        if (isSameMonth(item, selectedDate)) {
          finalDayDate++;
        }
      })
    });

    setNewFinalDayMonth(finalDayDate);

  }, [selectedDate])


  const showHoliday = (day, message = "") => {

    setSelectedDate(day)
    //console.log('message2', message)
    setHolidayMessage(message);
  }

/*   console.log('page',page) */
  return (
    <div className={"admin-schedule-content-box"}>
      <div className={"admin-schedule-calendar"}>
        <div className="month">
          <ul>

            <li className="prev" onClick={prevMonth}>«</li>
            <li className="next" onClick={nextMonth}>»</li>

            <li>
              {setMonth[format(selectedDate, 'LLLL')]}
              <span> {getYear(selectedDate)}</span>
            </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li style={{ padding: '10px' }}>Dom</li>
          <li style={{ padding: '10px' }}>Lun</li>
          <li style={{ padding: '10px' }}>Mar</li>
          <li style={{ padding: '10px' }}>Mié</li>
          <li style={{ padding: '10px' }}>Jue</li>
          <li style={{ padding: '10px' }}>Vie</li>
          <li style={{ padding: '10px' }}>Sáb</li>
        </ul>

        <ul className="days">
          {data.map((week, indexWeek) => (
            <>
              {week.map((day) => {

                const el = Object.keys(holidays.holidays).find(el => {
                  if (el.search(/[a-z]/ig) < 0) { //Entra mientras no incluya letra
                    const currentYear = new Date().getFullYear();
                    const holiday = new Date(el + "-" + currentYear)
                    //console.log(holiday.toISOString())
                    if (format(holiday, "dd").includes(format(day, "dd")) && isSameMonth(day, holiday)) {
                      //console.log('sss', holiday.toISOString());
                      return true;
                    }

                    return false;

                  }
                })
                if (indexWeek > 3 && format(new Date(day), "dd") < 10) {
                  return (

                    <li
                      key={day.id}

                    >
                    </li>

                  )

                }
                return (

                  <li
                    key={day.id}
                    onClick={() => { el &&  page === "COORDINADORATQ" ? showHoliday(day, `${format(new Date(day), "dd")} ${holidays.holidays[el].name.es}`) : showHoliday(day) }}
                  >

                    {
                      page === 'roldeGuardia' &&
                        listGuardDays && listGuardDays.length > 0 && listGuardDays.map(el => format(new Date(el.holidayDate), "dd")).includes(format(day, "dd")) && isSameMonth(day, selectedDate)
                        ? <span className={"guardDaysActive"}>{format(day, "dd")}</span>
                        : <span className={`${dayColor(day)}`}>{format(day, "dd")}</span>
                    }


                    {
                      page === 'agenda'  &&
                      appointmentsListCalendar && appointmentsListCalendar.map(el => format(new Date(el.surgeryDate), "dd")).includes(format(day, "dd")) && isSameMonth(day, selectedDate) &&
                      <span className={"CalendarComponent-day-appointment"}>
                      </span>
                    }


                    {
                      page === 'COORDINADORATQ'  &&
                      appointmentsListCalendar && appointmentsListCalendar.map(el => format(new Date(el.surgeryDate), "dd")).includes(format(day, "dd")) && isSameMonth(day, selectedDate) &&
                      <span className={"CalendarComponent-day-appointment"}>
                      </span>
                    }

                    { page === "COORDINADORATQ" &&
                      //holidays?.holidays... Lo mismo que abajo 
                      el &&

                      <span className={"CalendarComponent-day-holiday-appointment"} onClick={() => setHolidayMessage(holidays.holidays[el].name.es) }
                      ></span>
                      

                    }


                  </li>
                )
              })}
            </>
          ))}
        </ul>
      </div>



      {holidayMessage !== "" &&

      <div className='container-show-holiday'>

      <div className='CalendarComponent-day-appointment'>
      </div>

        <span className={"CalendarComponent-day-holiday-view-appointment"}> {holidayMessage}</span>

      </div>

      }









      <span className={"admin-schedule-title"}>
        {//compareDates()
        }
      </span>


    </div>

  );
}

export default CalendarComponent;
