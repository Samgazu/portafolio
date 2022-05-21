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
  GET_MEDICS_FAILURE,
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
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export function  newQuoteReducer(state = initialState.newQuote, action) {
  switch (action.type) {
    case UPDATE_NEW_QUOTE_BEGIN:
      return state;
    case UPDATE_NEW_QUOTE_SUCCESS:
      return action.newQuote;
    case UPDATE_NEW_QUOTE_FAILURE:
      return state;
    case UPDATE_SYSTEMS_NEW_QUOTE_SUCCESS:
      return {
        ...state,
        systems: action.payload.systemsNewQuote
      };
    case DELETE_NEW_QUOTE_SYSTEM_BY_ID_SUCCESS: {
      // let index = newQuoteCopy.systems.findIndex( item => item.idItem === action.id);
      // if(index === -1) { // Error
      //   return state
      // } else {
      //   newQuoteCopy.systems.splice(index,1);
      //   return newQuoteCopy;
      // }
      return {
        ...state,
        systems: state.systems.filter( item => item.idItem !== action.id)
      };
    }


    // ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬
    // ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬ Quote Data ▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬


    case UPDATE_DATE_TYPE_SUCCESS:{
      let date = JSON.parse(JSON.stringify(state));
      date.data.date = action.payload.date;
      return {
        ...date,
      };
    }

    case UPDATE_CITY_TYPE_SUCCESS:{
      let cityAndState = JSON.parse(JSON.stringify(state));
      cityAndState.data.cityAndState = action.payload.cityAndState;
      return {
        ...cityAndState,
      };
    }

    case UPDATE_OFFERVALIDITY_TYPE_SUCCESS:{
      let offerValidity = JSON.parse(JSON.stringify(state));
      offerValidity.data.offerValidity = action.payload.date;
      return {
        ...offerValidity,
      };
    }

    case UPDATE_EMAIL_TYPE_SUCCESS:{
      let email = JSON.parse(JSON.stringify(state));
      email.data.email = action.payload.email;
      return {
        ...email,
      };
    }

    case UPDATE_TEL_TYPE_SUCCESS:{
      let phoneNumber = JSON.parse(JSON.stringify(state));
      phoneNumber.data.phoneNumber = action.payload.phoneNumber;
      return {
        ...phoneNumber,
      };
    }


    case UPDATE_ATN_CLIENT_TYPE_SUCCESS:{
      return {
        ...state,
        data: {
          ...state.data,
          atn: null,
          medic: null,
          client: action.payload.client,
        }
        
      };
    }
    case UPDATE_ATN_MEDIC_TYPE_SUCCESS:{
      return {
        ...state,
        data: {
          ...state.data,
          atn: null,
          medic: action.payload.medic,
          client: null,
        }
        
      };
    }
    case UPDATE_ATN_TYPE_BEGIN:{
      return state;
    }
    case UPDATE_ATN_TYPE_SUCCESS:{
      return {
        ...state,
        data: {
          ...state.data,
          atn: action.payload.atn,
          medic: null,
          client: null,
        }
        
      };
    }
    case UPDATE_ATN_TYPE_FAILURE:{
      return state;
    }

    case UPDATE_INSTITUTIONS_TYPE_SUCCESS:{
      return {
        ...state,
        data: { 
          ...state.data, 
          hospital: action.payload.hospital,
          institutionName: null
         }
      };
    }


    case POST_PATIENT_TYPE_BEGIN:
      return state;

    case POST_PATIENT_TYPE_SUCCESS: {
      let patient = JSON.parse(JSON.stringify(state));
      patient.data.patient = action.payload.patient;
      return {
        ...state,
        data: {
          ...state.data,
          patient: action.payload.patient

        }
      }
    }
    case POST_PATIENT_TYPE_FAILURE:
      return state;



    case UPDATE_PATIENT_TYPE_SUCCESS:{
      return {
        ...state,
        data: { 
          ...state.data, 
          patient: action.payload.PatientName,
         }
      };
    }
    case UPDATE_NAME_INSTITUTIONS_TYPE_SUCCESS:{
      return {
        ...state,
        data: { 
          ...state.data, 
          hospital: null,
          institutionName: action.payload.hospitalName.name
         }
      };
    }

    case UPDATE_WAYTOPAY_TYPE_SUCCESS:{
      let wayToPay = JSON.parse(JSON.stringify(state));
      wayToPay.data.wayToPay = action.payload.wayToPay;
      return {
        ...wayToPay,
      };
    }

    case UPDATE_PAYMENTCONDITIONS_TYPE_SUCCESS:{
      let paymentCondition = JSON.parse(JSON.stringify(state));
      paymentCondition.data.paymentCondition = action.payload.paymentCondition;
      return {
        ...paymentCondition,
      };
    }

    case UPDATE_FORM_DELIVERY_SUCCESS: {
      let deliveryTime = JSON.parse(JSON.stringify(state));
      deliveryTime.data.deliveryTime = action.payload.deliveryTime;
      return {
        ...deliveryTime,
      };
    }

    case UPDATE_PRICE_LIST_TYPE_SUCCESS: {
      return {
        ...state,
        data: { 
          ...state.data,
          priceList: action.payload.priceList
        },
        priceList: action.payload.priceList
      };
    }
    case UPDATE_SPECIFIC_SESCRIPTION_QUOTE: {
      return {
        ...state,
        SpecificDescriptionQuotationItems: action.payload.specificDescriptionQuotation
      };
    }
    case GET_PRODUCT_PRICE_BEGIN:
      return state;
    case GET_PRODUCT_PRICE_SUCCESS:{
        return {
          ...state,
          listProductPrice: action.payload.productPrices
        }

    }
    case GET_PRODUCT_PRICE_FAILURE:
      return state;

        case GET_MEDICS_FAILURE:
          return state;
    case DELETE_ELEMENT_LIST_PRODUCT_PRICES:
      return {
        ...state,
        listProductPrice: action.payload.newListProducts
      }
    // ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬

    case POST_NEW_QUOTE_BEGIN:
      return state;
    case POST_NEW_QUOTE_SUCCESS:
      return {
        ...state,
        createdQuote: action.payload.createdQuote
      }
    case POST_NEW_QUOTE_FAILURE:
      return state;

    case RESET_TO_INITIAL_STATE_QUOTE:
      return initialState.newQuote;

    case RESET_TO_INITIAL_STATE_QUOTE_WITHOUT:
      return {
        ...initialState.newQuote,
        createdQuote: action.payload.recoveryNewDBQuote
      };

    case ADD_PENDING_STATE_QUOTE:
      return action.payload.newQuotePending;

    default:
      return state;
  }
}
