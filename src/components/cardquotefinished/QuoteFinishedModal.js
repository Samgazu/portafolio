import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../shared/Modal';
import { deleteElementListProductPrices, deleteNewQuoteSystemById } from '../../actions/newQuoteAction';
import { useDispatch, useSelector } from 'react-redux';


export const QuoteFinishedModal = (props) => {

    const system = props.system;
    const configuration = props.configuration;
    const dispatch = useDispatch();
    const newQuote = useSelector( state => state.newQuote);
    const listProductPrices = useSelector((state) => state.newQuote.listProductPrice);

    const deleteOnClick = () => {
        // Impresion en consola para Test
        // console.log(listProductPrices)
        let productsList = [];
        const newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
        newQuoteCopy.systems.map( goConfig1 => 
          goConfig1.configuration.map( goConfig2 => goConfig2.configuration.items.map( intoItems =>{
            productsList.push(  intoItems.product.productCode );
          } 
        )));
        // Impresion en consola para Test
        // console.table(productsList)
        let newListProductPrices = [];
        let productCodes = configuration.configuration.items.map(item => item.product.productCode)
        // console.table(productCodes)
        if( listProductPrices ){
            listProductPrices.forEach(itemList => {
                if( productCodes.indexOf(itemList.productCode) === -1 ){
                    newListProductPrices.push(itemList);
                }
                if(productsList.indexOf(itemList.productCode) !== productsList.lastIndexOf(itemList.productCode) && newListProductPrices.indexOf(itemList) === -1){
                    newListProductPrices.push(itemList);
                }
            })
            // Impresion en consola para Test
            // console.warn(newListProductPrices)
            dispatch(deleteElementListProductPrices(newListProductPrices));
        }
        // Impresion en consola para Test
        // console.log(system.idItem)
        dispatch(deleteNewQuoteSystemById(system.idItem));
        props.toggle();
    };

    const continueOnClick = () => {
        props.toggle();
    };

    const modalBody = () => {
        return (
            <div className='c-deleteProductModal'>
                <div className="deleteProductModal-c-img">
                    <img className='deleteProductModal-img' src={system.productImage} alt=""/>
                </div>
                <div className="deleteProductModal-c-data">
                    <h3 className='deleteProductModal-title'>{system.manufacturerName}</h3>
                    <p className='deleteProductModal-info'>
                       {system.productDescription}
                    </p>
                </div>
                <div className="deleteProductModal-c-buttons">
                    <button className='deleteProductModal-button deleteProductModal-button-del ' onClick={deleteOnClick} >Eliminar</button>
                    <button className='deleteProductModal-button deleteProductModal-button-continuar ' onClick={continueOnClick} >Cancelar</button>
                </div>
            </div>
        );
    };

    return (
        <CustomModal
                isOpen={props.isOpen || true}
                toggle={props.toggle} 
                body={modalBody()}
        />
    );
}


QuoteFinishedModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    system: PropTypes.any,
    configuration: PropTypes.any,
};