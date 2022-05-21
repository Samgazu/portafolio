import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';
import { FormQuoteNameModal } from './FormQuoteNameModal';
import CustomModal from '../../../components/shared/Modal';

export const QuoteNameModal = (props) => {

    const modalBody = () => {
        return (
            <FormQuoteNameModal toggle={props.toggle}  globalTotal={props.globalTotal} />
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle} 
                title="Nombre de Cotización"
                body={modalBody()}
        />
    );
}

QuoteNameModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    globalTotal: PropTypes.any,
};
