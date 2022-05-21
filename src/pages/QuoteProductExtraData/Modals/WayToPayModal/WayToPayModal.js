import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CustomModal from '../../../../components/shared/Modal';
import './styles.sass';
import { useForm } from '../../../../hooks/useForm';
import { updateWayToPayQuote } from '../../../../actions/newQuoteAction';
import { WayToPayData } from './WayToPayData';
import imgWayToPay from '../../../../assets/img/126PX/Icono_Pago-Bco_126px.png';

export const WayToPayModal = (props) => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange,reset ] = useForm({
        typePay: '',
    });

    const { typePay } = formValues;

    const handlePay = (e) => {
        e.preventDefault();
        reset();
        dispatch(updateWayToPayQuote(typePay));
        props.toggle();
    }

    const modalBody = () => {
        return (
            <form className='c-wayToPay' onSubmit={handlePay}>
                <form className='c-wayToPay-c-list-items'>
                    {
                        WayToPayData && (
                            WayToPayData.map( item => (
                                <div key={item.id} className="c-wayToPay-c-item" >
                                    <span className='c-wayToPay-item-name'>{item.name}</span>
                                    <input className='c-wayToPay-item-check' 
                                        type="radio"
                                        name='typePay'
                                        checked={typePay === item.name}
                                        value={item.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))
                        )
                    }
                </form>
                <button type='submit' className='c-wayToPay-button' >
                    CONTINUAR
                </button>
            </form>
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                imgModal={imgWayToPay}
                title="FORMA DE PAGO"
                body={modalBody()}
        />
    );
}

WayToPayModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
