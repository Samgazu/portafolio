import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { searchProductsStoreHose, searchProductsStoreHouseSuccess, setNewProductsAndSystems } from '../../../../actions/storeHouseAction';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    continueButton: {
        fontFamily: 'Poppins',
        fontSize: '1.4vw',
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
        cursor: 'pointer',
        width: '60%',
        height: '4vh',
        padding: '5px',
        // marginTop:'10px',
        alignSelf: 'center',
        justifySelf: 'center',


    },
    counter: {
        borderRadius: '10px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        outline: 'none',
        height: '30px',
        appearance: 'none',
        fontWeight: '600',
        fontSize: '18px',
        opacity: 0.7,
        border: 'none',
        paddingLeft: '10px',
        width: '60%',
        cursor: 'inherit',
        lineHeight: 'inherit',
        fontFamily: 'Poppins',


    },
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
        marginTop: '10px',
        justifySelf: 'stretch',
        alignSelf: 'stretch',



    },
    contenedor: {
        justifyItems: 'center',
        display: 'grid',
        width: '100%',
        height: '45vh',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '.10fr 1.2fr .8fr .4fr'
    },

    itemText: {
        color: '#000',
        outline: 'none',
        fontSize: '1.2vw',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        width: '100%',
        textAlign: 'center',
        marginBottom: '0px',
        display: 'block',

    },
    divisor: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
    },

    productBox: {
        width: '100%',
        textAlign: 'center',
        //marginBottom:'10px',
        marginTop: '10px',
    },
    productText: {
        padding: '4.3px 41.7px 1.6px 41.5px',
        borderRadius: '15.7px',
        boxShadow: '0 0 3.7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        width: '30%',
        margin: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
}));
export const ModalAddQuantityComponent = ({ productToModal }) => {
    const classes = useStyles();
    const [productQuantity, setProductQuantity] = useState('');
    const newProdutsAndSystems = useSelector(state => state.storeHouse.newProducts);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchProductsStoreHose(productToModal.productCode));
        return () => {
            dispatch(searchProductsStoreHouseSuccess(null));
        }
    }, [])

    const handleAddProductList = (e) => {
        e.preventDefault();
        dispatch(setNewProductsAndSystems(newProdutsAndSystems ? [...newProdutsAndSystems, {
            id: shortid.generate(),
            ownerProduct: true,
            product: productToModal,
            locastionItem: productToModal && productToModal.ubicacion,
            locastionItemId: productToModal && productToModal.id,
            systemLevels: productQuantity,
        }] :
            [{
                id: shortid.generate(),
                ownerProduct: true,
                product: productToModal,
                locastionItem: productToModal && productToModal.ubicacion,
                locastionItemId: productToModal && productToModal.id,
                systemLevels: productQuantity,
            }]));
        history.replace('/StoreHouse/StoreHouseApproveOrder');
    }

    return (
        <form className={[classes.carousel, classes.contenedor]} onSubmit={handleAddProductList} >
            <label className={classes.labelCounter}>CANTIDAD</label>
            <div className={classes.productBox}>
                <div className={classes.productText}>
                    <label className={classes.itemText}>
                        {productToModal.ubicacion}
                    </label>

                </div>
            </div>
            <div className={classes.divisor}>
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
            <button className={classes.continueButton}
                type='submit' >
                ACEPTAR
            </button>
        </form>
    )
}

ModalAddQuantityComponent.propTypes = {
    productToModal: PropTypes.any,
}