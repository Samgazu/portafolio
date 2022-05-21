import React, { useEffect, useState } from "react";
import './sass/styles.scss';
import PropTypes from 'prop-types';
import { DateFormat } from "../../components/shared/DateFormat";

export  const QuoteGeneralInfo = ({newQuote}) => {
    const [dateToQuote, setDateToQuote] = useState('');
    const [dateToQuoteOfer, setDateToQuoteOfer] = useState('');

    const handleDateFormat = (date, dateOfer) => {
        setDateToQuote(DateFormat(date));
        setDateToQuoteOfer(DateFormat(dateOfer));
    }

    useEffect(() => {
        newQuote.data.date && newQuote.data.offerValidity && 
            handleDateFormat(newQuote.data.date, newQuote.data.offerValidity)
    }, [newQuote.data.date])

    return (
        <div>
            <div className={"element"}>
                <p className={"titleElement"}>Fecha</p>
                <p className={"valueElement"}>{newQuote.data.date && dateToQuote}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Atn</p>
                <p className={"valueElement"}>
                    {
                        newQuote.data.client &&
                            (newQuote.data.client.clientName) 
                    }
                    {
                        newQuote.data.medic &&
                            (`${newQuote.data.medic.name} ${newQuote.data.medic.secondName} ${newQuote.data.medic.firstLastname} ${newQuote.data.medic.secondLastname}`)
                    }
                    {
                        newQuote.data.atn &&
                            (`${newQuote.data.atn.firstName} ${newQuote.data.atn.firstLastname} ${newQuote.data.atn.secondLastname}`)
                    }
                </p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Paciente</p>
                <p className={"valueElement"}>{ newQuote.data.patient && newQuote.data.patient.firstName} { newQuote.data.patient && newQuote.data.patient.firstLastName} { newQuote.data.patient && newQuote.data.patient.secondLastName}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Institución</p>
                <p className={"valueElement"}>
                    {
                        newQuote.data.hospital && 
                            (newQuote.data.hospital.name)
                    }
                    {
                        newQuote.data.institutionName &&
                            (newQuote.data.institutionName) 
                    }
                </p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Ciudad y estado</p>
                <p className={"valueElement"}>{newQuote.data.cityAndState && newQuote.data.cityAndState.city} {newQuote.data.cityAndState && newQuote.data.cityAndState.state}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Forma de pago</p>
                <p className={"valueElement"}>{newQuote.data.wayToPay && newQuote.data.wayToPay}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Condiciones de pago</p>
                <p className={"valueElement"}>{newQuote.data.paymentCondition && newQuote.data.paymentCondition}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Tiempo de entrega</p>
                <p className={"valueElement"}>{newQuote.data.deliveryTime && newQuote.data.deliveryTime}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Validez de la oferta</p>
                <p className={"valueElement"}>{newQuote.data.offerValidity && dateToQuoteOfer}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Correo electrónico</p>
                <p className={"valueElement"}>{newQuote.data.email && newQuote.data.email}</p>
            </div>
            <div className={"element"}>
                <p className={"titleElement"}>Número telefónico</p>
                <p className={"valueElement"}>{newQuote.data.phoneNumber && newQuote.data.phoneNumber}</p>
            </div>
        </div>
    );

};


QuoteGeneralInfo.propTypes = {
    newQuote: PropTypes.any,
};