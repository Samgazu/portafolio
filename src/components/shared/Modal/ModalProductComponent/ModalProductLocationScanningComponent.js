import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import { ObjectConverter } from '../../ObjectConverter';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationByLocationCodeStoreHose, getLocationByLocationCodeStoreHoseSuccess, searchProductsStoreHose, searchProductsStoreHouseSuccess, setNewProductsAndSystems } from '../../../../actions/storeHouseAction';
import shortid from 'shortid';

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
        fontWeight: '400',
        fontSize: '1.4vw',
        opacity: 0.7,
        border: 'none',
        margin: '0',
        paddingLeft: '10px',
        width: '60%',
        marginTop: '10px',
        cursor: 'inherit',
        lineHeight: 'inherit',
        fontFamily: 'Poppins',
    },
    labelCounter: {
        fontFamily: 'Poppins',
        fontSize: '1.5vw',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#FFFFFF',
        outline: 'none',
        marginTop: '2.5vw',
        marginBottom: '3vw',
        justifySelf: 'stretch',
        alignSelf: 'stretch',
        cursor: 'pointer',
    },
    contenedor: {
        justifyItems: 'center',
        display: 'grid',
        width: '100%',
        maxHeight: '45vh',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        gridTemplateRows: '1fr 1fr 1fr 1fr .5fr',
    },

    itemText: {
        color: '#FFFFFF',
        outline: 'none',
        fontSize: '1.4vw',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
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

export const setNewProductsAndSystemsModalProductLocationScanningComponent = () => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [inputValueCodigo, setInputValueCodigo] = useState('');
    const [inputValueDeposito, setInputValueDeposito] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [stateButton, setStateButton] = useState('TEXT');
    const locationItemToAdd = useSelector(state => state.storeHouse.locationItemToAdd);
    const listProducts = useSelector(state => state.storeHouse.listProducts);
    /*   const productsListWithLocation = useSelector(state => state.storeHouse.productsListWithLocation); */


    //ESTE SELECTOR APUNTA AL REDUCER QUE SE CREO NUEVO PARA AGREGAR PRODUCTOS O SISTEMAS NUEVOS 
    const newProdutsAndSystems = useSelector(state => state.storeHouse.newProducts);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(searchProductsStoreHouseSuccess(null));
            dispatch(getLocationByLocationCodeStoreHoseSuccess(null));
        }
    }, [])

    useEffect(() => {
        if (locationItemToAdd) {
            dispatch(searchProductsStoreHose(locationItemToAdd.productCode));
        }
    }, [locationItemToAdd])

    useEffect(() => {
        if (locationItemToAdd && listProducts) {
            setInputValueCodigo(listProducts[0].productDescription)
            setInputValueDeposito(locationItemToAdd.local)
        }
    }, [listProducts])

    const handleSubmitLocation = (e) => {
        e.preventDefault();
        // const exampleObject = '{"Warehouse”:”Cucharillas 2","NombeUbicacion":"Cucharillas 2","LinkSource":"http://linkparageneralelpdf.tsi.mx","NumberOfBox”:2,"TotalOfBoxes":5}';
        const locationObject = ObjectConverter(inputValue);

        if (locationObject && locationObject.NombeUbicacion) {
            dispatch(getLocationByLocationCodeStoreHose(locationObject.NombeUbicacion))
        }
        if (locationObject && locationObject.NombreUbicacion) {
            dispatch(getLocationByLocationCodeStoreHose(locationObject.NombreUbicacion))
        }
        setInputValue('');
    }

    const handleSubmitNewLocation = (e) => {
        e.preventDefault();

        if (locationItemToAdd && listProducts[0] && listProducts[0] && productQuantity) {
            dispatch(setNewProductsAndSystems(newProdutsAndSystems ? [...newProdutsAndSystems, {
                id: shortid.generate(),
                ownerProduct: true,
                product: listProducts && listProducts[0],
                locastionItem: locationItemToAdd && locationItemToAdd.ubicacion,
                locastionItemId: locationItemToAdd && locationItemToAdd.id,
                systemLevels: Number(productQuantity),
            }] :
                [{
                    id: shortid.generate(),
                    ownerProduct: true,
                    product: listProducts && listProducts[0],
                    locastionItem: locationItemToAdd && locationItemToAdd.ubicacion,
                    locastionItemId: locationItemToAdd && locationItemToAdd.id,
                    systemLevels: Number(productQuantity),
                }]));

            history.replace('/StoreHouse/StoreHouseApproveOrder');
        }
    }

    return (
        <form className={[classes.carousel, classes.contenedor]} onSubmit={handleSubmitNewLocation} >
            <div className={classes.divisor}>
                <label className={classes.itemText}>Código</label>
                <input
                    placeholder='Código'
                    type='text'
                    value={inputValueCodigo}
                    className={classes.counter} />
            </div>
            <div className={classes.divisor}>
                <label className={classes.itemText}>Deposito</label>
                <input
                    placeholder='Deposito'
                    value={inputValueDeposito}
                    type='text'
                    className={classes.counter} />

            </div>
            <div className={classes.divisor}>
                <label className={classes.itemText}>Cantidad</label>
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
                    placeholder='Cantidad'
                    value={productQuantity}
                    className={classes.counter} />

            </div>

            {
                stateButton === 'TEXT' &&
                <label className={classes.labelCounter} onClick={() => setStateButton('INPUT')} >ESCANEA TU UBICACIÓN</label>
            }
            {
                stateButton === 'INPUT' &&
                <form action="" onSubmit={handleSubmitLocation} className={classes.containerForm}>
                    <input
                        autoFocus
                        placeholder='ESCANEA TU UBICACIÓN'
                        value={inputValue}
                        onChange={({ target }) => setInputValue(target.value)}
                        className={classes.counter} />
                </form>
            }
            <button className={classes.continueButton}
                type='submit'
            >
                ACEPTAR
            </button>
        </form>
    )
} 
