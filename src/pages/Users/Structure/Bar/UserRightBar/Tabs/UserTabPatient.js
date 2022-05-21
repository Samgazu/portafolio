import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '../../../../../../components/shared/Atoms/Button';
import CustomModal from '../../../../../../components/shared/Modal';
import './UserTabPatient.scss';
import { getPatientsInUser } from '../../../../../../actions/allUsersAction';

// ASSETS
import userIcon from '../../../../../../assets/img/126PX/Iconawesome-user-circle.png';
import pdfIcon from '../../../../../../assets/img/126PX/Iconmetro-file-pdf.png';

const UserTabPatient = () => {
    const dispatch = useDispatch();
    const [ patients, setPatients ] = useState(null)
    useEffect(() => {
        dispatch(getPatientsInUser());
    }, [])
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.patientsInUser) {
            setPatients(data.patientsInUser)
        }
    }, [data])

    const [openModal, setOpenModal] = useState(false);
    const [patientSelected, setPatientSelected] = useState(null);


    const surgeriesOnClick = (item) => {
        setPatientSelected(item);
        toggleModal();
    };

    const toggleModal = () => { // Esta funcion y la onClik puede ser una sola
        setOpenModal(!openModal);
    };

    const modalBody = () => {
        return (<h1>{patientSelected.name}</h1>);
    };

    const renderPatientItem = (item, index) => {
        return (
            <div className={'doctor-tab-patient-container'} id={item.id}>
                <div className={'doctor-tab-patient-bloque-1'}>
                    <img src={userIcon} alt={'IMG'}/>
                </div>
                <div className={'doctor-tab-patient-bloque-2'}>
                    <span className={"blue_dark_text"}>{item.name}</span>
                    <span className={"blue_light_text"}>Cotización</span>
                    <img className={"pdfIcon"} src={pdfIcon} alt={'img'} />
                </div>
                <div className={'doctor-tab-patient-bloque-3'}>
                    <div>
                        <span className={"gray_dark_text"}>Sistema: </span>
                        <span className={"gray_light_text"}>{item.system}</span>
                    </div>
                    <div>
                        <span className={"gray_dark_text"}>Fecha de CX: </span>
                        <span className={"gray_light_text"}>{item.cx_date}</span>
                    </div>
                    <div>
                        <span className={"gray_dark_text"}>Hospital: </span>
                        <span className={"gray_light_text"}>{item.hospital}</span>
                    </div>
                </div>
                <div className={'doctor-tab-patient-bloque-4'}>
                    <Button color={"blue_dark"} title={"VER PERFIL"} onClick={() => surgeriesOnClick(item)} />
                </div>
            </div>
        );
    };

    return (
        <div className={"padding-left-sb"}>
            {
                patients &&
                <>
                    {
                        patients.map(renderPatientItem)
                    }
                    {
                        openModal && 
                        <CustomModal // Esto se puede ser otro componente
                            title={'CIRUGÍAS PROGRAMADAS'}
                            isOpen={openModal}
                            toggle={toggleModal}
                            body={modalBody()}
                        />
                    }
                    </>
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UserTabPatient));