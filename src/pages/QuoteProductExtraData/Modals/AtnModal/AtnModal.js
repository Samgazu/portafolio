import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import './sass/styles.sass';
import { AtnClientes } from './AtnClientes';
import { AtnMedicos } from './AtnMedicos';
import { AtnContacto } from './AtnContacto';
import atnImg from '../../../../assets/img/126PX/Icono_Perfil-Bco_126px.png';

export const AtnModal = (props) => {

    const [screen, setScreen] = useState('clientes');

    const handleChangeScreen = ( data ) => {
        setScreen(data);
    }
    
    const modalBody = () => {
        return (
            <div className='c-atn'>
                <div className='c-atn-buttons'>
                    <button className={ screen !== 'clientes'? "c-atn-button ": "c-atn-button active"}
                            onClick={() => handleChangeScreen('clientes')}
                    >
                            <img src='' alt=""/>
                            Clientes
                    </button>

                    <button className={ screen !== 'medicos'? "c-atn-button ": "c-atn-button active"}
                            onClick={() => handleChangeScreen('medicos')}
                    >
                            <img src='' alt=""/>
                            Medicos
                    </button>

                    <button className={ screen !== 'datos'? "c-atn-button ": "c-atn-button active"}
                            onClick={() => handleChangeScreen('datos')}
                    >
                            Datos de Contacto
                    </button>
                </div>
            {
                screen === 'clientes' ? (
                    <AtnClientes toggle={props.toggle} />
                ):
                screen === 'medicos' ? (
                    <AtnMedicos toggle={props.toggle} />
                )
                :
                screen === 'datos' && (
                    <AtnContacto toggle={props.toggle} />
                )
            }

            </div>
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                imgModal={atnImg}
                title="ATN"
                body={modalBody()}
        />
    );
}

AtnModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
  