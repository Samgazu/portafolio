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
    GET_LAST_APPOINTMENTS_STOREHOUSE_BEGIN,
    GET_LAST_APPOINTMENTS_STOREHOUSE_SUCCESS,
    GET_LAST_APPOINTMENTS_STOREHOUSE_FAILURE,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_BEGIN,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_SUCCESS,
    GET_NEXT_APPOINTMENTS_STOREHOUSE_FAILURE,
    GET_APPOINTMENTS_STOREHOUSE_BEGIN_ATQ,
    GET_APPOINTMENTS_STOREHOUSE_SUCCESS_ATQ,
    GET_APPOINTMENTS_STOREHOUSE_FAILURE_ATQ,
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
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_BEGIN,
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_SUCCESS,
    GET_APPOINTMENTS_CALENDAR_STOREHOUSE_FAILURE,
    SET_LOCATION_PRODUCT_TO_LIST_STOREHOSE,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_FAILURE,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_BEGIN,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_FAILURE,
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
    SET_PICKUP_PLACE_STOREHOSE,
    SET_DESTINATION_PLACE_STOREHOSE,
    SET_INITIAL_DATE_APPOINTENTS,
    SET_FINAL_DATE_APPOINTENTS,
    SET_LIST_APPOIMENT,
    REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
    GET_SEARCH_LIST_BEGIN_ATQ,
    GET_SEARCH_LIST_SUCCESS_ATQ,
    GET_SEARCH_LIST_FAILURE_ATQ,
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
import request from '../utils/request';




//--------------- ESTA FUNCION ES PARA LA RESPUESTA DEL SEARCH --------------
    export const setReposnseSearch = (response) => ({
        type:SET_REPONSE_SEARCH,
        payload:{
            response
        }
    });

//------------------------ GET_QUOTE_STORE_VIEW_BEGIN ------------------------
export const getSearchCxTransferedBegin = () => ({
    type: GET_SEARCH_CX_TRANSFERED_BEGIN
});
export const getSearchCxTransferedSuccess = (list) => ({
    type: GET_SEARCH_CX_TRANSFERED_SUCCESS,
    payload: {
        list
    }
});
export const getSearchCxTransferedFailure = (error) => ({
    type: GET_SEARCH_CX_TRANSFERED_FAILURE,
    payload: {
        error
    }
});

//----------------------------------------------------------------------------
export const updateProductRequerimentsBegin = () => ({
    type: UPDATE_PRODUCTS_REQUERIMENT_BEGIN,
})
export const updateProductRequerimentsSuccess = (product) => ({
    type: UPDATE_PRODUCTS_REQUERIMENT_SUCCESS,
    payload : {
        product
    }
});
export const updateProductRequerimentsFailure = () => ({
    type: UPDATE_PRODUCTS_REQUERIMENT_FAILURE,
});


export const searchLocationsStoreHouseBegin = () => ({
    type: SEARCH_LOCATIONS_STOREHOUSE_BEGIN,
})
export const searchLocationsStoreHouseSuccess = (local) => ({
    type: SEARCH_LOCATIONS_STOREHOUSE_SUCCESS,
    payload : {
        local
    }
});
export const searchLocationsStoreHouseFailure = () => ({
    type: SEARCH_LOCATIONS_STOREHOUSE_FAILURE,
});




export const addNoteOfNotAvailbleProductBegin = () => ({
    type: ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_BEGIN,
})
export const addNoteOfNotAvailbleProductSuccess = (note) => ({
    type: ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_SUCCESS,
    payload : {
        note
    }
});
export const addNoteOfNotAvailbleProductFailure = () => ({
    type: ADD_NOTE_OF_NOT_AVAILABLE_PRODUCT_REQUERIMENT_FAILURE,
});



export const setAppoiment = ( appoiment ) =>({
    type: SET_LIST_APPOIMENT,
    payload: {
        appoiment
    },
});
//------------------------ ADD_SELLER_NOTES ------------------------
export const addSellerNotes = (listNotes) => ({
    type: ADD_SELLER_NOTES,
    payload: {
        listNotes
    }
});

//------------------------     type: ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE ------------------------
export const addSurgeryAppointmentLogisticsNoteStoreHouseStore = (listNotesLogistics) => ({
    type: ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE,
    payload: {
        listNotesLogistics
    }
});

//------------------------ REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE ------------------------
export const requerimentsListToAproveState = (requerimentsListToAprove) => ({
    type: REQUERIMENTS_LIST_TO_APROVE_STATE_STOREHOUSE,
    payload: {
        requerimentsListToAprove
    }
});

//------------------------ GET_QUOTE_STORE_VIEW_BEGIN ------------------------
export const storeHouseGetQuoteToShowInViewBegin = () => ({
    type: GET_QUOTE_STORE_VIEW_BEGIN
});
export const storeHouseGetQuoteToShowInViewSuccess = (quoteToStoreView) => ({
    type: GET_QUOTE_STORE_VIEW_SUCCES,
    payload: {
        quoteToStoreView
    }
});
export const storeHouseGetQuoteToShowInViewFailure = (error) => ({
    type: GET_QUOTE_STORE_VIEW_FAILURE,
    payload: {
        error
    }
});


//------------------------ GET MAIN SURGERY TYPES TO STOREHOUSE BEGIN ------------------------
export const getMainSurgeryTypesStoreHouseBegin = () => ({
    type: GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_BEGIN,
});
export const getMainSurgeryTypesStoreHouseSuccess = (mainSurgeryTypes) => ({
    type: GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_SUCCESS,
    payload:{
        mainSurgeryTypes
    }
});
export const getMainSurgeryTypesStoreHouseFailure = () => ({
    type: GET_MAIN_SURGERY_TYPES_TO_STOREHOUSE_FAILURE,
});

//------------------------ GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_BEGIN ------------------------
export const getSystemByMainSurgencyStoreHouseBegin = () =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_BEGIN
});
export const getSystemByMainSurgencyStoreHouseSuccess = (mainSurgeryType, system) =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_SUCCESS,
    mainSurgeryType,
    system,
});
export const getSystemByMainSurgencyStoreHouseFailure = () =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE_FAILURE
});

//------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
export const getAppointmentsStoreHouseBegin = () => ({
    type: GET_APPOINTMENTS_STOREHOUSE_BEGIN
});
export const getAppointmentsStoreHouseSuccess = (appointments) => ({
    type: GET_APPOINTMENTS_STOREHOUSE_SUCCESS,
    payload: {
        appointments
    }
});
export const getAppointmentsStoreHouseFailure = () => ({
    type: GET_APPOINTMENTS_STOREHOUSE_FAILURE
});


// LAST APPOIMENT ADMIN ATQ----------------------

export const getLastAppointmentsStoreHouseBegin = () => ({
    type: GET_LAST_APPOINTMENTS_STOREHOUSE_BEGIN
});
export const getLastAppointmentsStoreHouseSuccess = (lastAppointment) => ({
    type: GET_LAST_APPOINTMENTS_STOREHOUSE_SUCCESS,
    payload: {
        lastAppointment
    }
});
export const getLastAppointmentsStoreHouseFailure = () => ({
    type: GET_LAST_APPOINTMENTS_STOREHOUSE_FAILURE
});


//--------------------------------------------------------------




// NEXT APPOIMENT ADMIN ATQ----------------------

export const getNextAppointmentsStoreHouseBegin = () => ({
    type: GET_NEXT_APPOINTMENTS_STOREHOUSE_BEGIN
});
export const getNextAppointmentsStoreHouseSuccess = (nextAppointment) => ({
    type: GET_NEXT_APPOINTMENTS_STOREHOUSE_SUCCESS,
    payload: {
        nextAppointment
    }
});
export const getNextAppointmentsStoreHouseFailure = () => ({
    type: GET_NEXT_APPOINTMENTS_STOREHOUSE_FAILURE
});


//--------------------------------------------------------------

export const getAppointmentsStoreHouseBeginAtq = () => ({
    type: GET_APPOINTMENTS_STOREHOUSE_BEGIN_ATQ
});
export const getAppointmentsStoreHouseSuccessAtq = (appointments) => ({
    type: GET_APPOINTMENTS_STOREHOUSE_SUCCESS_ATQ,
    payload: {
        appointments
    }
});
export const getAppointmentsStoreHouseFailureAtq = () => ({
    type: GET_APPOINTMENTS_STOREHOUSE_FAILURE_ATQ
});


//--------------------------SEARCH - ASIGNAR-ATQ------------------------------------------


export const getSearchListHouseBeginAtq = () => ({
    type: GET_SEARCH_LIST_BEGIN_ATQ
});
export const getSearchListHouseSuccessAtq = (appointments) => ({
    type: GET_SEARCH_LIST_SUCCESS_ATQ,
    payload: {
        appointments
    }
});
export const getSearchListHouseFailureAtq = () => ({
    type: GET_SEARCH_LIST_FAILURE_ATQ
});


//------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
export const getAppointmentsCalendarStoreHouseBegin = () => ({
    type: GET_APPOINTMENTS_CALENDAR_STOREHOUSE_BEGIN
});
export const getAppointmentsCalendarStoreHouseSuccess = (appointments) => ({
    type: GET_APPOINTMENTS_CALENDAR_STOREHOUSE_SUCCESS,
    payload: {
        appointments
    }
});
export const getAppointmentsCalendarStoreHouseFailure = () => ({
    type: GET_APPOINTMENTS_CALENDAR_STOREHOUSE_FAILURE
});


//------------------------ SET_APPOINTMENTS_STOREHOUSE ------------------------
export const setAppointmentsStoreHouse = (appointment) => ({
    type: SET_APPOINTMENTS_STOREHOUSE,
    payload: {
        appointment
    }
});


//------------------------ GET_LOCATIONS_STOREHOUSE_BEGIN ------------------------
export const getLocationsStoreHouseBegin = () => ({
    type: GET_LOCATIONS_STOREHOUSE_BEGIN
});
export const getLocationsStoreHouseSuccess = (locations) => ({
    type: GET_LOCATIONS_STOREHOUSE_SUCCESS,
    payload: {
        locations
    }
});
export const getLocationsStoreHouseFailure = () => ({
    type: GET_LOCATIONS_STOREHOUSE_FAILURE
});


//------------------------ GET_PRODUCTS_STOREHOUSE_BEGIN ------------------------
export const getProductsStoreHouseBegin= () => ({
    type: GET_PRODUCTS_STOREHOUSE_BEGIN,
});

export const getProductsStoreHouseSuccess = (products) => ({
    type: GET_PRODUCTS_STOREHOUSE_SUCCESS,
    payload: {
        products
    }
});
export const getProductsStoreHouseFailure = () => ({
    type: GET_PRODUCTS_STOREHOUSE_FAILURE,
});


//------------------------ SEARCH_PRODUCT_STOREHOUSE_BEGIN ------------------------
export const searchProductsStoreHouseBegin= () => ({
    type: SEARCH_PRODUCT_STOREHOUSE_BEGIN,
});
export const searchProductsStoreHouseSuccess = (searchProducts) => ({
    type: SEARCH_PRODUCT_STOREHOUSE_SUCCESS,
    payload: {
        searchProducts
    }
});
export const searchScanningProductsStoreHouseSuccess = (searchProducts) => ({
    type: SEARCH_SCANNING_PRODUCT_STOREHOUSE_SUCCESS,
    payload: {
        searchProducts
    }
});
export const searchProductsStoreHouseFailure = () => ({
    type: SEARCH_PRODUCT_STOREHOUSE_FAILURE,
});

//------------------------ GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN ------------------------
export const getLocationByLocationCodeStoreHoseBegin= () => ({
    type: GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_BEGIN,
});
export const getLocationByLocationCodeStoreHoseSuccess = (locationItem) => ({
    type: GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_SUCCESS,
    payload: {
        locationItem
    }
});
export const getLocationByLocationCodeStoreHoseFailure = () => ({
    type: GET_LOCATION_BY_LOCATION_CODE_STOREHOUSE_FAILURE,
});

//------------------------ ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN ------------------------
export const addLocationsToAppointmentStoreHoseBegin = () => ({
    type: ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN,
});
export const addLocationsToAppointmentStoreHoseSuccess = (productLocations) => ({
    type: ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    payload: {
        productLocations
    }
});
export const addLocationsToAppointmentStoreHoseFailure = () => ({
    type: ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_FAILURE,
});

//------------------------ ADD_LOCATIONS_TO_APPOINTMENT_STOREHOSE_BEGIN ------------------------
export const addProductsToAppointmentStoreHoseBegin = () => ({
    type: ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_BEGIN,
});
export const addProductsToAppointmentStoreHoseSuccess = (productLocations) => ({
    type: ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_SUCCESS,
    payload: {
        productLocations
    }
});
export const addProductsToAppointmentStoreHoseFailure = () => ({
    type: ADD_PRODUCTS_TO_APPOINTMENT_STOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_STATUS_STOREHOSE_BEGIN ------------------------
export const UpdateWarehouseAppointmentStatusStoreHoseBegin = () => ({
    type: UPDATE_APPOINTMENT_STATUS_STOREHOSE_BEGIN,
});
export const UpdateWarehouseAppointmentStatusStoreHoseSuccess = (appointmentStatus) => ({
    type: UPDATE_APPOINTMENT_STATUS_STOREHOSE_SUCCESS,
    payload: {
        appointmentStatus
    }
});
export const UpdateWarehouseAppointmentStatusStoreHoseFailure = () => ({
    type: UPDATE_APPOINTMENT_STATUS_STOREHOSE_FAILURE,
});

//------------------------ GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
export const getProductsToAppointmentHouseBegin = () => ({
    type: GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_BEGIN,
});
export const getProductsToAppointmentStoreHoseSuccess = (AppointmentProducts) => ({
    type: GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_SUCCESS,
    payload: {
        AppointmentProducts
    }
});
export const getProductsToAppointmentStoreHoseFailure = () => ({
    type: GET_PRODUCTS_TO_APPOINTMENT_STOREHOUSE_FAILURE,
});

//------------------------ GET_APPOINTMENT_LOCATIONS_STOREHOSE_BEGIN ------------------------
export const getAppointmentLocationsStoreHoseBegin = () => ({
    type: GET_APPOINTMENT_LOCATIONS_STOREHOSE_BEGIN,
});
export const getAppointmentLocationsStoreHoseSuccess = (AppointmentLocations) => ({
    type: GET_APPOINTMENT_LOCATIONS_STOREHOSE_SUCCESS,
    payload: {
        AppointmentLocations
    }
});
export const getAppointmentLocationsStoreHoseFailure = () => ({
    type: GET_APPOINTMENT_LOCATIONS_STOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_BEGIN ------------------------
export const updateAppointmentProductStoreHouseBegin = () => ({
    type: UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_BEGIN,
});
export const updateAppointmentProductStoreHouseSuccess = (updateAppointmentProduct) => ({
    type: UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_SUCCESS,
    payload: {
        updateAppointmentProduct
    }
});
export const updateAppointmentProductStoreHouseFailure = () => ({
    type: UPDATE_APPOINTMENT_PRODUCT_STOREHOUSE_FAILURE,
});

//------------------------ GET_APPOINTMENT_LOCATIONS_STOREHOSE_BEGIN ------------------------
export const updateAppointmentLocationStoreHoseBegin = () => ({
    type: UPDATE_APPOINTMENT_LOCATION_STOREHOSE_BEGIN,
});
export const updateAppointmentLocationStoreHoseSuccess = (updateAppointmentLocation) => ({
    type: UPDATE_APPOINTMENT_LOCATION_STOREHOSE_SUCCESS,
    payload: {
        updateAppointmentLocation
    }
});
export const updateAppointmentLocationStoreHoseFailure = () => ({
    type: UPDATE_APPOINTMENT_LOCATION_STOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_LOGISTICS_STOREHOSEB_EGIN ------------------------
export const updateAppointmentLogisticsStoreHoseBegin = () => ({
    type: UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_BEGIN,
});
export const updateAppointmentLogisticsStoreHoseSuccess = (updateAppointmentLocations) => ({
    type: UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_SUCCESS,
    payload: {
        updateAppointmentLocations
    }
});
export const updateAppointmentLogisticsStoreHoseFailure = () => ({
    type: UPDATE_APPOINTMENT_LOGISTICS_STOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_LOGISTICS_STOREHOSEB_EGIN ------------------------
export const updateLogisticAppointmentStatusStoreHoseBegin = () => ({
    type: UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_BEGIN,
});
export const updateLogisticAppointmentStatusStoreHoseSuccess = (updateLogisticAppointmentStatus) => ({
    type: UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_SUCCESS,
    payload: {
        updateLogisticAppointmentStatus
    }
});
export const updateLogisticAppointmentStatusStoreHoseFailure = () => ({
    type: UPDATE_LOGISTIC_APPOINTMENT_STATUS_STOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_LOGISTICS_STOREHOSEB_EGIN ------------------------
export const addNoteSurgeryAppointmentStoreHoseBegin = () => ({
    type: ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_BEGIN,
});
export const addNoteSurgeryAppointmentStoreHoseSuccess = (addNoteSurgeryAppointmentStoreHose) => ({
    type: ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_SUCCESS,
    payload: {
        addNoteSurgeryAppointmentStoreHose
    }
});
export const addNoteSurgeryAppointmentStoreHoseFailure = () => ({
    type: ADD_NOTE_SURGERY_APPOINTMENTS_TOREHOSE_FAILURE,
});

//------------------------ UPDATE_APPOINTMENT_LOGISTICS_STOREHOSEB_EGIN ------------------------
export const addSurgeryAppointmentLogisticsNoteStoreHouseBegin = () => ({
    type: ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_BEGIN,
});
export const addSurgeryAppointmentLogisticsNoteStoreHouseSuccess = (addNoteSurgeryLogisticsStoreHose) => ({
    type: ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_SUCCESS,
    payload: {
        addNoteSurgeryLogisticsStoreHose
    }
});
export const addSurgeryAppointmentLogisticsNoteStoreHouseFailure = () => ({
    type: ADD_SURGERY_APPOINTMENT_LOGISTICS_NOTE_STOREHOUSE_FAILURE,
});


//------------------------ REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
export const removeProductsFromAppointmentStoreHouseBegin = () => ({
    type: REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
});
export const removeProductsFromAppointmentStoreHouseSuccess = (removeProductsFromAppointmentStoreHose) => ({
    type: REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    payload: {
        removeProductsFromAppointmentStoreHose
    }
});
export const removeProductsFromAppointmentStoreHouseFailure = () => ({
    type: REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
});

//------------------------ REMOVE_PRODUCTS_FROM_APPOINTMENT_STOREHOUSE_BEGIN ------------------------
export const removeLocationsFromAppointmentStoreHouseBegin = () => ({
    type: REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_BEGIN,
});
export const removeLocationsFromAppointmentStoreHouseSuccess = (removeLocationsFromAppointmentStoreHose) => ({
    type: REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_SUCCESS,
    payload: {
        removeLocationsFromAppointmentStoreHose
    }
});
export const removeLocationsFromAppointmentStoreHouseFailure = () => ({
    type: REMOVE_LOCATIONS_FROM_APPOINTMENT_STOREHOUSE_FAILURE,
});

//------------------------ SET_LOCATION_PRODUCT_TO_LIST_STOREHOSE INDIVUAL ------------------------

export const setLocationProductToListStoreHose = (productsListWithLocation) => ({
    type: SET_LOCATION_PRODUCT_TO_LIST_STOREHOSE,
    payload: {
        productsListWithLocation
    }
});



//------------------------FUNCTION_TO_ADD_NEW_SYSTEM_AND_PRODUCTS-----------------------------------

export const setNewProductsAndSystems = (newProducts) => ({
    type:SET_ADD_PRODUCTS_AND_SYSTEMS,
    payload: {
        newProducts
    }
});



//------------------------ SEARCH_PRODUCT_STOREHOUSE_ INDIVUAL ------------------------

export const updateWarehouseAppointmentStatusStoreHose = (listApproveOrderPreViewStoreHose) => ({
    type: SET_LIST_APPROVE_ORDER_PREVIEW_STOREHOSE,
    payload: {
        listApproveOrderPreViewStoreHose
    }
});


//------------------------ SEARCH_PRODUCT_STOREHOUSE_ INDIVUAL ------------------------

export const setListApproveOrderPreViewStoreHose = (listApproveOrderPreViewStoreHose) => ({
    type: SET_LIST_APPROVE_ORDER_PREVIEW_STOREHOSE,
    payload: {
        listApproveOrderPreViewStoreHose
    }
});

//------------------------ SET_PICKUP_PLACES_TOREHOSE INDIVUAL ------------------------

export const setPickupPlaceStoreHose = (pickupPlaceItemStoreHose) => ({
    type: SET_PICKUP_PLACE_STOREHOSE,
    payload: {
        pickupPlaceItemStoreHose
    }
});
//------------------------ SEARCH_PRODUCT_STOREHOUSE_ INDIVUAL ------------------------

export const setDestinationPlaceStoreHose = (destinationPlaceStoreHose) => ({
    type: SET_DESTINATION_PLACE_STOREHOSE,
    payload: {
        destinationPlaceStoreHose
    }
});
//------------------------ RESET_TO_INITIAL_STATE_STOREHOUSE INDIVUAL ------------------------

export const resetToInitialStateStoreHouse = ()=> ({
    type: RESET_TO_INITIAL_STATE_STOREHOUSE,
    payload: {
    }
});



//------------------------ SET INITIAL DATE ------------------------
export const setInitialDateAppointments = (setDate) => ({
    type: SET_INITIAL_DATE_APPOINTENTS,
    payload: {
        setDate
    }
});

//------------------------ SET FINAL DATE ------------------------
export const setFinalDateAppointments = (setDate) => ({
    type: SET_FINAL_DATE_APPOINTENTS,
    payload: {
        setDate
    }
});



//------------------------ SEARCH_CX_TRANSFERED ------------------------
export function searchCxTransfered(id) {
    return function (dispatch, getState) {
        dispatch(getSearchCxTransferedBegin());
        return request({
            partialUrl: `/API/Appointment/GetSurgeryAppointmentTransferStatusHistory?Id=${id}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSearchCxTransferedSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getSearchCxTransferedFailure(err));
        });
    }
} 
export function UpdateProductRequeriment( product ) {
    return function (dispatch, getState) {
        dispatch(updateProductRequerimentsBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateSurgeryappointmentProductOrLocationRequirement`,
            method: 'PUT',
            state: getState().user.request,
            body: {...product}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(updateProductRequerimentsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateProductRequerimentsFailure(err));
        });
    }
}




export function AddNoteToAppoiment( note ) {
    return function (dispatch, getState) {
        dispatch(addNoteOfNotAvailbleProductBegin());
        return request({
            partialUrl: `/API/Appointment/SetNotAvailableNoteOnProductRequirment`,
            method: 'PUT',
            state: getState().user.request,
            body: {...note}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addNoteOfNotAvailbleProductSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addNoteOfNotAvailbleProductFailure(err));
        });
    }
}


//------------------------ GET_QUOTE_STORE_VIEW ------------------------
export function storeHouseGetQuoteToShowInView( key, searchBy="id", finishedQuotations = true ) {
    return function (dispatch, getState) {
        dispatch(storeHouseGetQuoteToShowInViewBegin());
        return request({
            partialUrl: `/API/Quotation/SearchAllQuotation?key=${key}&searchBy=${searchBy}&finishedQuotations=${finishedQuotations}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(storeHouseGetQuoteToShowInViewSuccess(data.response));
        })
        .catch(err => {
            return dispatch(storeHouseGetQuoteToShowInViewFailure(err));
        });
    }
}

//------------------------ GET MAIN SURGERY TYPES TO STOREHOUSE ------------------------
export function getMainSurgeryTypeStoreHouse() {
    return function (dispatch, getState) {
        dispatch(getMainSurgeryTypesStoreHouseBegin);
        return request({
            partialUrl: `/API/System/GetMainSurgeryTypes/`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getMainSurgeryTypesStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getMainSurgeryTypesStoreHouseFailure(err))
        });
    }
}

//------------------------ GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_TO_STOREHOUSE ------------------------
export function getSystemByMainSurgencyTypeStoreHouse (mainSurgeryType, currentPage=0, offset=100 ) {
    return function (dispatch, getState) {
        dispatch(getSystemByMainSurgencyStoreHouseBegin());
        return request({
            partialUrl: `/API/System/GetSystemsByMainSurgeryType?currentPage=${currentPage}&offset=${offset}&mainSurgeryTypeId=${mainSurgeryType.id}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSystemByMainSurgencyStoreHouseSuccess(mainSurgeryType,data.response));
        })
        .catch(err => {
            return dispatch(getSystemByMainSurgencyStoreHouseFailure(err))
        });
    }
}


//------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
export const getAppointmentsStoreHouse = ( startDate, endDate, SearchBy = null, searchByParam = null, currentPage = null, offset=null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${SearchBy?`&SearchBy=${SearchBy}`:''}${searchByParam?`&searchByParam=${searchByParam}`:''}${currentPage?`&currentPage=${currentPage}`:''}${offset?`&offset=${offset}`:''}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailure(err))
            
        }
    }
}

export const getAppointmentsStoreHouseOnlyDate = ( startDate, endDate) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailure(err))
            
        }
    }
}



export const getAppointmentsStoreHouseAtq = ( startDate, endDate, SearchBy = null, searchByParam = null, currentPage=null, offset=null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBeginAtq());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${SearchBy?`&SearchBy=${SearchBy}`:' '}${searchByParam?`&searchByParam=${searchByParam}`:''}${currentPage?`&currentPage=${currentPage}`:' '}${offset?`&offset=${offset}`:' '}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccessAtq(data));
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailureAtq(err))
            
        }
    }
}
//------------------------Search AsignarATQ
export const getSearchList = ( startDate, endDate, SearchBy = null, searchByParam = null, currentPage=null, offset=null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getSearchListHouseBeginAtq());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${SearchBy?`&SearchBy=${SearchBy}`:' '}${searchByParam?`&searchByParam=${searchByParam}`:''}${currentPage?`&currentPage=${currentPage}`:' '}${offset?`&offset=${offset}`:' '}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getSearchListHouseSuccessAtq(data));
            
        } catch (err) {
            return dispatch(getSearchListHouseFailureAtq(err))
            
        }
    }
}

//SEARCH ATQ -- LASTSAPPOIMENT
export const getLastAppointments= ( SearchBy = null, searchByParam = null ) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getLastAppointmentsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?${SearchBy?`&SearchBy=${SearchBy}`:''}${searchByParam?`&searchByParam=${searchByParam}`:''}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getLastAppointmentsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getLastAppointmentsStoreHouseFailure(err))
            
        } 
    }
}

export const getAppointmentsStoreHouseAtqWithParams = ( startDate, endDate, SearchBy = null, searchByParam = null , currentPage=null, offset=null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBeginAtq());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${SearchBy?`&SearchBy=${SearchBy}`:' '} ${searchByParam?`&searchByParam=${searchByParam}`:''}${currentPage?`&currentPage=${currentPage}`:' '}${offset?`&offset=${offset}`:' '}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccessAtq(data));
            
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailureAtq(err))
            
        }
    }
}

export const searchAppointmentsStoreHouse = (SearchBy = null, searchByParam = null , currentPage=0, offset=10) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBeginAtq());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?${SearchBy?`&SearchBy=${SearchBy}`:' '} ${searchByParam?`&searchByParam=${searchByParam}`:''}${currentPage?`&currentPage=${currentPage}`:' '}${offset?`&offset=${offset}`:' '}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccessAtq(data));
            
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailureAtq(err))
            
        }
    }
}


export const getAppointmentsStoreHousePagination = ( startDate, endDate,currentPage=null, offset=null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsStoreHouseBeginAtq());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${currentPage?`&currentPage=${currentPage}`:' '}${offset?`&offset=${offset}`:' '}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsStoreHouseSuccessAtq(data));
            
        } catch (err) {
            return dispatch(getAppointmentsStoreHouseFailureAtq(err))
            
        }
    }
}

    
//SEARCH ATQ -- LASTSAPPOIMENT
export const getNextAppointments= ( SearchBy = null, searchByParam = null ) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getNextAppointmentsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?${SearchBy?`&SearchBy=${SearchBy}`:''}${searchByParam?`&searchByParam=${searchByParam}`:''}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getNextAppointmentsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getNextAppointmentsStoreHouseFailure(err))
            
        }
    }
}


//------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
export const getAppointmentsCalendarStoreHouse = ( startDate, endDate, SearchBy = null, searchByParam = null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentsCalendarStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?startDate=${startDate}&endDate=${endDate}${SearchBy?`&SearchBy=${SearchBy}`:''}${searchByParam?`&searchByParam=${searchByParam}`:''}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getAppointmentsCalendarStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getAppointmentsCalendarStoreHouseFailure(err))
            
        }
    }
}

//------------------------ GET_APPOINTMENTS_STOREHOUSE_BEGIN ------------------------
export const getLocationsStoreHouse = ( currentPage=0, offset=20 ) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getLocationsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Location/GetLocations?currentPage=${currentPage}&offset=${offset}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(getLocationsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(getLocationsStoreHouseFailure(err))
            
        }
    }
}

export const searchLocationsStoreHouse = ( key, searchBy=0 ) => {
    return async(dispatch, getState) => {
        try {
            dispatch(searchLocationsStoreHouseBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Location/SearchLocations?key=${key}&searchBy=${searchBy}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            return dispatch(searchLocationsStoreHouseSuccess(data));
            
        } catch (err) {
            return dispatch(searchLocationsStoreHouseFailure(err))
            
        }
    }
}


export function getProductsStoreHouse(currentPage=0, offset=20, includeSystem = true) {
    
    return function (dispatch, getState) {
        dispatch(getProductsStoreHouseBegin());
        return request({
            partialUrl: `/API/Products/GetProducts?currentPage=${currentPage}&offset=${offset}&includeSystem=${includeSystem}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getProductsStoreHouseSuccess(data.products));
        })
        .catch(err => {
            return dispatch(getProductsStoreHouseFailure(err));
        });
    }
}

export function searchProductsStoreHose( keyword, searchBy="productCode", isScanningSearch=false ) {
    return function (dispatch, getState) {
        dispatch(searchProductsStoreHouseBegin());
        return request({
            partialUrl: `/API/Products/SearchProducts?keyword=${keyword}&searchBy=${searchBy}&includeSystem=${true}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            !isScanningSearch
            ? dispatch(searchProductsStoreHouseSuccess(data.response))
            : dispatch(searchScanningProductsStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchProductsStoreHouseFailure(err));
        });
    }
}

export function getLocationByLocationCodeStoreHose( locationCode ) {
    
    return function (dispatch, getState) {
        dispatch(getLocationByLocationCodeStoreHoseBegin());
        return request({
            partialUrl: `/API/Location/GetLocationByLocationCode?locationCode=${locationCode}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getLocationByLocationCodeStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getLocationByLocationCodeStoreHoseFailure(err));
        });
    }
}

export function addLocationsToAppointmentStoreHose( addLocationsProducts ) {

    return function (dispatch, getState) {
        dispatch(addLocationsToAppointmentStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/AddLocationsToAppointmentRequest`,
            method: 'POST',
            state: getState().user.request,
            body: {Locations:[...addLocationsProducts]}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addLocationsToAppointmentStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addLocationsToAppointmentStoreHoseFailure(err));
        });
    }
}

export function addProductsToAppointmentStoreHose( addProducts ) {

    return function (dispatch, getState) {
        dispatch(addProductsToAppointmentStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/AddProductsToAppointmentRequest`,
            method: 'POST',
            state: getState().user.request,
            body: {Products:[...addProducts]}
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            dispatch(addProductsToAppointmentStoreHoseSuccess(data.response));
        })
        .catch(err => {
            // console.log(err)
            return dispatch(addProductsToAppointmentStoreHoseFailure(err));
        });
    }
}

export function UpdateWarehouseAppointmentStatusStoreHose( statusStoreHouse ) {

    return function (dispatch, getState) {
        dispatch(UpdateWarehouseAppointmentStatusStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateWarehouseAppointmentStatus`,
            method: 'PUT',
            state: getState().user.request,
            body: statusStoreHouse
        })
        .then(response => response.json())
        .catch(err => {
            return dispatch(UpdateWarehouseAppointmentStatusStoreHoseFailure(err));
        });
    }
}

export function getProductsToAppointmentStoreHose( appointmentId ) {

    return function (dispatch, getState) {
        dispatch(getProductsToAppointmentHouseBegin());
        return request({
            partialUrl: `/API/Appointment/GetAppointmentProducts?appointmentId=${appointmentId}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(getProductsToAppointmentStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getProductsToAppointmentStoreHoseFailure(err));
        });
    }
}

export function getAppointmentLocationsStoreHose( appointmentId ) {

    return function (dispatch, getState) {
        dispatch(getAppointmentLocationsStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/GetAppointmentLocations?appointmentId=${appointmentId}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(getAppointmentLocationsStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getAppointmentLocationsStoreHoseFailure(err));
        });
    }
}

export function updateAppointmentProductStoreHose( appointmentProduct) {

    return function (dispatch, getState) {
        dispatch(updateAppointmentProductStoreHouseBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateAppointmentProduct`,
            method: 'PUT',
            state: getState().user.request,
            body: {...appointmentProduct}
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(updateAppointmentProductStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateAppointmentProductStoreHouseFailure(err));
        });
    }
}

export function updateAppointmentLocationStoreHose( appointmentLocation ) {

    return function (dispatch, getState) {
        dispatch(updateAppointmentLocationStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateAppointmentLocation`,
            method: 'PUT',
            state: getState().user.request,
            body: {...appointmentLocation}
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(updateAppointmentLocationStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateAppointmentLocationStoreHoseFailure(err));
        });
    }
}


export function updateAppointmentLogisticsStoreHose( appointmentLocations ) {

    return function (dispatch, getState) {
        dispatch(updateAppointmentLogisticsStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateAppointmentLogistics`,
            method: 'POST',
            state: getState().user.request,
            body: appointmentLocations
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(updateAppointmentLogisticsStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateAppointmentLogisticsStoreHoseFailure(err));
        });
    }
}

export function updateLogisticAppointmentStatusStoreHose( logisticAppointmentStatus ) {

    return function (dispatch, getState) {
        dispatch(updateLogisticAppointmentStatusStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/UpdateLogisticAppointmentStatus`,
            method: 'PUT',
            state: getState().user.request,
            body: logisticAppointmentStatus,
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(updateLogisticAppointmentStatusStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateLogisticAppointmentStatusStoreHoseFailure(err));
        });
    }
}

export function addNoteSurgeryAppointmentStoreHose( noteSurgeryAppointment ) {

    return function (dispatch, getState) {
        dispatch(addNoteSurgeryAppointmentStoreHoseBegin());
        return request({
            partialUrl: `/API/Appointment/AddSurgeryAppointmentWarehouseNote`,
            method: 'POST',
            state: getState().user.request,
            body: noteSurgeryAppointment,
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(addNoteSurgeryAppointmentStoreHoseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addNoteSurgeryAppointmentStoreHoseFailure(err));
        });
    }
}

export function addSurgeryAppointmentLogisticsNoteStoreHouse( noteSurgeryLogistics ) {

    return function (dispatch, getState) {
        dispatch(addSurgeryAppointmentLogisticsNoteStoreHouseBegin());
        return request({
            partialUrl: `/API/Appointment/AddSurgeryAppointmentLogisticsNote`,
            method: 'POST',
            state: getState().user.request,
            body: noteSurgeryLogistics,
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(addSurgeryAppointmentLogisticsNoteStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addSurgeryAppointmentLogisticsNoteStoreHouseFailure(err));
        });
    }
}


export function removeProductsFromAppointmentStoreHouse( appointmentId ) {

    return function (dispatch, getState) {
        dispatch(removeProductsFromAppointmentStoreHouseBegin());
        return request({
            partialUrl: `/API/Appointment/RemoveProductsFromAppointment?Id=${appointmentId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {},
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(removeProductsFromAppointmentStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(removeProductsFromAppointmentStoreHouseFailure(err));
        });
    }
}
export function removeLocationsFromAppointmentStoreHouse( appointmentId ) {

    return function (dispatch, getState) {
        dispatch(removeLocationsFromAppointmentStoreHouseBegin());
        return request({
            partialUrl: `/API/Appointment/RemoveLocationsFromAppointment?Id=${appointmentId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {},
        })
        .then(response => response.json())
        .then(data => {
           return dispatch(removeLocationsFromAppointmentStoreHouseSuccess(data.response));
        })
        .catch(err => {
            return dispatch(removeLocationsFromAppointmentStoreHouseFailure(err));
        });
    }
}


