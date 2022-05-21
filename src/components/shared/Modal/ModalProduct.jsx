import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import $ from 'jquery';

//ASSETS
import ClearIcon from '@material-ui/icons/Clear';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        background: 'linear-gradient(125deg, rgba(55,167,185,1) 1%, rgba(26,188,156,1) 98%)',
        padding: '30.2px 30.9px 44.4px 30.9px',
        borderRadius: '15.7px',
        boxShadow: '5.2px 5.2px 3.1px 0 rgba(0, 0, 0, 0.25)',
        outline: 'none',
        textAlign: 'center',
        alignContent: 'center',
    },
    closeIcon: {
        color: '#FFFFFF',
        width: 20,
        height: 20,
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
    itemImage:{
        width: '100%',
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.22,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#303030',
    },
    labelCounter: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.76,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    counter: {
        padding: '4.3px 41.7px 1.6px 41.5px',
        borderRadius: '15.7px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
    },
    continueButton: {
        fontFamily: 'Poppins',
        fontSize: 31,
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
        marginTop: 10,
        padding: '4.3px 95.7px 1.6px 95.5px',
    },
}));

export const ModalProduct = forwardRef((props, ref) => {

    const [itemData, setItem] = React.useState({});

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    useImperativeHandle(
        ref,
        () => ({
            handleOpen(item) {
                setOpen(true);
                setItem(item);
            }
        }),
    )
    
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.closeIcon}>
                <ClearIcon onClick={handleClose}/>
            </div>
            <div className={classes.productBox}>
                <div className={classes.productImage}>
                    <img src={ itemData.img } alt={ itemData.name } className={ classes.itemImage } />
                    <span className={ classes.itemText }> {itemData.name} </span>
                </div>
            </div>
            <div className={classes.carousel}>
                <label for="cars" className={classes.labelCounter}>Número de cabezas: </label>
                <select id="cars" className={classes.counter}>
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                    <option value="4">7</option>
                    <option value="2">8</option>
                    <option value="3">9</option>
                    <option value="4">10</option>
                </select>
            </div>
            <button className={classes.continueButton}>ACEPTAR</button>
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
