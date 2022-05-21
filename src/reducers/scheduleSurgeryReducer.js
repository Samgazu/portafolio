import {

  GET_MEDICS_TO_SCHEDULE_BEGIN,
  GET_MEDICS_TO_SCHEDULE_FAILURE,
  GET_MEDICS_TO_SCHEDULE_SUCCESS,
  GET_MY_MEDICS_TO_SCHEDULE_BEGIN,
  GET_MY_MEDICS_TO_SCHEDULE_SUCCESS,
  GET_MY_MEDICS_TO_SCHEDULE_FAILURE,
  GET_INSTITUTIONS_TO_SCHEDULE_BEGIN,
  GET_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
  GET_INSTITUTIONS_TO_SCHEDULE_FAILURE,
  GET_PATIENT_TO_SCHEDULE_BEGIN,
  GET_PATIENT_TO_SCHEDULE_SUCCESS,
  GET_PATIENT_TO_SCHEDULE_FAILURE,
  GET_CLIENTS_TO_SCHEDULE_BEGIN,
  GET_CLIENTS_TO_SCHEDULE_SUCCESS,
  GET_CLIENTS_TO_SCHEDULE_FAILURE,
  GET_PRICE_LIST_TO_SCHEDULE_BEGIN,
  GET_PRICE_LIST_TO_SCHEDULE_SUCCESS,
  GET_PRICE_LIST_TO_SCHEDULE_FAILURE,
  GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_BEGIN,
  GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_SUCCESS,
  GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_FAILURE,
  GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_BEGIN,
  GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_SUCCESS,
  GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_FAILURE,
  SEARCH_MEDICS_TO_SCHEDULE_BEGIN,
  SEARCH_MEDICS_TO_SCHEDULE_FAILURE,
  SEARCH_MEDICS_TO_SCHEDULE_SUCCESS,
  SEARCH_INSTITUTIONS_TO_SCHEDULE_BEGIN,
  SEARCH_INSTITUTIONS_TO_SCHEDULE_FAILURE,
  SEARCH_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
  SEARCH_PATIENT_TO_SCHEDULE_BEGIN,
  SEARCH_PATIENT_TO_SCHEDULE_SUCCESS,
  SEARCH_PATIENT_TO_SCHEDULE_FAILURE,
  SEARCH_CLIENT_TO_SCHEDULE_BEGIN,
  SEARCH_CLIENT_TO_SCHEDULE_SUCCESS,
  SEARCH_CLIENT_TO_SCHEDULE_FAILURE,
  SEARCH_PRODUCT_TO_REQUIRE_BEGIN,
  SEARCH_PRODUCT_TO_REQUIRE_SUCCESS,
  SEARCH_PRODUCT_TO_REQUIRE_FAILURE,
  SEARCH_PRICE_LIST_TO_SCHEDULE_BEGIN,
  SEARCH_PRICE_LIST_TO_SCHEDULE_SUCCESS,
  SEARCH_PRICE_LIST_TO_SCHEDULE_FAILURE,
  SEARCH_PRODUCT_TO_OPTIONAL_BEGIN,
  SEARCH_PRODUCT_TO_OPTIONAL_SUCCESS,
  SEARCH_PRODUCT_TO_OPTIONAL_FAILURE,
  SEARCH_SYSTEM_BEGIN,
  SEARCH_SYSTEM_FAILURE,
  SEARCH_SYSTEM_SUCCESS,
  SET_MEDICS_TO_SCHEDULE_SUCCESS,
  SET_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
  SET_PATIENT_TO_SCHEDULE_SUCCESS,
  SET_HOUR_TO_SCHEDULE_SUCCESS,
  SET_CLIENT_TO_SCHEDULE_SUCCESS,
  SET_PRICE_LIST_TO_SCHEDULE_SUCCESS,
  SET_ATQ_TO_SCHEDULE_SUCCESS,
  SET_QUOTE_TO_SCHEDULE_SUCCESS,
  SET_ELEMENTS_TO_TYPE_SURGERY_SUCCESS,
  SET_ELEMENTS_TYPE_SURGERY_BEING,
  SET_ELEMENTS_TYPE_SURGERY_PENDING,
  SET_ELEMENTS_TYPE_SURGERY_SUCCES,
  SET_ELEMENTS_TYPE_SURGERY_COMPLETED,
  SET_ELEMENTS_OPTIONAL_MATERIAL_SUCCES,
  SET_ELEMENTS_OPTIONAL_MATERIAL_BEING,
  SET_ELEMENTS_REQUIRE_MATERIAL_SUCCES,
  SET_ELEMENTS_REQUIRE_MATERIAL_BEING,
  SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_BEING,
  SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_SUCCES,
  SET_MANAGE_OBSERVATION_SUCCES,
  SET_WITH_PRICES_LIST_SUCCES,
  ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN,
  ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS,
  ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE,
  ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_BEGIN,
  ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_SUCCESS,
  ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_FAILURE,
  DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN,
  DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS,
  DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE,
  DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_BEGIN,
  DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_SUCCESS,
  DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_FAILURE,
  CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_BEGIN,
  CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_SUCCESS,
  CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_FAILURE,
  RESET_TO_INITIAL_STATE_SCHEDULE,
  RESET_TO_INITIAL_STATE_SCHEDULE_WITHOUT,
  POST_CREATE_PATIENT_SCHEDULE_BEGIN,
  POST_CREATE_PATIENT_SCHEDULE_SUCCESS,
  POST_CREATE_PATIENT_SCHEDULE_FAILURE,
  DELETE_ELEMENTS_OPTIONAL_MATERIAL,
  DELETE_ELEMENT_TYPE_SURGERY,

} from '../constants/actionTypes';
import initialState from './initialState';

export function scheduleSurgeryReducer(state = initialState.scheduleSurgery, action) {
  switch (action.type) {

    //------------------------ GET MEDICS ------------------------
    case GET_MEDICS_TO_SCHEDULE_BEGIN:
      return state;
    case GET_MEDICS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getMedicsToSchedule: action.payload.getMedics
        //getMedicsToSchedule: [...(state.getMedicsToSchedule && state.getMedicsToSchedule), ...action.payload.getMedics]
      }
    }
    case GET_MEDICS_TO_SCHEDULE_FAILURE:
      return state;
    //------------------------ GET MY MEDICS ------------------------
    case GET_MY_MEDICS_TO_SCHEDULE_BEGIN:
      return state;
    case GET_MY_MEDICS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getMyMedicsToSchedule: action.payload.getMyMedics
      }
    }
    case GET_MY_MEDICS_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ GET INSTITUTION ------------------------
    case GET_INSTITUTIONS_TO_SCHEDULE_BEGIN:
      return state;
    case GET_INSTITUTIONS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getInstitutionsToSchedule: action.payload.getInstitutions
      }
    }
    case GET_INSTITUTIONS_TO_SCHEDULE_FAILURE:
      return state;


    //------------------------ GET PATIENT ------------------------
    case GET_PATIENT_TO_SCHEDULE_BEGIN:
      return state;
    case GET_PATIENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getPatientsToSchedule: action.payload.getPatient
      }
    }
    case GET_PATIENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ GET CLIENT ------------------------
    case GET_CLIENTS_TO_SCHEDULE_BEGIN:
      return state;
    case GET_CLIENTS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getClientsToSchedule: action.payload.getClient
      }
    }
    case GET_CLIENTS_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ GET PRICELIST ------------------------
    case GET_PRICE_LIST_TO_SCHEDULE_BEGIN:
      return state;
    case GET_PRICE_LIST_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        getListPricesToSchedule: action.payload.priceList
      }
    }
    case GET_PRICE_LIST_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ GET SYSTEM REQUERIMENTS  ------------------------
    case GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_BEGIN:
      return state;
    case GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        listSystemRequirements: action.payload.listSystemRequirements
      }
    }
    case GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ GET SYSTEM ARRAGEMEN  ------------------------
    case GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_BEGIN:
      return state;
    case GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        systemSurgeryArrangement: action.payload.systemSurgeryArrangement
      }
    }
    case GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH MEDICS ------------------------
    case SEARCH_MEDICS_TO_SCHEDULE_BEGIN:
      return state;
    case SEARCH_MEDICS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        searchMedicsToSchedule: action.payload.searchMedic
      }
    }
    case SEARCH_MEDICS_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH INSTITUTION ------------------------
    case SEARCH_INSTITUTIONS_TO_SCHEDULE_BEGIN:
      return state;
    case SEARCH_INSTITUTIONS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        searchInstitutionToSchedule: action.payload.searchInstitution
      }
    }
    case SEARCH_INSTITUTIONS_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH PATIENT ------------------------
    case SEARCH_PATIENT_TO_SCHEDULE_BEGIN:
      return state;
    case SEARCH_PATIENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        searchPatientsToSchedule: action.payload.searchPatient
      }
    }
    case SEARCH_PATIENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH CLIENT ------------------------
    case SEARCH_CLIENT_TO_SCHEDULE_BEGIN:
      return state;
    case SEARCH_CLIENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        searchClientsToSchedule: action.payload.searchClient
      }
    }
    case SEARCH_CLIENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH PRICE LIST ------------------------
    case SEARCH_PRICE_LIST_TO_SCHEDULE_BEGIN:
      return state;
    case SEARCH_PRICE_LIST_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        searchListPricesToSchedule: action.payload.searchListPricesToSchedule
      }
    }
    case SEARCH_PRICE_LIST_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ SEARCH REQUIRE PRODUCTS ------------------------

    case SEARCH_PRODUCT_TO_REQUIRE_BEGIN:
      return state;
    case SEARCH_PRODUCT_TO_REQUIRE_SUCCESS: {
      return {
        ...state,
        searchRequireProducts: action.payload.searchRequireProducts
      }
    }
    case SEARCH_PRODUCT_TO_REQUIRE_FAILURE:
      return state;

    //------------------------ SEARCH OPTIONAL PRODUCTS ------------------------

    case SEARCH_PRODUCT_TO_OPTIONAL_BEGIN:
      return state;
    case SEARCH_PRODUCT_TO_OPTIONAL_SUCCESS: {
      return {
        ...state,
        searchOptionalProducts: action.payload.searchOptionalProducts
      }
    }
    case SEARCH_PRODUCT_TO_OPTIONAL_FAILURE:
      return state;

    //------------------------ SEARCH SYSTEM ------------------------

    case SEARCH_SYSTEM_BEGIN:
      return state;
    case SEARCH_SYSTEM_SUCCESS: {
      return {
        ...state,
        searchSystem: action.payload.searchSystem
      }
    }
    case SEARCH_SYSTEM_FAILURE:
      return state;



    //------------------------ SET MEDICS ------------------------
    case SET_MEDICS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        MedicToSchedule: action.payload.setMedic
      }
    }

    //------------------------ SET INSTITUTION ------------------------
    case SET_INSTITUTIONS_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        InstitutionToSchedule: action.payload.setInstitution
      }
    }


    //------------------------ SET PATIENT ------------------------
    case SET_PATIENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        PatientToSchedule: action.payload.setPatient
      }
    }

    //------------------------ SET HOUR ------------------------
    case SET_HOUR_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        HourToSchedule: action.payload.setHour
      }
    }

    //------------------------ SET CLIENT ------------------------
    case SET_CLIENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        ClientToSchedule: action.payload.setClient
      }
    }

    //------------------------ SET PRICELIST ------------------------
    case SET_PRICE_LIST_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        PriceListToSchedule: action.payload.priceList
      }
    }

    //------------------------ SET ATQ ------------------------
    case SET_ATQ_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        ATQToSchedule: action.payload.atq
      }
    }

    //------------------------ SET QUOTE ------------------------
    case SET_QUOTE_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        QuoteToSchedule: action.payload.quoteToSchedule
      }
    }

    //------------------------ SET QUOTE ------------------------
    case SET_ELEMENTS_TO_TYPE_SURGERY_SUCCESS: {
      return {
        ...state,
        listElementTypeSurgery: action.payload.elementsToTypeSurgery
      }
    }

    //------------------------ SET ELEMENTS TYPE SURGERY BEING ------------------------
    case SET_ELEMENTS_TYPE_SURGERY_BEING: {
      return {
        ...state,
        listElementTypeSurgeryBeing: action.payload.listElementTypeSurgeryBeing
      }
    }

    //------------------------ SET ELEMENTS TYPE SURGERY PENDING ------------------------
    case SET_ELEMENTS_TYPE_SURGERY_PENDING: {
      return {
        ...state,
        listElementTypeSurgeryPending: action.payload.listElementTypeSurgeryPending
      }
    }
    //------------------------ SET ELEMENTS TYPE SURGERY SUCCES ------------------------
    case SET_ELEMENTS_TYPE_SURGERY_SUCCES: {
      return {
        ...state,
        listElementTypeSurgerySucces: action.payload.listElementTypeSurgerySucces
      }
    }

    //------------------------ SET ELEMENTS TYPE SURGERY SUCCES ------------------------

    case SET_ELEMENTS_TYPE_SURGERY_COMPLETED: {
      return {
        ...state,
        listElementTypeSurgeryCompleted: action.payload.listElementTypeSurgeryCompleted
      }
    }

    //------------------------ SET ELEMENTS OPTIONAL MATERIAL BEING ------------------------
    case SET_ELEMENTS_OPTIONAL_MATERIAL_BEING: {
      return {
        ...state,
        listElementOptionalMaterialBeing: action.payload.listElementOptionalMaterialBeing
      }
    }

    //------------------------ SET ELEMENTS OPTIONAL MATERIAL SUCCES ------------------------

    case SET_ELEMENTS_OPTIONAL_MATERIAL_SUCCES: {
      return {
        ...state,
        listElementOptionalMaterialSucces: action.payload.listElementOptionalMaterialSucces
      }
    }

    //------------------------ SET ELEMENTS REQUIRE MATERIAL BEING ------------------------
    case SET_ELEMENTS_REQUIRE_MATERIAL_BEING: {
      return {
        ...state,
        listElementOptRequireMaterialBeing: action.payload.listElementOptRequireMaterialBeing
      }
    }

    //------------------------ SET ELEMENTS REQUIRE MATERIAL SUCCES ------------------------

    case SET_ELEMENTS_REQUIRE_MATERIAL_SUCCES: {
      return {
        ...state,
        listElementOptRequireMaterialSucces: action.payload.listElementOptRequireMaterialSucces
      }
    }

    //------------------------ SET ELEMENTS REQUIRE MATERIAL BEING ------------------------
    case SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_BEING: {
      return {
        ...state,
        listElementRequireMaterialBeing: action.payload.listElementRequireMaterialBeing
      }
    }

    //------------------------ SET ELEMENTS REQUIRE MATERIAL SUCCES ------------------------

    case SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_SUCCES: {
      return {
        ...state,
        listElementRequireMaterialSucces: action.payload.listElementRequireMaterialSucces
      }
    }
    //------------------------ SET MANAGE OBSERVATION SUCCES ------------------------

    case SET_MANAGE_OBSERVATION_SUCCES: {
      return {
        ...state,
        listObservations: action.payload.listObservations
      }
    }

    //------------------------ SET WITH PRICES LIST SUCCES ------------------------

    case SET_WITH_PRICES_LIST_SUCCES: {
      return {
        ...state,
        withPricesList: action.payload.withPricesList
      }
    }

    //------------------------ ADD SYSTEM SURGERY REQUIREMENT ------------------------

    case ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN:
      return state;
    case ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        addSystemSurgeryRequirement: action.payload.addSystemSurgeryRequirement
      }
    }
    case ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ ADD SYSTEM SURGERY REQUIREMENT ------------------------

    case ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_BEGIN:
      return state;
    case ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        addSystemSurgeryArrangemenRequirement: action.payload.addSystemSurgeryArrangemenRequirement
      }
    }
    case ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ DELETE SYSTEM SURGERY REQUIREMENT ------------------------

    case DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN:
      return state;
    case DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        deleteSystemSurgeryRequirement: action.payload.deleteSystemSurgeryRequirement
      }
    }
    case DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ DELETE SYSTEM SURGERY ARRANGEMENT ------------------------

    case DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_BEGIN:
      return state;
    case DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_SUCCESS: {
      return {
        ...state,
        deleteSystemSurgeryArrangement: action.payload.deleteSystemSurgeryArrangement
      }
    }
    case DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_FAILURE:
      return state;

    //------------------------ CREATE APPOINTMENT TO SCHEDULE SURGERY ------------------------

    case CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_BEGIN:
      return state;
    case CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_SUCCESS: {
      return {
        ...initialState.ScheduleSurgery,
        newAppointmentCreated: action.payload.newAppointmentCreated
      }
    }
    case CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_FAILURE:
      return state;

    //------------------------ RESET TO INITIAL STATE SCHEDULE ------------------------

    case RESET_TO_INITIAL_STATE_SCHEDULE:
      return initialState.scheduleSurgery;

    //------------------------ RESET TO INITIAL STATE SCHEDULE WITHOUT------------------------
    // pendiente de utilizar y establecer logica
    case RESET_TO_INITIAL_STATE_SCHEDULE_WITHOUT:
      return {
        ...initialState.ScheduleSurgery,

      };

    case POST_CREATE_PATIENT_SCHEDULE_BEGIN:
      return state;

    case POST_CREATE_PATIENT_SCHEDULE_SUCCESS: {
      return {
        ...state,
        PatientToSchedule: action.payload.patientSchedule
      }
    }
    case POST_CREATE_PATIENT_SCHEDULE_FAILURE:
      return state;


    case DELETE_ELEMENTS_OPTIONAL_MATERIAL:
      return {
        ...state,
        listElementOptionalMaterialSucces: state.listElementOptionalMaterialSucces.filter(product => product.id != action.payload.productId)

      };

    case DELETE_ELEMENT_TYPE_SURGERY:
      return {
        ...state,
        listElementTypeSurgeryCompleted: state.listElementTypeSurgeryCompleted.filter(product => product.system.id != action.payload.systemId)

      };



  

    //------------------------ DEFAULT ------------------------
    default:
      return state;

  }

}