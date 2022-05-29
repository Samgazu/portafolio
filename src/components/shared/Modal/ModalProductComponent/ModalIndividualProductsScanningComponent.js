import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import { StringConverter } from '../../ObjectConverter';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductsStoreHose, searchScanningProductsStoreHouseSuccess, setNewProductsAndSystems } from '../../../../actions/storeHouseAction';
import { useForm } from '../../../../hooks/useForm';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
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
        cursor: 'pointer',
        width: '40%',
        padding: '5px'
    },
    counter: {
        borderRadius: '10px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        outline: 'none',
        height: '30px',
        appearance: 'none',
        fontWeight: '300',
        fontSize: '1.4vw',
        opacity: 0.7,
        border: 'none',
        margin: '0',
        paddingLeft: '10px',
        width: '60%',
        marginTop: '10px',
        marginBottom: '10px',
        cursor: 'inherit',
        lineHeight: 'inherit',
        fontFamily: 'Poppins',

    },
    labelCounter: {
        fontFamily: 'Poppins',
        fontSize: '1.6vw',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#FFFFFF',
        outline: 'none',
        marginTop: '30px',
        marginBottom: '5px',
        justifySelf: 'stretch',
        alignSelf: 'stretch',



    },
    contenedor: {
        justifyItems: 'center',
        display: 'grid',
        width: '100%',
        height: '65vh',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '.25fr .25fr .25fr .25fr .25fr .25fr',
    },
    contenedorScann: {
        justifyItems: 'center',
        display: 'grid',
        width: '100%',
        height: '65vh',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '.25fr .25fr .25fr .25fr .25fr .25fr',
    },

    itemText: {
        color: '#FFFFFF',
        outline: 'none',
        fontSize: '1.4vw',
        fontFamily: 'Poppins',
        fontWeight: '300',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        width: '60%',
        textAlign: 'left',
        marginBottom: '0px',
        marginTop: '10px',
        display: 'block',

    },
    divisor: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerForm: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2vw 0',
    },
}));


export const ModalIndividualProductsScanningComponent = ({ isScann, productToModal }) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [stateButton, setStateButton] = useState('TEXT');
    const [inputValue, setInputValue] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const listScanningProducts = useSelector(state => state.storeHouse.listScanningProducts);


    //ESTE SELECTOR APUNTA AL REDUCER QUE SE CREO NUEVO PARA AGREGAR PRODUCTOS O SISTEMAS NUEVOS 
    const newProdutsAndSystems = useSelector(state => state.storeHouse.newProducts);

    const [formValues, handleInputChange] = useForm({
        productCode: '',
        ubicacion: '',
        local: '',
        lote: '',
    });

    const { productCode, ubicacion, local, lote } = formValues;

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {

        if (productToModal) {
            dispatch(searchProductsStoreHose(productToModal.productCode, "productCode", true));
        }

        return () => {
            dispatch(searchScanningProductsStoreHouseSuccess(null));
        }
    }, [])

    useEffect(() => {
        if (listScanningProducts) {
            handleInputChange({
                target: {
                    name: 'productCode',
                    value: listScanningProducts[0].productCode
                }
            })
        }

    }, [listScanningProducts])

    const handleSubmitLocation = (e) => {
        e.preventDefault();
        const locationObject = StringConverter(inputValue);

        if (locationObject) {
            dispatch(searchProductsStoreHose(locationObject, "productCode", true));
        }

        setInputValue('');
    }

    const handleSubmitNewLocation = (e) => {
        e.preventDefault();
        if (productCode && ubicacion && local && productQuantity) {

            dispatch(setNewProductsAndSystems(newProdutsAndSystems ? [...newProdutsAndSystems, {
                id: shortid.generate(),
                ownerProduct: true,
                isProduct: true,
                product: listScanningProducts && listScanningProducts[0],
                locastionItem: ubicacion,
                ProductQuantity: Number(productQuantity),
                Deposito: local,
                Ubicacion: ubicacion,
                Lote: lote,
            }] :
                [{
                    id: shortid.generate(),
                    ownerProduct: true,
                    isProduct: true,
                    product: listScanningProducts && listScanningProducts[0],
                    locastionItem: ubicacion,
                    ProductQuantity: Number(productQuantity),
                    Deposito: local,
                    Ubicacion: ubicacion,
                    Lote: lote,
                }]));
            history.replace('/StoreHouse/StoreHouseApproveOrder');
        }

    }

    return (
        <form className={isScann === 'SCANN' ? (classes.carousel, classes.contenedorScann) : (classes.carousel, classes.contenedor)} onSubmit={handleSubmitNewLocation} >
            <div className={classes.divisor}>
                <label className={classes.itemText}>Código</label>
                <input
                    autoFocus
                    placeholder='Código'
                    name={'productCode'}
                    onChange={handleInputChange}
                    value={productCode}
                    disabled
                    className={classes.counter} />
            </div>
            <div className={classes.divisor}>
                <label className={classes.itemText}>Deposito*</label>
                <input
                    autoFocus
                    placeholder='Deposito'
                    name={'local'}
                    onChange={handleInputChange}
                    value={local}
                    className={classes.counter} />

            </div>
            <div className={classes.divisor}>
                <label className={classes.itemText}>Ubicación*</label>
                <input
                    autoFocus
                    type='text'
                    name={'ubicacion'}
                    onChange={handleInputChange}
                    value={ubicacion}
                    placeholder='Ubicación'
                    className={classes.counter} />

            </div>
            {
                isScann !== 'SCANN' &&
                <div className={classes.divisor}>
                    <label className={classes.itemText}>Lote</label>
                    <input
                        autoFocus
                        type='text'
                        name={'lote'}
                        onChange={handleInputChange}
                        value={lote}
                        placeholder='Lote'
                        className={classes.counter} />

                </div>

            }
            <div className={classes.divisor}>
                <label className={classes.itemText}>Cantidad*</label>
                <input onChange={(e) => {
                    if (e.target.value > 0) {
                        setProductQuantity(e.target.value)
                    } else {
                        setProductQuantity(1)
                    }
                }
                }
                    autoFocus
                    type='number'
                    value={productQuantity}
                    className={classes.counter} />

            </div>
            {
                isScann === 'SCANN' &&
                <>
                    {
                        stateButton === 'TEXT' &&
                        <label className={classes.labelCounter} onClick={() => setStateButton('INPUT')} >ESCANEA PRODUCTO</label>
                    }
                    {
                        stateButton === 'INPUT' &&
                        <form action="" onSubmit={handleSubmitLocation} className={classes.containerForm}>
                            <input
                                autoFocus
                                placeholder='ESCANEA PRODUCTO'
                                value={inputValue}
                                onChange={({ target }) => setInputValue(target.value)}
                                className={classes.counter} />
                        </form>
                    }
                </>
            }
            <button className={classes.continueButton}
                type='submit' >
                ACEPTAR
            </button>

        </form>
    )
}

ModalIndividualProductsScanningComponent.propTypes = {
    productToModal: PropTypes.any,
    isScann: PropTypes.any,
}