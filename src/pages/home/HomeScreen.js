import React, { useEffect } from 'react';
import icoProgramar from '../../assets/img/512PX/Icono_ProgramaCX_512px.png';
import icoHistorial from '../../assets/img/512PX/Icono_Facturas_512px.png';
import icoCotizar from '../../assets/img/svg/quotations.svg';
import icoFacturas from '../../assets/img/svg/myQuotes.svg';

import './sass/styles.sass';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetToInitialState } from '../../actions/systemsAction';
import { resetToInitialStateQuote } from '../../actions/newQuoteAction';
import { resetToInitialStateSchedule } from '../../actions/scheduleSurgeryAction';


export const HomeScreen = () => {
    const newQuote = useSelector(state => state.newQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetToInitialStateSchedule());
        if (newQuote && newQuote.systems) {
            dispatch(resetToInitialState());
            dispatch(resetToInitialStateQuote());
        }
    }, [])

    return (
        <div className='c-home-principal'>
            <div className='c-home animate__animated animate__fadeIn'>

                <div className='c-home-sec c-home-sec1' >
                    <NavLink className='c-home-item-horizontalform c-home-item c-home-c-programar'
                        to={'/ProgramarCX'}
                    >
                        <img src={icoProgramar} alt="" className='c-home-c-programar-img' />
                        <h3 className='home-item-title'> Programar CX </h3>
                    </NavLink>

                    <NavLink className='c-home-item-horizontalform c-home-item c-home-c-facturas'
                        to={`/facturacion`}
                    >
                        <img src={icoFacturas} alt="" className='c-home-c-facturas-img' />
                        <h3 className='home-item-title'> Cotizaciones </h3>
                    </NavLink>

                    <NavLink className='c-home-item-horizontalform c-home-item c-home-c-historial'
                        to={`/cotizaciones_finalizadas`}
                    >
                        <img src={icoHistorial} alt="" className='c-home-c-historial-img' />
                        <h3 className='home-item-title'> Mis cotizaciones </h3>
                    </NavLink>

                    <NavLink to={'/cotizaciones'}
                        className='c-home-item-horizontalform c-home-item c-home-c-cotizar'
                    >
                        <img src={icoCotizar} alt="" className='c-home-c-cotizar-img' />
                        <h3 className='home-item-title'> Cotizar Productos </h3>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
