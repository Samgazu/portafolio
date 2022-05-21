import React, { useEffect, useState } from "react";
import "./sass/styles.sass";
import {InfoDetalleProductoModal} from './InfoDetalleProductoModal';
import { ItemDetalleProduct } from "./ItemDetalleProduct";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteNewQuoteSystemById, getProductPrices} from '../../../../actions/newQuoteAction';
import { deleteElementTypeSurgery, deleteMaterialOptional } from "../../../../actions/scheduleSurgeryAction";

/* eslint-disable react/display-name */
export const DetalleProducto = ({tipoCX}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const {tipoCirugia,searchToProgramCX} = useParams();
  const {systems} = useSelector((state) => state.newQuote);
  const newQuote = useSelector( state => state.newQuote);
  const priceList = useSelector( state => state.newQuote.priceList);
  const listElementTypeSurgeryCompleted = useSelector( state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
  const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);




  const [selectedProduct, setSelectedProduct] = useState(false);
  
  const showDetailsHandler = (item) => {
    setSelectedProduct(item);
  };
  
  const deteleProductHandler = (item) => {
    
    

    if(item.idItem){
      
      dispatch(deleteNewQuoteSystemById(item.idItem));
      
    }else{
      dispatch(deleteMaterialOptional(item.id))
    

    }
    

  };

  

  const deleteSurgeryHandler = (surgery) => {
    dispatch(deleteElementTypeSurgery(surgery.system.id))
  }

  const toggleModal = () => {
    setSelectedProduct(null);
  }
  let productsList = [];
  let objectProductList = [];
    const newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
    newQuoteCopy && newQuoteCopy.systems && newQuoteCopy.systems.length > 0 &&newQuoteCopy.systems.map( goConfig1 => 
      goConfig1&&goConfig1.configuration && goConfig1.configuration.map( goConfig2 => goConfig2 && goConfig2.configuration&& goConfig2.configuration.items.map( intoItems =>{
        ( goConfig1.productDescription === "Productos") && objectProductList.push( intoItems );
        productsList.push( { "productCode": intoItems.product.productCode });
      } 
    )));

  const handleContinueButton = () => {
    if(!tipoCirugia && priceList){

      dispatch(getProductPrices({
        "PriceListId": priceList.id,
        "Products": productsList
      } ))
    }
    if(tipoCirugia || tipoCX){
      history.push(`/ProgramarCX`);
    }else{
      history.push(`/cotizaciones/ordenes`);
    }
  }

  console.log('tipoCiruguia',tipoCirugia)
  
  

  return (
    <div className="c-detalleproducto">
    
      <div className="c-detalleproducto-c">
        {
          !tipoCirugia && !searchToProgramCX &&  systems && systems.length > 0 && systems.map((item) => {
                return (
                  <>
                    {
                      ( item.productDescription && item.productDescription !== "Productos") &&
                      <div key={item.id} className="detalleproducto-c-item">
                        <ItemDetalleProduct
                          product={item}
                          showDetailsHandler={showDetailsHandler}
                          deteleProductHandler={deteleProductHandler}
                        />
                      </div>

                    }
                  </>
                );
              })
        }

        {
          !tipoCirugia && !searchToProgramCX && objectProductList && objectProductList.length > 0 && objectProductList.map((item) => {
                return (
                  <>
                    {
                      <div key={item.id} className="detalleproducto-c-item">
                        <ItemDetalleProduct
                          product={item}
                          objectProductList={objectProductList}
                          onlyProduct={'onlyProduct'}
                          showDetailsHandler={showDetailsHandler}
                          deteleProductHandler={deteleProductHandler}
                        />
                      </div>

                    }
                  </>
                );
              })
        }
        
        
        { (tipoCirugia || searchToProgramCX ) && listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0 && listElementOptionalMaterialSucces.map(product => {
          return (
                    <>
                      {
                        <div key={product.id} className="detalleproducto-c-item">
                          <ItemDetalleProduct
                            product={product}
                            showDetailsHandler={showDetailsHandler}
                            deteleProductHandler={deteleProductHandler}
                            onlyProduct={'listElementOptionalMaterialSucces'}
                            objectProductList={listElementOptionalMaterialSucces}
                            
                          />
                        </div>

                      }
                    </>
                  );

        })


        }


        { (tipoCirugia || searchToProgramCX ) && listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0 && listElementTypeSurgeryCompleted.map(product => {
          return (
                    <>
                      {
                        <div key={product.id} className="detalleproducto-c-item">
                          <ItemDetalleProduct
                            product={product}
                            showDetailsHandler={showDetailsHandler}
                            deteleProductHandler={deleteSurgeryHandler}
                            onlyProduct ={"listElementTypeSurgeryCompleted"}
                            tipoCirugia="tipoCirugia"
                            objectProductList={listElementTypeSurgeryCompleted}
                            
                          />
                        </div>

                      }
                    </>
                  );

        })


        }


        <button
            className="detalleproducto-btn-c"
            onClick={handleContinueButton}
        >
            <button className="detalleproducto-btn" >CONTINUAR</button>
        </button>

        {
          selectedProduct &&
          <InfoDetalleProductoModal 
            isOpen={!!selectedProduct}
            toggle={toggleModal}
            product={selectedProduct}
            deteleProductHandler={deteleProductHandler}
          />
        }
      </div>
    </div>
  );
};