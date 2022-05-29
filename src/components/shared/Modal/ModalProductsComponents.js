import React, { forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

import ClearIcon from '@material-ui/icons/Clear';

import { ModalAddQuantityComponent } from './ModalProductComponent/ModalAddQuantityComponent';
import { ModalIndividualProductsScanningComponent } from './ModalProductComponent/ModalIndividualProductsScanningComponent';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(() => ({
    paperQuote: {
        background: 'linear-gradient(125deg, rgba(55,167,185,1) 1%, rgba(26,188,156,1) 98%)',
        position: 'absolute',
        width: '35%',
        padding: '30.2px 30.9px 44.4px 30.9px',
        borderRadius: '15.7px',
        boxShadow: '5.2px 5.2px 3.1px 0 rgba(0, 0, 0, 0.25)',
        outline: 'none',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    paperSchedule: {
        background: 'linear-gradient(23deg, rgba(55,167,185,1) 0%, rgba(9,64,112,1) 100%)',
        position: 'absolute',
        width: '35%',
        padding: '30.2px 30.9px 44.4px 30.9px',
        borderRadius: '15.7px',
        boxShadow: '5.2px 5.2px 3.1px 0 rgba(0, 0, 0, 0.25)',
        outline: 'none',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    closeIcon: {
        color: '#FFFFFF',
        width: 20,
        height: 20,
        cursor: 'pointer'
    },
    productBox: {
        width: '100%',
        textAlign: 'center',
    },
    productImage: {
        padding: '4.3px 41.7px 1.6px 41.5px',
        borderRadius: '15.7px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        width: '30%',
        margin: 'auto',
        marginBottom: 10,

    },
    productImageProgramarCX: {
        padding: '4.3px 41.7px 1.6px 41.5px',
        borderRadius: '15.7px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        width: '30%',
        margin: 'auto',
        marginBottom: 10,
        height: '15vh',
        display: 'flex',
        alignItems: 'center',
    },
    itemImage: {
        width: '100%',
    },
    itemText: {
        color: '#FFFFFF',
        outline: 'none',
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        width: '100%',
        marginBottom: '15px',

    },
    //MODIFICION AQUI
    labelCounter: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#FFFFFF',
        outline: 'none',
        marginBottom: '15px',

    },
    counter: {
        borderRadius: '10px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        outline: 'none',
        height: '30px',
        appearance: 'none',
        fontWeight: '600',
        fontSize: '20px',
        opacity: 0.7,
        border: 'none',
        margin: '0',
        width: '60%',
        marginTop: '10px',
        cursor: 'inherit',
        lineHeight: 'inherit',

    },
    selected: {
        textAlign: 'center',
        padding: '10px',
        borderBottom: '1px solid #bdbdbd',
        fontSize: 'x-large',
    },
    continueButton: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.2,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#303030',
        boxShadow: '4px 4px 3px 0 rgba(0, 0, 0, 0.35)',
        backgroundColor: '#ffffff',
        borderRadius: '15.7px',
        borderStyle: 'none',
        outline: 'none',
        margin: 'auto',
        marginTop: 50,
        cursor: 'pointer',
        width: '40%',
        padding: '5px'
    },
}));


// eslint-disable-next-line react/display-name
export const ModalProductsComponents = forwardRef((props, ref) => {


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    useImperativeHandle(
        ref,
        () => ({
            handleOpen() {
                setOpen(true);
            }
        }),
    )

    const handleClose = () => {
        setOpen(false);
        props.toggle &&
            props.toggle();
    };

    const body = (
        <div style={modalStyle} className={classes.paperSchedule}>
            <div className={classes.closeIcon}>
                <ClearIcon onClick={handleClose} />
            </div>
            {
                props.typeModal === 'AddQuantityComponent' &&
                <ModalAddQuantityComponent productToModal={props.productToModal} />
            }
            {
                props.typeModal === 'IndividualProductsScanningComponent' &&
                <ModalIndividualProductsScanningComponent isScann={props.isScann} productToModal={props.productToModal} />
            }
        </div>
    );


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )

})

ModalProductsComponents.propTypes = {
    toggle: PropTypes.any,
    typeModal: PropTypes.any,
    isScann: PropTypes.any,
    productToModal: PropTypes.any,
};
