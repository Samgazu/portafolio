import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../components/shared/Modal';
import { BodySeller } from '../../../components/Agenda/BodySeller';

export const SellersModal = (props) => {

    
  
        const modalBody = () => {
            return (
                <BodySeller  toggle={props.toggle}
                        setResult = {props.setResult}  />
            );
        };
    
        return (
            <CustomModal
                    isOpen={props.isOpen}
                    toggle={props.toggle} 
                    title="VENDEDORES"
                    body={modalBody()}
            />
        );
    }
    
    SellersModal.propTypes = {
        isOpen: PropTypes.any,
        toggle: PropTypes.any,
        setResult: PropTypes.any,
    };