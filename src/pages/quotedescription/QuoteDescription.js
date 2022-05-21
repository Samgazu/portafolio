import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getViewPdf } from '../../actions/systemsAction';
// import _, { toNumber } from 'lodash';
import { setQuoteToSchedule } from '../../actions/scheduleSurgeryAction';
import { DateFormat } from '../../components/shared/DateFormat';

export const QuoteDescription = () => {
  const { schedule, id, idStoreQuote,value,idCX} = useParams();
  const urlFacturacion = window.location.pathname.split('/')[1];
  const history = useHistory();
  const dispatch = useDispatch();
  const [quoteFinish, setQuoteFinish] = useState(null);
  /* const quotesFinishedItems = useSelector((state) => state.systems.quotesFinished);
  const searchQuotesFinished = useSelector((state) => state.systems.searchFinishQuote);
  const searchInAllFinishQuote = useSelector((state) => state.systems.searchInAllFinishQuote);
  const getQuoteToStoreView = useSelector((state) => state.storeHouse.QuoteToStoreView); */
  const list = useSelector((state) => state.systems.lista);
  const [quotesFinishedItems, setQuotesFinishedItems ]= useState(list);
  const [searchQuotesFinished, setSearchQuotesFinished] = useState(list);
  const [searchInAllFinishQuote, setSearchInAllFinishQuote] = useState(list);
  const getQuoteToStoreView = useSelector((state) => state.storeHouse.QuoteToStoreView);





  const [globalSubtotal, setGlobalSubtotal] = useState({});
  const [getProducts, setGetProducts] = useState([]);

  // console.warn({schedule});
  // console.warn({id});
  // console.warn({idStoreQuote});
  useEffect(() => {
    
    if(urlFacturacion !==  'facturacion' && !idStoreQuote){
      
      if( quotesFinishedItems.filter((item) => item.id === parseInt(id) ).length !== 0){
        let [quote] = quotesFinishedItems.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }else if(searchQuotesFinished.filter((item) => item.id === parseInt(id) ).length !== 0){
        let [quote] = searchQuotesFinished.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }
    }else if(urlFacturacion ===  'facturacion' && !idStoreQuote){
      
      if(quotesFinishedItems && quotesFinishedItems.filter((item) => item.id === parseInt(id) ).length !== 0){
       
        let [quote] = quotesFinishedItems.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }else if(searchInAllFinishQuote && searchInAllFinishQuote.filter((item) => item.id === parseInt(id) ).length !== 0){
        
        let [quote] = searchInAllFinishQuote.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }
    }
    else if(urlFacturacion ===  'facturacion2' && value){
      if( quotesFinishedItems.filter((item) => item.id === parseInt(id) ).length !== 0){
        let [quote] = quotesFinishedItems.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }else if(searchInAllFinishQuote.filter((item) => item.id === parseInt(id) ).length !== 0){
        let [quote] = searchInAllFinishQuote.filter((item) => item.id === parseInt(id));
        return setQuoteFinish(quote);
      }
    }
  }, [])

  useEffect( () => {
    if(idStoreQuote && getQuoteToStoreView){
      return setQuoteFinish(...getQuoteToStoreView);
    }
  }, [getQuoteToStoreView])

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
  // console.log(parseFloat(quoteFinish.realPrice).toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol' }))
  const [dateToQuote, setDateToQuote] = useState('');
  const [dateToQuoteOfer, setDateToQuoteOfer] = useState('');

  useEffect(() => {
    if(quoteFinish){
      if (
        quoteFinish.quotationItems.length > 0 &&
        quoteFinish.specificDescriptionQuotationItems.length === 0
      ) {
        setGetProducts(quoteFinish.quotationItems);
      } else if (quoteFinish.specificDescriptionQuotationItems.length > 0) {
        setGetProducts(quoteFinish.specificDescriptionQuotationItems);
      }
    }
  }, [quoteFinish]);

  useEffect(() => {
    if(quoteFinish){
      quoteFinish.currentDate &&
        setDateToQuote(DateFormat(quoteFinish.currentDate));
      quoteFinish.quotationExpirationDate &&
        setDateToQuoteOfer(DateFormat(quoteFinish.quotationExpirationDate));
    }
  }, [quoteFinish]);

  const handleChangeIntoTypeOfMoney = (number) => {
    if (number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      let arr = number.toString().split('.');
      arr[0] = arr[0].replace(exp, rep);
      return `$${arr[1] ? arr.join('.') : arr[0]}`;
    }
  };

  const calculateGlobalSubtotal = () => {
    let subTotals = 0;
    let subTotal = 0;
    let globalDiscountPercentage = 0;
    if (
      quoteFinish.quotationItems.length > 0 &&
      quoteFinish.specificDescriptionQuotationItems.length === 0
    ) {
      subTotals = quoteFinish.quotationItems.map((item) =>
        parseFloat(
          calculateSubtotal(
            item.productQuantity,
            item.productPrice,
            item.discountPercentage
          )
        )
      );
      subTotal = _.reduce(subTotals, function (sum, n) {
        return sum + n;
      }).toFixed(2);
      globalDiscountPercentage = isNaN(
        quoteFinish.quotationItems.globalDiscountPercentage
      )
        ? 0
        : parseFloat(quoteFinish.quotationItems.globalDiscountPercentage) / 100;
    } else if (quoteFinish.specificDescriptionQuotationItems.length > 0) {
      subTotals = quoteFinish.specificDescriptionQuotationItems.map((item) =>
        parseFloat(
          calculateSubtotal(
            item.productQuantity,
            item.productPrice,
            item.discountPercentage
          )
        )
      );
      subTotal = _.reduce(subTotals, function (sum, n) {
        return sum + n;
      }).toFixed(2);
      let globalDiscountPercentageNumber = 0;
      quoteFinish.specificDescriptionQuotationItems.map(
        (item) =>
          (globalDiscountPercentageNumber += parseFloat(
            item.discountPercentage
          ))
      );
      globalDiscountPercentage = isNaN(
        quoteFinish.specificDescriptionQuotationItems
      )
        ? 0
        : parseFloat(globalDiscountPercentageNumber) / 100;
    }
    setGlobalSubtotal({
      subTotal: subTotal,
      globalDiscountPercentage: (subTotal * globalDiscountPercentage).toFixed(
        2
      ),
      subtotal2: (subTotal * (1 - globalDiscountPercentage)).toFixed(2),
      iva: (subTotal * (1 - globalDiscountPercentage) * 0.16).toFixed(2),
      total: (subTotal * (1 - globalDiscountPercentage) * 1.16).toFixed(2),
    });
  };

  useEffect(() => {
    if (quoteFinish && quoteFinish.quotationItems) {
      calculateGlobalSubtotal();
    }
  }, [quoteFinish]);

  const getPDFByIDQuote = (quoteID) => {
    dispatch(getViewPdf(quoteID));
  };

  const setQuoteToScheduleFunction = () => {
    dispatch(setQuoteToSchedule(quoteFinish));
    history.push('/ProgramarCX');
  };
  //  useEffect(() => {
  //    if(quoteFinish) {
  //      var configs = [];
  //        for ( var i = 0; i < quoteFinish.quotationItems[i].configuration.length ; i++ ) {
  //            configs.push({
  //              systemIndex: i,
  //              system: newQuote.systems[i],
  //              configurationIndex: j,
  //              configuration: newQuote.systems[i].configuration[j],
  //            });
  //        }
  //      setConfigs(configs);
  //    }
  //  },[quoteFinish]);

  return (
    <>
    {
      quoteFinish&&
      <div className={'quote_description_c'}>
      {
        urlFacturacion !== 'facturacion' && !schedule&& !idStoreQuote&&
          <SubNavBarComponent
            searchActive={true}
            typeSearch={'FINISHQUOTE'}
            historyPage={`/cotizaciones_finalizadas`}
            title={`Cotización #${quoteFinish.id}`}
          />
      }
      {
        urlFacturacion === 'facturacion' && !schedule&& !idStoreQuote && 
          <SubNavBarComponent
            searchActive={false}
            typeSearch={'FINISHQUOTE'}
            historyPage={`/facturacion`}
            title={`Cotización #${quoteFinish.id}`}
          />
      }{
        urlFacturacion === 'facturacion2' &&
          <SubNavBarComponent
            searchActive={false}
            typeSearch={'FINISHQUOTE'}
            historyPage={`/ATQ_Inicio/Rep_Con/Report/${value}/${idCX}`}
            title={`Cotización #${quoteFinish.id}`}
          />
      }
      {
        urlFacturacion !== 'facturacion' && !schedule&& idStoreQuote &&
          <SubNavBarComponent
            searchActive={false}
            historyPage={`/StoreHouse/StoreHouseApproveOrder`}
            title={`Cotización #${quoteFinish.id}`}
          />
      }
      {
        urlFacturacion !== 'facturacion' && schedule&&
          <SubNavBarComponent
            searchActive={false}
            historyPage={`/CotizacionesFinalizadas`}
            title={`Cotización #${quoteFinish.id}`}
          />
      }
        <div className={'quote_description_base'}>
          <div className={'twoColumns'}>
            <div className={'element'}>
              <div className={'quoteData'}>
                {/* <div className={'elementQuoteData'}>
                  <div className={'title'}>Tipo de CX</div>
                  <div className={'value'}>Cervical</div>
                </div> */}
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Fecha</div>
                  <div className={'value'}>{`${
                    quoteFinish.currentDate && dateToQuote
                  }`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>ATN</div>
                  <div className={'value'}>
                    {quoteFinish.client && (
                      <span className="extra-button-information">
                        {quoteFinish.client.clientName}
                      </span>
                    )}
                    {quoteFinish.medic && (
                      <span className="extra-button-information">
                        {quoteFinish.medic.name} {quoteFinish.medic.secondName} {quoteFinish.medic.firstLastname}{' '}
                        {quoteFinish.medic.secondLastname}
                      </span>
                    )}
                    {quoteFinish.atn && (
                      <span className="extra-button-information">
                        {quoteFinish.atn.firstName}{' '}
                        {quoteFinish.atn.firstLastname}{' '}
                        {quoteFinish.atn.secondLastname}
                      </span>
                    )}
                  </div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Paciente</div>
                  <div className={'value'}>
                    {quoteFinish.patient &&
                      `${quoteFinish.patient.firstName} ${quoteFinish.patient.firstLastName} ${quoteFinish.patient.secondLastName}`}
                  </div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Institución</div>
                  <div className={'value'}>
                    {quoteFinish.hospital && `${quoteFinish.hospital.name}`}
                    {!quoteFinish.hospital && quoteFinish.institutionName &&
                      `${quoteFinish.institutionName}`}
                  </div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Ciudad y estado</div>
                  <div
                    className={'value'}
                  >{`${quoteFinish.city}, ${quoteFinish.state}`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Forma de pago</div>
                  <div className={'value'}>{`${quoteFinish.paymentMethod}`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Condiciones de pago</div>
                  <div
                    className={'value'}
                  >{`${quoteFinish.paymentCondition}`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Tiempo de entrega</div>
                  <div
                    className={'value'}
                  >{`${quoteFinish.deliveryDateString}`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Validez de la oferta</div>
                  <div className={'value'}>
                    {`${quoteFinish.quotationExpirationDate && dateToQuoteOfer}`}
                  </div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Correo electrónico</div>
                  <div className={'value'}>{`${quoteFinish.email}`}</div>
                </div>
                <div className={'elementQuoteData'}>
                  <div className={'title'}>Número telefónico</div>
                  <div className={'value'}>{`${quoteFinish.phone}`}</div>
                </div>
              </div>
            </div>

            <div className={'element'}>
              <div className={'verticalScroll'}>
                <div className={'whiteCardQuoteDescription'}>
                  <div className={'cardtitleContent'}>
                    <p
                      className={'cardtitle'}
                    >{`${quoteFinish.quotationName}`}</p>
                  </div>
                  <div className={'cardHeader'}>
                    <div className={'cardelement'}>
                      <p className={'cardtitle'}>Cantidad</p>
                    </div>
                    <div className={'cardelement'}>
                      <p className={'cardtitle'}>Descripción</p>
                    </div>
                    <div className={'cardelement'}>
                      <p className={'cardtitle'}>Precio Unit.</p>
                    </div>
                    <div className={'cardelement'}>
                      <p className={'cardtitle'}>Descuento</p>
                    </div>
                    <div className={'cardelement'}>
                      <p className={'cardtitle'}>Subtotal</p>
                    </div>
                  </div>

                  {getProducts &&
                    getProducts.map((item) => (
                      <div className={'cardBody'} key={item.id}>
                        <div className={'cardelement'}>
                          <p
                            className={'cardValue'}
                          >{`${item.productQuantity}`}</p>
                        </div>
                        <div className={'cardelement'}>
                          <p className={'cardValue'}>
                            {`${item.product.productDescription}`}
                          </p>
                        </div>
                        <div className={'cardelement'}>
                          <p className={'cardValue'}>
                            {item.productPrice
                              ? Number(item.productPrice).toLocaleString(
                                  'en-US',
                                  {
                                    style: 'currency',
                                    currency: 'USD',
                                    currencyDisplay: 'symbol',
                                  }
                                )
                              : `$ ${item.productPrice}.00`}
                          </p>
                        </div>
                        <div className={'cardelement'}>
                          <p className={'cardValue'}>
                            {`${item.discountPercentage}%`}
                          </p>
                        </div>
                        <div className={'cardelement'}>
                          <p className={'cardValue'}>
                            {Number(
                              calculateSubtotal(
                                item.productQuantity,
                                item.productPrice,
                                item.discountPercentage
                              )
                            ).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              currencyDisplay: 'symbol',
                            })}
                          </p>
                        </div>
                      </div>
                    ))}

                  <div className={'cardpricecontent'}>
                    <div className={'cardprice'}>
                      {/* <div className={'priceElement'}>
                        <div className={'priceTitle'}>Subtotal</div>
                        <div className={'priceValue'}>{handleChangeIntoTypeOfMoney(globalSubtotal.subTotal)}</div>
                      </div> */}
                      {/* <div className={'priceElement'}>
                        <div className={'priceTitle'}>Desc.</div>
                        <div className={'priceValue'}>{handleChangeIntoTypeOfMoney(globalSubtotal.globalDiscountPercentage)}</div>
                      </div> */}
                      <div className={'priceElement'}>
                        <div className={'priceTitle'}>Subtotal</div>
                        <div className={'priceValue'}>
                          {globalSubtotal.subtotal2 &&
                            Number(
                              globalSubtotal.subtotal2
                            ).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              currencyDisplay: 'symbol',
                            })}
                        </div>
                      </div>
                      <div className={'priceElement'}>
                        <div className={'priceTitle'}>IVA</div>
                        <div className={'priceValue'}>
                          {globalSubtotal.iva &&
                            Number(globalSubtotal.iva).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              currencyDisplay: 'symbol',
                            })}
                        </div>
                      </div>
                      <div className={'priceElement'}>
                        <div className={'priceTitle'}>Total</div>
                        <div className={'priceValue'}>
                          {globalSubtotal.total &&
                            Number(globalSubtotal.total).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              currencyDisplay: 'symbol',
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={'totalpricecontent'}>
                  <div className={'totalprice'}>
                    {/* <div className={'totalpriceelement'}>
                      <div className={'totalpriceelementtitle'}>
                        Desc. Especial 
                      </div>
                      <div className={'totalpriceelementvalue'}>{ `$ ${quoteFinish.realPrice}` }</div>
                    </div> */}
                    <div className={'totalpriceelement'}>
                      <div className={'totalpriceelementtitle'}>Subtotal</div>
                      <div className={'totalpriceelementvalue'}>
                        {quoteFinish.realPrice ?
                          Number(
                            globalSubtotal.subtotal2
                          ).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                          }): '$0.00'}
                      </div>
                    </div>
                    <div className={'totalpriceelement'}>
                      <div className={'totalpriceelementtitle'}>IVA 16%</div>
                      <div className={'totalpriceelementvalue'}>
                        {globalSubtotal.iva &&
                          Number(globalSubtotal.iva).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                          })}
                      </div>
                    </div>
                    <div className={'totalpriceelement'}>
                      <div className={'totalpriceelementtitle'}>Total</div>
                      <div className={'totalpriceelementvalue'}>
                        {quoteFinish.finalPrice ?
                          Number(quoteFinish.finalPrice).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                          }): '$0.00'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={'twoButtonsContent'}>
                <div className={'twoButtons'}>
                  {!schedule &&  !idStoreQuote&& (
                    <>
                      <button
                        className="quote-description-button"
                        onClick={() => getPDFByIDQuote(quoteFinish.id)}
                      >
                        <span className="quote-item-button-name">
                          {' '}
                          DESCARGAR{' '}
                        </span>
                      </button>
                      <NavLink className="quote-description-button" to={`/Inicio`}>
                        <span className="quote-item-button-name"> OK </span>
                      </NavLink>
                    </>
                  )}
                  {!schedule &&  idStoreQuote&& (
                    <>
                      <button
                        className="quote-description-button"
                        onClick={() => getPDFByIDQuote(quoteFinish.id)}
                      >
                        <span className="quote-item-button-name">
                          {' '}
                          DESCARGAR{' '}
                        </span>
                      </button>
                      <NavLink className="quote-description-button" to={`/StoreHouse/StoreHouseApproveOrder`}>
                        <span className="quote-item-button-name"> CONTINUAR </span>
                      </NavLink>
                    </>
                  )}
                  {schedule && (
                    <>
                      <button
                        className="quote-description-button"
                        onClick={() => setQuoteToScheduleFunction()}
                      >
                        <span className="quote-item-button-name">
                          {' '}
                          CONTINUAR{' '}
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};
