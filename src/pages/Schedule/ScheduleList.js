import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './ScheduleList.scss';
import NumberInput from '../../components/shared/Atoms/NumberInput';
import SearchInput from '../../components/shared/Atoms/SearchInput'
import { getScheduledSurgeries, getStatesInSurgery } from '../../actions/scheduleAction';

import { getAppointmentsStoreHouse, getAppointmentsStoreHouseOnlyDate } from '../../actions/storeHouseAction'

// ASSETS
import blackArrow from '../../assets/img/126PX/black_arrow.png';
import blackTopArrow from '../../assets/img/126PX/black_top_arrow.png';
import searchIcon from '../../assets/img/512PX/Icono_Buscar_blue_512px.png';

import { setInitialDateAppointments, setFinalDateAppointments } from '../../actions/storeHouseAction'
import { DateFormat } from '../../components/shared/DateFormat';


const ScheduleList = (props) => {
    const dispatch = useDispatch();
    const [ surgeries, setSurgeries ] = useState(null)
    // const [ states, setStates ] = useState(null)
    const userRol = useSelector(state => state.user.user);
    const [selectedOrderItem, setSelectedOrderItem] = useState(null);
    const [valueItem, setValueItem] = useState({
        day: {
            value: 1
        },
        month: {
            value: 1
        },
        year: {
            value: 2000
        },
        hour: {
            value: 0
        },
        minute: {
            value: 0
        },
        final_day: {
            value: 1
        },
        final_month: {
            value: 1
        },
        final_year: {
            value: 2000
        },
        final_hour: {
            value: 0
        },
        final_minute: {
            value: 0
        }
    });

    const initialDate = useSelector(state => state.storeHouse);
    const states = [
        {
            id: 1,
            name: 'Cirugía Programada'
        },
        {
            id: 2,
            name: 'Programación atendida'
        },
        {
            id: 3,
            name: 'Material listo para recogerse'
        },
        {
            id: 4,
            name: 'Material en proceso de entrega'
        },
        {
            id: 5,
            name: 'Material entregado'
        },
        {
            id: 6,
            name: 'Cirugia iniciada'
        },
        {
            id: 7,
            name: 'Cirugia finalizada'
        },
        {
            id: 8,
            name: 'Material retornado a almacén'
        },
        {
            id: 9,
            name: 'Material en proceso de revisión'
        },
        {
            id: 10,
            name: 'Cirugía facturada'
        }
    ]
    useEffect(() => {
        dispatch(getScheduledSurgeries());
        dispatch(getStatesInSurgery());
    }, [])


    
    useEffect(() => {
        
       /*  console.warn('combo',props.idCombo);
        console.warn('resultado',props.result) */

        if ( initialDate.initialDate && initialDate.finalDate && !props.result) {
           /*  console.warn('hizo el primero'); */
            
            if(userRol.identity.roleID === 5 && !props.idCombo){
               /*  console.warn('props.idCombo',props.idCombo)
                console.error('al hacer click esto se abre si eres atq') */
                dispatch(getAppointmentsStoreHouse(initialDate.initialDate ,initialDate.finalDate,2,userRol.identity.userID)); 

            }
            else{
               /*  console.error('al hacer click esto se abre si no eres atq') */
                dispatch(getAppointmentsStoreHouse(initialDate.initialDate, initialDate.finalDate,14));
            }
        }
        else if ( initialDate.initialDate && initialDate.finalDate && props.result && props.idCombo && props.idCombo !== '10'){

            if(props.idCombo === '1' || props.idCombo === '4'){
                /* console.warn('SI FUNCIONO'); */
                dispatch(getAppointmentsStoreHouse(initialDate.initialDate ,initialDate.finalDate,props.idCombo,props.result.id));
            }
            else{
                /* console.warn('ENTRO DENTRO DEL MODULO SI FUNCIONO EL SET'); */
                dispatch(getAppointmentsStoreHouse(initialDate.initialDate ,initialDate.finalDate,props.idCombo,props.result.userID));
            }
        }
    }, [initialDate.initialDate, initialDate.finalDate])



    useEffect(() => {
        if ( initialDate.appointmentsList) {props
            setSurgeries(initialDate.appointmentsList)
        }
    }, [initialDate.appointmentsList])
    /* const data = useSelector(state => state.schedule);
    useEffect(() => {
        if (data.getScheduledSurgeries) {
            setSurgeries(data.getScheduledSurgeries)
        }
        if (data.surgeryStates) {
            setStates(data.surgeryStates)
        }
    }, [data]) */
    const toggleOpenProcessItem = (item) => {
        setSelectedOrderItem(selectedOrderItem && selectedOrderItem.id == item.id ? null : item);
    };


    useEffect(() => {
        console.warn(selectedOrderItem);
    }, [selectedOrderItem])
    

    const informationTitle = {
        institution: 'Institución',
        date: 'Fecha y hora',
        description: 'Descripción',
        doctor: 'Médico',
        atq: 'ATQ',
    }

    const buildDate = () => {
        let month=valueItem.month.value, final_month=valueItem.final_month.value, day=valueItem.day.value, final_day=valueItem.final_day.value;
        let hour=valueItem.hour.value, final_hour=valueItem.final_hour.value, minutes=valueItem.minute.value, final_minutes=valueItem.final_minute.value;
        if (Number(valueItem.month.value) <10) {
            month = '0' + valueItem.month.value
        }
        if (Number(valueItem.final_month.value) <10) {
            final_month = '0' + valueItem.final_month.value
        }
        if (Number(valueItem.day.value) <10) {
            day = '0' + valueItem.day.value
        }
        if (Number(valueItem.final_day.value) <10) {
            final_day = '0' + valueItem.final_day.value
        }
        if (Number(valueItem.hour.value) <10) {
            hour = '0' + valueItem.hour.value
        }
        if (Number(valueItem.final_hour.value) <10) {
            final_hour = '0' + valueItem.final_hour.value
        }
        if (Number(valueItem.minute.value) <10) {
            minutes = '0' + valueItem.minute.value
        }
        if (Number(valueItem.final_minute.value) <10) {
            final_minutes = '0' + valueItem.final_minute.value
        }
        dispatch(setInitialDateAppointments(`${valueItem.year.value}-${month}-${day}T${hour}:${minutes}:${('00')}`));
        dispatch(setFinalDateAppointments(`${valueItem.final_year.value}-${final_month}-${final_day}T${final_hour}:${final_minutes}:${('00' + new Date().getUTCSeconds()).slice(-2)}`));
    }

    const renderOrderDetail = (item,index) => {
        console.warn('valor que recibe del item',item);
        return(
            <div className={'schedule-list-li-body'}>
            <p className={"schedule-list-li-title"}>Estatus</p>
                <ol className={'schedule-list-ol'}>
                    {
                        states &&
                        states.map((statesItem, index) => {
                            const cont = 0;
                        return(
                                
                                 <li key = {statesItem.id} className={['textNonActualState', statesItem.id <= item.surgeryStatusId ? 'textActualState' : ''].join(' ')}><div className={"processNumber"}><span>{ index + 1 }</span></div>{ statesItem.name }</li>
                            
                        );
                    })
                    }
                </ol>
            </div>
        );
    };
    const renderOrderItemDetail = (title, data) => {
        return (
            <div className={"schedule-selected-item"}>
                <p className={"schedule-selected-item-title"}>{title}</p>
                <p className={"schedule-selected-item-information"}>{data}</p>
            </div>
        );
    }
    const renderOrderItem = (item,index) => {

        return (
            <li key={item.id} className={['schedule-list-li', index == 0 ? 'top_border_li' : ''].join(' ')}>
                <button 
                    className={'schedule-list-li-header'}
                    onClick={() => toggleOpenProcessItem(item)}
                >
                    { "Cirugia #" + item.id}
                    {
                        selectedOrderItem && selectedOrderItem.id == item.id &&
                        <img src={blackTopArrow} className={"arrowCloseIcon"} alt={'FLECHA PARA CERRAR'} />
                    }
                    {
                        (_.isNull(selectedOrderItem) || (!_.isNull(selectedOrderItem)  && selectedOrderItem.id != item.id )) &&
                        <img src={blackArrow} className={"arrowIcon"} alt={'FLECHA PARA ABRIR'} />
                    }
                </button>
                {
                    selectedOrderItem && selectedOrderItem.id == item.id &&
                    <>
                    <div className={"schedule-selected-data-content"}>
                        {
                            renderOrderItemDetail(informationTitle.institution, selectedOrderItem.hospital.name)
                        }
                        {
                            renderOrderItemDetail(informationTitle.date, DateFormat(selectedOrderItem.surgeryDate))
                        }
                        {
                            renderOrderItemDetail(informationTitle.description, selectedOrderItem.productRequirements.map( (item,index) =>
                                <span className='span-description'> {item.product.productDescription}</span>))
                        }
                        {
                            renderOrderItemDetail(informationTitle.doctor, 
                                                    `${selectedOrderItem.medic.name}
                                                    ${selectedOrderItem.medic.secondName
                                                    && selectedOrderItem.medic.secondName}
                                                    ${selectedOrderItem.medic.firstLastname
                                                    && selectedOrderItem.medic.firstLastname}
                                                    ${selectedOrderItem.medic.secondLastname
                                                    && selectedOrderItem.medic.secondLastname}`, 
                                                    
                            )
                        }
                        {
                            renderOrderItemDetail(informationTitle.atq, (item.atq != null && item.atq != false)  
                                                    ? (`${item.atq.firstName && item.atq.firstName}
                                                      ${item.atq.secondName && item.atq.secondName}
                                                      ${item.atq.firstLastName && item.atq.firstLastName}
                                                      ${item.atq.secondLastName && item.atq.secondLastName}`)
                                                      
                                                    : 'Por Asignar')
                                                      
                        }
                    </div>
                    {
                        renderOrderDetail(item, index)
                    }
                    </>
                }
            </li>
        );
    }
    return (
        <div className={"schedule-list-content-base"}>
            <span className={"schedule-serch-title"}>Buscar por fecha</span>
            <span className={"schedule-serch-sub-title"}>Fecha de inicio</span>
            <div className={"schedule-inputs-content"}>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'day'} minValue={1} maxValue={31} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'month'} minValue={1} maxValue={12} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'year'} minValue={2000} maxValue={2100} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'hour'} minValue={0} maxValue={23} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'minute'} minValue={0} maxValue={59} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className='search-icon'>
                    <img src={searchIcon} onClick={buildDate}/>
                </div>
            </div>
            <span className={"schedule-serch-sub-title"}>Fecha de fin</span>
            <div className={"schedule-inputs-content"}>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'final_day'} minValue={1} maxValue={31} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'final_month'} minValue={1} maxValue={12} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'final_year'} minValue={2000} maxValue={2100} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'final_hour'} minValue={0} maxValue={23} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
                <div className={"numericInputStyle"}>
                    <NumberInput title={'final_minute'} minValue={0} maxValue={59} setValueItem={setValueItem} valueItem={valueItem} />
                </div>
            </div>
            {/* <h2 className={"schedule-list-title"}>Hoy</h2> */}
            {/* <div className='search-input-content'>
                <SearchInput />
            </div> */}
            <ul className={'schedule-list-ul'}>
                {
                    surgeries &&
                    surgeries.map(renderOrderItem)
                }
            </ul>
        </div>
    );
}

export default ScheduleList;
