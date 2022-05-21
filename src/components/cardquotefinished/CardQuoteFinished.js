import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './sass/styles.sass';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { QuoteFinishedModal } from './QuoteFinishedModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteElementListProductPrices, updateSystemsNewQuote } from '../../actions/newQuoteAction';
import { useHistory, useParams } from 'react-router';
import { FormsInputs } from '../shared/Forms/FormsInputs';
import _ from 'lodash';

export const CardQuoteFinished = ({
  // edit,
  systemIndex,
  system,
  configurationIndex,
  configuration,
  handleCardQouteChange,
  setNewQuoteDeleteItem,
  changeOldProductList,
  newQuoteDeleteItem,
  isInputZeroValid,
  setIsInputZeroValid,
  oldProductList,
  setIsActiveHandleSetProducts,
  isActiveHandleSetProducts,
  
}) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [globalSubtotal, setGlobalSubtotal] = useState({});
  const [globalDiscountCart, setGlobalDiscountCart] = useState(null);
  // const [indexToSystem, setIndexToSystem] = useState(0);
  const [subTotalItem, setSubTotalItem] = useState([]);
  let {orden_solicitada_1} = useParams();

  useEffect(() => {
    if(configuration &&
      configuration.configuration && 
      configuration.configuration.cardDiscountPercentage&&
      configuration.configuration.cardDiscountPercentage.valueToInput
      ){
        setGlobalDiscountCart({ isDiscountInit: true ,...configuration.configuration.cardDiscountPercentage})
      }

  }, [])

  useEffect(() => {
    
    globalDiscountCart&&
    globalDiscountCart.valueToTarget&&
    configuration &&
    configuration.configuration &&
    configuration.configuration.items &&
    (
      configuration.configuration.items.forEach((item, index) => {
        if(!globalDiscountCart.isDiscountInit|| globalDiscountCart.isDiscountInit&&
            !item.product.discountPercentage && item.product.discountPercentage !== 0){

              handleCardQouteChange(
                {
                  target: {
                    name: 'discountPercentage',
                    value: globalDiscountCart.valueToTarget,
                  },
                },
                systemIndex,
                configurationIndex,
                index
              )
            }
          handleCardQouteChange(
            {
              target: {
                name: 'cardDiscountPercentage',
                value: globalDiscountCart,
              },
            },
            systemIndex,
            configurationIndex,
            0
            )
          }))

  }, [globalDiscountCart])
 
  useEffect(() => {
    if(configuration &&
    configuration.configuration &&
    configuration.configuration.items){
    let itemsToConfig = [];
    configuration.configuration.items.forEach(item => {
      if( item.productPrice >= 0 && item.product.productPrice === null  || item.productPrice >= 0 && isNaN(item.product.productPrice) ){
        
        return itemsToConfig.push({
          productPrice: item.productPrice,
          productCode: item.product.productCode
        })
      }
      
      else if( item.product.productPrice >= 0 && item.product.productPrice !== null ){
        return itemsToConfig.push({
          productPrice: item.product.productPrice,
          productCode: item.product.productCode
        })
      }
    })
    setSubTotalItem(itemsToConfig)
    setIsActiveHandleSetProducts && setIsActiveHandleSetProducts(false)}
  }, [changeOldProductList, isActiveHandleSetProducts, configuration.configuration.items])

  // console.warn(subTotalItem)
  const dispatch = useDispatch();
  const newQuote = useSelector( state => state.newQuote);
  const listProductPrices = useSelector(
    (state) => state.newQuote.listProductPrice
  );
  const systems = useSelector(
    (state) => state.newQuote.systems
  );
  const history = useHistory();
  const toggleModal = () => {
    setDeleteProduct(!deleteProduct);
  };

  const addProductToCard = () => {
    history.replace(`/cotizacion/${system.idItem}`);
  } 

  const handleChangeIntoTypeOfMoney = ( number ) => {
    if(number){
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      let arr = number.toString().split('.');
      arr[0] = arr[0].replace(exp,rep);
      return `$${arr[1] ? arr.join('.'): arr[0]}`;
    }
  }
  
  const calculateSubtotal = (
    productQuantity,
    productPrice,
    discountPercentage
  ) => {
    const productQuantity_ = isNaN(productQuantity)
      ? 0
      : parseInt(productQuantity);
    const productPrice_ = isNaN(productPrice) ? 0 : parseFloat(productPrice);
    const discountPercentage_ = isNaN(discountPercentage)
      ? 0
      : parseFloat(discountPercentage) / 100;
    return (
      productQuantity_ *
      productPrice_ *
      (1 - discountPercentage_)
    ).toFixed(2);
  };



  const deleteItemCard = (itemObject) => {
    let newConfig = {...configuration};
    // console.log(itemObject)
    let newSystems = JSON.parse( JSON.stringify( systems ) );
        // Impresion en consola para Test
        // console.log(listProductPrices)
        let productsList = [];
        let objectProductList = [];
        const newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
        newQuoteCopy.systems.map( goConfig1 => 
          goConfig1.configuration.map( goConfig2 => goConfig2.configuration.items.map( intoItems =>{
            ( goConfig1.productDescription === "Productos") && objectProductList.push( intoItems );
            productsList.push( intoItems.product.productCode );
          } 
        )));
        // Impresion en consola para Test
        // console.table(productsList)
        let newListProductPrices = [];
        // let productCodes = configuration.configuration.items.map(item => item.product.productCode)
        // Impresion en consola para Test
        // console.table(productCodes)
        if( listProductPrices ){
            listProductPrices.forEach(itemList => {
              if( itemList.productCode !== itemObject.productCode || productsList.indexOf(itemObject.productCode) !== productsList.lastIndexOf(itemObject.productCode)){
                newListProductPrices.push(itemList);
              }
            })
            // Impresion en consola para Test
            // console.log(newListProductPrices)
            dispatch(deleteElementListProductPrices(newListProductPrices));
        }
        // Impresion en consola para Test
        // console.log(system.idItem)
        newConfig = { 
          ...newConfig,
          configuration: {
            ...newConfig.configuration,
              items: configuration.configuration.items.filter(item => item.product.productCode !== itemObject.productCode)
          }
        }
    // newConfig.configuration.items  = configuration.configuration.items.filter(item => item.product.productCode !== itemObject.productCode)
    // Impresion en consola para Test
    // console.log(newConfig)
    newSystems = newSystems.map( item=> {
      if(item.idItem === system.idItem){
        item.configuration = [newConfig];
      }
      return item;
    })
    setSubTotalItem( subTotalItem.filter( item => item.productCode !== itemObject.productCode ) )


    // console.log(newSystems)
    // setChangeOldProductList(true);
    dispatch( updateSystemsNewQuote(newSystems))
    
    oldProductList && setNewQuoteDeleteItem(true);

    
    }
  
  


  const calculateGlobalSubtotal = () => {
    if(configuration.configuration.items.length > 0){
      const subTotals = configuration.configuration.items.map((item) =>
        parseFloat(
          calculateSubtotal(
            item.productQuantity,
            item.product.productPrice >= 0  && !isNaN(item.product.productPrice) && item.product.productPrice !== null ? item.product.productPrice  : Number(item.productPrice),
            item.product && !_.isNil(item.product.discountPercentage) ? item.product.discountPercentage : item.discountPercentage
          )
        )
      );

      const subTotal = _.reduce(subTotals, function (sum, n) {
        return sum + n;
      }).toFixed(2); 

      const globalDiscountPercentage = isNaN(
        configuration.configuration.globalDiscountPercentage
      )
        ? 0
        : parseFloat(configuration.configuration.globalDiscountPercentage) / 100
        ;
          setGlobalSubtotal({
          subTotal: subTotal,
          globalDiscountPercentage: (subTotal * globalDiscountPercentage).toFixed(
            2
          ),
          subtotal2: (subTotal * (1 - globalDiscountPercentage)).toFixed(2),
          iva: (subTotal * (1 - globalDiscountPercentage) * 0.16).toFixed(2),
          total: (subTotal * (1 - globalDiscountPercentage) * 1.16).toFixed(2),

          
        });
    }else if(configuration.configuration.items.length === 0){
      setGlobalSubtotal({
        subTotal: 0,
        globalDiscountPercentage: 0,
        subtotal2: 0,
        iva: 0,
        total: 0,
      });
      
    }
  };


  useEffect(() => {
    if (
      configuration &&
      configuration.configuration &&
      configuration.configuration.items
    ) {
      calculateGlobalSubtotal();
    }
  }, [configuration]);

  useEffect(() => {
    if (globalSubtotal && globalSubtotal.total ) {
      handleCardQouteChange(
        {
          target: {
            name: 'globalTotal',
            value: globalSubtotal.total,
          },
        },
        systemIndex,
        configurationIndex,
        0
      );
      handleCardQouteChange(
        {
          target: {
            name: 'globalSubTotal',
            value: globalSubtotal.subTotal,
          },
        },
        systemIndex,
        configurationIndex,
        0
      );
    }
  }, [globalSubtotal.total]);

  const renderItem = (item, index) => {
    const product = item.product || {};
   if(_.isNil(product.discountPercentage)) {
    //product.discountPercentage = item.discountPercentage
   }
    //product.discountPercentage = item.discountPercentage
    return (
      <div key={item.id} className={'tableBody'}>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p>
            {
              !orden_solicitada_1 &&
              <input
                className={'form-inputs'}
                // id={'productQuantity'}
                name={'productQuantity'}
                type="number"
                value={item.productQuantity}
                autoComplete="off"
                placeholder={item.productQuantity}
                min="1"
                onChange={(event) =>
                  handleCardQouteChange(
                    event,
                    systemIndex,
                    configurationIndex,
                    index
                  )
                }
              />
            }
            {
              orden_solicitada_1 &&
              item.productQuantity
            }
          </p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p>
            {/* {
              <input
                className={'form-inputs form-inputs-description'}
                id={'productDescription'}
                name={'productDescription'}
                type="text"
                autoComplete="off"
                placeholder={product.productDescription || 'Sin descripción'}
                value={product.productDescription}
                onChange={(event) =>
                  handleCardQouteChange(
                    event,
                    systemIndex,
                    configurationIndex,
                    index
                  )
                }
              />
            } */}
            {`${product.productCode} ${product.productDescription}` || 'Sin descripción'}
          </p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p>
            {
              !orden_solicitada_1 &&
              <FormsInputs                 
                className={'form-inputs'}
                // id={'productPrice'}
                name={'productPrice'}
                autoComplete="off"
                value={ subTotalItem && subTotalItem.length !== 0 && (
                  // console.log(item),
                  // console.log(index),
                  // console.log(subTotalItem[index]),
                  // console.log(subTotalItem),
                  subTotalItem[index] 
                  ) }
                productItem={item}
                setIsInputZeroValid={setIsInputZeroValid}
                itemIndex={index}
                subTotalItem={subTotalItem}
                onChange={ (value, productItem ) =>{ 
                  if( subTotalItem && subTotalItem.length !== 0 ){
                    if(isInputZeroValid === "NoValid" && productItem.productPrice !== 0  ){
                      setIsInputZeroValid('valid')
                    }
                    // console.log(isInputZeroValid === 'valid' && productItem.productPrice !== 0 && productItem.productPrice !== null && parseFloat(value.value) === 0)
                    handleCardQouteChange(
                      {
                        target: {
                          value: value.value,
                          isZero: isInputZeroValid === 'valid' && productItem.productPrice !== 0 && productItem.productPrice !== null && parseFloat(value.value) === 0,
                          name: 'productPrice'
                        } 
                      },
                      systemIndex,
                      configurationIndex,
                      index
                    )
                  }else if(!subTotalItem || subTotalItem && subTotalItem.length === 0){
                    handleCardQouteChange(
                        {
                          target: {
                            name: 'globalTotal',
                            value: 0,
                          },
                        },
                        systemIndex,
                        configurationIndex,
                        0
                      );
                      handleCardQouteChange(
                        {
                          target: {
                            name: 'globalSubTotal',
                            value: 0,
                          },
                        },
                        systemIndex,
                        configurationIndex,
                        0
                      );
                  }
                  !newQuoteDeleteItem && (
                    setSubTotalItem( subTotalItem && subTotalItem.length !== 0 && subTotalItem.map((item) => {
                    if(productItem.product.productCode === item.productCode){
                      return{
                        productPrice: parseFloat(value.value),
                        productCode: item.productCode
                      };
                    }
                    return item;
                    })))
                }}
              />
            }
            {
              orden_solicitada_1 && (
                item.product.productPrice >= 0 && item.product.productPrice !== null ?
                Number(product.productPrice).toLocaleString(
                                'en-US',
                                {
                                  style: 'currency',
                                  currency: 'USD',
                                  currencyDisplay: 'symbol',
                                }
                              )|| '$0.00'
              :
              handleChangeIntoTypeOfMoney(item.productPrice)|| '$0.00')
            }
          </p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p>
            {
              !orden_solicitada_1 &&
              <input
                className={'form-inputs'}
                // id={'discountPercentage'}
                name={'discountPercentage'}
                autoComplete="off"
              //   placeholder={
              //     item.product.discountPercentage 
              //   ?  `${product.discountPercentage}%` || '0%'
              //   : `${item.discountPercentage}%` || '0%'
              // }
                value={
                  product.discountPercentage
                   ? `${product.discountPercentage}%`
                   : (product.discountPercentage === 0 ? `${product.discountPercentage}%` :`${item.discountPercentage}%`)
                } // Creo que esto est mal, se debe guardar ese decuento igual que el precio ( ? ) es decir, solo cuando se edita y no cuando es modo 'lista de precio' 
                onChange={(event) =>
                  handleCardQouteChange(
                    event,
                    systemIndex,
                    configurationIndex,
                    index
                  )
                }
              />
            }
            {
              orden_solicitada_1 &&
              (
                item.product.discountPercentage ?
                  `${product.discountPercentage}%` || '0%'
                : `${item.discountPercentage}%` || '0%'
              )
            }
          </p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p>
          
            { 
              product.productPrice > 0 || isNaN(product.productPrice) && item.productPrice || product.productPrice === null && item.productPrice
              ? handleChangeIntoTypeOfMoney(
                calculateSubtotal(
                  item.productQuantity,
                  product.productPrice || item.productPrice,
                  item.product && !_.isNil(item.product.discountPercentage) ? item.product.discountPercentage : item.discountPercentage
                )
              )
              : product.productPrice === 0 && `$${product.productPrice}.00` || `$${item.productPrice}.00`
                
            }
          </p>
        </div>
        {
          !orden_solicitada_1 &&
          <button className='delete_button' onClick={() => {deleteItemCard(product)}} >
            <CloseIcon></CloseIcon>
          </button>

        }
      </div>
    );
  };

  const renderGlobalPrice = () => {
    return (
      <div className={'tableBody'}>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={'element priceResumenContainer'}>
          <p className={'title'}>Subtotal</p>
          {/* <p
            className={'title'}
            style={{ maxWidth: '130px', minWidth: '100px' }}
          >
            <span>Desc.</span>
            {edit ? (
              <input
                className={'form-inputs'}
                style={{ width: '40%', marginLeft: '18px' }}
                id={'globalDiscountPercentage'}
                name={'globalDiscountPercentage'}
                type="number"
                autoComplete="off"
                placeholder="-"
                min="0"
                max="100"
                value={configuration.configuration.globalDiscountPercentage}
                onChange={(event) =>
                  handleCardQouteChange(
                    event,
                    systemIndex,
                    configurationIndex,
                    -1
                  )
                }
              />
            ) : (
              `${configuration.configuration.globalDiscountPercentage}%`
            )}
          </p> */}
          {/* <p className={'title'}>Subtotal</p> */}
          <p className={'title'}>IVA</p>
          <p className={'title'}>Total</p>
        </div>
        <div className={'element priceResumenContainer'}>
          <p className={'value'}>{globalSubtotal.subTotal === 0 ? `$${globalSubtotal.subTotal}.00` :handleChangeIntoTypeOfMoney(globalSubtotal.subTotal)}</p>
          {/* <p className={'value'}>{handleChangeIntoTypeOfMoney(globalSubtotal.globalDiscountPercentage)}</p> */}
          {/* <p className={'value'}>{handleChangeIntoTypeOfMoney(globalSubtotal.subtotal2)}</p> */}
          <p className={'value'}>{globalSubtotal.iva === 0 ? `$${globalSubtotal.iva}.00` :handleChangeIntoTypeOfMoney(globalSubtotal.iva)}</p>
          <p className={'value'}>{globalSubtotal.total === 0 ? `$${globalSubtotal.total}.00` :handleChangeIntoTypeOfMoney(globalSubtotal.total)}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={'whiteCardBase'}>
        <div className={'whiteCardContent'}>
          <div className={'titleContent'}>
            <p>
              {
                system.productDescription && 
                  `${ system.productDescription}`
              }
              {
                configuration.configuration.name && 
                  `- ${ configuration.configuration.name}`
              }
                
            </p>
          </div>
          {
            !orden_solicitada_1 &&
              <div className='discountInputToCard'>
                  <input 
                    type="num"
                    className="discountInputToCard_input"
                    placeholder="0% Dto"
                    name={'globalDiscountCart'}
                    value={globalDiscountCart && globalDiscountCart.valueToInput
                        ? `${globalDiscountCart.valueToInput}%`
                        : ''}
                    onChange= {({target}) => setGlobalDiscountCart(
                      (parseFloat(target.value.replace(/[%.]/g,'')) < 100 && parseFloat(target.value.replace(/[%.]/g,'')) >= 0)?{
                      valueToInput: parseFloat(target.value.replace(/[%.]/g,'')),
                      valueToTarget: target.value}
                      : {
                      valueToInput: 0,
                      valueToTarget: '0%'})}
                  />
              </div>
          }
          <div className={'tableContent'}>
            <div className={'tableHeader'}>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Cantidad</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Descripción</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>
                  Precio Unit.
                </p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Descuento</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Subtotal</p>
              </div>
            </div>

            {
              configuration &&
              configuration.configuration &&
              configuration.configuration.items &&
              configuration.configuration.items.map((item, index) =>
                {
                  {/* console.log(configuration.configuration.items) */}
                  return renderItem(item, index);
                }
              )}
            {renderGlobalPrice()}
          </div>
        </div>
        {
          !orden_solicitada_1 &&
          <div className={'deletButton'} onClick={toggleModal}>
            <CloseIcon></CloseIcon>
          </div>

        }
        {/* Agregar funcionalidad para agregar nuevo profucto a card y que no se cree un nuevo card */}
        {
          !orden_solicitada_1 &&
          <button className={'addButton'} onClick={addProductToCard}>
            <AddIcon />
          </button>

        }
      </div>
      {deleteProduct && (
        <QuoteFinishedModal
          isOpen={!!deleteProduct}
          toggle={toggleModal}
          system={system}
          configuration={configuration}
        />
      )}
    </div>
  );
};

CardQuoteFinished.propTypes = {
  system: PropTypes.any,
  edit: PropTypes.any,
  systemIndex: PropTypes.any,
  configurationIndex: PropTypes.any,
  configuration: PropTypes.any,
  handleCardQouteChange: PropTypes.any,
  newQuote: PropTypes.any,
  setNewQuoteDeleteItem: PropTypes.any,
  oldProductList: PropTypes.any,
  changeOldProductList: PropTypes.any,
  newQuoteDeleteItem: PropTypes.any,
  setIsActiveHandleSetProducts: PropTypes.any,
  isInputZeroValid: PropTypes.any,
  setIsInputZeroValid: PropTypes.any,
  isActiveHandleSetProducts: PropTypes.any,
};

