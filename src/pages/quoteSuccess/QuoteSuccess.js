import React, { useEffect } from "react";
import './sass/styles.scss';
import { useHistory } from 'react-router-dom';
// ASSETS
import iconOrderSuccess from '../../assets/img/512PX/Icono_Orden_Solicitada.png';
import iconDownload from '../../assets/img/512PX/Icono_Descargar.png';
import { useDispatch, useSelector } from "react-redux";
import { getViewPdf, resetToInitialState } from "../../actions/systemsAction";
import { resetToInitialStateQuote, resetToInitialWithOutCreateQuote } from "../../actions/newQuoteAction";



export const QuoteSuccess = () => {

  const newQuoteInformation = useSelector(state => state.newQuote.createdQuote);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    newQuoteInformation&&
      dispatch(resetToInitialWithOutCreateQuote(newQuoteInformation));
      dispatch(resetToInitialState());
  }, [newQuoteInformation])

  const handleViewPdf = () => {
    dispatch(getViewPdf(newQuoteInformation.id));
  }
  
  const handleFirtsPage = () => {
    history.replace(`/Inicio`);
    dispatch(resetToInitialState());
    dispatch(resetToInitialStateQuote());

  }

  const handleViewQuote = () => {
    dispatch(resetToInitialState());
    dispatch(resetToInitialStateQuote());
    history.replace(`/cotizaciones_finalizadas`);
  }
    

  return (

    <div className={"quoteSuccess"}>
        <div className={"quoteSuccess_general_c"}>
          <div className={"quote-images"}>
            <img className="quote-success-img" src={iconOrderSuccess} alt="" />
            <img className="quote-success-icon" src={iconDownload} alt="" onClick={handleViewPdf} />
          </div>
          <h4 className={"quoteSuccess_title"}>ORDEN SOLICITADA</h4>
          <p className={"quoteSuccess-subtitle"}>Tu número de orden es:</p>
          <p className={"quoteSucess-number"}>#{newQuoteInformation.id}</p>
          <div className={"order_buttons"}>
            <button
              className="quote-white-button"
              onClick={ handleFirtsPage }
            >
              <span> FINALIZAR </span>
            </button>
            <button
              className="quote-transparent-button"
              onClick={handleViewQuote}
            >
              <span> VER COTIZACIONES </span>
            </button>
          </div>
        </div>
    </div>
  );
};
