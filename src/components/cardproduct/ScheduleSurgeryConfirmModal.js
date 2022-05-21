import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../components/shared/Modal';
import errorMessage from '../../assets/img/512PX/Icono_Advertencia_512px.png';
import './sass/styles_confirm_modal.scss';


export const ScheduleSurgeryConfirmModal = ({isOpen, toggle, messageModal='Error', setItemProduct, setModalOrSystem, setOpenModalSchedule }) => {

    const handleReturnOpenModal = (response) => {
        
        if( response === 'CONTINUE'){
            setItemProduct(isOpen.item);
            setModalOrSystem(isOpen.typeModal);
            setOpenModalSchedule("SUGGESTED_MATERIAL");
        }
        toggle();
    }

    


    const modalBody = () => {
        return (
            <div className='container-errorModal'>
                <img src={errorMessage} alt="" className="errorModal-img" />
                <h3 className="errorModal-text">
                    {messageModal}
                </h3>

                <button className="errorModal-button" onClick={() => handleReturnOpenModal('CONTINUE')}>
                    Continuar
                </button>
                <button className="errorModal-button" onClick={() => handleReturnOpenModal('CANCEL')}>
                    Cancelar
                </button>
            </div>
        );
    };

    return (
        <CustomModal
                isOpen={isOpen}
                toggle={toggle}
                title="Error"
                body={modalBody()}
        />
    );
}

ScheduleSurgeryConfirmModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    messageModal: PropTypes.any,
    setItemProduct: PropTypes.any,
    setModalOrSystem: PropTypes.any,
    setOpenModalSchedule: PropTypes.any,
    
};