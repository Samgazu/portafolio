import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../components/shared/Modal';
import './sass/PriceListModal.sass';
import { getProductPrices, updatePriceListTypeQuote } from '../../actions/newQuoteAction';
import { setPrice } from '../../actions/JSON/listPriceJSON';

export const PriceListModal = (props) => {

    const dispatch = useDispatch();
    const newQuote = useSelector( state => state.newQuote);
    const productListPrices = useSelector(state => state.systems.productListPrices);
    const productsList = [];
    const handleGetProducts = async () => {
        const newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
        const getConfigurations = await newQuoteCopy.systems.map( item => item.configuration);
        const getSeconConfig = await getConfigurations.map( item => item.map( config => config.configuration));
        const getItems = await getSeconConfig.map( item => item.map( items => items.items));
        const getProduct = await getItems.map( item => item.map( items => items.map(products => products)));
        getProduct.map( (i) => i.map((d)=> d.map(p=>{
            ( productsList.indexOf(p.product.productCode) === -1 ) &&
                productsList.push( { "productCode": p.product.productCode });
        })))
    }
    useEffect(() => {
        handleGetProducts();
    }, [])

    const selectListItem = (item) => {
        productsList.length > 0&&
            dispatch(getProductPrices({
                "PriceListId": item.id,
                "Products": productsList
            } ))
        dispatch(updatePriceListTypeQuote(item))
        dispatch(setPrice())
        props.toggle();
    }

    const renderListItem = (item, index) =>{ 
        return (
            <button onClick={()=>selectListItem(item,index)}>
                <span className="name">{item.description}</span>
                <span className="code">{item.tableCode}</span>
            </button>
        );
    };

    const modalBody = () => {
        return (
            <form className='c-priceListModal'>
                <div className='priceListModal-container'>
                    {
                        productListPrices && productListPrices.map( (item, index) => renderListItem(item, index))
                    }
                </div>
        </form>
        );
    };

    return (
        <CustomModal
            isOpen={props.isOpen}
            toggle={props.toggle} 
            title="LISTAS DE PRECIOS"
            body={modalBody()}
        />
    );
}

PriceListModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
