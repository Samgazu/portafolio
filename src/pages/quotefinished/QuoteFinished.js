import React, { useState, useEffect } from 'react';
import './sass/styles.scss';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
/* eslint-disable import/no-unresolved */
import { NavLink, Redirect} from 'react-router-dom';
import { CardQuoteFinished } from '../../components/cardquotefinished/CardQuoteFinished';
import { useSelector, useDispatch } from 'react-redux';
import { QuoteGeneralInfo } from './QuoteGeneralInfo';
import { updateNewQuote} from '../../actions/newQuoteAction';
import { CardQuoteDescription } from '../../components/cardquotefinished/CardQuoteDescription';
import { QuoteNameModal } from './modal/QuoteNameModal';

export const QuoteFinished = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('quote');
  const newQuote = useSelector((state) => state.newQuote);
  const [configs, setConfigs] = useState([]);
  const [globalTotal, setGlobalTotal] = useState(0);
  const specificDescriptionQuotation = useSelector(state => state.newQuote.SpecificDescriptionQuotationItems);

  const [globalDiscountPercentage2, setGlobalDiscountPercentage2] = useState(0);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeIntoTypeOfMoney = (number) => {
    if (number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      let arr = number.toString().split('.');
      arr[0] = arr[0].replace(exp, rep);
      return `$${arr[1] ? arr.join('.') : arr[0]}`;
    }
    return `$${0}`;
  };

  const [openModal, setOpenModal] = useState(null);
  const toggleModal = () => {
      setOpenModal(null);
  };


  const renderCardQuoteFinished = (c) => {
    return (
      <CardQuoteFinished
        systemIndex={c.systemIndex}
        system={c.system}
        configurationIndex={c.configurationIndex}
        configuration={c.configuration}
        handleCardQouteChange={handleCardQouteChange}
        edit={value === 'description'}
      />
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

  const calculateTotal = () => {
    
    // Usaremos **configs** para hacer todo más facil
    const subTotals = configs.map((item) =>
      parseFloat(item.configuration.configuration.globalSubTotal || 0)
    );
    const subTotal = _.reduce(subTotals, function (sum, n) {
      return sum + n;
    }).toFixed(2);
    const globalDiscountPercentage = isNaN(globalDiscountPercentage2)
      ? 0
      : parseFloat(globalDiscountPercentage2) / 100;
    setGlobalTotal({
      subTotal: (subTotal),
      globalDiscountPercentage: (subTotal * globalDiscountPercentage).toFixed(
        2
      ),
      subtotal2: (subTotal * (1 - globalDiscountPercentage)).toFixed(2),
      iva: (subTotal * (1 - globalDiscountPercentage) * 0.16).toFixed(2),
      total: (subTotal * (1 - globalDiscountPercentage) * 1.16).toFixed(2),
    });
  };

  const calculateSubTotal = (item) => {
    const productQuantity_ = isNaN(parseFloat(item.productQuantity)) ? 0 : parseInt(item.productQuantity);
    const productPrice_ = isNaN(parseFloat(item.productPrice)) ? 0 : parseFloat(item.productPrice);
    const discountPercentage_ = isNaN(parseFloat(item.discountPercentage)) ? 0 : parseFloat(item.discountPercentage) / 100;
    return (productQuantity_ * productPrice_ * ( 1 - discountPercentage_)).toFixed(2)
  }

  const calculateGlobalSubtotalToSpecificDescriptionQuotation = () => {
    let subTotals = 0;
    let subTotal = 0;
    let globalDiscountPercentage = 0;
    if(specificDescriptionQuotation && specificDescriptionQuotation.values && specificDescriptionQuotation.values.length > 0){
      subTotals = specificDescriptionQuotation.values.map((item) => parseFloat(calculateSubTotal(item)));
      subTotal = _.reduce(subTotals, function(sum,n) { return sum+n; }).toFixed(2);
      let globalDiscountPercentageNumber = 0;
      specificDescriptionQuotation.values.map((item) => globalDiscountPercentageNumber += parseFloat(item.discountPercentage));
      globalDiscountPercentage = isNaN(specificDescriptionQuotation.values) ? 0 : parseFloat(globalDiscountPercentageNumber) / 100;
      setGlobalTotal({
        subTotal: subTotal,
        globalDiscountPercentage: (subTotal * globalDiscountPercentage).toFixed(2),
        subtotal2: (subTotal * (1 - globalDiscountPercentage)).toFixed(2),
        iva: (subTotal * (1 - globalDiscountPercentage) * 0.16).toFixed(2),
        total: (subTotal * (1 - globalDiscountPercentage) * 1.16).toFixed(2), 
      });
    }else{
      setGlobalTotal({
        subTotal: 0,
        globalDiscountPercentage: 0,
        subtotal2: 0,
        iva: 0,
        total: 0, 
      });
    }

  };


  const handleCardQouteChange = (
    event,
    systemIndex,
    configurationIndex,
    productIndex
  ) => {
    let newQuoteCopy = JSON.parse(JSON.stringify(newQuote));

    switch (event.target.name) {
      // No sobre productor
      case 'productQuantity':
        newQuoteCopy.systems[systemIndex].configuration[
          configurationIndex
        ].configuration.items[productIndex][event.target.name] = parseInt(
          event.target.value || 0
        );
        break;

      case 'globalDiscountPercentage':
      case 'globalTotal':
        newQuoteCopy.systems[systemIndex].configuration[
          configurationIndex
        ].configuration[event.target.name] = parseFloat(
          event.target.value || 0
        );
        break;

      // Sobre producto
      case 'productDescription':
        newQuoteCopy.systems[systemIndex].configuration[
          configurationIndex
        ].configuration.items[productIndex].product[event.target.name] =
          event.target.value;
        break;

        case 'productPrice':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration.items[productIndex].product[event.target.name] =
            event.target.value;
          break;

        case 'discountPercentage':
          newQuoteCopy.systems[systemIndex].configuration[
            configurationIndex
          ].configuration.items[productIndex].product[event.target.name] =
            event.target.value;
          break;

      /// a mejorar
      case 'globalDiscountPercentage2':
        setGlobalDiscountPercentage2(parseFloat(event.target.value));
        break;
    }

    dispatch(updateNewQuote(newQuoteCopy));
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
      setConfigs(configs);
    }
  }, [newQuote]);

  useEffect(() => {
    if (configs && configs.length > 0 
        && !specificDescriptionQuotation ) {
      calculateTotal();
    }else if( specificDescriptionQuotation 
              && specificDescriptionQuotation.values 
              && specificDescriptionQuotation.values.length > 0){
      calculateGlobalSubtotalToSpecificDescriptionQuotation();
    }
  }, [configs]);

  /*
  useEffect(() => {
    if(globalSubtotal && Object.keys(globalSubtotal).length > 0) {
      // Hay que mandar el TOTAL al padre para que lo mande al redux
     // hay que validar que funciones!
      handleCardQouteChange({
        target: {
          name: 'globalTotal',
          value: globalSubtotal.total,
        }
      },systemIndex,configurationIndex, 0);
    }
  }, [globalSubtotal.total]);
*/


  if (newQuote.created) {
    return <Redirect to={`/orden_solicitada`} />; // Esta direccion podría cambiar
  }

  return (
    <div className={'quote_finished_c'}>
      <SubNavBarComponent title={'Cotizar productos'} saveQuote={'SAVEQUOTE'} historyPage={`/cotizaciones/datos`} searchActive={true} />
      <div className={'quote_general_c'}>
        <div className={'quotePrincipalContent'}>
          <div className={'quoteGeneralInfo'}>
            <QuoteGeneralInfo newQuote={newQuote} />
          </div>
          <div className={'quoteDescription-c'}>
            <div className={'quoteDescription'}>
              {/*
                    newQuote && newQuote.systems && newQuote.systems.map( item => {
                      return <CardQuoteFinished system={item} edit={value === 'description'}/>;
                    })
                    */}

              {(!specificDescriptionQuotation)
                && configs && configs.map((c) => renderCardQuoteFinished(c))}
              {   (specificDescriptionQuotation && specificDescriptionQuotation.values && specificDescriptionQuotation.values.length > 0)
                    &&renderCardQuoteDescription()}
              <div className={'priceContent'}>
                <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>Subtotal</p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(globalTotal.subTotal)}
                    </p>
                  </div>
                </div>
                {/* <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>
                      Desc.
                      {value === 'description' ? (
                        <input
                          className={'form-inputs'}
                          id={'globalDiscountPercentage2'}
                          name={'globalDiscountPercentage2'}
                          type="number"
                          autoComplete="off"
                          placeholder="-"
                          value={globalDiscountPercentage2}
                          onChange={(event) =>
                            handleCardQouteChange(event, -1, -1, -1)
                          }
                        />
                      ) : (
                        ` ${globalDiscountPercentage2}%`
                      )}
                    </p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(
                        globalTotal.globalDiscountPercentage
                      )}
                    </p>
                  </div>
                </div> */}
                {/* <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>Subtotal</p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(globalTotal.subtotal2)}
                    </p>
                  </div>
                </div> */}
                <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>IVA</p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(globalTotal.iva)}
                    </p>
                  </div>
                </div>
                <div className={'priceElements'}>
                  <div className={'element'}>
                    <p className={'title'}>Total</p>
                    <p className={'value'}>
                      {handleChangeIntoTypeOfMoney(globalTotal.total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={'buttonsContent'}>
              <NavLink
                className="quote-finished-button"
                to={`/cotizaciones`}
              >
                <span className="quote-item-button-name"> Añadir sistema </span>
              </NavLink>
{/*               
                  <NavLink
                    className="quote-finished-button quote-back-invert"
                    to={`/orden_solicitada`}
                  >
                    <span className="quote-item-button-name"> Continuar </span>
                  </NavLink>
                  */}

              <a
                className="quote-finished-button quote-back-invert"
                onClick={ () => setOpenModal("QuoteName") }
              >
                <span className="quote-item-button-name"> Continuar </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        openModal === "QuoteName" &&
        <QuoteNameModal
          isOpen
          globalTotal={globalTotal}
          toggle={toggleModal}
        />
      }
    </div>
  );
};
