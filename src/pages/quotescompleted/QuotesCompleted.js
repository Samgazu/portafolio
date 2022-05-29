import React from "react";
import './sass/styles.scss';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CardPendingQuotes } from '../../components/cardcompletedquotes/CardPendingQuotes';
import { QuotesCompletedData, QuotesPendingData } from './QuotesCompletedData';

import { CardCompletedQuotes } from '../../components/cardcompletedquotes/CardCompletedQuotes';

import { useParams } from "react-router";

export const QuotesCompleted = () => {

  const urlFacturacion = window.location.pathname.split('/')[1];
  const quotesCD = QuotesCompletedData;
  const { searchQuoteFinished, factura, searchQuoteFinishedSchedule } = useParams();
  const quotesPD = QuotesPendingData;
  const [value, setValue] = React.useState('quotecompleted');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (

    <div className={"quote_finished_c"}>
      {
        urlFacturacion !== 'facturacion' && !searchQuoteFinishedSchedule &&
        <SubNavBarComponent typeSearch={'FINISHQUOTE'}
          searchActive={true}
          historyPage={searchQuoteFinished && `/cotizaciones_finalizadas`}
          title={`Historial de Cotizaciones`}
        />
      }
      {
        urlFacturacion === 'facturacion' && !searchQuoteFinishedSchedule &&
        <SubNavBarComponent typeSearch={'FINISHQUOTE'}
          historyPage={searchQuoteFinished && `/facturacion`}
          searchActive={true}
          isFacturacion={urlFacturacion}
          title={`Cotizaciones`}
        />
      }
      {
        urlFacturacion !== 'facturacion' && searchQuoteFinishedSchedule &&
        <SubNavBarComponent typeSearch={'FINISHQUOTE_SURGERY'}
          historyPage={`/ProgramarCX`}
          searchActive={true}
          title={`Cotizaciones finalizadas`}
        />
      }
      <div className={"quote_completed_general_c"} >
        <div className={"button_elements_content"}>
          {
            urlFacturacion !== 'facturacion' && !searchQuoteFinishedSchedule &&
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className={"buttons_options"}>
              <FormControlLabel className={"radioButtonOptions"} value="quotecompleted" control={<Radio />} label="Cotizaciones finalizadas" />
              <FormControlLabel className={"radioButtonOptions"} value="quotepending" control={<Radio />} label="Cotizacion Guardada" />
            </RadioGroup>
          }
        </div>

        {
          value == 'quotecompleted' && urlFacturacion !== 'facturacion' && searchQuoteFinishedSchedule &&
          <CardCompletedQuotes schedule={true} value={value} />
        }
        {
          value == 'quotecompleted' && urlFacturacion !== 'facturacion' && !searchQuoteFinishedSchedule &&
          <CardCompletedQuotes products={quotesCD} searchQuoteFinished={searchQuoteFinished} value={value} />
        }
        {
          value == 'quotepending' && urlFacturacion !== 'facturacion' && !searchQuoteFinishedSchedule &&
          <CardPendingQuotes products={quotesPD} value={value} />
        }
        {
          value == 'quotecompleted' && urlFacturacion === 'facturacion' && !searchQuoteFinishedSchedule &&
          <CardCompletedQuotes products={quotesCD} searchFactura={factura} facturacion={'facturacion'} value={value} />
        }
      </div>
    </div>
  );
};
