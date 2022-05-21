import {
    UPDATE_NEW_QUOTE_BEGIN,
    UPDATE_NEW_QUOTE_SUCCESS,
    UPDATE_NEW_QUOTE_FAILURE,
    DELETE_NEW_QUOTE_SYSTEM_BY_ID_SUCCESS,
    UPDATE_DATE_TYPE_SUCCESS,
    POST_PATIENT_TYPE_BEGIN,
    POST_PATIENT_TYPE_SUCCESS,
    POST_PATIENT_TYPE_FAILURE,
    UPDATE_CITY_TYPE_SUCCESS,
    UPDATE_OFFERVALIDITY_TYPE_SUCCESS,
    UPDATE_EMAIL_TYPE_SUCCESS,
    UPDATE_TEL_TYPE_SUCCESS,
    UPDATE_ATN_CLIENT_TYPE_SUCCESS,
    UPDATE_ATN_MEDIC_TYPE_SUCCESS,
    UPDATE_ATN_TYPE_BEGIN,
    UPDATE_ATN_TYPE_SUCCESS,
    UPDATE_ATN_TYPE_FAILURE,
    UPDATE_INSTITUTIONS_TYPE_SUCCESS,
    UPDATE_WAYTOPAY_TYPE_SUCCESS,
    UPDATE_PAYMENTCONDITIONS_TYPE_SUCCESS,
    UPDATE_FORM_DELIVERY_SUCCESS,
    UPDATE_SPECIFIC_SESCRIPTION_QUOTE,
    POST_NEW_QUOTE_BEGIN,
    POST_NEW_QUOTE_SUCCESS,
    POST_NEW_QUOTE_FAILURE,
    GET_PRODUCT_PRICE_BEGIN,
    GET_PRODUCT_PRICE_SUCCESS,
    GET_PRODUCT_PRICE_FAILURE,
    UPDATE_PRICE_LIST_TYPE_SUCCESS,
    RESET_TO_INITIAL_STATE_QUOTE,
    ADD_PENDING_STATE_QUOTE,
    UPDATE_SYSTEMS_NEW_QUOTE_SUCCESS,
    UPDATE_NAME_INSTITUTIONS_TYPE_SUCCESS,
    UPDATE_PATIENT_TYPE_SUCCESS,
    RESET_TO_INITIAL_STATE_QUOTE_WITHOUT,
    DELETE_ELEMENT_LIST_PRODUCT_PRICES,


} from '../constants/actionTypes';

import request from '../utils/request';


export const updateNewQuoteBegin = () =>({
    type: UPDATE_NEW_QUOTE_BEGIN
}) ;

export const updateNewQuoteSuccess = (newQuote) =>({
    type: UPDATE_NEW_QUOTE_SUCCESS,
    newQuote,
}) ;

export const updateNewQuoteFailure = () =>({
    type: UPDATE_NEW_QUOTE_FAILURE
}) ;

export const updateSystemsNewQuote = (systemsNewQuote) =>({
    type: UPDATE_SYSTEMS_NEW_QUOTE_SUCCESS,
    payload:{
        systemsNewQuote
    },
}) ;

export const updateSpecificDescriptionQuotation = (specificDescriptionQuotation) =>({
    type: UPDATE_SPECIFIC_SESCRIPTION_QUOTE,
    payload:{
        specificDescriptionQuotation
    },
}) ;

export const deleteNewQuoteSystemById = (id) =>({
    type: DELETE_NEW_QUOTE_SYSTEM_BY_ID_SUCCESS,
    id,
});

export const deleteElementListProductPrices = (newListProducts) =>({
    type: DELETE_ELEMENT_LIST_PRODUCT_PRICES,
    payload: {
        newListProducts
    },
});

export function updateNewQuote (newQuote){
    return function (dispatch){
        dispatch(updateNewQuoteBegin());
        dispatch(updateNewQuoteSuccess(newQuote));
    };
}


// ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬ Quote Data ▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬

export const updateDateQuote = ( date ) => ({
    type: UPDATE_DATE_TYPE_SUCCESS,
    payload: {
        date
    }
});

export const postCreatePatientBegin = () => ({
    type: POST_PATIENT_TYPE_BEGIN,
});

export const postCreatePatientSuccess = ( patient ) => ({
    type: POST_PATIENT_TYPE_SUCCESS,
    payload: {
        patient
    }
});

export const postCreatePatientFailure = () => ({
    type: POST_PATIENT_TYPE_FAILURE,
});

export const updateCityAndStateQuote = ( cityAndState ) => ({
    type: UPDATE_CITY_TYPE_SUCCESS,
    payload: {
        cityAndState
    }
});

export const updateOfferValidityQuote = ( date ) => ({
    type: UPDATE_OFFERVALIDITY_TYPE_SUCCESS,
    payload: {
        date
    }
});

export const updateEmailQuote = ( email ) => ({
    type: UPDATE_EMAIL_TYPE_SUCCESS,
    payload: {
        email
    }
});

export const updatePhoneNumberQuote = ( phoneNumber ) => ({
    type: UPDATE_TEL_TYPE_SUCCESS,
    payload: {
        phoneNumber
    }
});

export const updateAtnClientQuote = ( client ) => ({
    type: UPDATE_ATN_CLIENT_TYPE_SUCCESS,
    payload: {
        client
    }
});
export const updateAtnMedicQuote = ( medic ) => ({
    type: UPDATE_ATN_MEDIC_TYPE_SUCCESS,
    payload: {
        medic
    }
});
export const updateAtnQuoteBegin = () => ({
    type: UPDATE_ATN_TYPE_BEGIN,
});
export const updateAtnQuoteSuccess = ( atn ) => ({
    type: UPDATE_ATN_TYPE_SUCCESS,
    payload: {
        atn
    }
});
export const updateAtnQuoteFailure = () => ({
    type: UPDATE_ATN_TYPE_FAILURE,
});



export const updateInstitutionQuote = ( hospital ) => ({
    type: UPDATE_INSTITUTIONS_TYPE_SUCCESS,
    payload: {
        hospital
    }
});



export const updateNameInstitutionQuote = ( hospitalName ) => ({
    type: UPDATE_NAME_INSTITUTIONS_TYPE_SUCCESS,
    payload: {
        hospitalName
    }
});

export const updatePatientQuote = ( PatientName ) => ({
    type: UPDATE_PATIENT_TYPE_SUCCESS,
    payload: {
        PatientName
    }
});


export const updateWayToPayQuote = ( wayToPay ) => ({
    type: UPDATE_WAYTOPAY_TYPE_SUCCESS,
    payload: {
        wayToPay
    }
});

export const updatePaymentConditionQuote = ( paymentCondition ) => ({
    type: UPDATE_PAYMENTCONDITIONS_TYPE_SUCCESS,
    payload: {
        paymentCondition
    }
});

export const updateFormDeliveryQuote = (deliveryTime) => ({
    type: UPDATE_FORM_DELIVERY_SUCCESS,
    payload: {
        deliveryTime,
    }
});

export const updatePriceListTypeQuote = (priceList) => ({
    type: UPDATE_PRICE_LIST_TYPE_SUCCESS,
    payload: {
        priceList
    }
});

export const postNewQuoteBegin = () => ({
    type: POST_NEW_QUOTE_BEGIN,
});

export const postNewQuoteSuccess = (createdQuote) => ({
    type: POST_NEW_QUOTE_SUCCESS,
    payload: {
        createdQuote
    }
});

export const getProductPricesBegin = () =>({
    type: GET_PRODUCT_PRICE_BEGIN,
});

export const getProductPricesSuccess = (productPrices) =>({
    type: GET_PRODUCT_PRICE_SUCCESS,
    payload: {
        productPrices,
    }
});

export const getProductPricesFailure = () =>({
    type: GET_PRODUCT_PRICE_FAILURE,
});


export const postNewQuoteFailure = () => ({
    type: POST_NEW_QUOTE_FAILURE,
});
//////

export const resetToInitialStateQuote = () => ({
    type: RESET_TO_INITIAL_STATE_QUOTE,
});


export const resetToInitialWithOutCreateQuote = ( recoveryNewDBQuote ) => ({
    type: RESET_TO_INITIAL_STATE_QUOTE_WITHOUT,
    payload:{
        recoveryNewDBQuote
    }
});

export const AddPendingStateQuote = ( newQuotePending ) => ({
    type: ADD_PENDING_STATE_QUOTE,
    payload:{
        newQuotePending
    }
});

export function postCreatePatient( firstName , SecondName, firstLastName ,secondLastName){
    return (dispatch, getState) => {
        dispatch(postCreatePatientBegin());
        return request(
          {
            partialUrl: `/API/Patient/CreatePatient/`,
            method: 'POST',
            state: getState().user.request,
            body: {
              "FirstName": firstName ,
              "SecondName": SecondName ,
              "FirstLastName": firstLastName,
              "SecondLastName": secondLastName
            },
          }
        )
        .then( response => response.json())
        .then( data => {
          dispatch(postCreatePatientSuccess(data.response ))
        })
        .catch(err => {
          dispatch(postCreatePatientFailure( err ));
        })
    };
}

export function postNewQuote (newQuote, globalTotal, nameQuote, unfinishedQuote = false){
    let unfinishedQuoteGlobalTotal = null;
    return (dispatch, getState) => {
        dispatch(postNewQuoteBegin());
        /////// Formatear newQoute para que sea compatible con la request!
        var items = [];
        let newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
        for( var i = 0; i < newQuote.systems.length ; i++ ) {
        for ( var j = 0; j < newQuote.systems[i].configuration.length ; j++ ) {
            for(var k = 0; k < newQuote.systems[i].configuration[j].configuration.items.length; k++) {
                unfinishedQuoteGlobalTotal = !globalTotal && newQuote.systems[i].configuration[j].configuration.globalTotal;
                if( newQuote.systems[i].configuration[j].configuration.items[k].product.discountPercentage /*|| newQuote.systems[i].configuration[j].configuration.items[k].product.discountPercentage === 0 */){

                    newQuoteCopy.systems[i].configuration[j].configuration.items[k].discountPercentage = parseFloat(newQuote.systems[i].configuration[j].configuration.items[k].product.discountPercentage);
                }
                if( newQuote.systems[i].configuration[j].configuration.items[k].product.productPrice >= 0 && newQuote.systems[i].configuration[j].configuration.items[k].product.productPrice !== null ){
                    newQuoteCopy.systems[i].configuration[j].configuration.items[k].productPrice = parseFloat(newQuote.systems[i].configuration[j].configuration.items[k].product.productPrice);
                }
                items.push({ // Requiere validar la estructura correcta
                    ...newQuoteCopy.systems[i].configuration[j].configuration.items[k]
                });
            }
        }
        }
    let date = new Date();
    date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + 'T' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);


    let medic = !newQuote.data.medic ? null : newQuote.data.medic;
    let atn = !newQuote.data.atn ? null: newQuote.data.atn;
    let client = !newQuote.data.client ? null : newQuote.data.client;
        // Requeire validar si esta correcto!
        let specificDescriptionQuotation =  newQuote.SpecificDescriptionQuotationItems&&
                                            newQuote.SpecificDescriptionQuotationItems.values.length > 0  
                                            ?  newQuote.SpecificDescriptionQuotationItems.values.map(item => item =
                                                {
                                                    DiscountPercentage: item.discountPercentage && item.discountPercentage || 0,
                                                    Product: {ProductDescription: item.product.productDescription},
                                                    ProductPrice: item.productPrice && item.productPrice || 0,
                                                    ProductQuantity: item.productQuantity                      
                                                })
                                            :   null;
        // console.log(specificDescriptionQuotation);
        var bodyRequest = {
            PriceList: newQuote.data.priceList || null,
            QuotationName: nameQuote || null, // Se tiene que mandar ?, 
            CurrentDate: date || null,
            Client: client || null,
            Medic: medic || null,
            Atn: atn || null,
            patient: newQuote.data.patient || null,
            Hospital: newQuote.data.hospital || null,
            institutionName: newQuote.data.institutionName || null,
            City: newQuote.data.cityAndState && newQuote.data.cityAndState.city || '',
            State: newQuote.data.cityAndState && newQuote.data.cityAndState.state || '',
            DeliveryDate: newQuote.data.date || date,
            QuotationExpirationDate: newQuote.data.offerValidity || date,
            Email: newQuote.data.email || null, 
            Phone: newQuote.data.phoneNumber || null,


            // Para estos 2 keys hay que ver los for de arriba
            // Reqquiere reparación!
            QuotationItems: items || null, // Este hace refecia a  CardQuoteFinished con EDIT = False
            SpecificDescriptionQuotationItems:  specificDescriptionQuotation || null,

            PaymentMethod: newQuote.data.wayToPay || null,
            PaymentCondition: newQuote.data.paymentCondition || null,
            DeliveryDateString: newQuote.data.deliveryTime || null,
            
            FinalPrice: globalTotal && parseFloat(globalTotal.total) || unfinishedQuoteGlobalTotal || 0,
            // RealPrice: 1, // Ignorar!
            subTotal: globalTotal && parseFloat(globalTotal.subTotal) || 0,
            IVAQuantity: globalTotal && parseFloat(globalTotal.iva) || 0,
            id: newQuote.id || null,
            
        };
        {
            !newQuote.id &&
                delete bodyRequest.id;
        }
        // console.log(bodyRequest);
        return request(
        {
            partialUrl: unfinishedQuote === true ? `/API/Quotation/CreateUnfinishedQuotation` :  `/API/Quotation/CreateQuotation/`,
            method: 'POST',
            state: getState().user.request,
            body: bodyRequest,
        }
        )
        .then( response => response.json())
        .then( data => {
            // console.log(data)
            dispatch(postNewQuoteSuccess(data.response));
        })
        .catch(err => {
            // console.log(err)
            dispatch(postNewQuoteFailure( err ));
        })
    };
}

export function getProductPrices(listProducts) {
    return function (dispatch, getState) {
        dispatch(getProductPricesBegin());
        return request({
            partialUrl: `/API/PriceList/GetPricesForProducts`,
            method: 'POST',
            state: getState().user.request,
            body: listProducts
        })
        .then(response => response.json())
        .then(data => {
    
            dispatch(getProductPricesSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getProductPricesFailure(err));
        });
    }
}


export function postAtn( atn ) {
    return function (dispatch, getState) {
        dispatch(updateAtnQuoteBegin());
        return request({
            partialUrl: `/API/Atn/CreateAtn`,
            method: 'POST',
            state: getState().user.request,
            body: atn
        })
        .then(response => response.json())
        .then(data => {
            dispatch(updateAtnQuoteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateAtnQuoteFailure(err));
        });
    }
}
