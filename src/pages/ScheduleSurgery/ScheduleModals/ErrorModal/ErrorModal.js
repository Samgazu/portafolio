import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../components/shared/Modal';
import errorMessage from '../../../../assets/img/512PX/Icono_Advertencia_512px.png';
import './styles.scss';

export const ErrorModal = ({isOpen, toggle, messageModal='Error', lastOpenModal, setOpenModal, setOpenModalError}) => {

    const handleReturnOpenModal = () => {
        if(lastOpenModal){
            setOpenModal(lastOpenModal);
        }else{
            setOpenModalError(null);
        }
    }
    
    const modalBody = () => {
        return (
            <div className='container-errorModal'>
                <img src={errorMessage} alt="" className="errorModal-img" />
                <h3 className="errorModal-text">
                    {messageModal}
                </h3>

                <button className="errorModal-button" onClick={handleReturnOpenModal}>
                    OK
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

ErrorModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    messageModal: PropTypes.any,
    lastOpenModal: PropTypes.any,
    setOpenModal: PropTypes.any,
    setOpenModalError: PropTypes.any,
};
  