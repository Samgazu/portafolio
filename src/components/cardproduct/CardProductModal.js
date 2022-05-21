import React, { forwardRef, useImperativeHandle, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

//ASSETS
import ClearIcon from '@material-ui/icons/Clear';
import { toInteger} from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewQuote } from '../../actions/newQuoteAction';
import shortid from 'shortid';
import imgProduct from '../../assets/img/126PX/Productos/Cervicales/Img_Osmium_126px.png';
import { setElementOptionalMaterialBeing, setElementOptionalMaterialSucces, setElementTypeSurgeryBeing, setElementTypeSurgeryPending } from '../../actions/scheduleSurgeryAction';
import { useHistory, useParams } from 'react-router';

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
    paperQuote:{
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
    paperSchedule:{
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
        flexDirection: 'column'
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
    itemImage:{
        width: '100%',
    },
    itemText: {
        color: '#303030',
        outline: 'none',
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: 400,
        letterSpacing: 'normal',
        width: '100%'
    },
    labelCounter: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
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
        fontSize:'20px',
        opacity: 0.7,
        border: 'none',
        margin: '0',
        width: '60%',
        marginTop: '10px',
        cursor: 'inherit',
        lineHeight: 'inherit',
        textAlign: 'center',
    },
    selected:{
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
        width: '60%',
        padding: '5px'
    },
}));

// eslint-disable-next-line react/display-name
export const ModalProduct = forwardRef((props, ref) => {
    const productItem = props.productItem;
    const systemId = props.systemId;
    const programarCX = props.programarCX;
    const uniqueProduct = props.uniqueProduct;
    const optionalMaterialToComplete = props.optionalMaterialToComplete;
    const urlToArragement = props.urlToArragement;
    const mainSurgeryTypeId = props.mainSurgeryTypeId;
    const newQuote = useSelector((state) => state.newQuote);
    const [productQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const {tipoCirugia} = useParams();
    const listElementTypeSurgeryBeing = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryBeing);
    const listElementOptionalMaterialBeing = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialBeing);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);
    // console.log(systemId)
    // console.log(uniqueProduct)
    // console.log(productItem)

    const history = useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault();
        let item = {};
        if(!systemId){
            item = {
            configuration: 
                { 
                    items: [{
                        product: productItem,
                        productQuantity: toInteger(productQuantity)
                    }],   
            }}
        }else{
            item = {
                discountPercentage: 0,
                product: productItem,
                productPrice: 0,
                productQuantity: toInteger(productQuantity),
            }
        }
            if(productQuantity){
                if(!systemId){
                    //Pre-establecemos algunos valores para mostrar en las card de cotizacion
                    item.configuration.items= item.configuration.items.map( item => {
                        item.discountPercentage = 0;
                        item.productPrice = 0;
                        return item;
                    });
                    item.configuration.globalDiscountPercentage = 0;
                }
            // Bucamos si ya esta el sistema en la nueva cotizacion
            let existCardProducts = {}; 
            newQuote.systems.forEach( (itemToSystem, index) => {
                if( itemToSystem.productDescription === 'Productos' && !systemId ){
                    existCardProducts = { existProductsCard: true, 
                                            index };
                }else if( itemToSystem.idItem === systemId ){
                    existCardProducts = { existProductsCard: true, 
                        index }; 
                }
            });
            // (item) => item.id == prueba.id
            let newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
            let systemToInsert = undefined;
            if (existCardProducts.existProductsCard) {
            // Si existe en la cotizacion, hay que actualizar
                systemToInsert = JSON.parse(JSON.stringify(newQuote.systems[existCardProducts.index]));
                systemToInsert.configuration[0].configuration.items = systemToInsert.configuration[0].configuration.items.map((itemToConfig) => {
                    if( item.configuration && itemToConfig.product.id === item.configuration.items[0].product.id && !systemId || itemToConfig.product.id === productItem.id ){
                        return itemToConfig = { 
                            ...itemToConfig, 
                            productQuantity: itemToConfig.productQuantity += toInteger(productQuantity)
                        } ;
                    } 
                    return itemToConfig;
                })
                let checkToAdd = systemToInsert.configuration[0].configuration.items.some( idToItem => idToItem.product.id === productItem.id);
                if( checkToAdd === false && !systemId ){
                    systemToInsert.configuration[0].configuration.items.push(...item.configuration.items);
                }else if( checkToAdd === false && systemId ){
                    systemToInsert.configuration[0].configuration.items.push(item);
                }
                    // todo: Hay que validar si ya existe ??? !!!!!
                newQuoteCopy.systems[existCardProducts.index] = systemToInsert;
            } else {
            // no existe en la cotizacion
            systemToInsert = {
                configuration: [
                    {
                        ...item,
                    },
                ],
                id: shortid.generate(),
                idItem: shortid.generate(),
                productDescription: 'Productos',
                productImage: imgProduct,
            };
            newQuoteCopy.systems.push(systemToInsert);
            }
            //Agregamos el sistema a la cotizacion:
            dispatch(updateNewQuote(newQuoteCopy));
        }
        setProductQuantity('');
        setOpen(false);
        props.toggle&&
            props.toggle();
        
    }

    const handleSubmitTypeSurgery = (e) => {
        e.preventDefault();
        if(listElementTypeSurgeryBeing && productQuantity){
            const elementTypeSurgeryPending = {...listElementTypeSurgeryBeing, quantity: Number(productQuantity)};
            dispatch(setElementTypeSurgeryPending(elementTypeSurgeryPending));
            dispatch(setElementTypeSurgeryBeing(null));
        }

        if( optionalMaterialToComplete && listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length > 0  && productQuantity ){
            const newOptionalMaterialToComplete = {...optionalMaterialToComplete, quantity: Number(productQuantity)};

            // const listOptionalMaterial = listElementOptionalMaterialBeing.filter(el => {
            //     if(el.product.productCode === newOptionalMaterialToComplete.product.productCode){
            //         return newOptionalMaterialToComplete;
            //     }
            // });
            if(listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0){
                if( listElementOptionalMaterialSucces.some(el => el.product && el.product.productCode === newOptionalMaterialToComplete.product.productCode )){
                    const addQuantitytoExistElement = listElementOptionalMaterialSucces.map(el => {
                        if(el.product && el.product.productCode === newOptionalMaterialToComplete.product.productCode ){
                            return {...el, quantity: el.quantity + Number(productQuantity)};
                        }
                        return el;
                    });
                    dispatch(setElementOptionalMaterialSucces( addQuantitytoExistElement ));
                }else{
                    
                    const newArrayToMaterials = listElementOptionalMaterialSucces.slice();
                    newArrayToMaterials.push(newOptionalMaterialToComplete);
                    dispatch(setElementOptionalMaterialSucces( newArrayToMaterials ));
                }
            }else if(!listElementOptionalMaterialSucces || listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length === 0){
                dispatch(setElementOptionalMaterialSucces( [newOptionalMaterialToComplete] ));
            }

            const restlistOptionalMaterial = listElementOptionalMaterialBeing.filter(el => 
                el.product.productCode !== newOptionalMaterialToComplete.product.productCode
            );

            dispatch(setElementOptionalMaterialBeing( restlistOptionalMaterial ));
        }

        if( uniqueProduct === 'UNIQUE' && productItem ){
            if(listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0){
                if( listElementOptionalMaterialSucces.some(el => el.product && el.product.productCode === productItem.productCode )){
                    const addQuantitytoExistElement = listElementOptionalMaterialSucces.map(el => {
                        if(el.product.productCode === productItem.productCode ){
                            return {...el, quantity: el.quantity + Number(productQuantity)};
                        }
                        return el;
                    });
                    dispatch(setElementOptionalMaterialSucces( addQuantitytoExistElement ));
                }else{
                    const newOptionalMaterialToComplete = {id: shortid.generate(), product: productItem, isOptional: true, isRequired: false, quantity: Number(productQuantity) };
                    const newArrayToMaterials = listElementOptionalMaterialSucces.slice();
                    newArrayToMaterials.push(newOptionalMaterialToComplete);
                    dispatch(setElementOptionalMaterialSucces( newArrayToMaterials ));
                }

            }else if(!listElementOptionalMaterialSucces || listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length === 0 ){
                const newOptionalMaterialToComplete = {id: shortid.generate(), product: productItem, isOptional: true, isRequired: false, quantity: Number(productQuantity)};
                dispatch(setElementOptionalMaterialSucces( [newOptionalMaterialToComplete] ));
            }
        }

        setOpen(false);
        setProductQuantity('');
        props.toggle&&
            props.toggle();
        if( productItem && urlToArragement && mainSurgeryTypeId  ){
            history.replace(`/ProgramarCX/${mainSurgeryTypeId}/${productItem.id}`);
        }else if( productItem && urlToArragement && !mainSurgeryTypeId  ){
            history.replace(`/ProgramarCX/${'1'}/${productItem.id}`);
        }else{
            props.toggle&&
                props.toggle();
        }
    }

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
        props.toggle&&
            props.toggle();
    };

    const body = (
        <div style={modalStyle} className={ programarCX || tipoCirugia ? (classes.paperSchedule) : (classes.paperQuote)}>
            <div className={classes.closeIcon}>
                <ClearIcon onClick={handleClose}/>
            </div>
            <label className={classes.labelCounter}>Número de Tornillos/Niveles</label>
            <div className={classes.productBox}>
                <div className={classes.productImage}>
                    { <img src={ !programarCX ? productItem.productImage : productItem.productImage } alt={ productItem.productDescription } className={ classes.itemImage } />}
                    <span className={classes.itemText}> {!programarCX  ? productItem.productDescription : productItem.productDescription } </span>
                    {/* Revisar cambios para aceptar los 2 cambios en merge */}
                    {/* <img src={ productItem.productImage } alt={ 'IMAGEN NO DISPONIBLE' } className={ classes.itemImage } />
                    <span className={ classes.itemText }> {productItem.productDescription} </span> */}
                </div>
            </div>

            <form className={classes.carousel} onSubmit={programarCX || tipoCirugia ? handleSubmitTypeSurgery: handleSubmit }>
                <input  onChange={(e) => {
                            if(e.target.value > 0){
                                setProductQuantity(e.target.value)
                            }else{
                                setProductQuantity(1)
                            }
                        }
                    }
                        autoFocus
                        type='number'
                        value={productQuantity} 
                        className={classes.counter} />

                <span className="focus"></span>
                <button className={classes.continueButton} 
                        type='submit'
                        
                        // disabled={!!productQuantity}
                        >
                        ACEPTAR
                </button>
            </form>
            
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

ModalProduct.propTypes = {
    productItem: PropTypes.any,
    toggle: PropTypes.any,
    systemId: PropTypes.any,
    programarCX: PropTypes.any,
    urlToArragement: PropTypes.any,
    mainSurgeryTypeId: PropTypes.any,
    optionalMaterialToComplete: PropTypes.any,
    uniqueProduct: PropTypes.any,
};