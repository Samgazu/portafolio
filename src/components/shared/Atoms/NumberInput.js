/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './NumberInput.scss';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const NumberInput = ({ title, minValue, maxValue, setValueItem, valueItem }) => {

    const [cont, setCont] = useState(minValue || 0);
    const changeCont = (operator) => {
        if (operator == "+") {
            if (cont < maxValue)
                setCont(cont + 1)
        }
        else {
            if (cont > minValue)
                setCont(cont - 1)
        }
        /* if ( cont < maxValue && cont > minValue) */
    }
    useEffect(() => {
        setValueItem({
            ...valueItem,
            [title]: {
                value: cont,
            },
        });
    }, [cont])
    const changeInputValue = (e) => {
        if (!isNaN(e.target.value) && (e.target.value <= maxValue)) {
            setCont(Number(e.target.value))
        }
    }
    return (
        <div className="numberInput-content">
            <span className={"input_title"}>{(title == 'day' || title == 'final_day') ? 'Día' : '' || (title == 'month' || title == 'final_month') ? 'Mes' : '' || (title == 'year' || title == 'final_year') ? 'Año' : '' || (title == 'hour' || title == 'final_hour') ? 'Hora' : '' || (title == 'minute' || title == 'final_minute') ? 'Minutos' : ''}</span>

            <div className='numeric-input-base'>
                <input
                    type='text'
                    placeholder='00'
                    name='numericInput'
                    value={cont}
                    onChange={(e) => changeInputValue(e)}
                /* value={nameQuote}
                onChange={handleInputChange} */
                />
                <div className='arrows'>
                    <div className='arrowUp'>
                        <ArrowDropUpIcon className='icon-arrow' onClick={() => changeCont("+")} />
                    </div>
                    <div className='arrowDown'>
                        <ArrowDropDownIcon className='icon-arrow' onClick={() => changeCont("-")} />
                    </div>
                </div>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(NumberInput));