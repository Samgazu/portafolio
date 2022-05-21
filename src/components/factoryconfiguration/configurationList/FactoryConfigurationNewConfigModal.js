import React from 'react';
import PropTypes from 'prop-types';
import { FactoryConfigModalNewConfig } from './FactoryConfigModalNewConfig';
import CustomModal from '../../shared/Modal';

export const FactoryConfigurationNewConfigModal = (props) => {


    const modalBody = () => {
        return (
            <FactoryConfigModalNewConfig 
                toggle={props.toggle}  
                system={props.system}
                setNewConfig={props.setNewConfig}
                setConfiguration={props.setConfiguration}
            />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                title="Nueva Configuración"
                body={modalBody()}
        />
    )

}

FactoryConfigurationNewConfigModal.propTypes = {
    isOpen:           PropTypes.any,
    toggle:           PropTypes.any,
    system:           PropTypes.any,
    setConfiguration: PropTypes.any,
    setNewConfig:     PropTypes.any,
};

