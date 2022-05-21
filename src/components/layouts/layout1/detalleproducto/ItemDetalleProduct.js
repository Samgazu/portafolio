import React from "react";
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteElementListProductPrices, updateSystemsNewQuote } from "../../../../actions/newQuoteAction";
// import { setElementsToTypeSurgery } from "../../../../actions/scheduleSurgeryAction";
import { useParams } from "react-router";


export const ItemDetalleProduct = ( { objectProductList, product, onlyProduct, deteleProductHandler, tipoCirugia}) => {

  const typeSurgery = {
    1: 'CERVICAL',
    2: 'LUMBAR',
    3: 'TORACICO',
    4: 'COMPLEMENTOS',
};

  const listProductPrices = useSelector(
    (state) => state.newQuote.listProductPrice
  );
  const systems = useSelector(
    (state) => state.newQuote.systems
  );
  const newQuote = useSelector( state => state.newQuote);
  const {systemId} = useParams();
  const dispatch = useDispatch();
  // console.log(objectProductList)
  // const listElementTypeSurgery = useSelector( state => state.scheduleSurgery.listElementTypeSurgery);

  const onClickDeteleProduct = () => {
    if(deteleProductHandler) {
      deteleProductHandler(product);
    }
  };
  
  const deleteItemCard = (itemObject) => {
    let newSystems = JSON.parse( JSON.stringify( systems ) );
        let productsList = [];
        let getSystemProduct = {};
        const newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
        newQuoteCopy.systems.map( goConfig1 => 
          goConfig1.configuration.map( goConfig2 => goConfig2.configuration.items.map( intoItems =>{
            ( goConfig1.productDescription === "Productos") && ( getSystemProduct = {
              idItem: goConfig1.idItem,
              configuration: goConfig2.configuration
            } );
            productsList.push( intoItems.product.productCode );
          } 
        )));
        let newConfig = {...getSystemProduct};
        let newListProductPrices = [];
        if( listProductPrices ){
            listProductPrices.forEach(itemList => {
              if( itemList.productCode !== itemObject.productCode || productsList.indexOf(itemObject.productCode) !== productsList.lastIndexOf(itemObject.productCode)){
                newListProductPrices.push(itemList);
              }
            })
            dispatch(deleteElementListProductPrices(newListProductPrices));
        }
        newConfig = { 
          ...newConfig,
          configuration: {
            ...newConfig.configuration,
                items: objectProductList.filter(item => item.product.productCode !== itemObject.product.productCode)
          }
        }
    newSystems = newSystems.map( item=> {
      if(item.idItem === getSystemProduct.idItem){
        item.configuration = [newConfig];
      }
      return item;
    })
    dispatch( updateSystemsNewQuote(newSystems))
    }

    
    // Agregar si es Requerido eliminar articulos de Schedule

    // const deleteItemCardTypeSurgery = (itemCardTypeSurgery) => {
    //   const deleteItemTypeSurgery =  listElementTypeSurgery.filter(item => item.id !== itemCardTypeSurgery.id 
    //     || item.id === itemCardTypeSurgery.id && item.mainSurgeryType.id !== itemCardTypeSurgery.mainSurgeryType.id );
    //   dispatch(setElementsToTypeSurgery(deleteItemTypeSurgery));
    // }
    // {
    //   tipoCirugia &&
    //     (
    //       <button 
    //           className="ico-delete detalleproducto-items-delete"
    //           onClick={()=> deleteItemCardTypeSurgery(product) }
    //         >
    //           <RiDeleteBin6Line />
    //       </button>
    //     )
    // }
    

  return (
    <>


      {

        
        !tipoCirugia && onlyProduct === "listElementOptionalMaterialSucces"  ?(
            <button 
                className="ico-delete detalleproducto-items-delete"
                onClick={  onClickDeteleProduct }
              >
                <RiDeleteBin6Line />
            </button>
        )
      

        :
        !tipoCirugia && onlyProduct && !systemId ?

        (
          
            <button 
                className="ico-delete detalleproducto-items-delete"
                onClick={()=>  deleteItemCard(product) }
              >
                <RiDeleteBin6Line />

            </button>
          ) 

          : !tipoCirugia && !systemId && (
            <button 
                className="ico-delete detalleproducto-items-delete"
                onClick={  onClickDeteleProduct }
              >
                <RiDeleteBin6Line />
            </button>
        )
      }

    {

      tipoCirugia && !systemId && (
            <button 
                className="ico-delete detalleproducto-items-delete"
                onClick={  onClickDeteleProduct }
              >
                <RiDeleteBin6Line />
            </button> )

    }


      




      
      {
        !tipoCirugia && onlyProduct  
          ? <img className="detalleproducto-items-img" src={product.product.productImage} alt="" />
          : !tipoCirugia && <img className="detalleproducto-items-img" src={product.productImage} alt="" />
      }
      {
        tipoCirugia &&
            <img className="detalleproducto-items-img" src={product.system.productImage} alt="" />
      }
      <button
        className="detalleproducto-items-button-mas"
      >

        {
          !tipoCirugia && onlyProduct
          ? <h3 className="items-button-mas-name">{product.product.productDescription}</h3>
          : !tipoCirugia &&(
              <>
                <h3 className="items-button-mas-name">
                  {`${product.productDescription} `} 
                </h3>
                <h4 className="items-button-mas-name-second">{product.configuration.length > 0 && product.configuration[0].configuration.name}</h4> 
              </>
            )
        }

        
        {
          tipoCirugia &&
            (
              <>
                <h3 className="items-button-mas-name">
                  {`${product.system.productDescription} `} 
                </h3>
                <h3 className="items-button-mas-name-second">
                  {`Tipo Cirugía: ${typeSurgery[product.system.mainSurgeryTypeId]} `} 
                </h3>
              </>
            )
        }
        <h4 className="items-button-mas-name-second">
                  {`Cantidad: ${product.quantity} `} 
                </h4>
        <p className="items-button-mas-ver"></p>
      </button>
    </>
  );
};

ItemDetalleProduct.propTypes = {
  product: PropTypes.any,
  showDetailsHandler: PropTypes.any,
  deteleProductHandler: PropTypes.any,
  objectProductList: PropTypes.any,
  onlyProduct: PropTypes.any,
  tipoCirugia: PropTypes.any,
};