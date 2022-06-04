import React, { useEffect, useState } from 'react';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { Redirect, useHistory } from 'react-router-dom';
import '../../pages/quotefinished/sass/styles.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/* eslint-disable import/no-unresolved */
import { CardQuoteFinished } from '../../components/cardquotefinished/CardQuoteFinished';
import { CardQuoteDescription } from '../../components/cardquotefinished/CardQuoteDescription';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateNewQuote,
  updateSystemsNewQuote,
} from '../../actions/newQuoteAction';
import { PriceListModal } from './PriceListModal';
import './sass/styles.scss';
import Swal from 'sweetalert2';
import _ from 'lodash';
import { getPricesLists } from '../../actions/systemsAction';
import { setPriceList } from '../../actions/JSON/listPriceJSON';

// import  './sass/styles.sass';

export const QuoteOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState('quote');
  const [configs, setConfigs] = useState([]);
  const [globalTotal, setGlobalTotal] = useState(0);
  const newQuote = useSelector((state) => state.newQuote);
  // const [itemsToConfigs, setItemsToConfigs] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [listPricesProducts, setListPricesProducts] = useState(null);
  const [redirectToCotizations, setRedirectToCotizations] = useState(false);
  const [isActiveHandleSetProducts, setIsActiveHandleSetProducts] = useState(false);

  const [listProductPrices, setListProductPrices] = useState(newQuote.listProductPrice);
  useEffect(() => {
    setListProductPrices(newQuote.listProductPrice);
    // alert(JSON.stringify(newQuote.listProductPrice))
  }, [newQuote.listProductPrice])

  const listPrices = useSelector(
    (state) => state.newQuote.priceList
  );
  const [oldProductList, setOldProductList] = useState(listPrices);
  const [changeOldProductList, setChangeOldProductList] = useState(null);
  const [isInputZeroValid, setIsInputZeroValid] = useState('NoValid');

  const priceList = useSelector(
    (state) => state.newQuote.priceList
    );
  const system = useSelector(
    (state) => state.systems
  );
  const [newQuoteDeleteItem, setNewQuoteDeleteItem] = useState();
  const [updatePrice, setUpdatePrice] = useState(0);
  const [globalTotalToSystem, setglobalTotalToSystem] = useState([]);
  let productsList = [];
  let newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
  useEffect(() => {
    (oldProductList && listPrices) 
      &&  setChangeOldProductList(oldProductList && oldProductList.id !== listPrices.id);
  }, [listPrices])


  useEffect(() => {
    if( system.productListPrices && system.productListPrices.length !== listPricesProducts ){
      setListPricesProducts(system.productListPrices.length)
      dispatch(setPriceList());
    }
  }, [system.productListPrices]);

  
  const handleAddSystem = () => {
    history.replace(`/cotizaciones`);
  }
  const handleChangeIntoTypeOfMoney = (number) => {
    if (number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      let arr = number.toString().split('.');
      arr[0] = arr[0].replace(exp, rep);
      return `$${arr[1] ? arr.join('.') : arr[0]}`;
    }
  };
  useEffect(() => {
    if(globalTotalToSystem.systems)  {
      dispatch(updateSystemsNewQuote(globalTotalToSystem.systems));
    }
  }, [globalTotalToSystem]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  const handleSetProducts = async () => {
    let getProduct = [];
    newQuoteCopy.systems.map( goConfig1 => 
      goConfig1.configuration.map( goConfig2 => goConfig2.configuration.items.map( intoItems =>{
        getProduct.push( intoItems );
      } 
    )));
    const productCodeToList = listProductPrices && listProductPrices.map(item => item.productCode);
    
    // alert(oldProductList && oldProductList.id !== listPrices.id)
    
    // Utilizar para test
    // console.log(listProductPrices)
    // alert(JSON.stringify(oldProductList))
    // alert(JSON.stringify(listPrices))

    // alert(JSON.stringify(listProductPrices))
    // alert(JSON.stringify('PreValidate'))
    // alert(listProductPrices.length === 0)
    // alert(updatePrice )
    // alert(listProductPrices.length)
    // alert(listProductPrices && updatePrice !== listProductPrices.length && productsList.length !== 0 )
    // alert(oldProductList && oldProductList.tableCode !== listPrices.tableCode )
    if(listProductPrices && listProductPrices.length === 0){
      // Utilizar para test
      // alert('adios')
        getProduct.map((i) => {
          if( productCodeToList.indexOf(i.product.productCode) === -1 ){
            // alert(productCodeToList.indexOf(i.product.productCode) === -1)
            listProductPrices && setUpdatePrice(listProductPrices.length);
            // alert(JSON.stringify(oldProductList))
            // alert(oldProductList.tableCode !== listPrices.tableCode)
            // if(!oldProductList 
            //   || oldProductList && 
            //   oldProductList.tableCode !== listPrices.tableCode)
              {i.product.productPrice = null}
              setIsInputZeroValid(isInputZeroValid);
            return (i.productPrice = 0);
        }
      })
    }else if(listProductPrices){
      // Utilizar para test
      // alert('hola')
      // alert(oldProductList && oldProductList.tableCode !== listPrices.tableCode )
      // alert(!oldProductList && !listPrices )
      getProduct.map((i) =>{
        listProductPrices.map((item) => {
              if (i.product.productCode === item.product.productCode) {
                listProductPrices && setUpdatePrice(listProductPrices.length);
                // alert(oldProductList && oldProductList.tableCode !== listPrices.tableCode )
                if(oldProductList && oldProductList.tableCode !== listPrices.tableCode || !oldProductList){
                  i.product.productPrice = null;
                  setIsInputZeroValid(isInputZeroValid);
                  i.productPrice= 0;
                }
                // alert(`i.product.productPrice: ${i.product.productPrice} i.productPrice: ${i.productPrice}`);
                // alert(`productCode: ${i.product.productCode} productPrice: ${item.priceForSale}`);
                return (i.productPrice = item.priceForSale);
              }else if( productCodeToList.indexOf(i.product.productCode) === -1){
                listProductPrices && setUpdatePrice(listProductPrices.length);
                  if(oldProductList && oldProductList.tableCode !== listPrices.tableCode){
                    i.product.productPrice = null;
                  }
                  // alert(`${i.product.productPrice}`)
                  setIsInputZeroValid(isInputZeroValid);
                return (i.productPrice = 0);
              }
            });
      });
      // Si en la lista de precios no existen productos, se debera cambiar por 0 el valor de los elementos
    }
    // console.log(newQuoteCopy)
    listProductPrices && setUpdatePrice(listProductPrices.length);
    setOldProductList(listPrices);
    setIsActiveHandleSetProducts(true);
    // console.log(newQuoteCopy)
    return dispatch(updateNewQuote(newQuoteCopy));
  };

  useEffect(() => {
    newQuoteCopy.systems.map( goConfig1 => goConfig1.configuration&&
      goConfig1.configuration.map( goConfig2 => goConfig2.configuration.items.map( intoItems =>{
        productsList.push( intoItems );
      }
    )));
  }, [newQuote])

  // console.log(oldProductList)
  // console.log(listPrices)
  
  useEffect(() => { 
    if (  listProductPrices &&  updatePrice !== listProductPrices.length 
      ||  listProductPrices &&  listProductPrices.length !== 0 && updatePrice !== listProductPrices.length
      ||  listProductPrices &&  listProductPrices.length === 0 && oldProductList && oldProductList.tableCode !== listPrices.tableCode
      ||  listProductPrices &&  listProductPrices.length !== 0 && oldProductList && oldProductList.tableCode !== listPrices.tableCode
      ||  !oldProductList) {
      if(!newQuoteDeleteItem){
        handleSetProducts();
      }
      setNewQuoteDeleteItem(false);
    }
  }, [listProductPrices]);

  const handleValidateCardWithOutZero = async() => {
    const allPricesGlobalCard = await newQuoteCopy.systems.map( goConfig1 => 
      goConfig1.configuration.map( goConfig2 => goConfig2.configuration.globalTotal));
    if( allPricesGlobalCard.some(item => Number(item) === 0)){
      return true;
    }
      return false;
  }

  const handleValidateSelectList = async() => {
    if(!newQuote.data.priceList){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Lista de precio no seleccionada',
      });
    
    }
    else if(await handleValidateCardWithOutZero()){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se permiten sistemas con valor 0',
      });
    }
    else if (newQuote.data.priceList) {
        setUpdatePrice(0);
        history.push(`/cotizaciones/datos`);
    } 
  };
  // console.log(newQuote);
  
  const handleCardQouteChange = (
    event,
    systemIndex,
    configurationIndex,
    productIndex
  ) => {  
    if( newQuoteCopy ) {
      switch (event.target.name) {
        // No sobre productor
        case 'productQuantity':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration.items[productIndex][event.target.name] = 
          event.target.value >= 1 
            ? parseInt(event.target.value || 0)
            : 1
          break;

        case 'cardDiscountPercentage':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration[event.target.name] =
            event.target.value || 0;
          break;
        case 'globalTotal':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration[event.target.name] = parseFloat(
            event.target.value || 0
          );
          break;
        case 'globalSubTotal':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration[event.target.name] = parseFloat(
            event.target.value || 0
          );
          break;
        case 'globalIVA':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration[event.target.name] = parseFloat(
            event.target.value || 0
          );
          break;
        // Sobre producto
        case 'productDescription':
        // case 'productPrice':
            // newQuoteCopy.systems[systemIndex].configuration[
            //   configurationIndex
            // ].configuration.items[productIndex][event.target.name] =
            //   event.target.value.value || 0 ;
            break;

        case 'productPrice': {
          let toValidate = newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration.items[productIndex][event.target.name];
          // alert(event.target.isZero && toValidate !== 0)
          if( parseFloat(event.target.value) > 0 && event.target.value !== null && toValidate !== 0  
              || !oldProductList && event.target.value === null && toValidate !== 0 
              || event.target.isZero && toValidate !== 0
              || parseFloat(event.target.value) !== 0 && event.target.value !== null && toValidate === 0){
                // alert(event.target.value)
            newQuoteCopy.systems[systemIndex].configuration[
              configurationIndex
            ].configuration.items[productIndex].product[event.target.name] =
              parseFloat(event.target.value);
            }
          break;
        }

        case 'discountPercentage':
            newQuoteCopy.systems[systemIndex].configuration[
              configurationIndex
            ].configuration.items[productIndex].product[event.target.name] =
              (parseFloat(event.target.value.replace(/[%.]/g,'')) < 100 && parseFloat(event.target.value.replace(/[%.]/g,'')) >= 0)
              ? parseFloat(event.target.value.replace(/[%.]/g,''))
              :0
            break;

        default:
          // newQuoteCopy.systems[systemIndex].configuration[
          //   configurationIndex
          // ].configuration.items[productIndex].product[event.target.name] =
          //   event.target.value;
          break;

      }
      setglobalTotalToSystem(newQuoteCopy);
    }
  };

  const renderCardQuoteFinished = (c) => {
    return (
      <div style={{ minWidth: '48%', margin: '22px' }}>
        <CardQuoteFinished
          systemIndex={c.systemIndex}
          system={c.system}
          configurationIndex={c.configurationIndex}
          configuration={c.configuration}
          handleCardQouteChange={handleCardQouteChange}
          globalTotalToSystem={globalTotalToSystem}
          setNewQuoteDeleteItem={setNewQuoteDeleteItem}
          oldProductList={oldProductList}
          isInputZeroValid={isInputZeroValid}
          setIsInputZeroValid={setIsInputZeroValid}
          newQuoteDeleteItem={newQuoteDeleteItem}
          changeOldProductList={changeOldProductList}
          setIsActiveHandleSetProducts={setIsActiveHandleSetProducts}
          isActiveHandleSetProducts={isActiveHandleSetProducts}
          setChangeOldProductList={setChangeOldProductList}
          edit={value === 'description'}
        />
      </div>
    );
  };

  const renderCardQuoteDescription = () => {
    return (
      <div style={{ minWidth: '48%', margin: '22px' }}>
        <CardQuoteDescription
        />
      </div>
    );
  };
  // console.log(globalTotal)

  const calculateTotal = () => {
    
    // Usaremos **configs** para hacer todo más facil
    const subTotals = configs.map((item) =>{
      // console.log(item.configuration.configuration.globalTotal || 0)
      return parseFloat(item.configuration.configuration.globalTotal || 0)
    });
    const subTotal = _.reduce(subTotals, function (sum, n) {
      return sum + n;
    }).toFixed(2);
    setGlobalTotal(subTotal);
  };

  const togglePriceLIstModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    if (newQuote) {
      var configs = [];
      for (var i = 0; i < newQuote.systems.length; i++) {
        for (var j = 0; j < newQuote.systems[i].configuration.length; j++) {
          configs.push({
            systemIndex: i,
            system: newQuote.systems[i],
            configurationIndex: j,
            configuration: newQuote.systems[i].configuration[j],
          });
        }
      }
      // console.log(configs)
      setConfigs(configs);
      setRedirectToCotizations(configs.length === 0);
    }
  }, [newQuote, isActiveHandleSetProducts]);

  useEffect(() => {
    if (configs && configs.length > 0) {
      calculateTotal();
    }
  }, [configs, globalTotalToSystem]);

  if (redirectToCotizations) {
    return <Redirect to="/cotizaciones" />; // Esta direccion podría cambiar
  }
  return (
    <div className={'quote_finished_c'}>
      <SubNavBarComponent title={'Cotizar productos'} historyPage={`/cotizaciones`} searchActive={true} />
      <div className={'quote_general_c'}>
        <div className={'button_elements_content'}>
          <button
            className={'showProductListButton'}
            onClick={togglePriceLIstModal}
          >
            {
              !priceList
                ?('Lista de precios')
                :(`${priceList.description}`)
            }
          </button>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            className={'buttons_options'}
          >
            <FormControlLabel
              className={'radioButtonOptions'}
              value="quote"
              control={<Radio />}
              label="Cotización"
            />
            <FormControlLabel
              className={'radioButtonOptions'}
              value="description"
              disabled={listPrices ? false : true}
              control={<Radio />}
              label="Descripción específica"
            />
          </RadioGroup>

        </div>
        { value=='quote' &&
          <div className={'quotePrincipalContent'}>
            <div className={'quoteDescription1-c'}>
              <div className={'quoteDescription1'}>
                {configs && configs.map((c) => renderCardQuoteFinished(c))}
              </div>
              <div
                className={'priceContent'}
                style={{ position: 'absolute', bottom: '15vh' }}
              >
                <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>Total</p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(globalTotal)}
                    </p>
                  </div>
                </div>
              </div>
              <div className={'buttonsContent'}>
                <button
                  className="quote-finished-button"
                  onClick={handleAddSystem}
                >
                  <span className="quote-item-button-name"> Añadir sistema </span>
                </button>
                <button
                  className="quote-finished-button quote-back-invert"
                  onClick={handleValidateSelectList}
                >
                  <span className="quote-item-button-name"> Continuar </span>
                </button>
              </div>
            </div>
          </div>
        }
        {value=='description' && 
          <div className={'quotePrincipalContent'}>
          <div className={'quoteDescription1-c'}>
            <div className={'quoteDescription1'}>
              {renderCardQuoteDescription()}
            </div>
            <div
              className={'priceContent'}
              style={{ position: 'absolute', bottom: '15vh' }}
            >
              <div className={'priceElements'}>
                <div className={'element'}>
                  <p className={'title'}>Precio sugerido</p>
                  <p className={'value'}>
                    {handleChangeIntoTypeOfMoney(globalTotal)}
                  </p>
                </div>
              </div>
            </div>
            <div className={'buttonsContent'}>
              <button
                className="quote-finished-button"
                onClick={handleAddSystem}
              >
                <span className="quote-item-button-name"> Añadir sistema </span>
              </button>
              <button
                className="quote-finished-button quote-back-invert"
                onClick={handleValidateSelectList}
              >
                <span className="quote-item-button-name"> Continuar </span>
              </button>
            </div>
          </div>
        </div>
        }
      </div>

      {isOpen && <PriceListModal isOpen toggle={togglePriceLIstModal} />}
    </div>
  );
};

