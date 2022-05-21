import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './sass/styles.scss';
import { NavLink, useHistory } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import icoQuote from '../../assets/img/126PX/Productos/Cervicales/Img_Osmium_126px.png';
import { DateFormat } from '../shared/DateFormat';
import { getFinishedAllQoute, getFinishedAllQouteSuccess, getFinishedQoute, getFinishedQouteSuccess, getUnfinishedQouteSuccess, setListComplete } from '../../actions/systemsAction';

export const CardCompletedQuotes = ({schedule, searchQuoteFinished, facturacion, searchFactura, value,view=null}) => {

  const quotesFinished = useSelector((state) => state.systems.quotesFinished);
  const searchQuotesFinished = useSelector((state) => state.systems.searchFinishQuote);
  const searchInAllFinishQuote = useSelector((state) => state.systems.searchInAllFinishQuote);
  const [itemsSearchQuoteFinished, setItemsSearchQuoteFinished] = useState(null);
  const urlFacturacion = window.location.pathname.split('/')[1];
  const [url, setUrl] = useState(null);
  const [list, setList] = useState([]);
  const history = useHistory();
  const control = useRef(0);
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(0);

  useEffect(() => {
    return () => {
      dispatch(getFinishedAllQouteSuccess([]));
      dispatch(getFinishedQouteSuccess([]));
      dispatch(getUnfinishedQouteSuccess([]));
  }
  }, [])

  useEffect(() => {
    if(view === 'programar'){
      control.current = control.current + 1
      if(list && list.length > 0 && control.current != 3){
        setList([...list,...quotesFinished])
        }else if(list && list.length === 0 && quotesFinished && quotesFinished.length > 0){
          setList(quotesFinished)
        } 
    }
    else{    
        if(list && list.length > 0){
        setList([...list,...quotesFinished])
        }else if(list && list.length === 0 && quotesFinished && quotesFinished.length > 0){
          setList(quotesFinished)
        }
    }
  },[quotesFinished])

  useEffect(() => {
    return () => {
      setList([]);
      setPage(0);
    }
  }, []);


  const handleScroll = (event) => {
    const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
    
    if(scrollHeight-Math.round(scrollTop) === clientHeight){
        setPage(prev => prev + 1)
    }
  }
  
  useEffect(() => {
    if(urlFacturacion === 'facturacion' ){
      dispatch(getFinishedAllQoute(currentPage));
    }else if(urlFacturacion !== 'facturacion'){
      value=='quotecompleted'
        dispatch(getFinishedQoute(currentPage));
    }    
  }, [currentPage])
  

  useEffect(() => {
    dispatch(setListComplete(list));

  }, [list, searchQuotesFinished, searchInAllFinishQuote])



  useEffect(() => {
      
      if(searchQuotesFinished === null){

        history.replace('/CotizacionesFinalizadas');
      }
  }, [searchQuotesFinished])
  




  useEffect(() => {
    searchQuoteFinished
      ? setItemsSearchQuoteFinished(searchQuotesFinished)
      : !schedule && !searchQuoteFinished && !searchQuotesFinished && !searchFactura
      && setItemsSearchQuoteFinished(list);
    searchFactura && searchInAllFinishQuote && searchInAllFinishQuote.length > 0 
      ? setItemsSearchQuoteFinished(searchInAllFinishQuote)
      : !schedule && !searchQuoteFinished && !searchFactura
      && setItemsSearchQuoteFinished(list);
    schedule && searchQuotesFinished && searchQuotesFinished.length > 0
      ? setItemsSearchQuoteFinished(searchQuotesFinished)
      : !searchQuoteFinished && !searchQuotesFinished && !searchFactura
      && setItemsSearchQuoteFinished(list);

  }, [list, searchQuotesFinished, searchInAllFinishQuote])

  useEffect(() => {
    if(schedule){
      return setUrl(`/cotizacion_cirugia/cotización`);
    }
    if(facturacion){
      return setUrl(`/facturacion`);
    }
    if(!schedule && !facturacion){
      return setUrl(`/cotizaciones_finalizadas`);
    }
  }, [])
  
  
  return (
    <div className="c-quote_completed_allelements" onScroll={handleScroll}>
              <div className={"quote_completed_allelements"}>
                <div className={"cardB"}>
          <div className={'baseccq'}>
            {
              itemsSearchQuoteFinished &&(
                itemsSearchQuoteFinished.map((item) => (
                  <div key={item.id} className={'whiteSmallCardBase'}>
                    <div className={'twoElements'}>
                      <div className={'element'}><img className={"element-img"} src={icoQuote} /></div>
                      <div className={'element'}>
                        <p className={'quoteName'}> {!facturacion && `Nombre cotización`} {facturacion && `Nombre cotización`}</p>
                        <p className={'quoteprodName'}>{item.quotationName}</p>
                        <p className={'quoteNumber'}> {!facturacion && `Cotización #${item.id}`} {facturacion && `Cotización #${item.id}`}</p>
                        <div className={'twograys'}>
                          <p className={'lightgray'}>Fecha: </p>
                          <p className={'darkgray'}>{DateFormat(item.currentDate)}</p>
                        </div>
                        
                            <div className={'twograys'}>
                                <p className={'lightgray'}>{(item.atn && 'ATN:') ||  (item.client && 'Cliente:') || (item.medic && 'Médico:') || ((!item.atn && !item.client && !item.medic) && 'ATN:')} </p>
                                <p className={'darkgray'}>
                                   {item.atn &&  (`${item.atn.firstName && item.atn.firstName} ${item.atn.firstLastname  && item.atn.firstLastname} ${item.atn.secondLastname && item.atn.secondLastname}`) || 
                                   item.client && `${item.client.clientName && item.client.clientName}` || 
                                   item.medic && (`${item.medic.name && item.medic.name} ${item.medic.secondName && item.medic.secondName} ${item.medic.firstLastname && item.medic.firstLastname} ${item.medic.secondLastname && item.medic.secondLastname}`) || ((!item.atn && !item.client && !item.medic) && '---')}
                                </p>
                            </div>
                        
                            <div className={'twograys'}>
                                <p className={'lightgray'}>Paciente: </p>
                                <p
                                  className={'darkgray'}
                                >{item.patient 
                                ?`${item.patient.firstName && item.patient.firstName} ${item.patient.secondName && item.patient.secondName} ${item.patient.firstLastName && item.patient.firstLastName} ${item.patient.secondLastName && item.patient.secondLastName}`
                                :'---'
                                }</p>
                           </div>

                           <div className={'twograys'}>
                            <p className={'lightgray'}>Institución: </p>
                            <p className={'darkgray'}>{(item.hospital && (`${item.hospital.name && item.hospital.name}`) || item.institutionName && (`${item.institutionName  && item.institutionName}`)) || (!item.hospital && !item.institutionName) && '---'}</p>
                          </div>
                          
                        {
                          <NavLink
                            className="quote-finished-button"
                            to={`${url}/${item.id}`}
                          >
                            <span className="quote-item-button-name"> Ver más </span>
                            <ArrowForwardIosIcon
                              className={'arrowIcon'}
                            ></ArrowForwardIosIcon>
                          </NavLink>
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

CardCompletedQuotes.propTypes = {
  products: PropTypes.any,
  schedule: PropTypes.any,
  searchQuoteFinished: PropTypes.any,
  facturacion: PropTypes.any,
  searchFactura: PropTypes.any,
  value: PropTypes.any,
};
