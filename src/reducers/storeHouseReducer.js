import {
    ADD_SELLER_NOTES,
    GET_QUOTE_STORE_VIEW_BEGIN,
    GET_QUOTE_STORE_VIEW_SUCCES,
    GET_QUOTE_STORE_VIEW_FAILURE,
    GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_BEGIN,
    GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_SUCCESS,
    GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_FAILURE,
    GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_BEGIN,
    GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_SUCCESS,
    GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_FAILURE,
    GET_APPOINTMENTS_STOREHOUSE_BEGIN,
    GET_APPOINTMENTS_STOREHOUSE_SUCCESS,
    GET_APPOINTMENTS_STOREHOUSE_FAILURE,
    GET_APPOINTMENTS_STOREHOUSE_BEGIN_ATQ,
    GET_APPOINTMENTS_STOREHOUSE_SUCCESS_ATQ,
    GET_APPOINTMENTS_STOREHOUSE_FAILURE_ATQ,
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_BEGIN,
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_SUCCESS,
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_FAILURE,
    SET_APPOINTMENTS_STOREHOUSE,
    GET_LOCATIONS_STOREHOUSE_BEGIN,
    GET_LOCATIONS_STOREHOUSE_SUCCESS,
    GET_LOCATIONS_STOREHOUSE_FAILURE,
    GET_PRODUCTS_STOREHOUSE_BEGIN,
    GET_PRODUCTS_STOREHOUSE_SUCCESS,
    GET_PRODUCTS_STOREHOUSE_FAILURE,
    SEARCH_PRODUCT_STOREHOUSE_BEGIN,
    SEARCH_PRODUCT_STOREHOUSE_SUCCESS,
    SEARCH_PRODUCT_STOREHOUSE_FAILURE,
    SEARCH_SCANNING_PRODUCT_STOREHOUSE_SUCCESS,
    GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN,
    GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_SUCCESS,
    GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_FAILURE,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_FAILURE,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_BEGIN,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_FAILURE,
    SET_LOCATION_PRODUCT_TO_LIST_STOREHOSE,
    SET_LIST_APPROVE_ORDER_PREVIEW_STOREHOSE,
    RESET_TO_INITIAL_STATE_STOREHOUSE,
    UPDATE_APPOINTMENT_STATUS_STOREHOSE_BEGIN,
    UPDATE_APPOINTMENT_STATUS_STOREHOSE_SUCCESS,
    UPDATE_APPOINTMENT_STATUS_STOREHOSE_FAILURE,
    GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN,
    GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_SUCCESS,
    GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_FAILURE,
    GET_APPOINTMENT_LOCATIONS_STOREHOSE_BEGIN,
    GET_APPOINTMENT_LOCATIONS_STOREHOSE_SUCCESS,
    GET_APPOINTMENT_LOCATIONS_STOREHOSE_FAILURE,
    UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_BEGIN,
    UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_SUCCESS,
    UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_FAILURE,
    UPDATE_APPOINTMENT_LOCATION_STOREHOSE_BEGIN,
    UPDATE_APPOINTMENT_LOCATION_STOREHOSE_SUCCESS,
    UPDATE_APPOINTMENT_LOCATION_STOREHOSE_FAILURE,
    UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_BEGIN,
    UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_SUCCESS,
    UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_FAILURE,
    UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN,
    UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_SUCCESS,
    UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_FAILURE,
    ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_BEGIN,
    ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_SUCCESS,
    ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_FAILURE,
    ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE,
    ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_BEGIN,
    ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_SUCCESS,
    ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_FAILURE,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
    SET_PICKUP_PLACE_STOREHOSE,
    SET_DESTINATION_PLACE_STOREHOSE,
    REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE,
    SET_INITIAL_DATE_APPOINTENTS,
    SET_FINAL_DATE_APPOINTENTS,
    SET_LIST_APPOIMENT,
    GET_LAST_APPOINTMENTS_STOREHOUSE_BEGIN,
    GET_LAST_APPOINTMENTS_STOREHOUSE_SUCCESS,
    GET_LAST_APPOINTMENTS_STOREHOUSE_FAILURE,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_BEGIN,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_SUCCESS,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_FAILURE,
    GET_SEARCH_LIST_BEGIN_ATQ,
    GET_SEARCH_LIST_SUCCESS_ATQ,
    GET_SEARCH_LIST_FAILURE_ATQ,
    GET_SEARCH_LIST_TRANS_BEGIN_CX,
    GET_SEARCH_LIST_TRANS_SUCCESS_CX,
    GET_SEARCH_LIST_TRANS_FAILURE_CX,
    GET_SEARCH_CX_TRANSFERED_BEGIN,
    GET_SEARCH_CX_TRANSFERED_SUCCESS,
    GET_SEARCH_CX_TRANSFERED_FAILURE,
    SET_REPONSE_SEARCH,

    SET_ADD_PRODUCTS_AND_SYSTEMS,
    ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_BEGIN,
    ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_SUCCESS,
    ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_FAILURE,
    SEARCH_LOCATIONS_STOREHOUSE_BEGIN,
    SEARCH_LOCATIONS_STOREHOUSE_SUCCESS,
    SEARCH_LOCATIONS_STOREHOUSE_FAILURE,
    UPDATE_PRODUCTS_REQUERIMENT_BEGIN,
    UPDATE_PRODUCTS_REQUERIMENT_SUCCESS,
    UPDATE_PRODUCTS_REQUERIMENT_FAILURE,
} from '../constants/actionTypes';

import initialState from './initialState';

export const storeHouseReducer = ( state = initialState.storeHouse, action) => {

    switch(action.type ){

        case SET_REPONSE_SEARCH:{
            return {
                ...state,
                respuestaSearch: action.payload.response
            }

        }

        case UPDATE_PRODUCTS_REQUERIMENT_BEGIN:{
            return state;
        } 
        case UPDATE_PRODUCTS_REQUERIMENT_SUCCESS:{
            return {
                ...state,
                productUpdate: action.payload.product
            }
        }
        case UPDATE_PRODUCTS_REQUERIMENT_FAILURE:{
            return state;
        }

        case SEARCH_LOCATIONS_STOREHOUSE_BEGIN:{
            return state;
        } 
        case SEARCH_LOCATIONS_STOREHOUSE_SUCCESS:{
            return {
                ...state,
                searchLocation: action.payload.local
            }
        }
        case SEARCH_LOCATIONS_STOREHOUSE_FAILURE:{
            return state;
        }

        case ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_BEGIN:{
            return state;
        }
        
        case ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_SUCCESS:{
            return {
                ...state,
                AddNote: action.payload.note
            }
        }
        
        case ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_FAILURE:{
            return state;
        }
        //------------------------ ADD_SELLER_NOTES ------------------------
        case ADD_SELLER_NOTES:{
            return {
                ...state,
                listSellerNotes: action.payload.listNotes
            }

        }
        //------------------------ ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE ------------------------
        case ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE:{
            return {
                ...state,
                listNotesLogistics: action.payload.listNotesLogistics
            }

        }
        //------------------------ REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE ------------------------
        case REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE:{
            return {
                ...state,
                requerimentsListToAprove: action.payload.requerimentsListToAprove
            }

        }
        //------------------------ GET_QUOTE_STORE_VIEW_BEGIN ------------------------
        case GET_QUOTE_STORE_VIEW_BEGIN:{
            return state;
        }
        
        case GET_QUOTE_STORE_VIEW_SUCCES:{
            return {
                ...state,
                QuoteToStoreView: action.payload.quoteToStoreView
            }
        }
        
        case GET_QUOTE_STORE_VIEW_FAILURE:{
            return state;
        }

        //------------------------ GET MAIN SURGERY TYPES TO STOREHOUSE BEGIN ------------------------
        case GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_SUCCESS:{
            return {
                ...state,
                mainSurgeryTypes: action.payload.mainSurgeryTypes
            }
        }
        
        case GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_FAILURE:{
            return state;
        }
        //------------------------ GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_BEGIN ------------------------
        case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_SUCCESS: {
            
            return {
                ...state,
                systems:{
                    ...state.systems,
                    [action.mainSurgeryType.description]: action.system.map(item => {
                        let product = item.product;
                        product.mainSurgeryTypeId = action.mainSurgeryType.id;
                        product.systemId = item.id;
                        return product;
                    })
                },
            };
        }
        
        case GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_FAILURE:{
        return state;
        }
        //------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
        case GET_APPOINTMENTS_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_APPOINTMENTS_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                appointmentsList: action.payload.appointments,
            }
        }
        
        case GET_APPOINTMENTS_STOREHOUSE_FAILURE:{
        return state;
        }

        //---------------------------------

        case GET_LAST_APPOINTMENTS_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_LAST_APPOINTMENTS_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                lastAppointment: action.payload.lastAppointment,
            }
        }
        
        case GET_LAST_APPOINTMENTS_STOREHOUSE_FAILURE:{
        return state;
        }

        //----------------------------------------------
        //---------------------------------

        case GET_NEXT_APPOINTMENTS_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_NEXT_APPOINTMENTS_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                nextAppointment: action.payload.nextAppointment,
            }
        }
        
        case GET_NEXT_APPOINTMENTS_STOREHOUSE_FAILURE:{
        return state;
        }


        //--------------------------------------------------------------
        case GET_APPOINTMENTS_STOREHOUSE_BEGIN_ATQ:{
            return state;
        }
        
        case GET_APPOINTMENTS_STOREHOUSE_SUCCESS_ATQ: {
            return {
                ...state,
                appointmentsListATQ: action.payload.appointments,
            }
        }
        
        case GET_APPOINTMENTS_STOREHOUSE_FAILURE_ATQ:{
            return state;
        }

         //----------Search ATQ-----------------------------------
         case GET_SEARCH_LIST_BEGIN_ATQ:{
            return state;
        }
        
        case GET_SEARCH_LIST_SUCCESS_ATQ: {
            return {
                ...state,
                listSearch: action.payload.appointments,
            }
        }
        
        case GET_SEARCH_LIST_FAILURE_ATQ:{
            return state;
        }

        //------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
        case GET_APPOINTMENTS_CALENDAR_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_APPOINTMENTS_CALENDAR_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                appointmentsListCalendar: action.payload.appointments,
            }
        }
        
        case GET_APPOINTMENTS_CALENDAR_STOREHOUSE_FAILURE:{
        return state;
        }

        //------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
        case GET_LOCATIONS_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_LOCATIONS_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                listLocations: action.payload.locations,
            }
        }
        
        case GET_LOCATIONS_STOREHOUSE_FAILURE:{
        return state;
        }
        //------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
        case GET_PRODUCTS_STOREHOUSE_BEGIN:{
            return state;
        }
        
        case GET_PRODUCTS_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                listProducts: action.payload.products,
            }
        }
        
        case GET_PRODUCTS_STOREHOUSE_FAILURE:{
        return state;
        }

        //------------------------ SEARCH_PRODUCT_STOREHOUSE_BEGIN ------------------------
        case SEARCH_PRODUCT_STOREHOUSE_BEGIN:{
            return state;
        }

        case SEARCH_PRODUCT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                listProducts: action.payload.searchProducts,
            }
        }
        case SEARCH_SCANNING_PRODUCT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                listScanningProducts: action.payload.searchProducts,
            }
        }

        case SEARCH_PRODUCT_STOREHOUSE_FAILURE:{
        return state;
        }
        //------------------------ GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN ------------------------
        case GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN:{
            return state;
        }

        case GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                locationItemToAdd: action.payload.locationItem,
            }
        }

        case GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_FAILURE:{
        return state;
        }

        //------------------------ UPDATE_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case UPDATE_APPOINTMENT_STATUS_STOREHOSE_BEGIN:{
            return state;
        }

        case UPDATE_APPOINTMENT_STATUS_STOREHOSE_SUCCESS: {
            return {
                ...state,
                appointmentStatus: action.payload.appointmentStatus,
            }
        }

        case UPDATE_APPOINTMENT_STATUS_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN ------------------------
        case ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN:{
            return state;
        }

        case ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_SUCCESS: {
            return state;
        }

        case ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN ------------------------
        case ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_BEGIN:{
            return state;
        }

        case ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_SUCCESS: {
            return state;
        }

        case ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ ADD_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
        case GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN:{
            return state;
        }

        case GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                AppointmentProducts: action.payload.AppointmentProducts,
            }
        }

        case GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_FAILURE:{
        return state;
        }
        //------------------------ ADD_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
        case GET_APPOINTMENT_LOCATIONS_STOREHOSE_BEGIN:{
            return state;
        }

        case GET_APPOINTMENT_LOCATIONS_STOREHOSE_SUCCESS: {
            return {
                ...state,
                AppointmentLocations: action.payload.AppointmentLocations,
            }
        }

        case GET_APPOINTMENT_LOCATIONS_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ ADD_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
        case UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_BEGIN:{
            return state;
        }

        case UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                updateAppointmentProduct: action.payload.updateAppointmentProduct,
            }
        }

        case UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_FAILURE:{
        return state;
        }
        //------------------------ ADD_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
        case UPDATE_APPOINTMENT_LOCATION_STOREHOSE_BEGIN:{
            return state;
        }

        case UPDATE_APPOINTMENT_LOCATION_STOREHOSE_SUCCESS: {
            return {
                ...state,
                updateAppointmentLocation: action.payload.updateAppointmentLocation,
            }
        }

        case UPDATE_APPOINTMENT_LOCATION_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_BEGIN ------------------------
        case UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_BEGIN:{
            return state;
        }

        case UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_SUCCESS: {
            return {
                ...state,
                updateAppointmentLocations: action.payload.updateAppointmentLocations,
            }
        }

        case UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_FAILURE:{
        return state;
        }
        //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN:{
            return state;
        }

        case UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_SUCCESS: {
            return {
                ...state,
                updateLogisticAppointmentStatus: action.payload.updateLogisticAppointmentStatus,
            }
        }

        case UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_FAILURE:{
        return state;
        }

        //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_BEGIN:{
            return state;
        }

        case ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_SUCCESS: {
            return {
                ...state,
                addNoteSurgeryAppointmentStoreHose: action.payload.addNoteSurgeryAppointmentStoreHose,
            }
        }

        case ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_FAILURE:{
        return state;
        }

        //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_BEGIN:{
            return state;
        }

        case ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                addNoteSurgeryLogisticsStoreHose: action.payload.addNoteSurgeryLogisticsStoreHose,
            }
        }

        case ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_FAILURE:{
            return state;
        }
    //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN:{
            return state;
        }

        case REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                removeProductsFromAppointmentStoreHose: action.payload.removeProductsFromAppointmentStoreHose,
            }
        }

        case REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_FAILURE:{
            return state;
        }
    //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_BEGIN:{
            return state;
        }

        case REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS: {
            return {
                ...state,
                removeLocationsFromAppointmentStoreHose: action.payload.removeLocationsFromAppointmentStoreHose,
            }
        }

        case REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_FAILURE:{
            return state;
        }


    //--------------------SEARCH_CX_TRANSFERED--------------------------------

    //------------------------ UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
        case GET_SEARCH_CX_TRANSFERED_BEGIN:{
            return state;
        }
        case GET_SEARCH_CX_TRANSFERED_SUCCESS: {
            return {
                ...state,
                searchTransfered: action.payload.list,
            }
        }
        case GET_SEARCH_CX_TRANSFERED_FAILURE:{
            return state;
        }

    //------------------------ SET_APPOINTMENTS_STOREHOUSE ------------------------
        case SET_APPOINTMENTS_STOREHOUSE: {
            return {
                ...state,
                appointmentItem: action.payload.appointment,
            }
        }
    //------------------------ SET_LIST_APPROVE_ORDER_PREVIEW_STOREHOSE ------------------------
        case SET_LIST_APPROVE_ORDER_PREVIEW_STOREHOSE: {
            return {
                ...state,
                listApproveOrderPreViewStoreHose: action.payload.listApproveOrderPreViewStoreHose,
            }
        }


    //------------------------FUCTION_TO_ADD_PRODUCTS_AND_SYSTEMS--------------------------------

        case SET_ADD_PRODUCTS_AND_SYSTEMS: {
            return{
                ...state,
                newProducts: action.payload.newProducts
            }
        }

    //------------------------ GET_APPOINTMENTS_STOREHOUSE_SUCCESS ------------------------
        case SET_LOCATION_PRODUCT_TO_LIST_STOREHOSE: {
            return {
                ...state,
                productsListWithLocation: action.payload.productsListWithLocation,
            }
        }
    //------------------------ SET_PICKUP_PLACE_STOREHOSE ------------------------
        case SET_PICKUP_PLACE_STOREHOSE: {
            return {
                ...state,
                pickupPlaceItemStoreHose: action.payload.pickupPlaceItemStoreHose,
            }
        }

    //------------------------ SET_DESTINATION_PLACE_STOREHOSE ------------------------
        case SET_DESTINATION_PLACE_STOREHOSE: {
            return {
                ...state,
                destinationPlaceStoreHose: action.payload.destinationPlaceStoreHose,
            }
        }
    //------------------------ RESET_TO_INITIAL_STATE_STOREHOUSE ------------------------
        case RESET_TO_INITIAL_STATE_STOREHOUSE: {
            return initialState.storeHouse;
        }
        //------------------------ SET_INITIAL_DATE_APPOINTENTS ------------------------
            case SET_INITIAL_DATE_APPOINTENTS: {
                return {
                    ...state,
                    initialDate: action.payload.setDate,
                }
            }
            //------------------------ SET_FINAL_DATE_APPOINTENTS ------------------------
                case SET_FINAL_DATE_APPOINTENTS: {
                    return {
                        ...state,
                        finalDate: action.payload.setDate,
                    }
                }
                case SET_LIST_APPOIMENT: {
                    return {
                        ...state,
                        appoitmentSelected: action.payload.appoiment,
                    }
                }
        default:
            return state;
    }

}