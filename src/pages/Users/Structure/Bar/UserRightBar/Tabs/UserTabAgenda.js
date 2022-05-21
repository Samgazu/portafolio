import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import _ from 'lodash';
import moment from 'moment';
import Calendar from 'react-calendar';
import NumberInput from '../../../../../../components/shared/Atoms/NumberInput';
import './UserTabAgenda.scss';
import { getSurgeriesInUser } from '../../../../../../actions/allUsersAction';

// ASSETS
import blueArrowIcon from '../../../../../../assets/img/126PX/blue_arrow_icon.png';
import blueDownArrowIcon from '../../../../../../assets/img/126PX/blue_arrow_down.png';


const UserTabAgenda = () => {
    const dispatch = useDispatch();
    const [ surgeries, setSurgeries ] = useState(null)
    useEffect(() => {
        dispatch(getSurgeriesInUser());
    }, [])
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.surgeriesInUser) {
            setSurgeries(data.surgeriesInUser)
        }
    }, [data])

    const [selectedDate, selectedDateOnChange] =  useState(new Date());
    const [selectedFinalDate, selectedFinalDateOnChange] =  useState(new Date());
    const [selectedSurgeryItem, setSelectedSurgeryItem] = useState(null);
    

    const toggleOpenSurgeryItem = (item) => {
        setSelectedSurgeryItem(selectedSurgeryItem && selectedSurgeryItem.id == item.id ? null : item);
    };

    const renderLeftBar = () => {
        return(
            <div className={'doctor-tab-agenda-left-container'}>
                <span className={'bar-title'}>Calendario</span>
                <p className="dateText">Fecha inicial</p>
                <div className={"date_content mb-x3 calendar_date_content"}>
                    {/* <div className={"numericInputStyle"}>
                        <NumberInput title={'day'}/>
                    </div>
                    <div className={"numericInputStyle"}>
                        <NumberInput title={'month'}/>
                    </div>
                    <div className={"numericInputStyle"}>
                        <NumberInput title={'year'}/>
                    </div> */}
                <Calendar
                    onChange={selectedDateOnChange}
                    value={selectedDate}
                />
                </div>
                <p className="dateText">Fecha Final</p>
                <div className={"date_content calendar_date_content"}>
                    {/* <div className={"numericInputStyle"}>
                        <NumberInput title={'day'}/>
                    </div>
                    <div className={"numericInputStyle"}>
                        <NumberInput title={'month'}/>
                    </div>
                    <div className={"numericInputStyle"}>
                        <NumberInput title={'year'}/>
                    </div> */}
                <Calendar
                    onChange={selectedFinalDateOnChange}
                    value={selectedFinalDate}
                />
                </div>
            </div>
        );
    };

    const renderRightBar = () => {
        return (
            <div className={'doctor-tab-agenda-right-container'}>
                <span className={'bar-title'}>Cirugías Programadas</span>
                <span className={'bar-date-selected'}>{  formatDate() }</span>
                <ul className={'doctor-tab-agenda-ul'}>
                    {
                        surgeries && 
                        surgeries.map(renderSurgeryItem)
                    }
                </ul>
            </div>
        );
    }

    const renderSurgeryItem = (item, index) => {
        return (
            <li key={item.id} className={'doctor-tab-agenda-li'}>
                <button 
                    className={'doctor-tab-agenda-li-header'}
                    onClick={() => toggleOpenSurgeryItem(item)}
                >
                    {item.name + " - Hospital" + item.institution + " - " + item.time + "hrs"}
                    {
                        selectedSurgeryItem && selectedSurgeryItem.id == item.id &&
                        <img src={blueDownArrowIcon} alt={'FLECHA PARA CERRAR'} />
                    }
                    {
                        (_.isNull(selectedSurgeryItem) || (!_.isNull(selectedSurgeryItem)  && selectedSurgeryItem.id != item.id ) )&&
                        <img src={blueArrowIcon} alt={'FLECHA PARA ABRIR'} />
                    }
                </button>
                {
                    selectedSurgeryItem && selectedSurgeryItem.id == item.id &&
                    renderSugeryDetail(item, index)
                }
            </li>
        );
    };

    const renderSugeryDetail = (item, index) => { 
        return (
            <div className={'doctor-tab-agednda-surgery-detail-body'}>
                <div className={'doctor-tab-agednda-surgery-detail-item'}>
                    <span className={'doctor-tab-agednda-surgery-detail-key'}>Paciente</span>
                    <span className={'doctor-tab-agednda-surgery-detail-value'}>{item.patient}</span>
                </div>
                <div className={'doctor-tab-agednda-surgery-detail-item'}>
                    <span className={'doctor-tab-agednda-surgery-detail-key'}>Hospital</span>
                    <span className={'doctor-tab-agednda-surgery-detail-value'}>{item.institution}</span>
                </div>
                <div className={'doctor-tab-agednda-surgery-detail-item'}>
                    <span className={'doctor-tab-agednda-surgery-detail-key'}>Ubicación</span>
                    <span className={'doctor-tab-agednda-surgery-detail-value'}>{item.place}</span>
                </div>
                <div className={'doctor-tab-agednda-surgery-detail-item'}>
                    <span className={'doctor-tab-agednda-surgery-detail-key'}>Paciente</span>
                    <span className={'doctor-tab-agednda-surgery-detail-value'}>{item.patient}</span>
                </div>
            </div>
        );
    }

    const formatDate = () => {
        return `${moment(selectedDate).format('DD')} de ${moment(selectedDate).format('MMMM')} del ${moment(selectedDate).format('YYYY')}`;
    }

    return (
        <div className={'doctor-tab-agenda-container'}>
            {
                renderLeftBar()
            }
            {
                renderRightBar()
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UserTabAgenda));