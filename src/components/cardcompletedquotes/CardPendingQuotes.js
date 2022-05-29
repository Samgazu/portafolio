import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './sass/styles.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { icoQuote, imgProduct } from '../../assets/img/126PX/Productos/Cervicales/Img_Osmium_126px.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFinishedAllQouteSuccess, getFinishedQouteSuccess, getUnfinishedQoute, getUnfinishedQouteSuccess, getViewPdf } from '../../actions/systemsAction';
import { updateNewQuote } from '../../actions/newQuoteAction';
import shortid from 'shortid';
import { DateFormat } from '../shared/DateFormat';

export const CardPendingQuotes = ({ value }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const newQuote = useSelector(state => state.newQuote)
  const unfinishedQuotes = useSelector(state => state.systems.quotesUnfinished)
  const [list, setList] = useState([]);
  const [currentPage, setPage] = useState(0);

  const getPDFByIDQuote = (quoteID) => {
    dispatch(getViewPdf(quoteID));
  };

  useEffect(() => {
    return () => {
      dispatch(getFinishedAllQouteSuccess([]));
      dispatch(getFinishedQouteSuccess([]));
      dispatch(getUnfinishedQouteSuccess([]));
    }
  }, [])

  useEffect(() => {
    return () => {
      setList([]);
      setPage(0);
    }
  }, [])

  useEffect(() => {
    if (list && list.length > 0) {
      setList([...list, ...unfinishedQuotes])
    } else if (list && list.length === 0 && unfinishedQuotes && unfinishedQuotes.length > 0) {
      setList(unfinishedQuotes)
    }
  }, [unfinishedQuotes])

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    value == 'quotepending' &&
      dispatch(getUnfinishedQoute(currentPage));
  }, [currentPage])




  const handleSetUnfinishedQuote = (unfinishedQuote) => {
    let newQuoteCopy = {
      ...newQuote,
      data: {
        atn: unfinishedQuote.atn || null,
        cityAndState: unfinishedQuote.state && unfinishedQuote.state !== "Estado" && {
          city: unfinishedQuote.city || null,
          state: unfinishedQuote.state && unfinishedQuote.state !== "Estado" && unfinishedQuote.state || null
        } || null,
        client: unfinishedQuote.client || null,
        date: unfinishedQuote.currentDate || null,
        deliveryTime: unfinishedQuote.paymentCondition || null,
        email: unfinishedQuote.email || null,
        hospital: unfinishedQuote.hospital || null,
        institutionName: unfinishedQuote.institutionName || null,
        medic: unfinishedQuote.medic || null,
        offerValidity: unfinishedQuote.quotationExpirationDate || null,
        patient: unfinishedQuote.patient || null,
        paymentCondition: unfinishedQuote.paymentCondition || null,
        phoneNumber: unfinishedQuote.phone || null,
        priceList: unfinishedQuote.priceList || null,
        wayToPay: unfinishedQuote.paymentMethod || null,
      },
      priceList: unfinishedQuote.priceList || null,
      listProductPrice: null,
      systems: unfinishedQuote.quotationItems.length > 0 ? [{
        configuration:
          [{
            configuration:
            {
              items: unfinishedQuote.quotationItems,
            },
          }],
        id: shortid.generate(),
        idItem: shortid.generate(),
        productDescription: 'Productos',
        productImage: imgProduct,
      }] : [],
      SpecificDescriptionQuotationItems: unfinishedQuote.specificDescriptionQuotationItems.length > 0 &&
      {
        name: '',
        values: unfinishedQuote.specificDescriptionQuotationItems.map(item => {
          return {
            discountPercentage: item.discountPercentage,
            product: {
              productDescription: item.product.productDescription
            },
            id: item.id,
            productPrice: item.productPrice,
            productQuantity: item.productQuantity
          }
        })
      } || null,
      id: unfinishedQuote.id || null
    }
    // console.log(newQuoteCopy)
    dispatch(updateNewQuote(newQuoteCopy));
    history.replace(`/cotizaciones`);
  }


  return (
    <div className="c-quote_completed_allelements" onScroll={handleScroll}>
      <div className={"quote_completed_allelements"}>
        <div className={"cardB"}>
          <div className={'baseccq'}>
            {list && (
              list.map(item => (
                <div key={item.id} className={'whiteSmallCardBase'}>
                  <div className={'twoElements'}>
                    <div className={'element'}><img className={"element-img"} src={icoQuote} /></div>
                    <div className={'element'}>
                      <p className={'quoteName'}>Nombre cotización</p>
                      <p className={'quoteNumber'}>Cotización #{item.id}</p>
                      <p className={'quoteprodName'}>{item.quotationName}</p>
                      <div className={'twograys'}>
                        <p className={'lightgray'}>Fecha: </p>
                        <p className={'darkgray'}>{item.currentDate && DateFormat(item.currentDate)}</p>
                      </div>

                      <div className={'twograys'}>
                        <p className={'lightgray'}>{(item.atn && 'ATN:') || (item.client && 'Cliente:') || (item.medic && 'Médico:') || ((!item.atn && !item.client && !item.medic) && 'ATN:')} </p>
                        <p className={'darkgray'}>
                          {item.atn && (`${item.atn.firstName} ${item.atn.firstLastname} ${item.atn.secondLastname}`) ||
                            item.client && item.client.clientName ||
                            item.medic && (`${item.medic.name} ${item.medic.secondName} ${item.medic.firstLastname} ${item.medic.secondLastname}`) || ((!item.atn && !item.client && !item.medic) && '---')}
                        </p>
                      </div>

                      <div className={'twograys'}>
                        <p className={'lightgray'}>Paciente: </p>
                        <p
                          className={'darkgray'}
                        >{item.patient
                          ? `${item.patient.firstName} ${item.patient.secondName && item.patient.secondName} ${item.patient.firstLastName} ${item.patient.secondLastName}`
                          : '---'
                          }</p>
                      </div>
                      <div className={'twograys'}>
                        <p className={'lightgray'}>Institución: </p>
                        <p className={'darkgray'}>{(item.hospital && (`${item.hospital.name}`) || item.institutionName && (`${item.institutionName}`)) || (!item.hospital && !item.institutionName) && '---'}</p>
                      </div>
                      {
                        <>
                          <button
                            className="quote-finished-button"
                            onClick={() => getPDFByIDQuote(item.id)}
                          >
                            <span className="quote-item-button-name">
                              {' '}
                              DESCARGAR{' '}
                            </span>
                          </button>
                          <button className="quote-finished-button" onClick={() => handleSetUnfinishedQuote(item)}>
                            <span className="quote-item-button-name"> Ver más </span>
                            <ArrowForwardIosIcon
                              className={'arrowIcon'}
                            ></ArrowForwardIosIcon>
                          </button>
                        </>
                      }
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CardPendingQuotes.propTypes = {
  products: PropTypes.any,
  unfinishedQuotes: PropTypes.any,
  value: PropTypes.any,
};
