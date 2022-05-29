/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './sass/styles.sass';
import medicImg from '../../../../assets/img/126PX/Icono_Perfil-Bco_126px.png';
import { FormMedicModal } from './FormMedicModal';
import { FormMyMedicModal } from './FormMyMedicModal';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMedicsToSchedule } from '../../../../actions/scheduleSurgeryAction';

export const MedicModal = (props) => {

    const dispatch = useDispatch();
    const { sellerCode } = useSelector(state => state.user.user.identity)

    const [screen, setScreen] = useState('medicos');

    const handleChangeScreen = (data) => {
        if (data === 'mis_medicos' && sellerCode) {
            // console.log(data)
            dispatch(getMyMedicsToSchedule(sellerCode))
        }
        setScreen(data);
    }

    const modalBody = () => {
        return (

            <div className='c-medic'>
                {
                    props.type != 'onlyMedics' &&
                    <div className='c-medic-buttons'>

                        <button className={screen !== 'medicos' ? "c-medic-button " : "c-medic-button active"}
                            onClick={() => handleChangeScreen('medicos')}
                        >
                            <img src='' alt="" />
                            Médicos
                        </button>
                        <button className={screen !== 'mis_medicos' ? "c-medic-button " : "c-medic-button active"}
                            onClick={() => handleChangeScreen('mis_medicos')}
                        >
                            <img src='' alt="" />
                            Mis Médicos
                        </button>

                    </div>
                }
                {
                    screen === 'medicos' && (
                        <FormMedicModal toggle={props.toggle}
                            setOpenModal={props.setOpenModal}
                            setLastOpenModal={props.setLastOpenModal}
                            setMessageModal={props.setMessageModal}
                            setResult={props.setResult}
                            type={props.type}
                        />
                    )
                }
                {
                    screen === 'mis_medicos' && (
                        <FormMyMedicModal toggle={props.toggle}
                            setOpenModal={props.setOpenModal}
                            setLastOpenModal={props.setLastOpenModal}
                            setMessageModal={props.setMessageModal} />
                    )
                }

            </div>

        );
    };

    return (
        <CustomModal
            isOpen={props.isOpen}
            toggle={props.toggle}
            imgModal={medicImg}
            title="Médicos"
            body={modalBody()}
        />
    );
}

MedicModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
