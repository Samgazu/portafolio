import React, {useState, useEffect} from 'react';
import { connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import NumericInput from 'react-numeric-input';
import './NumberInput.scss';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const NumberInput = ({ title, minValue, maxValue, setValueItem, valueItem}) => {

    const [cont, setCont] = useState(minValue||0);
    const changeCont = (operator) => {
        if ( operator == "+") {
            if (cont < maxValue )
                setCont(cont+1)
        }
        else {
            if (cont > minValue)
            setCont(cont-1)
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
        if (!isNaN(e.target.value) && (e.target.value <= maxValue) ) {
            setCont(Number(e.target.value))
        }
    }
    return (
        <div className="numberInput-content">
            <span className={"input_title"}>{(title=='day' || title=='final_day')? 'Día' : '' || (title=='month' || title=='final_month')? 'Mes' : '' || (title=='year'|| title=='final_year')? 'Año' : '' || (title=='hour'|| title=='final_hour')? 'Hora' : '' || (title=='minute'||title=='final_minute')? 'Minutos' : ''}</span>
            {/* <NumericInput className={"numberInput"} min={title == 'day' ? 1:0 || title == 'month' ? 1:0 || title == 'year' ? 2020:0 || title == 'hour' ? 0:0 || title == 'minute' ? 0:0}  max={title == 'day' ? 31:0 || title == 'month' ? 12:0 || title == 'year' ? 2100:0 || title == 'hour' ? 23:0 || title == 'minute' ? 59:0} value={0} 
            onChange={(e) => setValueItem(
                title == 'day' && 
                {
                    ...valueItem,
                    day: {
                        value: e,
                    },  
                }
                || title == 'month' &&
                {
                    ...valueItem,
                    month: {
                        value:e,
                    },  
                }
                || title == 'year' && 
                {
                    ...valueItem,
                    year: {
                        value:e,
                    },  
                } 
                || title == 'hour' && 
                {
                    ...valueItem,
                    hour: {
                        value:e,
                    },  
                } 
                || title == 'minute' && 
                {
                    ...valueItem,
                    minute: {
                        value:e,
                    },  
                }
                )}
            style={{
                wrap: {
                    background: '#777777',
                    fontSize: 16,
                    top: 0
                },
                input: {
                    borderRadius: '0',
                    color: '#777777',
                    border: '2px solid #707070'
                },
                'input:focus' : {
                    borderColor: '1px solid #707070',
                    outline: 'none'
                },
                arrowUp: {
                    borderBottomColor: '#ffffff',
                    boxShadow: 'none',
                    left:'30%',
                    borderWidth: '0px 7px 7px'
                    
                },
                arrowDown: {
                    borderTopColor: '#ffffff',
                    boxShadow: 'none',
                    left:'30%',
                    borderWidth: '7px 7px 0'
                }
            }}/> */}
        
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
                    <ArrowDropUpIcon className='icon-arrow' onClick={()=> changeCont("+")}/>
                </div>
                <div className='arrowDown'>
                    <ArrowDropDownIcon className='icon-arrow' onClick={()=>changeCont("-")}/>
                </div>
            </div>
        </div>
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(NumberInput));