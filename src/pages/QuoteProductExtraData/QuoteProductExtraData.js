import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import {useHistory } from 'react-router-dom';
import {DateCalendarModal} from './Modals/DateCalendarModal/DateCalendarModal';
import {AtnModal} from './Modals/AtnModal/AtnModal';
import {PatientModal} from './Modals/PatientModal/PatientModa';
import {InstitutionModal} from './Modals/InstitutionModal/InstitutionModal';
import {CityModal} from './Modals/CityModal/CityModal';
import {WayToPayModal} from './Modals/WayToPayModal/WayToPayModal';
import {PaymentConditionsModal} from './Modals/PaymentConditionsModal/PaymentConditionsModal';
import {DeliveryTimeModal} from './Modals/DeliveryTimeModal/DeliveryTimeModal';
import {OfferValidityModal} from './Modals/OfferValidityModal/OfferValidityModal';
import {EmailModal} from './Modals/EmailModal/EmailModal';
import {PhoneNumberModal} from './Modals/PhoneNumberModal/PhoneNumberModal';
import  './sass/styles.sass';
import { getStates } from '../../actions/systemsAction';
import { CgOpenCollective } from "react-icons/cg";
import Swal from 'sweetalert2';

import atnImg from '../../assets/img/126PX/Icono_Perfil-Bco_126px.png';
import { imgDateModal, imgOfferModal } from '../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
import imgPatient from '../../assets/img/126PX/Icono_Paciente-Bco_126px.png';
import imgInstitution from '../../assets/img/126PX/Icono_Institucion_126px.png';
import imgCity from '../../assets/img/126PX/Icono_CdEstado-Bco_126px.png';
import imgWayToPay from '../../assets/img/126PX/Icono_Pago-Bco_126px.png';
import imgTimeDelivery from '../../assets/img/126PX/Icono_Tiempo-Bco_126px.png';
import imgCorreoModal from '../../assets/img/126PX/Icono_Correo_126px.png';
import imgPhoneModal from '../../assets/img/126PX/Icono_Telefono_126px.png';
import { DateFormat } from '../../components/shared/DateFormat';
import { setStates } from '../../actions/JSON/cities_state_JSON';


export const QuoteProductExtraData = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(setStates());
    }, [])

    const newQuote = useSelector(state => state.newQuote);
    const [openModal, setOpenModal] = useState(null);
    const [sendForm, setSendForm] = useState(null);
    const [firstRender, setFirstRender] = useState(false);
    const [formValid, setFormValid] = useState(
        {
            Fecha: null ,
            Atn: null ,
            Ciudad: null ,
            pago: null ,
            Condiciones: null ,
            entrega: null ,
            Validez: null ,
        });

    const [dateToQuote, setDateToQuote] = useState('');
    const [dateToQuoteOfer, setDateToQuoteOfer] = useState('');
    const [phoneNumberFormatted, setPhoneNumberFormatted] = useState('')

    useEffect(() => {
        newQuote.data.date && 
            setDateToQuote(DateFormat(newQuote.data.date))
        newQuote.data.offerValidity && 
            setDateToQuoteOfer(DateFormat(newQuote.data.offerValidity))
    }, [newQuote.data.date, newQuote.data.offerValidity])

    const toggleModal = () => {
        setOpenModal(null);
    };

    const updateMainObject = () => {};

    useEffect(() => {
        if(sendForm ){
            handleValidForm();
            if( firstRender === false ){
                setFirstRender( true )
            }else if( firstRender === true ){
                handleNavigate();
            }
        }
    }, [newQuote, firstRender, sendForm]);

    const handleValidForm = () => {
        let formValidCopy = {...formValid};
        formValidCopy['Fecha']  = !newQuote.data.date
        formValidCopy['Atn'] = !newQuote.data.client && !newQuote.data.medic && !newQuote.data.atn
        formValidCopy['Ciudad'] = !newQuote.data.cityAndState
        formValidCopy['pago'] = !newQuote.data.wayToPay
        formValidCopy['Condiciones'] = !newQuote.data.paymentCondition
        formValidCopy['entrega'] = !newQuote.data.deliveryTime
        formValidCopy['Validez'] = !newQuote.data.offerValidity
        setFormValid(formValidCopy);
    }

    const handleNavigate = () => {
        setSendForm( true );
        if( firstRender ){
            setFirstRender( `complete` );
            if( Object.values(formValid).filter(item => item !== false ).length === 0 ){
                history.push( `/cotizacion_finalizacion/${'orden_solicitada_1'}`);
            }else{
                handleValidForm();
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    className:'sweetalert-ProductExtraData',
                    text: 'Faltan campos por completar',
                })
            }
        }else if(firstRender === `complete`){
            if( Object.values(formValid).filter(item => item !== false ).length === 0 ){
                history.push( `/orden_solicitada_1`);
            }else{
                handleValidForm();
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Faltan campos por completar',
                })
            }
        }
    }

    useEffect(() => {
        if(newQuote.data.phoneNumber){
            let searchRedex = /(\d{2,2})(\d{2,2})(\d{2,2})(\d{2,2})(\d{2,2})/g;
            let newPhone = newQuote.data.phoneNumber.replace(searchRedex, '($1) $2-$3-$4-$5');
            setPhoneNumberFormatted(newPhone);
        }
    }, [newQuote.data.phoneNumber])

    

    return (
        <>
        <SubNavBarComponent title={"Datos de cotización"} saveQuote={'SAVEQUOTE'} historyPage={`/cotizaciones/ordenes`} searchActive={true} />
        <div className={'c-extra-data-container'}>
            <div className={'c-extra-data'}>
                <button className={!formValid['Fecha']? 'c-extra-button c-extra-button-DateModal' 
                                    :'c-extra-button c-extra-button-DateModal error'} 
                        onClick={ () => { setOpenModal("DateModal")}}>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgDateModal} alt=""/>*Fecha</span>
                    {
                        newQuote.data.date ?
                        (<span className='extra-button-information' onChange={handleValidForm} >{newQuote && newQuote.data && dateToQuote}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }    
                </button>
                <button className={!formValid['Atn']? 'c-extra-button c-extra-button-AtnModal' 
                                    :'c-extra-button c-extra-button-AtnModal error'}  onClick={ () => setOpenModal("AtnModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={atnImg} alt=""/>*Atn</span>
                    {
                        !newQuote.data.client && !newQuote.data.medic && !newQuote.data.atn &&
                            (<CgOpenCollective className="extra-button-icons"/>) 
                    }
                    {
                        newQuote.data.client &&
                            (<span className='extra-button-information'>{newQuote.data.client.clientName}</span>)
                    }
                    {
                        newQuote.data.medic &&
                            (<span className='extra-button-information'>{newQuote.data.medic.name} {newQuote.data.medic.firstLastname} {newQuote.data.medic.secondLastname}</span>)
                    }
                    {
                        newQuote.data.atn &&
                            (<span className='extra-button-information'>{newQuote.data.atn.firstName} {newQuote.data.atn.firstLastname} {newQuote.data.atn.secondLastname}</span>)
                    }
                </button>
                <button className={'c-extra-button c-extra-button-PatientModal'} onClick={ () => setOpenModal("PatientModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgPatient} alt=""/>Paciente</span>
                    {
                        newQuote.data.patient ? 
                        (<span className='extra-button-information'>{newQuote.data.patient.firstName} {newQuote.data.patient.firstLastName} {newQuote.data.patient.secondLastName}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>) 
                    }
                    
                </button>
                <button className={'c-extra-button c-extra-button-InstitutionModal'} onClick={ () => setOpenModal("InstitutionModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgInstitution} alt=""/>Institución</span>
                    {
                        !newQuote.data.hospital && !newQuote.data.institutionName &&
                            (<CgOpenCollective className="extra-button-icons"/>) 
                    }
                    {
                        newQuote.data.hospital &&
                            (<span className='extra-button-information'>{newQuote.data.hospital.name}</span>)
                    }
                    {
                        newQuote.data.institutionName &&
                            (<span className='extra-button-information'>{newQuote.data.institutionName}</span>)
                    }
                    
                </button>
                <button className={!formValid['Ciudad']? 'c-extra-button c-extra-button-CityModal' 
                                :'c-extra-button c-extra-button-CityModal error'}  onClick={ () => setOpenModal("CityModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgCity} alt=""/>*Ciudad y estado</span>
                    {
                        newQuote.data.cityAndState ? 
                        (<span className='extra-button-information'>{newQuote.data.cityAndState.state} {newQuote.data.cityAndState.city}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
                <button className={!formValid['pago']? 'c-extra-button c-extra-button-WayToPayModal' 
                                :'c-extra-button c-extra-button-WayToPayModal error'}  onClick={ () => setOpenModal("WayToPayModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgWayToPay} alt=""/>*Forma de pago</span>
                    {
                        newQuote.data.wayToPay ? 
                        (<span className='extra-button-information'>{newQuote.data.wayToPay}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
                <button className={!formValid['Condiciones']? 'c-extra-button c-extra-button-PaymentConditionsModal' 
                                :'c-extra-button c-extra-button-PaymentConditionsModal error'}  onClick={ () => setOpenModal("PaymentConditionsModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgWayToPay} alt=""/>*Condiciones de pago</span>
                    {
                        newQuote.data.paymentCondition ? 
                        (<span className='extra-button-information'>{newQuote.data.paymentCondition}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
                <button className={!formValid['entrega']? 'c-extra-button c-extra-button-DeliveryTimeModal' 
                                :'c-extra-button c-extra-button-DeliveryTimeModal error'}  onClick={ () => setOpenModal("DeliveryTimeModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgTimeDelivery} alt=""/>*Tiempo de entrega</span>
                    {
                        newQuote.data.deliveryTime ? 
                        (<span className='extra-button-information'>{newQuote.data.deliveryTime}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
                <button className={!formValid['Validez']? 'c-extra-button c-extra-button-OfferValidityModal' 
                                :'c-extra-button c-extra-button-OfferValidityModal error'}  onClick={ () => setOpenModal("OfferValidityModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgOfferModal} alt=""/>*Validez de la oferta</span>
                    {
                        newQuote.data.offerValidity ? 
                        (<span className='extra-button-information'>{dateToQuoteOfer}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }

                </button>
                <button className={'c-extra-button c-extra-button-EmailModal' }  onClick={ () => setOpenModal("EmailModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgCorreoModal} alt=""/>Correo electronico</span>
                    {
                        newQuote.data.email ? 
                        (<span className='extra-button-information'>{newQuote.data.email}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
                <button className={'c-extra-button c-extra-button-PhoneNumberModal' }  onClick={ () => setOpenModal("PhoneNumberModal") }>
                    <span className='extra-button-info-left'><img className='extra-button-icons-left' src={imgPhoneModal} alt=""/>Número telefónico</span>
                    {
                        newQuote.data.phoneNumber ? 
                        (<span className='extra-button-information'>{phoneNumberFormatted}</span>):
                        (<CgOpenCollective className="extra-button-icons"/>)
                    }
                    
                </button>
        
                {
                    openModal === "DateModal" &&
                    <DateCalendarModal 
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "AtnModal" &&
                    <AtnModal 
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "PatientModal" &&
                    <PatientModal 
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "InstitutionModal" &&
                    <InstitutionModal 
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "CityModal" &&
                    <CityModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "WayToPayModal" &&
                    <WayToPayModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "PaymentConditionsModal" &&
                    <PaymentConditionsModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "DeliveryTimeModal" &&
                    <DeliveryTimeModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "OfferValidityModal" &&
                    <OfferValidityModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "EmailModal" &&
                    <EmailModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }
                {
                    openModal === "PhoneNumberModal" &&
                    <PhoneNumberModal
                        isOpen
                        toggle={toggleModal}
                        updateMainObject={updateMainObject}
                    />
                }

                <div
                    className="detalleproducto-btn-c"
                    style={{position: 'initial'}}
                >
                    <button className="detalleproducto-btn" onClick={() => (handleNavigate()) } >CONTINUAR</button>
                </div>
            </div>
        </div>
        </>
    );
}
