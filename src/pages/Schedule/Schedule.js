import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Schedule.scss';
import { useParams, withRouter } from "react-router-dom";
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import ScheduleList from './ScheduleList';
import { CalendarBase } from '../../components/shared/Atoms/CalendarBase';
import { setInitialDateAppointments, setFinalDateAppointments, getAppointmentsCalendarStoreHouse, getAppointmentsCalendarStoreHouseSuccess, getAppointmentsStoreHouse, getAppointmentsStoreHouseSuccess } from '../../actions/storeHouseAction'

import moment from 'moment';
import Search from './Search';
import { useSelector } from 'react-redux';
import { getClientsToSchedule, getInstitutionsToSchedule, getMedicsToSchedule } from '../../actions/scheduleSurgeryAction';
import { InstitutionModal } from '../QuoteProductExtraData/Modals/InstitutionModal/InstitutionModal';
import { MedicModal } from '../ScheduleSurgery/ScheduleModals/MedicsModal/MedicModal';
import { getInstitutionsSucess, getMedicsSucess } from '../../actions/systemsAction';
import { getUsersByRoleId, getUsersByRoleIdSuccess } from '../../actions/allUsersAction';
import { ATQModal } from './MODALS/ATQModal';
import { SupervisorModal } from './MODALS/SupervisorModal';
import { SellersModal } from './MODALS/SellersModal';


/* import { setUserRolSelected } from '../../../actions/allUsersAction'; */


export const Schedule = () => {



    const dispatch = useDispatch();

    const [selectedDate, selectedDateOnChange] = useState(new Date());
    const [newFinalDayMonth, setNewFinalDayMonth] = useState(null);
    const [openModal, setOpenModal] = useState(null);
    const [result, setResult] = useState(null);
    const [idCombo, setIdCombo] = useState(null)
    const userRol = useSelector(state => state.user.user);

    const { page } = useParams();

    const updateMainObject = () => { };

    const [formValid, setFormValid] = useState(
        {
            medics: null,
            Institucion: null,
        });

    const { medics } = formValid

    const toggleModal = () => {
        setOpenModal(null);
    };

    useEffect(() => {
        dispatch(getInstitutionsToSchedule());
        dispatch(getMedicsToSchedule());
        return () => {
            dispatch(getInstitutionsSucess([]));
            dispatch(getMedicsSucess([]));
            dispatch(getUsersByRoleIdSuccess(null))

        }
    }, []);





    useEffect(() => {

        if (result && idCombo) {

            dispatch(getAppointmentsStoreHouseSuccess(null));

            if (idCombo === '1' || idCombo === '4') {
                dispatch(getAppointmentsCalendarStoreHouse(
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.id));

                dispatch(getAppointmentsStoreHouse(
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.id));
            }
            else {

                dispatch(getAppointmentsCalendarStoreHouse(
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.userID));

                dispatch(getAppointmentsStoreHouse(
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                    `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.userID));
            }
        }
    }, [result])



    const handleSearch = ((idBuscar) => {

        //debugger
        if (idBuscar !== '10') {
            if (idBuscar === '1') {
                setIdCombo(idBuscar);
                setOpenModal('MEDICS-MODAL')

            }

            if (idBuscar === '4') {
                setIdCombo(idBuscar);
                setOpenModal('INSTITUTION-MODAL')

            }
            if (idBuscar === '2') {
                setIdCombo(idBuscar);
                setOpenModal('ATQ-MODAL')

            }
            /* if(idBuscar === '6'){
                setIdCombo(idBuscar);
                setOpenModal('SUPERVISOR')
            }
            if(idBuscar === '1'){
                setIdCombo(idBuscar);
                setOpenModal('VENDEDOR')
            } */
        } else if (idBuscar === '10') {
            setResult(null);
            setIdCombo(idBuscar);

            dispatch(getAppointmentsCalendarStoreHouse(
                `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`), 14);


        }

    })



    useEffect(() => {

        dispatch(setInitialDateAppointments(`${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${moment(selectedDate).format('DD')}T00:00:${('00')}`));
        dispatch(setFinalDateAppointments(`${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${moment(selectedDate).format('DD')}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`));
    }, [selectedDate]);


    useEffect(() => {
        if (newFinalDayMonth) {
            /*     console.error('busca todos',result) */
            if (!result) {
                /* console.warn('entro a la numero 1') */
                if (userRol.identity.roleID === 5 && !idCombo) {
                    /* console.warn('entro 1.1') */
                    dispatch(getAppointmentsCalendarStoreHouse(
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, 2, userRol.identity.userID));
                }
                else {
                    /* console.error('entro 1.2') */
                    dispatch(getAppointmentsCalendarStoreHouse(
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, 14));
                }
            }
            else if (idCombo && result) {
                if (idCombo === '1' || idCombo === '4') {
                    dispatch(getAppointmentsCalendarStoreHouse(
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.id));
                }
                else {
                    dispatch(getAppointmentsCalendarStoreHouse(
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${'01'}T00:00:${('00' + new Date().getUTCSeconds()).slice(-2)}`,
                        `${moment(selectedDate).format('YYYY')}-${moment(selectedDate).format('MM')}-${newFinalDayMonth}T23:59:${('00' + new Date().getUTCSeconds()).slice(-2)}`, idCombo, result.userID));
                }

            }
        }
    }, [newFinalDayMonth]);


    const changeMonth = () => {

        setNewFinalDayMonth(null);
    }

    // console.log(Holidays);
    // let hd = new Holidays('US', 'la', 'no')

    // let hd = Holidays();
    
    // console.log(hd.getCountries ( )) 


    return (
        <>
            {/* {
            llamada === 'ATQ' 
              ?  <SubNavBarComponent title={`Programar CX`} historyPage={`/StoreHouseMenu`}/>
              : <SubNavBarComponent title={`Programar CX`} />
            
        } */}
           
                <SubNavBarComponent title={`/Inicio`} />

            <div className={"schedule_content"}>
                <div className={"schedule_calendar_content"}>

                    <Search
                        handleSearch={handleSearch}
                    />
                    <CalendarBase
                        selectedDate={selectedDate}
                        selectedDateOnChange={selectedDateOnChange}
                        setNewFinalDayMonth={setNewFinalDayMonth}
                        newFinalDayMonth={newFinalDayMonth}
                        changeMonth={changeMonth}
                        page={ page === "COORDINADORATQ" ? page :'agenda'}

                    />

                    {
                        openModal === "ATQ-MODAL" &&
                        <ATQModal
                            isOpen
                            toggle={toggleModal}
                            setResult={setResult}
                        />
                    }
                    {
                        openModal === "SUPERVISOR" &&
                        <SupervisorModal
                            isOpen
                            toggle={toggleModal}
                            setResult={setResult}
                        />
                    }{
                        openModal === "VENDEDOR" &&
                        <SellersModal
                            isOpen
                            toggle={toggleModal}
                            setResult={setResult}
                        />
                    }
                    {
                        openModal === "INSTITUTION-MODAL" &&
                        <InstitutionModal
                            isOpen
                            toggle={toggleModal}
                            updateMainObject={updateMainObject}
                            type={'onlyInstitution'}
                            setResult={setResult}
                        />
                    }
                    {
                        openModal === "MEDICS-MODAL" &&
                        <MedicModal
                            isOpen
                            toggle={toggleModal}
                            setOpenModal={setOpenModal}
                            updateMainObject={updateMainObject}
                            type={'onlyMedics'}
                            setResult={setResult}
                        />
                    }
                </div>
                <div className={"schedule_list_content"}>
                    <ScheduleList
                        result={result}
                        idCombo={idCombo}
                    />
                </div>
            </div>
        </>
    )
}
