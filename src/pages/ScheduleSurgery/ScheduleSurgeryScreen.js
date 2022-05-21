import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';

import { ATQModal } from './ScheduleModals/ATQModal/ATQModal';
import { ClientModal } from './ScheduleModals/ClientModal/ClientModal';
import { ListPricesModal } from './ScheduleModals/ListPricesModal/ListPricesModal';
import { MedicModal } from './ScheduleModals/MedicsModal/MedicModal';
import { CgOpenCollective } from "react-icons/cg";
import './sass/styles.sass';
import { getClientsSuccess, getClientsToSchedule, getInstitutionsSucess, getInstitutionsToSchedule, getMedicsSucess, getMedicsToSchedule, getPatientsSuccess, getPatientsToSchedule, getPriceListSuccess, getPriceListToSchedule, setQuoteToSchedule } from '../../actions/scheduleSurgeryAction';
import { InstitutionModal } from './ScheduleModals/InstitutionModal/InstitutionModal';
import { PatientModal } from './ScheduleModals/PatientModal/PatientModa';
import { DateModal } from './ScheduleModals/DateModal/DateModal';
import Swal from 'sweetalert2';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { handleGetTypeSurgery } from '../../hooks/useGetTypesSurgery';

import imgCotizacion from '../../assets/img/512PX/Icono_Cotizacion-Bco_512px.png';
import imgTipoCX from '../../assets/img/512PX/Icono_TipoCX-Bco_512px.png';
import imgMedico from '../../assets/img/512PX/Icono_Medico-Bco_512px.png';
import imgInstituciones from '../../assets/img/512PX/Icono_Instituciones-Bco_512px.png';
import imgPaciente from '../../assets/img/512PX/Icono_Paciente-Bco_512px.png';
import imgFechaHora from '../../assets/img/512PX/Icono_FechaHora-Bco_512px.png';
import imgCliente from '../../assets/img/512PX/Icono_Cliente-Bco_512px.png';
import imgListaPrecio from '../../assets/img/512PX/Icono_ListaPrecio-Bco_512px.png';
import imgATQ from '../../assets/img/512PX/Icono_ATQ-Bco_512px.png';
import { ErrorModal } from './ScheduleModals/ErrorModal/ErrorModal';
import { DateFormat } from '../../components/shared/DateFormat';

import shortid from 'shortid';


export const ScheduleSurgeryScreen = () => {
    const dispatch          = useDispatch();
    const history           = useHistory();
    const {RestElements}    = useParams();

    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementRequireMaterialSucces = useSelector(state => state.scheduleSurgery.listElementRequireMaterialSucces);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);

    useEffect(() => {
        dispatch(getPriceListToSchedule());
        return () => {
            dispatch(getPriceListSuccess([]));
        }
    }, []);


    const scheduleSurgery = useSelector(state => state.scheduleSurgery);
    const [openModal, setOpenModal] = useState(null);
    const [messageModal, setMessageModal] = useState(null);
    const [lastOpenModal, setLastOpenModal] = useState(null);
    const [sendForm, setSendForm] = useState(null);
    const [typeSurgeryList, setTypeSurgeryList] = useState(null);
    const [firstRender, setFirstRender] = useState(false);
    const [formValid, setFormValid] = useState(
        {
            TipoCirugia: null ,
            medics: null ,
            Institucion: null ,
            Fecha: null ,
            Cliente: null ,
            PriceList: null ,
        });



    const toggleModal = () => {
        setOpenModal(null);
        handleValidForm();
    };

    const updateMainObject = () => {};

    const handleDeleteQuoteSelected = () => {
        dispatch( setQuoteToSchedule(null) );
    }

    useEffect(() => {
        if(scheduleSurgery.listElementTypeSurgeryCompleted && scheduleSurgery.listElementTypeSurgeryCompleted.length > 0){
            handleGetTypeSurgery(scheduleSurgery.listElementTypeSurgeryCompleted).then( setTypeSurgeryList )
            // .catch( console.warn );
        }
    }, [scheduleSurgery.listElementTypeSurgeryCompleted])

   /*  useEffect(() => {
        if(sendForm ){
            handleValidForm();
            if( firstRender === false ){
                setFirstRender( true )
            }else if( firstRender === true ){
                handleNavigate();
            }
        }
    }, [scheduleSurgery, firstRender, sendForm]); */

    const handleValidForm = () => {
        let formValidCopy = {...formValid};
        formValidCopy['TipoCirugia'] = !scheduleSurgery.MedicToSchedule
        formValidCopy['medics']  = !scheduleSurgery.MedicToSchedule
        formValidCopy['Institucion'] = !scheduleSurgery.InstitutionToSchedule
        formValidCopy['Fecha'] = !scheduleSurgery.HourToSchedule
        formValidCopy['Cliente'] = !scheduleSurgery.ClientToSchedule
        formValidCopy['PriceList'] = !scheduleSurgery.PriceListToSchedule
        setFormValid(formValidCopy);
    }

    const handleNavigate = () => {
        setSendForm( true );
        /* if( firstRender ){
            console.warn('por primera vez hace esto');
            setFirstRender( `complete` );
            if( Object.values(formValid).every(item => item === false ) ){
                history.replace('/ProgramarCX/ScheduleSurgeryPreOrderView')
            }else{
                handleValidForm();
                history.replace('/ProgramarCX/ScheduleSurgeryPreOrderView')

            }
        }else if(firstRender === `complete`){
            if( Object.values(formValid).every(item => item === false ) ){
                history.replace('/ProgramarCX/ScheduleSurgeryPreOrderView')
            }else{
                handleValidForm();
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: '¡No se han llenado los campos obligatorios!',
                  })
            }
        } */

        handleValidForm();
        if( listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length === 0 && 
            listElementRequireMaterialSucces && listElementRequireMaterialSucces.every(el => el.MandatoryProductDeleted) && 
            listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length === 0 
            || 
            !listElementTypeSurgeryCompleted&&
            !listElementRequireMaterialSucces&&
            !listElementOptionalMaterialSucces){
                history.replace('/ProgramarCX/TipoCirugia');
            }else{
        Object.values(formValid).map( (item) => {
            

            if(item !== null){
                if(item === true ){
                    /* console.warn('encontro un formulario faltante') */
                        Swal.fire({
                        icon: 'error',
                        title: '',
                        text: '¡No se han completado algunos campos obligatorios!',
                    })
                    history.replace(`/ProgramarCX/CompletarCampos/${shortid.generate()}`)
                }else{
                    history.replace('/ProgramarCX/ScheduleSurgeryPreOrderView')
                }
            }else{
                /* console.warn('encontro un formulario nulo') */
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: '¡No se han completado algunos campos obligatorios!',
                })
                history.replace(`/ProgramarCX/CompletarCampos/${shortid.generate()}`)
            }
            });
        }
        /*else{
            console.warn('entro aca',formValid['TipoCirugia'])

            history.replace('/ProgramarCX/TipoCirugia');
        } */
        /*  if( Object.values(formValid).some( item => !item ) ){
            Swal.fire({
            icon: 'error',
            title: '',
            text: '¡No se han completado algunos campos obligatorios!',
          })
          history.replace(`/ProgramarCX/CompletarCampos/${shortid.generate()}`)

        }else if( Object.values(formValid).every( item =>  item === false ) ){
            history.replace('/ProgramarCX/ScheduleSurgeryPreOrderView')
        }  */
    }

    useEffect(() => {
        if(RestElements){
            handleValidForm();
        }
    }, [])

    const handleNavigatePage = () => {
        !scheduleSurgery.QuoteToSchedule &&
        history.replace('/CotizacionesFinalizadas');
    }
    return (
        <>
           <SubNavBarComponent title={"Programar CX"} />
           <div className={'container-scheduleSurgery'}>
            <button className={'container-scheduleSurgery-button container-scheduleSurgery-button-DateModal'}
                    onClick={handleNavigatePage} >
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgCotizacion} alt="" className="container-scheduleSurgery-button-img" /> Cotización</span>
                {
                    scheduleSurgery.QuoteToSchedule ?
                    (<><span className='extra-button-information' onChange={handleValidForm} > # {scheduleSurgery.QuoteToSchedule.id}</span> <button className='btn-eliminar' onClick={handleDeleteQuoteSelected}>Eliminar</button> </>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }    
            </button>


            <NavLink className='container-scheduleSurgery-button container-scheduleSurgery-button-AtqModal' to={`/ProgramarCX/TipoCirugia`} >
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgTipoCX} alt="" className="container-scheduleSurgery-button-img" /> Tipo de Cirugía*</span>
                {
                    !typeSurgeryList&&
                        (<CgOpenCollective className="extra-button-icons"/>) 
                }
                {
                    typeSurgeryList&&
                        (
                            Object.keys(typeSurgeryList).map( itemSurgeryType => (
                                <>
                                    <div className='extra-button-information'> 
                                        {/* <span className='extra-button-information'> {itemSurgeryType} - </span> */}
                                        {
                                            typeSurgeryList[itemSurgeryType].map( (itemSurgerySystem, index) => (
                                                <span className='extra-button-information-span' key={itemSurgerySystem.id}> 
                                                    {itemSurgerySystem}{typeSurgeryList[itemSurgeryType].length > 1 && ', ' } 
                                                </span>
                                            ))
                                        }
                                    </div>
                                </>

                            ))
                            
                        )
                }
            </NavLink>
            <button className={!formValid['medics']? 'container-scheduleSurgery-button container-scheduleSurgery-button-PatientModal' 
                                :'container-scheduleSurgery-button container-scheduleSurgery-button-PatientModal error'}  onClick={ () => setOpenModal("MEDICS-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgMedico} alt="" className="container-scheduleSurgery-button-img" /> Médico*</span>
                {
                    scheduleSurgery.MedicToSchedule ?
                    (<span className='extra-button-information'>{scheduleSurgery.MedicToSchedule.name} {scheduleSurgery.MedicToSchedule.secondName} {scheduleSurgery.MedicToSchedule.firstLastname} {scheduleSurgery.MedicToSchedule.secondLastname}</span>):
                    (<CgOpenCollective className="extra-button-icons"/>) 
                }
                
            </button>
            <button className={!formValid['Institucion']? 'container-scheduleSurgery-button container-scheduleSurgery-button-InstitutionModal' 
                               :'container-scheduleSurgery-button container-scheduleSurgery-button-InstitutionModal error'}  onClick={ () => setOpenModal("INSTITUTION-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgInstituciones} alt="" className="container-scheduleSurgery-button-img" /> Instituciones*</span>
                {
                    !scheduleSurgery.InstitutionToSchedule &&
                        (<CgOpenCollective className="extra-button-icons"/>) 
                }
                {
                    scheduleSurgery.InstitutionToSchedule &&
                        (<span className='extra-button-information'>{scheduleSurgery.InstitutionToSchedule.name}</span>)
                }
                
            </button>
            <button className='container-scheduleSurgery-button container-scheduleSurgery-button-CityModal'  onClick={ () => setOpenModal("PATIENT-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgPaciente} alt="" className="container-scheduleSurgery-button-img" /> Paciente</span>
                {
                    scheduleSurgery.PatientToSchedule ? 
                    (<span className='extra-button-information'>
                         {scheduleSurgery.PatientToSchedule.firstName} {scheduleSurgery.PatientToSchedule.firstLastName} {scheduleSurgery.PatientToSchedule.secondLastName}
                    </span>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }
                
            </button>
            <button className={!formValid['Fecha']? 'container-scheduleSurgery-button container-scheduleSurgery-button-WayToPayModal' 
                               :'container-scheduleSurgery-button container-scheduleSurgery-button-WayToPayModal error'}  onClick={ () => setOpenModal("FECHA-&-HR") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgFechaHora} alt="" className="container-scheduleSurgery-button-img" /> Fecha y hora de CX*</span>
                {
                    scheduleSurgery.HourToSchedule ? 
                    (<span className='extra-button-information'>{`${DateFormat(scheduleSurgery.HourToSchedule.completeDate)} / ${scheduleSurgery.HourToSchedule.hourDate}`}</span>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }
                
            </button>
            <button className={!formValid['Cliente']? 'container-scheduleSurgery-button container-scheduleSurgery-button-PaymentConditionsModal' 
                               :'container-scheduleSurgery-button container-scheduleSurgery-button-PaymentConditionsModal error'}  onClick={ () => setOpenModal("CLIENT-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgCliente} alt="" className="container-scheduleSurgery-button-img" /> Cliente*</span>
                {
                    scheduleSurgery.ClientToSchedule ? 
                    (<span className='extra-button-information'>{scheduleSurgery.ClientToSchedule.clientName}</span>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }
                
            </button>
            <button className={!formValid['PriceList']? 'container-scheduleSurgery-button container-scheduleSurgery-button-PaymentConditionsModal' 
                               :'container-scheduleSurgery-button container-scheduleSurgery-button-PaymentConditionsModal error'}  onClick={ () => setOpenModal("LIST-PRICES-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgListaPrecio} alt="" className="container-scheduleSurgery-button-img" /> Lista de precio*</span>
                {
                    (scheduleSurgery.PriceListToSchedule  && scheduleSurgery.withPricesList )? 
                    (<span className='extra-button-information'>{scheduleSurgery.PriceListToSchedule.description} / {scheduleSurgery.withPricesList.msg}</span>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }
                
            </button>
            <button className='container-scheduleSurgery-button container-scheduleSurgery-button-PaymentConditionsModal'  onClick={ () => setOpenModal("ATQ-MODAL") }>
                <span className={'container-scheduleSurgery-button-container'}> <img src={imgATQ} alt="" className="container-scheduleSurgery-button-img" /> ATQ</span>
                {
                    scheduleSurgery.ATQToSchedule ? 
                    (<span className='extra-button-information'>{scheduleSurgery.ATQToSchedule}</span>):
                    (<CgOpenCollective className="extra-button-icons"/>)
                }
                
            </button>

            {
                openModal === "MEDICS-MODAL" &&
                <MedicModal
                    isOpen
                    toggle={toggleModal}
                    setLastOpenModal={setLastOpenModal}
                    setMessageModal={setMessageModal}
                    setOpenModal={setOpenModal}
                    updateMainObject={updateMainObject}
                />
            }
                        {
                openModal === "INSTITUTION-MODAL" &&
                <InstitutionModal
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                    setOpenModal={setOpenModal}
                    setLastOpenModal={setLastOpenModal} 
                    setMessageModal={setMessageModal}
                />
            }
            {
                openModal === "PATIENT-MODAL" &&
                <PatientModal 
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                />
            }

            {
                openModal === "FECHA-&-HR" &&
                <DateModal
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                />
            }


            {
                openModal === "CLIENT-MODAL" &&
                <ClientModal
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                    setOpenModal={setOpenModal}
                    setLastOpenModal={setLastOpenModal} 
                    setMessageModal={setMessageModal}
                />
            }
            {
                openModal === "LIST-PRICES-MODAL" &&
                <ListPricesModal
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                    setOpenModal={setOpenModal}
                    setLastOpenModal={setLastOpenModal} 
                    setMessageModal={setMessageModal}
                />
            }
            {
                openModal === "ATQ-MODAL" &&
                <ATQModal
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                />
            }

            {
                openModal === "errorModal" &&
                <ErrorModal
                    isOpen
                    toggle={toggleModal}
                    lastOpenModal={lastOpenModal}
                    setOpenModal={setOpenModal}
                    setMessageModal={setMessageModal}
                    messageModal={messageModal}
                    updateMainObject={updateMainObject}
                />
            }


            <div
                className="detalleproducto-btn-c-scheduleSurgery"
                style={{position: 'initial'}}
            >
                <button className="detalleproducto-btn-scheduleSurgery" onClick={() => handleNavigate() } >CONTINUAR</button>
            </div>

        </div>
        </>
    );
}




