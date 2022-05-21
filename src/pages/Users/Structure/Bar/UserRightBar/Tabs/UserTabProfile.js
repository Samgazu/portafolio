import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '../../../../../../components/shared/Atoms/Button';
import TextShow from '../../../../../../components/shared/Atoms/TextShow.js';
import CustomModal from '../../../../../../components/shared/Modal';
import './UserTabProfile.scss';


const UserTabProfile = () => {
    const [ userInfo, setUserInfo ] = useState(null)
    const [ userRol, setUserRol ] = useState(null)
    const [openAtqList, setOpenAtqList] = useState(false);
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.selectedUserInfo && data.selectedUserInfo.length > 0) {
            setUserInfo(data.selectedUserInfo[0])
        }
        if (data.userRolSelected) {
            setUserRol(data.userRolSelected)
        }
    }, [data])
    const profileHeader = {
        item1: 'Nombre del medico',
        item2: 'Ciudad',
        item3: 'Estado',
        item4: 'Nombre del hospital',
        item5: 'Dirección del hospital',
        item6: 'Teléfono del hospital',
        item7: 'Correo',
        item8: 'Celular',
        item9: 'Especialidad',
    }
    const patien = {
        hospital: 'Hospital reciente en el cual opero un ATQ.',
        hospital_address: 'Dirección de hospital',
        hospital_phone: '33 3333 3333',
        city: 'Guadalajara',
        state: 'Jalisco',
    }

    const atqlist = [
        {
            id: 1,
            name: 'Leonardo Oliva'
        },
        {
            id: 2,
            name: 'Ricardo Lopez'
        },
        {
            id: 3,
            name: 'David Rocha'
        },
        {
            id: 4,
            name: 'Maria Elena Diaz'
        },
        {
            id: 5,
            name: 'Karla Hernandez'
        },
        {
            id: 6,
            name: 'Jorge Blanco'
        },
        {
            id: 7,
            name: 'Andrea Colmenares'
        }
    ]
    const showListOnClick = () => {
        setOpenAtqList(!openAtqList);
    };

    const modalBody = () => {
        return (
            <div className={"modal-atq-list"}>
                <div className={"table-list-header"}>
                    <div className={"header-element"}>
                        <p>Item</p>
                    </div>
                    <div className={"header-element"}>
                        <p>ATQ</p>
                    </div>
                </div>
                {
                    atqlist.map((item) => {
                        return(
                            <div className={"table-list-body"}>
                                <div className={'body-element'}>
                                    <p>{item.id}</p>
                                </div>
                                <div className={'body-element'}>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    /* const patien = {
        medico: 'Dr. Ricardo López',
        city: 'Guadalajara',
        state: 'Jalisco',
        hospital_name: 'Se agrega el hospital mas reciente en el cual opero.',
        hospital_address: 'Calzada Lázaro Cardenas  4149',
        hospital_phone: '333 3333 3333',
        email: 'dr_ricardo@gmail.com',
        phone: '33 3333 3333',
        specialty: 'Cirujano traumatólogo'
    } */
    return (
        <div className={'doctor-tab-profile-container'}>
            {
                userInfo &&
                <div>
                    <div className={'doctor-tab-profile-row'}>
                        {
                            userInfo.name &&
                            <TextShow title={profileHeader.item1} description={"Dr. " + (userInfo.name).toLowerCase() + " " + (userInfo.firstLastname).toLowerCase()} />
                        }
                        {
                            userInfo.city &&
                            <TextShow title={profileHeader.item2} description={(userInfo.city).toLowerCase()} />
                        }
                        {
                            userInfo.state &&
                            <TextShow title={profileHeader.item3} description={(userInfo.state).toLowerCase()} />
                        }
                    </div>
                    <div className={'doctor-tab-profile-row'}>
                        <TextShow title={profileHeader.item4} description={"Hospital San Rafael"} />
                        <TextShow title={profileHeader.item5} description={"Calzada Lázaro Cardenas  4149"} />
                        <TextShow title={profileHeader.item6} description={"333 3333 3333"} />
                    </div>
                    <div className={'doctor-tab-profile-row'}>
                        {
                            userInfo.email &&
                            <TextShow title={profileHeader.item7} description={(userInfo.email).toLowerCase()} />
                        }
                        {
                            userInfo.phone &&
                            <TextShow title={profileHeader.item8} description={(userInfo.phone)} />
                        }
                        <TextShow title={profileHeader.item9} description={"Cirujano traumatólogo"} />
                        {
                            userRol && userRol == "adminAtq" &&
                                <div className={'doctor-tab-profile-button'}>
                                <Button color={"blue_dark"} title={"LISTA DE ATQS"} onClick={() => showListOnClick()} />
                                </div>
                        }
                        {
                            openAtqList && 
                            <CustomModal // Esto se puede ser otro componente
                                title={'LISTA DE TECNICOS A CARGO'}
                                isOpen={openAtqList}
                                toggle={showListOnClick}
                                bodyWidth={'small'}
                                body={modalBody()}  // NOTA: Ya hay un componente que muestra esta info!!  Hay que buscarla antes de escribir todo!
                            />
                        }
                    </div>
                </div>
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UserTabProfile));