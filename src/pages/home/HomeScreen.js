import React, { useEffect } from 'react';
import icoProgramar from '../../assets/img/512PX/Icono_ProgramaCX_512px.png';
import icoFacturas from '../../assets/img/512PX/Icono_Facturas_512px.png';
import icoHistorial from '../../assets/img/512PX/Icono_HistorialCotizaciones_512px.png';
import icoCotizar from '../../assets/img/512PX/Icono_CotizarProducto_512px.png';
import icoPedidos from '../../assets/img/512PX/Icono_Pedidos_512px.png';
import icoEncuestas from '../../assets/img/512PX/Icono_Encuestas_512px.png';
import icoInformacion from '../../assets/img/512PX/Icono_InfoPProductoTSI_512px.png';
import icoEstatus from '../../assets/img/512PX/Icono_Status_512px.png';
import './sass/styles.sass';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDriveAccess, resetToInitialState } from '../../actions/systemsAction';
import { resetToInitialStateQuote, updateNewQuote } from '../../actions/newQuoteAction';
import { resetToInitialStateSchedule } from '../../actions/scheduleSurgeryAction';


export const HomeScreen = () => {

    const permissionsState = useSelector(state => state.user.user.identity.permissions);
    const user = useSelector(state => state.user.user.identity);
    const permissions = permissionsState.map(permission => permission.permissionTypeDescription);
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
                    {
                        (permissions && permissions.includes('MakeAppointment')) || (user.roleID === 1 || user.roleID === 6) 

                            ? (<NavLink className='c-home-item-simpleform c-home-item c-home-c-programar'
                                to={'/ProgramarCX'}
                            >
                                <img src={icoProgramar} alt="" className='c-home-c-programar-img' />
                                <h3 className='home-item-title'> Programar CX </h3>
                            </NavLink>)

                            : <button className={'c-home-item-simpleform c-home-item c-home-c-programar c-home-item-simpleform-disabled '}
                                to={'/ProgramarCX'} disabled>
                                <img src={icoProgramar} alt="" className='c-home-c-programar-img' />
                                <h3 className='home-item-title'> Programar CX </h3>
                            </button>

                    }

                    {

                        permissions && permissions.includes('All Quotations')

                            ? (<NavLink className='c-home-item-horizontalform c-home-item c-home-c-facturas'
                                to={`/facturacion`}
                            >
                                <img src={icoFacturas} alt="" className='c-home-c-facturas-img' />
                                <h3 className='home-item-title'> Cotizaciones </h3>
                            </NavLink>)

                            : (<button className='c-home-item-horizontalform c-home-item c-home-c-facturas c-home-item-simpleform-disabled' disabled>
                                <img src={icoFacturas} alt="" className='c-home-c-facturas-img' />
                                <h3 className='home-item-title'> Cotizaciones </h3>
                            </button>
                            )

                    }
                    {

                        permissions && permissions.includes('Quotations History')

                            ? (<NavLink className='c-home-item-horizontalform c-home-item c-home-c-historial'
                                to={`/cotizaciones_finalizadas`}
                            >
                                <img src={icoHistorial} alt="" className='c-home-c-historial-img' />
                                <h3 className='home-item-title'> Mis cotizaciones </h3>
                            </NavLink>)

                            : (<button className='c-home-item-horizontalform c-home-item c-home-c-historial c-home-item-simpleform-disabled'
                                disabled
                            >
                                <img src={icoHistorial} alt="" className='c-home-c-historial-img' />
                                <h3 className='home-item-title'> Mis cotizaciones </h3>
                            </button>)

                    }

                    {
                        permissions && permissions.includes('MakeQuotation')

                            ? (<NavLink to={'/cotizaciones'}
                                className='c-home-item-simpleform c-home-item c-home-c-cotizar'
                            >
                                <img src={icoCotizar} alt="" className='c-home-c-cotizar-img' />
                                <h3 className='home-item-title'> Cotizar Productos </h3>
                            </NavLink>)

                            : (<button className='c-home-item-simpleform c-home-item c-home-c-cotizar c-home-item-simpleform-disabled'
                                disabled
                            >
                                <img src={icoCotizar} alt="" className='c-home-c-cotizar-img' />
                                <h3 className='home-item-title'> Cotizar Productos </h3>
                            </button>)


                    }


                </div>


                <div className='c-home-sec c-home-sec2' >

                    <button className='c-home-item-simpleform c-home-item c-home-c-pedidos c-home-item-simpleform-disabled' disabled>
                        <img src={icoPedidos} alt="" className='c-home-c-pedidos-img' />
                        <h3 className='home-item-title'> Pedidos </h3>
                    </button>

                     {/* <NavLink to={'/Encuestas_Page_Ventas'}
                        className='c-home-item-horizontalform c-home-item c-home-c-encuestas c-home-item-simpleform-disabled' >
                        <img src={icoEncuestas} alt="" className='c-home-c-encuestas-img' />
                        <h3 className='home-item-title'> Encuestas </h3>
                    </NavLink>  */}


                     <button 
                        className='c-home-item-horizontalform c-home-item c-home-c-encuestas c-home-item-simpleform-disabled'
                        disabled >
                        <img src={icoEncuestas} alt="" className='c-home-c-encuestas-img' />
                        <h3 className='home-item-title'> Encuestas </h3>
                    </button> 


                    {
                        permissions && permissions.includes('Login')

                            ? (

                                <button className='c-home-item-horizontalform c-home-item c-home-c-informacion' onClick={() => dispatch(getDriveAccess())} >
                                    <img src={icoInformacion} alt="" className='c-home-c-cotizar-img' />
                                    <h3 className='home-item-title'> Información Productos TSI  </h3>
                                </button>
                            )

                            : (
                                <button className='c-home-item-horizontalform c-home-item c-home-c-informacion c-home-item-simpleform-disabled' disabled>
                                    <img src={icoInformacion} alt="" className='c-home-c-informacion-img' />
                                    <h3 className='home-item-title c-home-c-informacion-title'> Información Productos TSI </h3>
                                </button>
                            )


                    }

                    {
                        permissions && permissions.includes('Login')

                            ? (

                                <button className='c-home-item-horizontalform c-home-item c-home-c-informacion' onClick={() => dispatch(getDriveAccess())} >
                                    <img src={icoInformacion} alt="" className='c-home-c-cotizar-img' />
                                    <h3 className='home-item-title'> Información Productos TSI  </h3>
                                </button>
                            )

                            : (
                                <button className='c-home-item-horizontalform c-home-item c-home-c-informacion c-home-item-simpleform-disabled' disabled>
                                    <img src={icoInformacion} alt="" className='c-home-c-informacion-img' />
                                    <h3 className='home-item-title c-home-c-informacion-title'> Información Productos TSI </h3>
                                </button>
                            )


                    }
                    
                    <NavLink to={'/ATQAdmin_EstatusCX'}
                                 className='c-home-item-simpleform c-home-item c-home-c-estatus '>
                                    <img src={icoEstatus} alt="" className='c-home-c-estatus-img' />
                                    <h3 className='home-item-title'> Estatus </h3>
                                </NavLink>
                </div>

            </div>
        </div>
    )
}
