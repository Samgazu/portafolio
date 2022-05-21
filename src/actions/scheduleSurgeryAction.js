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
    SEARCH_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
    SEARCH_INSTITUTIONS_TO_SCHEDULE_FAILURE,
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
    SEARCH_SYSTEM_SUCCESS,
    SEARCH_SYSTEM_FAILURE,
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

import request from '../utils/request';

//------------------------ GET MEDICS ------------------------

export const getMedicsBegin = () => ({
    type: GET_MEDICS_TO_SCHEDULE_BEGIN
});

export const getMedicsSucess = ( getMedics ) =>({
    type: GET_MEDICS_TO_SCHEDULE_SUCCESS,
    payload: {
        getMedics
    },
});

export const getMedicsFailure = (err) =>({
    type: GET_MEDICS_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET MY MEDICS ------------------------

export const getMyMedicsBegin = () => ({
    type: GET_MY_MEDICS_TO_SCHEDULE_BEGIN
});

export const getMyMedicsSucess = ( getMyMedics ) =>({
    type: GET_MY_MEDICS_TO_SCHEDULE_SUCCESS,
    payload: {
        getMyMedics
    },
});

export const getMyMedicsFailure = (err) =>({
    type: GET_MY_MEDICS_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET INSTITUTION ------------------------
export const getInstitutionsBegin = () => ({
    type: GET_INSTITUTIONS_TO_SCHEDULE_BEGIN
});

export const getInstitutionsSucess = ( getInstitutions ) =>({
    type: GET_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
    payload:{
        getInstitutions
    },
});

export const getInstitutionsFailure = (err) =>({
    type: GET_INSTITUTIONS_TO_SCHEDULE_FAILURE,
    error:err
});


//------------------------ GET PATIENT ------------------------
export const getPatientsBegin = () => ({
    type: GET_PATIENT_TO_SCHEDULE_BEGIN
});

export const getPatientsSuccess = ( getPatient ) =>({
    type: GET_PATIENT_TO_SCHEDULE_SUCCESS,
    payload: {
        getPatient
    },
});

export const getPatientsFailure = (err) =>({
    type: GET_PATIENT_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET CLIENTS ------------------------
export const getClientsBegin = () => ({
    type: GET_CLIENTS_TO_SCHEDULE_BEGIN
});

export const getClientsSuccess = ( getClient ) => ({
    type: GET_CLIENTS_TO_SCHEDULE_SUCCESS,
    payload: {
        getClient
    },
});

export const getClientsFailure = (err) =>({
    type: GET_CLIENTS_TO_SCHEDULE_FAILURE,
    error:err
});


//------------------------ GET PRICELIST ------------------------
export const getPriceListBegin = () => ({
    type: GET_PRICE_LIST_TO_SCHEDULE_BEGIN
});

export const getPriceListSuccess = ( priceList ) => ({
    type: GET_PRICE_LIST_TO_SCHEDULE_SUCCESS,
    payload: {
        priceList
    },
});

export const getPriceListFailure = (err) =>({
    type: GET_PRICE_LIST_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET SYSTEM REQUERIMENTS ------------------------

export const getSystemRequirementsBegin = () => ({
    type: GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_BEGIN
});

export const getSystemRequirementsSuccess = ( listSystemRequirements ) => ({
    type: GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_SUCCESS,
    payload: {
        listSystemRequirements
    },
});

export const getSystemRequirementsFailure = (err) =>({
    type: GET_SYSTEM_REQUERIMENTS_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET SYSTEM ARRAGEMEN ------------------------

export const getSystemSurgeryArrangementBegin = () => ({
    type: GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_BEGIN
});

export const getSystemSurgeryArrangementSuccess = ( systemSurgeryArrangement ) => ({
    type: GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_SUCCESS,
    payload: {
        systemSurgeryArrangement
    },
});

export const getSystemSurgeryArrangementFailure = (err) =>({
    type: GET_SYSTEM_ARRAGEMENT_TO_SCHEDULE_FAILURE,
    error:err
});

//------------------------ GET MEDICS ------------------------

export function getSystemRequirements( idSystem ) {
    return function (dispatch, getState) {
        dispatch(getSystemRequirementsBegin());
        return request({
            partialUrl: `/API/System/GetSystemRequirements?Id=${idSystem}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSystemRequirementsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getSystemRequirementsFailure(err))
        });
    }
}
//------------------------ GET MEDICS ------------------------

export function getMedicsToSchedule(currentPage=0,offset=10) {
    return function (dispatch, getState) {
        dispatch(getMedicsBegin());
        return request({
            partialUrl: `/API/Medic/GetMedics?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getMedicsSucess(data.response));
        })
        .catch(err => {
            return dispatch(getMedicsFailure(err))
        });
    }
}
//------------------------ GET MY MEDICS ------------------------

export function getMyMedicsToSchedule(sellerCode) {
    return function (dispatch, getState) {
        dispatch(getMyMedicsBegin());
        return request({
            partialUrl: `/API/Medic/GetMyMedicsList?sellerCode=${sellerCode}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getMyMedicsSucess(data.response));
        })
        .catch(err => {
            // console.log(err)
            return dispatch(getMyMedicsFailure(err))
        });
    }
}

//------------------------ GET INSTITUTION ------------------------

export function getInstitutionsToSchedule(currentPage=0,offset=100) {
    return function (dispatch, getState) {
        dispatch(getInstitutionsBegin());
        return request({
            partialUrl: `/API/Hospital/GetHospitals?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getInstitutionsSucess(data.response));
        })
        .catch(err => {
            return dispatch(getInstitutionsFailure(err))
        });
    }
}


//------------------------ GET PATIENT ------------------------

export function getPatientsToSchedule(currentPage=0,offset=10) {
    
    return function (dispatch, getState) {
        dispatch(getPatientsBegin());
        return request({
            partialUrl: `/API/Patient/GetPatients?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getPatientsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getPatientsFailure(err));
        });
    }
}

//------------------------ GET CLIENTS ------------------------

export function getClientsToSchedule(currentPage=0, offset=10) {
    
    return function (dispatch, getState) {
        dispatch(getClientsBegin());
        return request({
            partialUrl: `/API/Client/GetClients?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getClientsSuccess(data.clients));
        })
        .catch(err => {
            return dispatch(getClientsFailure(err));
        });
    }
}


//------------------------ GET PRICELIST ------------------------

export function getPriceListToSchedule(currentPage=0, offset=10) {
    
    return function (dispatch, getState) {
        dispatch(getPriceListBegin());
        return request({
            partialUrl: `/API/PriceList/GetPriceLists?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getPriceListSuccess(data.priceLists));
        })
        .catch(err => {
            return dispatch(getPriceListFailure(err));
        });
    }
}

//------------------------ GET SYSTEM ARRAGEMEN ------------------------

export function getSystemSurgeryArrangement(id) {
    
    return function (dispatch, getState) {
        dispatch(getSystemSurgeryArrangementBegin());
        return request({
            partialUrl: `/API/System/GetSystemSurgeryArrangement?Id=${id}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSystemSurgeryArrangementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getSystemSurgeryArrangementFailure(err));
        });
    }
}


//------------------------ SET MEDICS ------------------------
export const setMedicToSchedule = (setMedic) => ({
    type: SET_MEDICS_TO_SCHEDULE_SUCCESS,
    payload: {
        setMedic
    }
});

//------------------------ SET INSTITUTION ------------------------
export const setInstitutionToSchedule = (setInstitution) => ({
    type: SET_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
    payload: {
        setInstitution
    }
});


//------------------------ SET PATIENT------------------------
export const setPatientToSchedule = (setPatient) => ({
    type: SET_PATIENT_TO_SCHEDULE_SUCCESS,
    payload: {
        setPatient
    }
});


//------------------------ SET HOUR ------------------------
export const setHourToSchedule = (setHour) => ({
    type: SET_HOUR_TO_SCHEDULE_SUCCESS,
    payload: {
        setHour
    }
});

//------------------------ SET CLIENT ------------------------
export const setClientToSchedule = (setClient) => ({
    type: SET_CLIENT_TO_SCHEDULE_SUCCESS,
    payload: {
        setClient
    }
});


//------------------------ SET PRICELIST ------------------------
export const setListPricesToSchedule = (priceList) => ({
    type: SET_PRICE_LIST_TO_SCHEDULE_SUCCESS,
    payload: {
        priceList
    }
});

//------------------------ SET ATQ ------------------------
export const setATQToSchedule = (atq) => ({
    type: SET_ATQ_TO_SCHEDULE_SUCCESS,
    payload: {
        atq
    }
});

//------------------------ SET QUOTE ------------------------
export const setQuoteToSchedule = (quoteToSchedule) => ({
    type: SET_QUOTE_TO_SCHEDULE_SUCCESS,
    payload: {
        quoteToSchedule
    }
});

//------------------------ SET ELEMENTS TYPE SURGERY ------------------------


export const setElementsToTypeSurgery = (elementsToTypeSurgery)=> ({
    type: SET_ELEMENTS_TO_TYPE_SURGERY_SUCCESS,
    payload: {
        elementsToTypeSurgery
    }
});

//------------------------ SET ELEMENTS TYPE SURGERY BEING ------------------------


export const setElementTypeSurgeryBeing = (listElementTypeSurgeryBeing)=> ({
    type: SET_ELEMENTS_TYPE_SURGERY_BEING,
    payload: {
        listElementTypeSurgeryBeing
    }
});

//------------------------ SET ELEMENTS TYPE SURGERY PENDING ------------------------


export const setElementTypeSurgeryPending = (listElementTypeSurgeryPending)=> ({
    type: SET_ELEMENTS_TYPE_SURGERY_PENDING,
    payload: {
        listElementTypeSurgeryPending
    }
});

//------------------------ SET ELEMENTS TYPE SURGERY SUCCES ------------------------


export const setElementTypeSurgerySucces = (listElementTypeSurgerySucces)=> ({
    type: SET_ELEMENTS_TYPE_SURGERY_SUCCES,
    payload: {
        listElementTypeSurgerySucces
    }
});

//------------------------ SET ELEMENTS TYPE SURGERY COMPLETED ------------------------


export const setElementTypeSurgeryCompleted = (listElementTypeSurgeryCompleted)=> ({
    type: SET_ELEMENTS_TYPE_SURGERY_COMPLETED,
    payload: {
        listElementTypeSurgeryCompleted
    }
});

//------------------------ SET ELEMENTS OPTIONAL MATERIAL BEING ------------------------


export const setElementOptionalMaterialBeing = (listElementOptionalMaterialBeing)=> ({
    type: SET_ELEMENTS_OPTIONAL_MATERIAL_BEING,
    payload: {
        listElementOptionalMaterialBeing
    }
});

//------------------------ SET ELEMENTS OPTIONAL MATERIAL SUCCES ------------------------


export const setElementOptionalMaterialSucces = (listElementOptionalMaterialSucces)=> ({
    type: SET_ELEMENTS_OPTIONAL_MATERIAL_SUCCES,
    payload: {
        listElementOptionalMaterialSucces
    }
});

//------------------------ SET ELEMENTS REQUIRE MATERIAL BEING ------------------------


export const setElementOptRequireMaterialBeing = (listElementOptRequireMaterialBeing)=> ({
    type: SET_ELEMENTS_REQUIRE_MATERIAL_BEING,
    payload: {
        listElementOptRequireMaterialBeing
    }
});

//------------------------ SET ELEMENTS REQUIRE MATERIAL SUCCES ------------------------


export const setElementOptRequireMaterialSucces = (listElementOptRequireMaterialSucces)=> ({
    type: SET_ELEMENTS_REQUIRE_MATERIAL_SUCCES,
    payload: {
        listElementOptRequireMaterialSucces
    }
});

//------------------------ SET ELEMENTS REQUIRE MATERIAL BEING ------------------------


export const setElementRequireMaterialBeing = (listElementRequireMaterialBeing)=> ({
    type: SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_BEING,
    payload: {
        listElementRequireMaterialBeing
    }
});

//------------------------ SET ELEMENTS REQUIRE MATERIAL SUCCES ------------------------


export const setElementRequireMaterialSucces = (listElementRequireMaterialSucces)=> ({
    type: SET_ELEMENTS_REQUIRE_MATERIAL_SYSTEM_SUCCES,
    payload: {
        listElementRequireMaterialSucces
    }
});

//------------------------ SET MANAGE OBSERVATION SUCCES ------------------------


export const setManageObservationSucces = (listObservations)=> ({
    type: SET_MANAGE_OBSERVATION_SUCCES,
    payload: {
        listObservations
    }
});

//------------------------ SET WITH PRICES LIST SUCCES ------------------------


export const setWithPricesListSucces = (withPricesList)=> ({
    type: SET_WITH_PRICES_LIST_SUCCES,
    payload: {
        withPricesList
    }
});

//------------------------ SEARCH MEDICS ------------------------

export const searchMedicsBegin= () => ({
    type: SEARCH_MEDICS_TO_SCHEDULE_BEGIN,
});

export const searchMedicsSuccess = (searchMedic) => ({
    type: SEARCH_MEDICS_TO_SCHEDULE_SUCCESS,
    payload: {
        searchMedic
    }
});

export const searchMedicsFailure = () => ({
    type: SEARCH_MEDICS_TO_SCHEDULE_FAILURE,
});
//------------------------ SEARCH MEDICS ------------------------

export const searchInstitutionBegin = () => ({
    type: SEARCH_INSTITUTIONS_TO_SCHEDULE_BEGIN,
});

export const searchInstitutionSuccess = (searchInstitution) => ({
    type: SEARCH_INSTITUTIONS_TO_SCHEDULE_SUCCESS,
    payload: {
        searchInstitution
    }
});

export const searchInstitutionFailure = () => ({
    type: SEARCH_INSTITUTIONS_TO_SCHEDULE_FAILURE,
});
//------------------------ SEARCH PATIENT ------------------------

export const searchPatientsBegin = () => ({
    type: SEARCH_PATIENT_TO_SCHEDULE_BEGIN,
});

export const searchPatientsSuccess = (searchPatient) => ({
    type: SEARCH_PATIENT_TO_SCHEDULE_SUCCESS,
    payload: {
        searchPatient
    }
});

export const searchPatientsFailure = () => ({
    type: SEARCH_PATIENT_TO_SCHEDULE_FAILURE,
});

//------------------------ SEARCH CLIENT ------------------------

export const searchClientBegin = () => ({
    type: SEARCH_CLIENT_TO_SCHEDULE_BEGIN,
});

export const searchClientSuccess = (searchClient) => ({
    type: SEARCH_CLIENT_TO_SCHEDULE_SUCCESS,
    payload: {
        searchClient
    }
});

export const searchClientFailure = () => ({
    type: SEARCH_CLIENT_TO_SCHEDULE_FAILURE,
});

//------------------------ SEARCH LIST PRICES ------------------------

export const searchPriceListToScheduleBegin = () => ({
    type: SEARCH_PRICE_LIST_TO_SCHEDULE_BEGIN,
});

export const searchPriceListToScheduleSuccess = (searchListPricesToSchedule) => ({
    type: SEARCH_PRICE_LIST_TO_SCHEDULE_SUCCESS,
    payload: {
        searchListPricesToSchedule
    }
});

export const searchPriceListToScheduleFailure = () => ({
    type: SEARCH_PRICE_LIST_TO_SCHEDULE_FAILURE,
});

//------------------------ SEARCH REQUIRE PRODUCTS ------------------------

export const searchRequireProductsBegin= () => ({
    type: SEARCH_PRODUCT_TO_REQUIRE_BEGIN,
});

export const searchRequireProductsSuccess = (searchRequireProducts) => ({
    type: SEARCH_PRODUCT_TO_REQUIRE_SUCCESS,
    payload: {
        searchRequireProducts
    }
});

export const searchRequireProductsFailure = () => ({
    type: SEARCH_PRODUCT_TO_REQUIRE_FAILURE,
});
//------------------------ SEARCH OPTIONAL PRODUCTS ------------------------

export const searchOptionalProductsBegin= () => ({
    type: SEARCH_PRODUCT_TO_OPTIONAL_BEGIN,
});

export const searchOptionalProductsSuccess = (searchOptionalProducts) => ({
    type: SEARCH_PRODUCT_TO_OPTIONAL_SUCCESS,
    payload: {
        searchOptionalProducts
    }
});

export const searchOptionalProductsFailure = () => ({
    type: SEARCH_PRODUCT_TO_OPTIONAL_FAILURE,
});

//------------------------ SEARCH SYSTEM ------------------------

export const searchSystemBegin= () => ({
    type: SEARCH_SYSTEM_BEGIN,
});

export const searchSystemSuccess = (searchSystem) => ({
    type: SEARCH_SYSTEM_SUCCESS,
    payload: {
        searchSystem
    }
});

export const searchSystemFailure = () => ({
    type: SEARCH_SYSTEM_FAILURE,
});


export const postCreatePatientScheduleBegin = () => ({
    type: POST_CREATE_PATIENT_SCHEDULE_BEGIN,
});

export const postCreatePatientScheduleSuccess = ( patientSchedule ) => ({
    type: POST_CREATE_PATIENT_SCHEDULE_SUCCESS,
    payload: {
        patientSchedule
    }
});

export const postCreatePatientScheduleFailure = () => ({
    type: POST_CREATE_PATIENT_SCHEDULE_FAILURE,
});

//------------------------ POST CREATE PATIENT ------------------------

export function postCreatePatientSchedule( firstName , SecondName, firstLastName ,secondLastName){
    return (dispatch, getState) => {
        dispatch(postCreatePatientScheduleBegin());
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
          dispatch(postCreatePatientScheduleSuccess(data.response ))
        })
        .catch(err => {
          dispatch(postCreatePatientScheduleFailure( err ));
        })
    };
}

//------------------------ SEARCH MEDICS ------------------------

export function searchMedicsToSchedule( key ) {
    
    return function (dispatch, getState) {
        dispatch(searchMedicsBegin());
        return request({
            partialUrl: `/API/Medic/SearchMedics?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchMedicsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchMedicsFailure(err));
        });
    }
}
//------------------------ SEARCH INSTITUTIONS ------------------------

export function searchInstitutionToSchedule( key ) {
    
    return function (dispatch, getState) {
        dispatch(searchInstitutionBegin());
        return request({
            partialUrl: `/API/Hospital/SearchHospitals?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchInstitutionSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchInstitutionFailure(err));
        });
    }
}

//------------------------ SEARCH PATIENT ------------------------
export function searchPatientToSchedule( key ) {

    return function (dispatch, getState) {
        dispatch(searchPatientsBegin());
        return request({
            partialUrl: `/API/Patient/SearchPatients?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchPatientsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchPatientsFailure(err));
        });
    }
}

//------------------------ SEARCH CLIENT ------------------------
export function searchClientToSchedule( key ) {

    return function (dispatch, getState) {
        dispatch(searchClientBegin());
        return request({
            partialUrl: `/API/Client/SearchClients?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchClientSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchClientFailure(err));
        });
    }
}
//------------------------ SEARCH LIST PRICES ------------------------

export function searchPriceListToSchedule( key ) {

    return function (dispatch, getState) {
        dispatch(searchPriceListToScheduleBegin());
        return request({
            partialUrl: `/API/PriceList/SearchPricelist?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchPriceListToScheduleSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchPriceListToScheduleFailure(err));
        });
    }
}

//------------------------ SEARCH PRODUCTS TO REQUIRED ------------------------
export function searchRequireProducts( keyword, searchBy = "productCode", includeSystem = true) {
    // console.log(keyword , searchBy ,includeSystem)
    return function (dispatch, getState) {
        dispatch(searchRequireProductsBegin());
        return request({
            partialUrl: `/API/Products/SearchProducts?keyword=${keyword}&searchBy=${searchBy}&includeSystem=${includeSystem}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchRequireProductsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchRequireProductsFailure(err));
        });
    }
}
//------------------------ SEARCH PRODUCTS TO OPTIONAL ------------------------
export function searchOptionalProducts( keyword, searchBy="productCode", includeSystem = true ) {
    
    return function (dispatch, getState) {
        dispatch(searchOptionalProductsBegin());
        return request({
            partialUrl: `/API/Products/SearchProducts?keyword=${keyword}&searchBy=${searchBy}&includeSystem=${includeSystem}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchOptionalProductsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchOptionalProductsFailure(err));
        });
    }
}
//------------------------ SEARCH SYSTEML ------------------------

export function SearchSystem( key ) {
    
    return function (dispatch, getState) {
        dispatch(searchSystemBegin());
        return request({
            partialUrl: `/API/System/SearchSystem?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchSystemSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchSystemFailure(err));
        });
    }
}

//------------------------ ADD SYSTEM SURGERY REQUIREMENT ------------------------

export const AddSystemSurgeryRequirementBegin = () => ({
    type: ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN
});

export const AddSystemSurgeryRequirementSuccess = ( addSystemSurgeryRequirement ) => ({
    type: ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS,
    payload: {
        addSystemSurgeryRequirement
    },
});

export const AddSystemSurgeryRequirementFailure = (err) =>({
    type: ADD_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE,
    error:err
});


//------------------------ ADD SYSTEM SURGERY REQUIREMENT ARRANGEMEN ------------------------

export const AddSystemSurgeryArrangemenRequirementBegin = () => ({
    type: ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_BEGIN
});

export const AddSystemSurgeryArrangemenRequirementSuccess = ( addSystemSurgeryArrangemenRequirement ) => ({
    type: ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_SUCCESS,
    payload: {
        addSystemSurgeryArrangemenRequirement
    },
});

export const AddSystemSurgeryArrangemenRequirementFailure = (err) =>({
    type: ADD_SYSTEM_SURGERY_ARRANGEMEN_REQUIREMENT_TO_SCHEDULE_FAILURE,
    error:err
});



//------------------------ ADD SYSTEM SURGERY REQUIREMENT ------------------------

export function AddSystemSurgeryRequirement( body ) {

    return function (dispatch, getState) {
        dispatch(AddSystemSurgeryRequirementBegin());
        return request({
            partialUrl: `/API/System/AddSystemSurgeryRequirement`,
            method: 'POST',
            state: getState().user.request,
            body
        })
        .then(response => response.json())
        .then(data => {
            dispatch(AddSystemSurgeryRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(AddSystemSurgeryRequirementFailure(err));
        });
    }

}

//------------------------ ADD SYSTEM SURGERY REQUIREMENT ARRANGEMEN ------------------------

export function AddSystemSurgeryArrangemenRequirement( body ) {

    return function (dispatch, getState) {
        dispatch(AddSystemSurgeryArrangemenRequirementBegin());
        return request({
            partialUrl: `/API/System/AddSystemSurgeryArrangemenRequirement`,
            method: 'POST',
            state: getState().user.request,
            body
        })
        .then(response => response.json())
        .then(data => {
            dispatch(AddSystemSurgeryArrangemenRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(AddSystemSurgeryArrangemenRequirementFailure(err));
        });
    }

}

//------------------------ DELETE SYSTEM SURGERY REQUIREMENT ------------------------

export const deleteSystemSurgeryRequirementBegin = () => ({
    type: DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_BEGIN
});

export const deleteSystemSurgeryRequirementSuccess = ( deleteSystemSurgeryRequirement ) => ({
    type: DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_SUCCESS,
    payload: {
        deleteSystemSurgeryRequirement
    },
});

export const deleteSystemSurgeryRequirementFailure = (err) =>({
    type: DELETE_SYSTEM_SURGERY_REQUIREMENT_TO_SCHEDULE_FAILURE,
    error:err
});
//------------------------ DELETE SYSTEM SURGERY ARRANGEMENT ------------------------

export const deleteSystemSurgeryArrangementBegin = () => ({
    type: DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_BEGIN
});

export const deleteSystemSurgeryArrangementSuccess = ( deleteSystemSurgeryArrangement ) => ({
    type: DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_SUCCESS,
    payload: {
        deleteSystemSurgeryArrangement
    },
});

export const deleteSystemSurgeryArrangementFailure = (err) =>({
    type: DELETE_SYSTEM_SURGERY_ARRANGEMENT_TO_SCHEDULE_FAILURE,
    error:err
});



//------------------------ DELETE SYSTEM SURGERY REQUIREMENT ------------------------

export function deleteSystemSurgeryRequirement( id ) {

    return function (dispatch, getState) {
        dispatch(deleteSystemSurgeryRequirementBegin());
        return request({
            partialUrl: `/API/System/DeleteSystemSurgeryRequirement?Id=${id}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteSystemSurgeryRequirementSuccess(data));
        })
        .catch(err => {
            return dispatch(deleteSystemSurgeryRequirementFailure(err));
        });
    }

}
//------------------------ DELETE SYSTEM SURGERY ARRANGEMENT ------------------------

export function deleteSystemSurgeryArrangement( id ) {

    return function (dispatch, getState) {
        dispatch(deleteSystemSurgeryArrangementBegin());
        return request({
            partialUrl: `/API/System/DeleteSystemSurgeryArrangement?Id=${id}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteSystemSurgeryArrangementSuccess(data));
        })
        .catch(err => {
            return dispatch(deleteSystemSurgeryArrangementFailure(err));
        });
    }

}

//------------------------ CREATE APPOINTMENT TO SCHEDULE SURGERY ------------------------
 
export const createAppointmentToScheduleSurgeryBegin = () => ({
    type: CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_BEGIN
});

export const createAppointmentToScheduleSurgerySuccess = ( newAppointmentCreated ) => ({
    type: CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_SUCCESS,
    payload: {
        newAppointmentCreated
    },
});

export const createAppointmentToScheduleSurgeryFailure = (err) =>({
    type: CREATE_APPOINTMENT_TO_SCHEDULE_SURGERY_FAILURE,
    error:err
});

//------------------------ CREATE APPOINTMENT TO SCHEDULE SURGERY ------------------------

export function createAppointmentToScheduleSurgery( bodyRequest ) {
    // console.log(bodyRequest)
    return function (dispatch, getState) {
        dispatch(createAppointmentToScheduleSurgeryBegin());
        return request({
            partialUrl: `/API/Appointment/CreateAppointment`,
            method: 'POST',
            state: getState().user.request,
            body: bodyRequest
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            dispatch(createAppointmentToScheduleSurgerySuccess(data.response));
        })
        .catch(err => {
            // console.log(err);
            return dispatch(createAppointmentToScheduleSurgeryFailure(err));
        });
    }

}
//------------------------ RESET TO INITIAL STATE SCHEDULE ------------------------


export const resetToInitialStateSchedule = ()=> ({
    type: RESET_TO_INITIAL_STATE_SCHEDULE,
    payload: {
    }
});
export const resetToInitialStateScheduleWithOut = ()=> ({
    type: RESET_TO_INITIAL_STATE_SCHEDULE_WITHOUT,
    payload: {
    }
});


//-----------------------DELETE - MATERIAL---------------
export const deleteMaterialOptional = (productId)=> ({
    type: DELETE_ELEMENTS_OPTIONAL_MATERIAL,
    payload: {
        productId

    }
});


//---------------------DELETE SI------------------------
export const deleteElementTypeSurgery  = (systemId)=> ({
    type:     DELETE_ELEMENT_TYPE_SURGERY,
    payload: {
        systemId

    }
});




