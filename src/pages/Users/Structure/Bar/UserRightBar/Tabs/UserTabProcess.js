import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import _ from 'lodash';
import SearchInput from '../../../../../../components/shared/Atoms/SearchInput';
import Button from '../../../../../../components/shared/Atoms/Button';
import CustomModal from '../../../../../../components/shared/Modal';
import './UserTabProcess.scss';
import { getProcessesInUser, getStatesInProcesses } from '../../../../../../actions/allUsersAction';

// ASSETS
import blueArrowIcon from '../../../../../../assets/img/126PX/blue_arrow_icon.png';
import blueDownArrowIcon from '../../../../../../assets/img/126PX/blue_arrow_down.png';


const UserTabProcess = () => {
    const dispatch = useDispatch();
    const [ordenDetailSelected, setOrdenDetailSelected] = useState(null);
    const [processSelected, setProcessSelected] = useState(null);
    const [ processes, setProcesses ] = useState(null)
    const [ states, setStates ] = useState(null)
    useEffect(() => {
        dispatch(getProcessesInUser());
        dispatch(getStatesInProcesses());
    }, [])
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.processesInUser) {
            setProcesses(data.processesInUser)
        }
        if (data.processesStates) {
            setStates(data.processesStates)
        }
    }, [data])

    const [selectedOrderItem, setSelectedOrderItem] = useState(null);
    const toggleOpenProcessItem = (item) => {
        setSelectedOrderItem(selectedOrderItem && selectedOrderItem.id == item.id ? null : item);
    };

    const renderOrderItem = (item,index) => {
        return (
            <li key={item.id} className={'doctor-tab-process-li'}>
                <button 
                    className={'doctor-tab-process-li-header'}
                    onClick={() => toggleOpenProcessItem(item)}
                >
                    {item.name + " - Hospital" + item.hospital + " - " + item.date}
                    {
                        selectedOrderItem && selectedOrderItem.id == item.id &&
                        <img src={blueDownArrowIcon} alt={'FLECHA PARA CERRAR'} />
                    }
                    {
                        (_.isNull(selectedOrderItem) || (!_.isNull(selectedOrderItem)  && selectedOrderItem.id != item.id )) &&
                        <img src={blueArrowIcon} className={"blueArrowListIcon"} alt={'FLECHA PARA ABRIR'} />
                    }
                </button>
                {
                    selectedOrderItem && selectedOrderItem.id == item.id &&
                    renderOrderDetail(item, index)
                }
            </li>
        );
    }

    const showOrderOnClick = (orden=null) => {
        setProcessSelected(ordenDetailSelected ? null : orden);
    };

    const modalBody = () => {
        return (
            <div className={"modal-order"}>
                <div className={"table-order-header"}>
                    <div className={"header-element"}>
                        <p>Item</p>
                    </div>
                    <div className={"header-element"}>
                        <p>Material utilizado</p>
                    </div>
                    <div className={"header-element"}>
                        <p>Ubicación</p>
                    </div>
                    <div className={"header-element"}>
                        <p>Cantidad</p>
                    </div>
                </div>
                {
                    processSelected.products.map((item) => {
                        return(
                            <div className={"table-order-body"}>
                                <div className={'body-element'}>
                                    <p>{item.id}</p>
                                </div>
                                <div className={'body-element material-element'}>
                                    {
                                        item.material.map((material) => {
                                            return(
                                                <p>{material.name + ' - '}</p>
                                            );
                                        })
                                    }
                                </div>
                                <div className={'body-element'}>
                                    <p>{item.location}</p>
                                </div>
                                <div className={'body-element'}>
                                    <p>{item.quantity}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    const renderOrderDetail = (item,index) => {
        return(
            <div className={'doctor-tab-process-li-body'}>
                <ol className={'doctor-tab-process-ol'}>
                    {
                        states &&
                        states.map((statesItem, index) => {
                            const cont = 0;
                        return(
                            <li key = {statesItem.id} className={['textNonActualState', statesItem.id == item.activeStatus ? 'textActualState' : ''].join(' ')}><div className={"processNumber"}><span>{ index + 1 }</span></div>{ statesItem.name }</li>
                        );
                    })
                    }
                </ol>
                <div className={'doctor-tab-process-li-button'}>
                    <Button color={"blue_dark"} title={"DESCRIPCIÓN DEL PEDIDO"} onClick={() => showOrderOnClick(item)} />
                </div>
            </div>
        );
    };

    return (
        <div className={"tab_content_base"}>
            <div className={"search_input_content"}>
                <SearchInput />
            </div>
            <ul className={'doctor-tab-process-ul'}>
                {
                    processes &&
                    processes.map(renderOrderItem)
                }
            </ul>
            {
                processSelected && 
                <CustomModal // Esto se puede ser otro componente
                    title={processSelected.name + " - " + processSelected.date}
                    isOpen={processSelected}
                    toggle={showOrderOnClick}
                    body={modalBody()}
                />
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UserTabProcess));