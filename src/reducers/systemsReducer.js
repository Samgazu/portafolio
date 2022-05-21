import shortid from 'shortid';
import {
  GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_BEGIN,
  GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_SUCCESS,
  GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_FAILURE,
  GET_MAIN_SURGERY_TYPES_BEGIN,
  GET_MAIN_SURGERY_TYPES_SUCCESS,
  GET_MAIN_SURGERY_TYPES_FAILURE,
  GET_BUNDLES_FORM_SYSTEM_BEGIN,
  GET_BUNDLES_FORM_SYSTEM_SUCCESS,
  GET_BUNDLES_FORM_SYSTEM_FAILURE,
  CLEAR_BUNDLES_FORM_SYSTEM_SUCCESS,
  GET_SYSTEMS_BEGIN,
  GET_SYSTEMS_SUCCESS,
  GET_SYSTEMS_FAILURE,
  GET_BUNDLES_BY_SYSTEM_ID_BEGIN,
  GET_BUNDLES_BY_SYSTEM_ID_SUCCESS,
  GET_BUNDLES_BY_SYSTEM_ID_FAILURE,
  GET_CLIENTS_BEGIN,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  GET_INSTITUTIONS_BEGIN,
  GET_INSTITUTIONS_SUCCESS,
  GET_INSTITUTIONS_FAILURE,
  GET_MEDICS_BEGIN,
  GET_MEDICS_SUCCESS,
  GET_FINISH_QUOTE_LIST_BEGIN,
  GET_FINISH_QUOTE_LIST_SUCCESS,
  GET_FINISH_QUOTE_LIST_FAILURE,
  GET_FINISH_ALL_QUOTE_LIST_BEGIN,
  GET_FINISH_ALL_QUOTE_LIST_SUCCESS,
  GET_FINISH_ALL_QUOTE_LIST_FAILURE,
  GET_UNFINISH_QUOTE_LIST_BEGIN,
  GET_UNFINISH_QUOTE_LIST_SUCCESS,
  GET_UNFINISH_QUOTE_LIST_FAILURE,
  ADD_NAME_NEW_CONFIGURATION_SUCCESS,
  ADD_SURGERY_TARGETS_NEW_CONFIGURATION_SUCCESS,
  MODIFY_NEW_CONFIGURATION_SUCCESS,
  ADD_PRODUCTS_NEW_CONFIGURATION_SUCCESS,
  POST_NEW_CONFIGURATION_BEGIN,
  POST_NEW_CONFIGURATION_SUCCESS,
  POST_NEW_CONFIGURATION_FAILURE,
  POST_CREATE_CONFIGURATION_BEGIN,
  POST_CREATE_CONFIGURATION_SUCCESS,
  POST_CREATE_CONFIGURATION_FAILURE,
  GET_SYSTEM_CONFIGURATION_SUCCESS,
  ADD_SURGERY_TARGETS_SYSTEM_BEGIN,
  ADD_SURGERY_TARGETS_SYSTEM_SUCCESS,
  ADD_SURGERY_TARGETS_SYSTEM_FAILURE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  DELETE_SURGERY_TARGETS_SYSTEM_BEGIN,
  DELETE_SURGERY_TARGETS_SYSTEM_SUCCESS,
  DELETE_SURGERY_TARGETS_SYSTEM_FAILURE,
  DELETE_CONSTRUCT_NEWCONFIG,
  POST_ADD_CONFIGURATION_TODB_BEGIN,
  POST_ADD_CONFIGURATION_TODB_SUCCESS,
  POST_ADD_CONFIGURATION_TODB_FAILURE,
  POST_DELETE_CONFIGURATION_TODB_BEGIN,
  POST_DELETE_CONFIGURATION_TODB_SUCCESS,
  POST_DELETE_CONFIGURATION_TODB_FAILURE,
  POST_ADD_PRODUCT_TO_CONFIG_BEGIN,
  POST_ADD_PRODUCT_TO_CONFIG_SUCCESS,
  POST_ADD_PRODUCT_TO_CONFIG_FAILURE,
  POST_DELETE_PRODUCT_TO_CONFIG_BEGIN,
  POST_DELETE_PRODUCT_TO_CONFIG_SUCCESS,
  POST_DELETE_PRODUCT_TO_CONFIG_FAILURE,
  DELETE_PRODUCT_NEWCONFIG,
  RESET_TO_INITIAL_STATE,
  DELETE_BUNDLE_TO_CONFIG_BEGIN,
  DELETE_BUNDLE_TO_CONFIG_SUCCESS,
  DELETE_BUNDLE_TO_CONFIG_FAILURE,
  SEARCH_PRODUCT_BEGIN,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
  SEARCH_FINISHED_QUOTE_BEGIN,
  SEARCH_FINISHED_QUOTE_SUCCESS,
  SEARCH_FINISHED_QUOTE_FAILURE,
  SEARCH_IN_ALL_FINISHED_QUOTE_BEGIN,
  SEARCH_IN_ALL_FINISHED_QUOTE_SUCCESS,
  SEARCH_IN_ALL_FINISHED_QUOTE_FAILURE,
  SEARCH_MEDICS_BEGIN,
  SEARCH_MEDICS_SUCCESS,
  SEARCH_MEDICS_FAILURE,
  SEARCH_CLIENTS_BEGIN,
  SEARCH_CLIENTS_SUCCESS,
  SEARCH_CLIENTS_FAILURE,
  SEARCH_HOSPITAL_BEGIN,
  SEARCH_HOSPITAL_SUCCESS,
  SEARCH_HOSPITAL_FAILURE,
  ADD_PENDING_STATE_QUOTE_SYSTEM,
  UPDATE_BUNDLES,
  GET_CITIES_BEGIN,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  GET_STATES_BEGIN,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
  GET_PATIENT_BEGIN,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAILURE,
  SEARCH_PATIENT_BEGIN,
  SEARCH_PATIENT_SUCCESS,
  SEARCH_PATIENT_FAILURE,
  GET_PRICE_LIST_BEGIN,
  GET_PRICE_LIST_SUCCESS,
  GET_PRICE_LIST_FAILURE,
  REMOVE_HOSPITAL_REQUERIMENT_BEGIN,
  REMOVE_HOSPITAL_REQUERIMENT_SUCCESS,
  REMOVE_HOSPITAL_REQUERIMENT_FAILURE,
  REMOVE_MEDIC_REQUERIMENT_BEGIN,
  REMOVE_MEDIC_REQUERIMENT_SUCCESS,
  REMOVE_MEDIC_REQUERIMENT_FAILURE,
  ADD_MEDIC_REQUERIMENT_BEGIN,
  ADD_MEDIC_REQUERIMENT_SUCCESS,
  ADD_MEDIC_REQUERIMENT_FAILURE,
  ADD_HOSPITAL_REQUERIMENT_BEGIN,
  ADD_HOSPITAL_REQUERIMENT_SUCCESS,
  ADD_HOSPITAL_REQUERIMENT_FAILURE,
  SET_LIST,
  UPDATE_REQUIREMENTS_HOSPITAL_BEGIN,
  UPDATE_REQUIREMENTS_HOSPITAL_SUCCESS,
  UPDATE_REQUIREMENTS_HOSPITAL_FAILURE,
  UPDATE_REQUIREMENTS_MEDIC_BEGIN,
  UPDATE_REQUIREMENTS_MEDIC_SUCCESS,
  UPDATE_REQUIREMENTS_MEDIC_FAILURE,
  
} from '../constants/actionTypes';

import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export function systemsReducer(state = initialState.systems, action) {
  switch (action.type) {

    case UPDATE_REQUIREMENTS_HOSPITAL_BEGIN: 
    return state;
  case UPDATE_REQUIREMENTS_HOSPITAL_SUCCESS: {
    return {
      ...state,
      updateRequirements: action.payload.response
    };
  } 
  case UPDATE_REQUIREMENTS_HOSPITAL_FAILURE: 
    return state;

    case UPDATE_REQUIREMENTS_MEDIC_BEGIN: 
      return state;
    case UPDATE_REQUIREMENTS_MEDIC_SUCCESS: {
      return {
        ...state,
        updateRequirements: action.payload.response
      };
    } 
    case UPDATE_REQUIREMENTS_MEDIC_FAILURE: 
      return state;


    case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_BEGIN:
      return state;
    case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_SUCCESS: {
      let systems = JSON.parse(JSON.stringify(state.systems));
      systems[action.mainSurgeryType.description] = action.system.map(item => {
        let product = item.product;
        product.mainSurgeryTypeId = action.mainSurgeryType.id;
        product.systemId = item.id;
        return product;
      
      });
    
      return {
        ...state,
        systems,
      };
    }
    case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_FAILURE:
      return state;
    case GET_MAIN_SURGERY_TYPES_BEGIN: 
      return state;
    case GET_MAIN_SURGERY_TYPES_SUCCESS: {
      return {
        ...state,
        mainSurgeryTypes: action.mainSurgeryTypes
      };
    } 
    case GET_MAIN_SURGERY_TYPES_FAILURE: 
      return state;
    case GET_BUNDLES_FORM_SYSTEM_BEGIN:
      return state;
    case GET_BUNDLES_FORM_SYSTEM_SUCCESS:{
      return {
         ...state,
         bundles:action.bundles,
      };
    }
    case GET_BUNDLES_FORM_SYSTEM_FAILURE:
      return state;
    case CLEAR_BUNDLES_FORM_SYSTEM_SUCCESS: {
      return {
        ...state,
        bundles: null,
      }
    }
    case GET_SYSTEMS_BEGIN: 
      return state;

    case GET_SYSTEMS_SUCCESS: {
      return {
        ...state,
        //systemsTemplate: action.systemsTemplate
        systemsTemplate: action.systemsTemplate,

      };
    }
    case GET_SYSTEMS_FAILURE: 
      return state;
    case GET_BUNDLES_BY_SYSTEM_ID_BEGIN:
      return state;
    case GET_BUNDLES_BY_SYSTEM_ID_SUCCESS:
      return {
        ...state,
        bundles:action.bundles,
      }
    case GET_BUNDLES_BY_SYSTEM_ID_FAILURE:
      return state;

    case GET_PRODUCTS_BEGIN:
      return state;
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      }
    case GET_PRODUCTS_FAILURE:
      return state;

    case GET_CLIENTS_BEGIN:
      return state;
    case GET_CLIENTS_SUCCESS:{
      return{
        ...state,
        getClients: action.getClients
      } 
    }

    case SET_LIST:
      return {
        ...state,
        lista: action.payload.list,
      }
    case GET_CLIENTS_FAILURE:
      return state;
    case GET_INSTITUTIONS_BEGIN:
      return state;
    case GET_INSTITUTIONS_SUCCESS:{
      return{
        ...state,
        getInstitutions: action.getInstitutions
      } 
    }
    case GET_INSTITUTIONS_FAILURE:
      return state;
    case GET_MEDICS_BEGIN:
      return state;
    case GET_MEDICS_SUCCESS:{
      return{
        ...state,
        getMedics: action.getMedics
      } 
    }

    case GET_FINISH_QUOTE_LIST_BEGIN:
      return state;
    case GET_FINISH_QUOTE_LIST_SUCCESS:{
      return {
        ...state,
      quotesFinished: action.payload.finishedQuote
        //quotesFinished: [state.quotesFinished ? ...state.quotesFinished/* , ...[action.payload.finishedQuote] */: action.payload.finishedQuote],
         // quotesFinished: [...(state.quotesFinished && state.quotesFinished), ...action.payload.finishedQuote] 

      }
    }
    case GET_FINISH_QUOTE_LIST_FAILURE:
      return state;

    case GET_FINISH_ALL_QUOTE_LIST_BEGIN:
      return state;
    case GET_FINISH_ALL_QUOTE_LIST_SUCCESS:
      return {
        ...state,
        quotesFinished: action.payload.finishedQuote
        //quotesFinished: [...(state.quotesFinished && state.quotesFinished), ...action.payload.finishedQuote],

      };
    case GET_FINISH_ALL_QUOTE_LIST_FAILURE:
      return state;
      
    case GET_UNFINISH_QUOTE_LIST_BEGIN:
      return state;
    case GET_UNFINISH_QUOTE_LIST_SUCCESS:
      return {
        ...state,
        quotesUnfinished: action.payload.unfinishedQuote
         //quotesUnfinished: [...(action.payload.unfinishedQuote && action.payload.unfinishedQuote), ...action.payload.unfinishedQuote],

      };
    case GET_UNFINISH_QUOTE_LIST_FAILURE:
      return state;
      
    case POST_CREATE_CONFIGURATION_BEGIN:
      return state;
    case POST_CREATE_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: {
          ...state.constructNewConfig,
          configuration: action.payload.configurationName
        }
      };
    case POST_CREATE_CONFIGURATION_FAILURE:
      return state;

    case POST_ADD_CONFIGURATION_TODB_BEGIN:
      return state;
    case POST_ADD_CONFIGURATION_TODB_SUCCESS:
      return {
        ...state,
        addSurgeryConfig: action.payload.surgeryTarget
      };
    case POST_ADD_CONFIGURATION_TODB_FAILURE:
      return state;

    case UPDATE_BUNDLES:
      return {
        ...state,
        bundles: action.payload.newListBundle
      };

    case POST_DELETE_CONFIGURATION_TODB_BEGIN:
      return state;
    case POST_DELETE_CONFIGURATION_TODB_SUCCESS:
      return state;
    case POST_DELETE_CONFIGURATION_TODB_FAILURE:
      return state;

    case POST_ADD_PRODUCT_TO_CONFIG_BEGIN:
      return state;
    case POST_ADD_PRODUCT_TO_CONFIG_SUCCESS:
      return {
        ...state,
        newProductConfig: action.payload.newProduct
      };
    case POST_ADD_PRODUCT_TO_CONFIG_FAILURE:
      return state;

    case POST_DELETE_PRODUCT_TO_CONFIG_BEGIN:
      return state;
    case POST_DELETE_PRODUCT_TO_CONFIG_SUCCESS:
      return state;
    case POST_DELETE_PRODUCT_TO_CONFIG_FAILURE:
      return state;

    case GET_SYSTEM_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: {
          id: shortid.generate(),
          system: action.payload.system
        }
      };
    case MODIFY_NEW_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: {
          ...state.constructNewConfig,
          configuration: action.payload.nameConfig
        }
      };
    case ADD_NAME_NEW_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: action.payload.newConfig
        
      };
    case ADD_SURGERY_TARGETS_NEW_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: {
          ...state.constructNewConfig,
          surgeryTargets: action.payload.surgeryTarget
        }
      };
    case ADD_SURGERY_TARGETS_SYSTEM_BEGIN:
      return  state;
    case ADD_SURGERY_TARGETS_SYSTEM_SUCCESS:
      return {
        ...state,
        addSurgerySystem: action.payload.sistemAndMainSurgery
      };
    case ADD_SURGERY_TARGETS_SYSTEM_FAILURE:
      return state;

    case DELETE_SURGERY_TARGETS_SYSTEM_BEGIN:
      return  state;
    case DELETE_SURGERY_TARGETS_SYSTEM_SUCCESS:
      return {
        ...state,
      };
    case DELETE_SURGERY_TARGETS_SYSTEM_FAILURE:
      return state;

    case DELETE_PRODUCT_NEWCONFIG:
      return {
        ...state,
        constructNewConfig: {
          ...state.constructNewConfig,
          configuration: {
            ...state.constructNewConfig.configuration,
            items: action.payload.delProduct
          },
          
        }
      };

    case ADD_PRODUCTS_NEW_CONFIGURATION_SUCCESS:
      return {
        ...state,
        constructNewConfig: {
          ...state.constructNewConfig,
          configuration: {
            ...state.constructNewConfig.configuration,
            items: action.payload.products
          },
          
        }
      };
      case POST_NEW_CONFIGURATION_BEGIN:
        return state;
      case POST_NEW_CONFIGURATION_SUCCESS:
        return {
          ...state,
          constructNewConfig: {}
        };
      case POST_NEW_CONFIGURATION_FAILURE:
        return state;
      case GET_PRICE_LIST_BEGIN:
        return state;
      case GET_PRICE_LIST_SUCCESS:
        return {
          ...state,
          productListPrices: action.payload.priceLists
        }
        case GET_PRICE_LIST_FAILURE:
          return state;
            
      case DELETE_BUNDLE_TO_CONFIG_BEGIN:
        return state;
      case DELETE_BUNDLE_TO_CONFIG_SUCCESS:
        return state;
      case DELETE_BUNDLE_TO_CONFIG_FAILURE:
        return state;

      case SEARCH_PRODUCT_BEGIN:
        return state;
      case SEARCH_PRODUCT_SUCCESS:
        return {
          ...state,
          searchProduct: action.payload.searchProducts
        };
      case SEARCH_PRODUCT_FAILURE:
        return state;

      case SEARCH_FINISHED_QUOTE_BEGIN:
        return state;
      case SEARCH_FINISHED_QUOTE_SUCCESS:
        return {
          ...state,
          searchFinishQuote: action.payload.searchFinishQuote
        };
      case SEARCH_FINISHED_QUOTE_FAILURE:
        return state;

      case SEARCH_IN_ALL_FINISHED_QUOTE_BEGIN:
        return state;
      case SEARCH_IN_ALL_FINISHED_QUOTE_SUCCESS:
        return {
          ...state,
          searchInAllFinishQuote: action.payload.searchInAllFinishQuote
        };
      case SEARCH_IN_ALL_FINISHED_QUOTE_FAILURE:
        return state;

      case SEARCH_MEDICS_BEGIN:
        return state;
      case SEARCH_MEDICS_SUCCESS:
        return {
          ...state,
          searchMedics: action.payload.searchMedic
        };
      case SEARCH_MEDICS_FAILURE:
        return state;


      case SEARCH_CLIENTS_BEGIN:
        return state;
      case SEARCH_CLIENTS_SUCCESS:
        return {
          ...state,
          searchClients: action.payload.searchClient
        };
      case SEARCH_CLIENTS_FAILURE:
        return state;

      case SEARCH_HOSPITAL_BEGIN:
        return state;
      case SEARCH_HOSPITAL_SUCCESS:
        return {
          ...state,
          searchHospitals: action.payload.searchHospital
        };
      case SEARCH_HOSPITAL_FAILURE:
        return state;
      case SEARCH_PATIENT_BEGIN:
        return state;
      case SEARCH_PATIENT_SUCCESS:
        return {
          ...state,
          searchPatients: action.payload.searchPatient
        };
      case SEARCH_PATIENT_FAILURE:
        return state;
      case GET_PATIENT_BEGIN:
        return state;
      case GET_PATIENT_SUCCESS:
        return {
          ...state,
          getPatients: action.payload.getPatient
         // getPatients: [...(state.getPatients && state.getPatients), ...action.payload.getPatient]
        };
      case GET_PATIENT_FAILURE:
        return state;
      case GET_CITIES_BEGIN:
        return state;
      case GET_CITIES_SUCCESS:
        return {
          ...state,
          getCities: action.payload.getCities
        };
      case GET_CITIES_FAILURE:
        return state;
      case GET_STATES_BEGIN:
        return state;
      case GET_STATES_SUCCESS:
        return {
          ...state,
          getStates: action.payload.getStates
        };
      case GET_STATES_FAILURE:
        return state;

      case REMOVE_HOSPITAL_REQUERIMENT_BEGIN:
        return state;
      case REMOVE_HOSPITAL_REQUERIMENT_SUCCESS:
        return state;
      case REMOVE_HOSPITAL_REQUERIMENT_FAILURE:
        return state;

      case REMOVE_MEDIC_REQUERIMENT_BEGIN:
        return state;
      case REMOVE_MEDIC_REQUERIMENT_SUCCESS:
        return state;
      case REMOVE_MEDIC_REQUERIMENT_FAILURE:
        return state;


      case ADD_MEDIC_REQUERIMENT_BEGIN:
        return state;
      case ADD_MEDIC_REQUERIMENT_SUCCESS:
        return {
          ...state,
          addMedicRequeriment: action.payload.data,
        };
      case ADD_MEDIC_REQUERIMENT_FAILURE:
        return state;

      case ADD_HOSPITAL_REQUERIMENT_BEGIN:
        return state;
      case ADD_HOSPITAL_REQUERIMENT_SUCCESS:
        return {
          ...state,
          addHospitalRequeriment: action.payload.data,
        };
      case ADD_HOSPITAL_REQUERIMENT_FAILURE:
        return state;

      case DELETE_CONSTRUCT_NEWCONFIG:
        return {
          ...state,
          constructNewConfig:{}
        };
      case RESET_TO_INITIAL_STATE:
        return initialState.systems;

      case ADD_PENDING_STATE_QUOTE_SYSTEM:
        return action.payload.systemsPending;

    default:
      return state;
  }
}
