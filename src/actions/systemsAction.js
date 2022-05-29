import request from '../utils/request';

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
    GET_SYSTEMS_BEGIN,
    GET_SYSTEMS_SUCCESS,
    GET_SYSTEMS_FAILURE,
    CLEAR_BUNDLES_FORM_SYSTEM_SUCCESS,
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
    GET_MEDICS_FAILURE,
    GET_FINISH_QUOTE_LIST_BEGIN,
    GET_FINISH_QUOTE_LIST_SUCCESS,
    GET_FINISH_QUOTE_LIST_FAILURE,
    GET_FINISH_ALL_QUOTE_LIST_BEGIN,
    GET_FINISH_ALL_QUOTE_LIST_SUCCESS,
    GET_FINISH_ALL_QUOTE_LIST_FAILURE,
    GET_UNFINISH_QUOTE_LIST_BEGIN,
    GET_UNFINISH_QUOTE_LIST_SUCCESS,
    GET_UNFINISH_QUOTE_LIST_FAILURE,
    POST_CREATE_CONFIGURATION_BEGIN,
    POST_CREATE_CONFIGURATION_SUCCESS,
    POST_CREATE_CONFIGURATION_FAILURE,
    ADD_NAME_NEW_CONFIGURATION_SUCCESS,
    ADD_SURGERY_TARGETS_NEW_CONFIGURATION_SUCCESS,
    MODIFY_NEW_CONFIGURATION_SUCCESS,
    ADD_PRODUCTS_NEW_CONFIGURATION_SUCCESS,
    POST_NEW_CONFIGURATION_BEGIN,
    POST_NEW_CONFIGURATION_SUCCESS,
    POST_NEW_CONFIGURATION_FAILURE,
    GET_SYSTEM_CONFIGURATION_SUCCESS,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_SURGERY_TARGETS_SYSTEM_BEGIN,
    ADD_SURGERY_TARGETS_SYSTEM_SUCCESS,
    ADD_SURGERY_TARGETS_SYSTEM_FAILURE,
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
    UPDATE_REQUIREMENTS_HOSPITAL_BEGIN,
    UPDATE_REQUIREMENTS_HOSPITAL_SUCCESS,
    UPDATE_REQUIREMENTS_HOSPITAL_FAILURE,
    UPDATE_REQUIREMENTS_MEDIC_BEGIN,
    UPDATE_REQUIREMENTS_MEDIC_SUCCESS,
    UPDATE_REQUIREMENTS_MEDIC_FAILURE,
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
    SEARCH_FINISHED_QUOTE_BEGIN,
    SEARCH_FINISHED_QUOTE_SUCCESS,
    SEARCH_FINISHED_QUOTE_FAILURE,
    SEARCH_IN_ALL_FINISHED_QUOTE_BEGIN,
    SEARCH_IN_ALL_FINISHED_QUOTE_SUCCESS,
    SEARCH_IN_ALL_FINISHED_QUOTE_FAILURE,
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
   


} from '../constants/actionTypes';
export const updateRequirementsHospitalBegin = () =>({
    type: UPDATE_REQUIREMENTS_HOSPITAL_BEGIN
});

export const updateRequirementsHospitalSuccess = (response) =>({
    type: UPDATE_REQUIREMENTS_HOSPITAL_SUCCESS,
    payload: {
        response
    },
});

export const updateRequirementsHospitalFailure = () =>({
    type: UPDATE_REQUIREMENTS_HOSPITAL_FAILURE
});


export const updateRequirementsMedicBegin = () =>({
    type: UPDATE_REQUIREMENTS_MEDIC_BEGIN
});

export const updateRequirementsMedicSuccess = (response) =>({
    type: UPDATE_REQUIREMENTS_MEDIC_SUCCESS,
    payload: {
        response
    },
   
});

export const updateRequirementsMedicFailure = () =>({
    type: UPDATE_REQUIREMENTS_MEDIC_FAILURE
});


export const getSystemByMainSurgencyBegin = () =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_BEGIN
});

export const getSystemByMainSurgencySuccess = (systems) =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_SUCCESS,
    payload:{
        systems
    }
});

export const getSystemByMainSurgencyFailure = () =>({
    type: GET_SYSTEM_BY_MAIN_SURGENCY_TYPE_FAILURE
});

export const getSystemsBegin = () => ({
    type: GET_SYSTEMS_BEGIN
});


export const getSystemsSucess = (response) =>({
    type: GET_SYSTEMS_SUCCESS,
    systemsTemplate: response
});

export const getSystemsFailure = (err) =>({
    type: GET_SYSTEMS_FAILURE,
    error:err
});

export const getMainSurgeryTypesBegin = () => ({
    type: GET_MAIN_SURGERY_TYPES_BEGIN,
});

export const getMainSurgeryTypesSuccess = (mainSurgeryTypes) => ({
    type: GET_MAIN_SURGERY_TYPES_SUCCESS,
    mainSurgeryTypes,
});

export const getMainSurgeryTypesFailure = () => ({
    type: GET_MAIN_SURGERY_TYPES_FAILURE,
});

export const getBundlesFormSystemBegin = () => ({
  type: GET_BUNDLES_FORM_SYSTEM_BEGIN,
});

export const getBundlesFormSystemSuccess = (bundle) => ({
    type: GET_BUNDLES_FORM_SYSTEM_SUCCESS,
    payload:{
        bundle
    },
});

export const getBundlesFormSystemFailure = () => ({
    type: GET_BUNDLES_FORM_SYSTEM_FAILURE,
});

export const clearBundlesFromSystem = () => ({
    type: CLEAR_BUNDLES_FORM_SYSTEM_SUCCESS,
});

export const getBundlesBySystemIdBegin = () =>({
    type: GET_BUNDLES_BY_SYSTEM_ID_BEGIN,
});

export const getBundlesBySystemIdSuccess = (bundles) =>({
    type: GET_BUNDLES_BY_SYSTEM_ID_SUCCESS,
    bundles,
});

export const getBundlesBySystemIdFailure = () =>({
    type: GET_BUNDLES_BY_SYSTEM_ID_FAILURE,
});

export const getClientsBegin = () => ({
    type: GET_CLIENTS_BEGIN
});

export const getClientsSucess = ( getClients ) =>({
    type: GET_CLIENTS_SUCCESS,
    getClients,
});

export const getClientsFailure = (err) =>({
    type: GET_CLIENTS_FAILURE,
    error:err
});
// ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬

export const getCitiesBegin = () => ({
    type: GET_CITIES_BEGIN
});

export const getCitiesSucess = ( getCities ) =>({
    type: GET_CITIES_SUCCESS,
    payload: {
        getCities
    },
});

export const setListComplete = ( list ) =>({
    type: SET_LIST,
    payload: {
        list
    },
});

export const getCitiesFailure = (err) =>({
    type: GET_CITIES_FAILURE,
    error:err
});


export const getStatesBegin = () => ({
    type: GET_STATES_BEGIN
});

export const getStatesSucess = ( getStates ) =>({
    type: GET_STATES_SUCCESS,
    payload: {
        getStates
    },
});

export const getStatesFailure = (err) =>({
    type: GET_STATES_FAILURE,
    error:err
});

// ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬

export const getInstitutionsBegin = () => ({
    type: GET_INSTITUTIONS_BEGIN
});

export const getInstitutionsSucess = ( getInstitutions ) =>({
    type: GET_INSTITUTIONS_SUCCESS,
    getInstitutions,
});

export const getInstitutionsFailure = (err) =>({
    type: GET_INSTITUTIONS_FAILURE,
    error:err
});

export const getMedicsBegin = () => ({
    type: GET_MEDICS_BEGIN
});

export const getMedicsSucess = ( getMedics ) =>({
    type: GET_MEDICS_SUCCESS,
    getMedics,
});

export const getMedicsFailure = (err) =>({
    type: GET_MEDICS_FAILURE,
    error:err
});
export const getPatientsBegin = () => ({
    type: GET_PATIENT_BEGIN
});

export const getPatientsSuccess = ( getPatient ) =>({
    type: GET_PATIENT_SUCCESS,
    payload: {
        getPatient
    },
});

export const getPatientsFailure = (err) =>({
    type: GET_PATIENT_FAILURE,
    error:err
});
// No se encontro getSystemBegin()
// export function getSaludo (){
//     return function (dispatch){
//         return dispatch(getSystemBegin());
//     };
// }


export const getFinishedQouteBegin = () => ({
    type: GET_FINISH_QUOTE_LIST_BEGIN,
});

export const getFinishedQouteSuccess = ( finishedQuote ) => ({
    type: GET_FINISH_QUOTE_LIST_SUCCESS,
    payload: {
        finishedQuote
    }
});

export const getFinishedQouteFailure = () => ({
    type: GET_FINISH_QUOTE_LIST_FAILURE,
});

export const getFinishedAllQouteBegin = () => ({
    type: GET_FINISH_ALL_QUOTE_LIST_BEGIN,
});

export const getFinishedAllQouteSuccess = ( finishedQuote ) => ({
    type: GET_FINISH_ALL_QUOTE_LIST_SUCCESS,
    payload: {
        finishedQuote
    }
});

export const getFinishedAllQouteFailure = () => ({
    type: GET_FINISH_ALL_QUOTE_LIST_FAILURE,
});


export const getUnfinishedQouteBegin = () => ({
    type: GET_UNFINISH_QUOTE_LIST_BEGIN,
});

export const getUnfinishedQouteSuccess = ( unfinishedQuote ) => ({
    type: GET_UNFINISH_QUOTE_LIST_SUCCESS,
    payload: {
        unfinishedQuote
    }
});

export const getUnfinishedQouteFailure = () => ({
    type: GET_UNFINISH_QUOTE_LIST_FAILURE,
});





export const getPriceListsFailure = () =>({
    type: GET_PRICE_LIST_FAILURE,
});


export const getPriceListsBegin = () =>({
    type: GET_PRICE_LIST_BEGIN,
});

export const getPriceListsSuccess = (priceLists) =>({
    type: GET_PRICE_LIST_SUCCESS,
    payload: {
        priceLists,
    }
});





export const postcreateConfigurationBegin = () => ({
    type: POST_CREATE_CONFIGURATION_BEGIN,
});

export const postcreateConfigurationSuccess = ( configurationName ) => ({
    type: POST_CREATE_CONFIGURATION_SUCCESS,
    payload: {
        configurationName
    }
});

export const postcreateConfigurationFailure = () => ({
    type: POST_CREATE_CONFIGURATION_FAILURE,
});

// Add configuration vista creacion de configuraciones
export const postAddConfigurationToDBBegin = () => ({
    type: POST_ADD_CONFIGURATION_TODB_BEGIN,
});

export const postAddConfigurationToDBSuccess = ( surgeryTarget ) => ({
    type: POST_ADD_CONFIGURATION_TODB_SUCCESS,
    payload: {
        surgeryTarget
    }
});


export const updateBundles = ( newListBundle ) => ({
    type: UPDATE_BUNDLES,
    payload: {
        newListBundle
    }
});

export const postAddConfigurationToDBFailure = () => ({
    type: POST_ADD_CONFIGURATION_TODB_FAILURE,
});

// Delete configuration vista creacion de configuraciones
export const postDeleteConfigurationToDBBegin = () => ({
    type: POST_DELETE_CONFIGURATION_TODB_BEGIN,
});

export const postDeleteConfigurationToDBSuccess = () => ({
    type: POST_DELETE_CONFIGURATION_TODB_SUCCESS,
});

export const postDeleteConfigurationToDBFailure = () => ({
    type: POST_DELETE_CONFIGURATION_TODB_FAILURE,
});

// Add product to configuration - vista creacion de configuraciones
export const postAddNewProductToConfigBegin = () => ({
    type: POST_ADD_PRODUCT_TO_CONFIG_BEGIN,
});

export const postAddNewProductToConfigSuccess = (newProduct) => ({
    type: POST_ADD_PRODUCT_TO_CONFIG_SUCCESS,
    payload: {
        newProduct
    }
});

export const postAddNewProductToConfigFailure = () => ({
    type: POST_ADD_PRODUCT_TO_CONFIG_FAILURE,
});

// Delete product to configuration - vista creacion de configuraciones
export const postDeleteNewProductToConfigBegin = () => ({
    type: POST_DELETE_PRODUCT_TO_CONFIG_BEGIN,
});

export const postDeleteNewProductToConfigSuccess = () => ({
    type: POST_DELETE_PRODUCT_TO_CONFIG_SUCCESS,
});

export const postDeleteNewProductToConfigFailure = () => ({
    type: POST_DELETE_PRODUCT_TO_CONFIG_FAILURE,
});


export const getSystemConfiguration = ( system ) => ({
    type: GET_SYSTEM_CONFIGURATION_SUCCESS,
    payload: {
        system
    }
});

export const modifyConfigurationSuccess = ( nameConfig ) => ({
    type: MODIFY_NEW_CONFIGURATION_SUCCESS,
    payload: {
        nameConfig
    }
});

export const addConfigurationNameSuccess = ( newConfig ) => ({
    type: ADD_NAME_NEW_CONFIGURATION_SUCCESS,
    payload: {
        newConfig
    }
});

export const addConfigurationSurgeryTargetsSuccess = ( surgeryTarget ) => ({
    type: ADD_SURGERY_TARGETS_NEW_CONFIGURATION_SUCCESS,
    payload: {
        surgeryTarget
    }
});

export const addSystemSurgeryTargetsBegin = ( ) => ({
    type: ADD_SURGERY_TARGETS_SYSTEM_BEGIN,

});
export const addSystemSurgeryTargetsSuccess = ( sistemAndMainSurgery ) => ({
    type: ADD_SURGERY_TARGETS_SYSTEM_SUCCESS,
    payload: {
        sistemAndMainSurgery
    }
});

export const addSystemSurgeryTargetsFailure = ( ) => ({
    type: ADD_SURGERY_TARGETS_SYSTEM_FAILURE,
});
export const deleteSystemSurgeryTargetsBegin = ( ) => ({
    type: DELETE_SURGERY_TARGETS_SYSTEM_BEGIN,

});
export const deleteSystemSurgeryTargetsSuccess = ( sistemAndMainSurgery ) => ({
    type: DELETE_SURGERY_TARGETS_SYSTEM_SUCCESS,
    payload: {
        sistemAndMainSurgery
    }
});
export const deleteSystemSurgeryTargetsFailure = () => ({
    type: DELETE_SURGERY_TARGETS_SYSTEM_FAILURE,
});


export const addProductsConfigurationSuccess = ( products ) => ({
    type: ADD_PRODUCTS_NEW_CONFIGURATION_SUCCESS,
    payload: {
        products
    }
});


export const postNewConfigurationBegin = () => ({
    type: POST_NEW_CONFIGURATION_BEGIN,
});

export const postNewConfigurationSuccess = () => ({
    type: POST_NEW_CONFIGURATION_SUCCESS,
});

export const postNewConfigurationFailure = () => ({
    type: POST_NEW_CONFIGURATION_FAILURE,
});


export const deleteBundleToConfigBegin= () => ({
    type: DELETE_BUNDLE_TO_CONFIG_BEGIN,
});

export const deleteBundleToConfigSuccess = () => ({
    type: DELETE_BUNDLE_TO_CONFIG_SUCCESS,
});

export const deleteBundleToConfigFailure = () => ({
    type: DELETE_BUNDLE_TO_CONFIG_FAILURE,
});

export const searchProductsBegin= () => ({
    type: SEARCH_PRODUCT_BEGIN,
});

export const searchProductsSuccess = (searchProducts) => ({
    type: SEARCH_PRODUCT_SUCCESS,
    payload: {
        searchProducts
    }
});

export const searchProductsFailure = () => ({
    type: SEARCH_PRODUCT_FAILURE,
});

export const searchFinishQuoteBegin= () => ({
    type: SEARCH_FINISHED_QUOTE_BEGIN,
});

export const searchFinishQuoteSuccess = (searchFinishQuote) => ({
    type: SEARCH_FINISHED_QUOTE_SUCCESS,
    payload: {
        searchFinishQuote
    }
});

export const searchFinishQuoteFailure = () => ({
    type: SEARCH_FINISHED_QUOTE_FAILURE,
});

export const searchInAllFinishQuoteBegin= () => ({
    type: SEARCH_IN_ALL_FINISHED_QUOTE_BEGIN,
});

export const searchInAllFinishQuoteSuccess = (searchInAllFinishQuote) => ({
    type: SEARCH_IN_ALL_FINISHED_QUOTE_SUCCESS,
    payload: {
        searchInAllFinishQuote
    }
});

export const searchInAllFinishQuoteFailure = () => ({
    type: SEARCH_IN_ALL_FINISHED_QUOTE_FAILURE,
});



export const searchMedicsBegin= () => ({
    type: SEARCH_MEDICS_BEGIN,
});

export const searchMedicsSuccess = (searchMedic) => ({
    type: SEARCH_MEDICS_SUCCESS,
    payload: {
        searchMedic
    }
});

export const searchMedicsFailure = () => ({
    type: SEARCH_MEDICS_FAILURE,
});

export const searchClientsBegin= () => ({
    type: SEARCH_CLIENTS_BEGIN,
});

export const searchClientsSuccess = (searchClient) => ({
    type: SEARCH_CLIENTS_SUCCESS,
    payload: {
        searchClient
    }
});

export const searchClientsFailure = () => ({
    type: SEARCH_CLIENTS_FAILURE,
});

export const searchHospitalBegin= () => ({
    type: SEARCH_HOSPITAL_BEGIN,
});

export const searchHospitalSuccess = (searchHospital) => ({
    type: SEARCH_HOSPITAL_SUCCESS,
    payload: {
        searchHospital
    }
});

export const searchHospitalFailure = () => ({
    type: SEARCH_HOSPITAL_FAILURE,
});

export const searchPatientsBegin = () => ({
    type: SEARCH_PATIENT_BEGIN,
});

export const searchPatientsSuccess = (searchPatient) => ({
    type: SEARCH_PATIENT_SUCCESS,
    payload: {
        searchPatient
    }
});

export const searchPatientsFailure = () => ({
    type: SEARCH_PATIENT_FAILURE,
});

export const getProductsBegin = () => ({
    type: GET_PRODUCTS_BEGIN,
});

export const getProductsSuccess = ( products ) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: { 
        products
    }
});

export const getProductsFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
});


export const removeHospitalRequirementBegin = () => ({
    type: REMOVE_HOSPITAL_REQUERIMENT_BEGIN,
});

export const removeHospitalRequirementSuccess = ( data ) => ({
    type: REMOVE_HOSPITAL_REQUERIMENT_SUCCESS,
    payload: { 
        data
    }
});

export const removeHospitalRequirementFailure = () => ({
    type: REMOVE_HOSPITAL_REQUERIMENT_FAILURE,
});


export const removeMedicRequirementBegin = () => ({
    type: REMOVE_MEDIC_REQUERIMENT_BEGIN,
});

export const removeMedicRequirementSuccess = ( data ) => ({
    type: REMOVE_MEDIC_REQUERIMENT_SUCCESS,
    payload: { 
        data
    }
});

export const removeMedicRequirementFailure = () => ({
    type: REMOVE_MEDIC_REQUERIMENT_FAILURE,
});

export const AddMedicRequirementBegin = () => ({
    type: ADD_MEDIC_REQUERIMENT_BEGIN,
});

export const AddMedicRequirementSuccess = ( data ) => ({
    type: ADD_MEDIC_REQUERIMENT_SUCCESS,
    payload: { 
        data
    }
});

export const AddMedicRequirementFailure = () => ({
    type: ADD_MEDIC_REQUERIMENT_FAILURE,
});


export const AddHospitalRequirementBegin = () => ({
    type: ADD_HOSPITAL_REQUERIMENT_BEGIN,
});

export const AddHospitalRequirementSuccess = ( data ) => ({
    type: ADD_HOSPITAL_REQUERIMENT_SUCCESS,
    payload: { 
        data
    }
});

export const AddHospitalRequirementFailure = () => ({
    type: ADD_HOSPITAL_REQUERIMENT_FAILURE,
});

export const deleteConstructNewConfig = () => ({
    type: DELETE_CONSTRUCT_NEWCONFIG,
});

export const deleteProductNewConfig = ( delProduct ) => ({
    type: DELETE_PRODUCT_NEWCONFIG,
    payload: {
        delProduct
    }
});

export const resetToInitialState = () => ({
    type: RESET_TO_INITIAL_STATE
});

export const AddPendingStateQuoteSystem = ( systemsPending ) => ({
    type: ADD_PENDING_STATE_QUOTE_SYSTEM,
    payload:{
        systemsPending
    }
});


export function getCities(stateId) {
    
    return function (dispatch, getState) {
        dispatch(getCitiesBegin());
        return request({
            partialUrl: `/API/Utilities/GetCities?stateId=${stateId}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getCitiesSucess(data.response));
        })
        .catch(err => {
            return dispatch(getCitiesFailure(err));
        });
    }
}
export function getStates() {
    
    return function (dispatch, getState) {
        dispatch(getStatesBegin());
        return request({
            partialUrl: `/API/Utilities/GetStates`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getStatesSucess(data.response));
        })
        .catch(err => {
            return dispatch(getStatesFailure(err));
        });
    }
}

export function searchProducts( keyword, searchBy="productCode", includeSystem = true ) {
    
    return function (dispatch, getState) {
        dispatch(searchProductsBegin());
        return request({
            partialUrl: `/API/Products/SearchProducts?keyword=${keyword}&searchBy=${searchBy}&includeSystem=${includeSystem}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchProductsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchProductsFailure(err));
        });
    }
}

export function searchFinishQuote( key, searchBy="id", finishedQuotations = true ) {
    
    return function (dispatch, getState) {
        dispatch(searchFinishQuoteBegin());
        return request({
            partialUrl: `/API/Quotation/SearchQuotation?key=${key}&searchBy=${searchBy}&finishedQuotations=${finishedQuotations}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchFinishQuoteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchFinishQuoteFailure(err));
        });
    }
}

export function searchInAllFinishQuote( key, searchBy="id", finishedQuotations = true ) {
    
    return function (dispatch, getState) {
        dispatch(searchInAllFinishQuoteBegin());
        return request({
            partialUrl: `/API/Quotation/SearchAllQuotation?key=${key}&searchBy=${searchBy}&finishedQuotations=${finishedQuotations}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchInAllFinishQuoteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchInAllFinishQuoteFailure(err));
        });
    }
}

export function searchMedics( key ) {
    
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

export function getPatients(currentPage=0,offset=10) {
    
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
export function searchPatient( key ) {
    
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

export function searchClients( key ) {
    
    return function (dispatch, getState) {
        dispatch(searchClientsBegin());
        return request({
            partialUrl: `/API/Client/SearchClients?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchClientsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchClientsFailure(err));
        });
    }
}

export function searchHospital( key ) {
    
    return function (dispatch, getState) {
        dispatch(searchHospitalBegin());
        return request({
            partialUrl: `/API/Hospital/SearchHospitals?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(searchHospitalSuccess(data.response));
        })
        .catch(err => {
            return dispatch(searchHospitalFailure(err));
        });
    }
}

export function getProducts(currentPage=0, offset=10, includeSystem = false) {
    
    return function (dispatch, getState) {
        dispatch(getProductsBegin());
        return request({
            partialUrl: `/API/Products/GetProducts?currentPage=${currentPage}&offset=${offset}&includeSystem=${includeSystem}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getProductsSuccess(data.products));
        })
        .catch(err => {
            return dispatch(getProductsFailure(err));
        });
    }
}

// Delete Configuration

export function deleteBundleToConfig( bundleId ) {
    return function (dispatch, getState) {
        dispatch(deleteBundleToConfigBegin());
        return request({
            partialUrl: `/API/Bundle/DeleteBundle?id=${bundleId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteBundleToConfigSuccess(data.response));
        })
        .catch(err => {
            return dispatch(deleteBundleToConfigFailure(err));
        });
    }
}

// Add Surgery Type To System

export function postAddNewSurgeryTypeToSystem( SystemId, MainSurgeryTypeId ) {
    return function (dispatch, getState) {
        dispatch(addSystemSurgeryTargetsBegin());
        return request({
            partialUrl: `/API/System/AddSurgeryTypeToSystem`,
            method: 'POST',
            state: getState().user.request,
            body: {
                MainSurgeryTypeId, 
                SystemId
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addSystemSurgeryTargetsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addSystemSurgeryTargetsFailure(err));
        });
    }
}

// Delete Surgery Type To System

export function postDeleteNewSurgeryTypeToSystem( systemId, mainSurgeryTypeId  ) {

    return function (dispatch, getState) {
        dispatch(deleteSystemSurgeryTargetsBegin());
        return request({
            partialUrl: `/API/System/DeleteTargetSurgeryFromSystem?systemId=${systemId}&targetSurgeryId=${mainSurgeryTypeId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteSystemSurgeryTargetsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(deleteSystemSurgeryTargetsFailure(err));
        });
    }
}

// Add Surgery Type To Config

export function postAddNewSurgeryTypeToConfig( BundleConfigurationId, MainSurgeryTypeId ) {

    return function (dispatch, getState) {
        dispatch(postAddConfigurationToDBBegin());
        return request({
            partialUrl: `/API/Bundle/AddSingleSurgeryTypeToConfigurationBundle`,
            method: 'POST',
            state: getState().user.request,
            body:
                {
                    BundleConfigurationId,
                    MainSurgeryTypeId
                }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postAddConfigurationToDBSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postAddConfigurationToDBFailure(err));
        });
    }
}

// Delete Surgery Type To Config

export function postDeleteNewSurgeryTypeToConfig(bundleId, mainSurgeryTypeId) {
    return function (dispatch, getState) {
        dispatch(postDeleteConfigurationToDBBegin());
        return request({
            partialUrl: `/API/Bundle/RemoveSurgeryTypeFromBundle?BundleId=${bundleId}&MainSurgeryTypeId=${mainSurgeryTypeId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postDeleteConfigurationToDBSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postDeleteConfigurationToDBFailure(err));
        });
    }
}



// Add products To Config

export function postAddNewProductToConfig( addProduct ) {

    return function (dispatch, getState) {
        dispatch(postAddNewProductToConfigBegin());
        return request({
            partialUrl: `/API/Bundle/AddProductToConfiguration`,
            method: 'POST',
            state: getState().user.request,
            body: addProduct
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postAddNewProductToConfigSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postAddNewProductToConfigFailure(err));
        });
    }
}

// Delete products To Config

export function postDeleteNewProductToConfig(configurationId, productId) {
    
    return function (dispatch, getState) {
        dispatch(postDeleteNewProductToConfigBegin());
        return request({
            partialUrl: `/API/Bundle/DeleteProductFromConfiguration?configurationId=${configurationId}&productId=${productId}`,
            method: 'DELETE',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postDeleteNewProductToConfigSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postDeleteNewProductToConfigFailure(err));
        });
    }
}



// POST ---- CREATE CONFIG
export function postCreateNewConfiguration( configurationName ) {
    return function (dispatch, getState) {
        dispatch(postcreateConfigurationBegin());
        return request({
            partialUrl: `/API/Bundle/CreateConfiguration`,
            method: 'POST',
            state: getState().user.request,
            body: configurationName
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postcreateConfigurationSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postcreateConfigurationFailure(err));
        });
    }
}


// POST ---- CREATE CONFIG
export function postNewConfiguration( newConfig ) {
    return function (dispatch, getState) {
        dispatch(postNewConfigurationBegin());
        return request({
            partialUrl: `/API/Bundle/CreateSystemTemplate`,
            method: 'POST',
            state: getState().user.request,
            body: newConfig
        })
        .then(response => response.json())
        .then(data => {
            dispatch(postNewConfigurationSuccess(data.response));
        })
        .catch(err => {
            return dispatch(postNewConfigurationFailure(err));
        });
    }
}



export function getMainSurgeryType() {
    return function (dispatch, getState) {
        dispatch(getMainSurgeryTypesBegin());
        return request({
            partialUrl: `/API/System/GetMainSurgeryTypes/`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getMainSurgeryTypesSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getMainSurgeryTypesFailure(err))
        });
    }
}

export function getSystems(currentPage=0,offset=100) {
    return function (dispatch, getState) {
        dispatch(getSystemsBegin);
        return request({
            partialUrl: `/API/System/GetSystems?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSystemsSucess(data.response));
        })
        .catch(err => {
            return dispatch(getSystemsFailure(err))
        });
    }
}

export function getSystemByMainSurgencyType(mainSurgeryType, currentPage=0, offset=100 ) {
    return function (dispatch, getState) {
        dispatch(getSystemByMainSurgencyBegin);
        return request({
            partialUrl: `/API/System/GetSystemsByMainSurgeryType?currentPage=${currentPage}&offset=${offset}&mainSurgeryTypeId=${mainSurgeryType.id}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSystemByMainSurgencySuccess(mainSurgeryType,data.response));
        })
        .catch(err => {
            return dispatch(getSystemByMainSurgencyFailure(err))
        });
    }
}

export function getBundlesFormSystem(mainSurgeryTypeId,systemId,currentPage=0,offset=1000) {
    return function (dispatch, getState) {
        dispatch(getBundlesFormSystemBegin());
        return request({
            partialUrl: `/API/Bundle/GetBundlesFromSystem?currentPage=${currentPage}&offset=${offset}&mainSurgeryTypeId=${mainSurgeryTypeId}&systemId=${systemId}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getBundlesFormSystemSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getSystemByMainSurgencyFailure(err));
        });
    }
}

export function getBundlesBySystemId(systemId,currentPage=0,offset=100) {
    return function (dispatch, getState) {
        dispatch(getBundlesBySystemIdBegin());
        return request({
            partialUrl: `/API/Bundle/GetSystemBundles?currentPage=${currentPage}&offset=${offset}&systemId=${systemId}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getBundlesBySystemIdSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getBundlesBySystemIdFailure(err));
        });
    }
}

export function getClients(currentPage=0,offset=10) {
    return function (dispatch, getState) {
        dispatch(getClientsBegin());
        return request({
            partialUrl: `/API/Client/GetClients?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getClientsSucess(data.clients));
        })
        .catch(err => {
            return dispatch(getClientsFailure(err))
        });
    }
}


export function getMedics(currentPage=0,offset=10) {
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

export function getInstitutions(currentPage=0,offset=10) {
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

// Remove Requirements
export function RemoveHospitalRequirement(RequirementId) {
    return function (dispatch, getState) {
        dispatch(removeHospitalRequirementBegin());
        return request({
            partialUrl: `/API/Hospital/RemoveHospitalRequirement?RequirementId=${RequirementId}`,
            method: 'DELETE',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(removeHospitalRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(removeHospitalRequirementFailure(err))
        });
    }
}


// Remove Requirements
export function RemoveMedicRequirement(RequirementId) {
    return function (dispatch, getState) {
        dispatch(removeMedicRequirementBegin());
        return request({
            partialUrl: `/API/Medic/RemoveMedicRequirement?RequirementId=${RequirementId}`,
            method: 'DELETE',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(removeMedicRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(removeMedicRequirementFailure(err))
        });
    }
}

// POST ---- CREATE REQUERIMENT TO MEDIC
export function AddMedicRequirement( newRequeriment ) {

    return function (dispatch, getState) {
        dispatch(AddMedicRequirementBegin());
        return request({
            partialUrl: `/API/Medic/AddMedicRequirement`,
            method: 'POST',
            state: getState().user.request,
            body: newRequeriment
        })
        .then(response => response.json())
        .then(data => {
            dispatch(AddMedicRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(AddMedicRequirementFailure(err));
        });
    }
}

// POST ---- CREATE REQUERIMENT TO HOSPITAL
export function AddHospitalRequirement( newRequeriment ) {

    return function (dispatch, getState) {
        dispatch(AddHospitalRequirementBegin());
        return request({
            partialUrl: `/API/Hospital/AddHospitalRequirement`,
            method: 'POST',
            state: getState().user.request,
            body: newRequeriment
        })
        .then(response => response.json())
        .then(data => {
            
            dispatch(AddHospitalRequirementSuccess(data.response));
        })
        .catch(err => {
            return dispatch(AddHospitalRequirementFailure(err));
        });
    }
}
// NUEVOS METODOS --------------------------------------------------------------------


export function UpdateHospitalRequirement( newRequirement ) {

    return function (dispatch, getState) {
        dispatch(updateRequirementsHospitalBegin());
        return request({
            partialUrl: `/API/Hospital/UpdateHospitalRequirement`,
            method: 'PUT',
            state: getState().user.request,
            body: newRequirement
        })
        .then(response => response.json())
        .then(data => {
            
            dispatch(updateRequirementsHospitalSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateRequirementsHospitalFailure(err));
        });
    }
}
// NUEVOS METODOS --------------------------------------------------------------------



export function UpdateMedicRequirement( newRequirement ) {

    return function (dispatch, getState) {
        dispatch(updateRequirementsMedicBegin());
        return request({
            partialUrl: `/API/Medic/UpdateMedicRequirement`,
            method: 'PUT',
            state: getState().user.request,
            body: newRequirement
        })
        .then(response => response.json())
        .then(data => {
            dispatch(updateRequirementsMedicSuccess(data.response));
        })
        .catch(err => {
            return dispatch(updateRequirementsMedicFailure(err));
        });
    }
}


export function getFinishedQoute(currentPage=0,offset=10, finishedQuotations=true,) {
    return function (dispatch, getState) {
        dispatch(getFinishedQouteBegin());
        return request({
            partialUrl: `/API/Quotation/GetQuotations?currentPage=${currentPage}&offset=${offset}&finishedQuotations=${finishedQuotations}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getFinishedQouteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getFinishedQouteFailure(err))
        });
    }
}

export function getFinishedAllQoute(currentPage=0,offset=10) {
    return function (dispatch, getState) {
        dispatch(getFinishedAllQouteBegin());
        return request({
            partialUrl: `/API/Quotation/GetAllQuotations?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getFinishedAllQouteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getFinishedAllQouteFailure(err))
        });
    }
}



export function getUnfinishedQoute(currentPage=0,offset=10, finishedQuotations=false,) {
    return function (dispatch, getState) {
        dispatch(getUnfinishedQouteBegin());
        return request({
            partialUrl: `/API/Quotation/GetQuotations?currentPage=${currentPage}&offset=${offset}&finishedQuotations=${finishedQuotations}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getUnfinishedQouteSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getUnfinishedQouteFailure(err))
        });
    }
}


export function getViewPdf(quoteID) {
    return function (dispatch, getState) {
        return request({
            partialUrl: `/API/Quotation/GetQuotationPDF?id=${quoteID}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            window.open(`${window.publicUrl}/API/${data.response}`);
        })
        .catch(err => {
            return (err)
        });
    }
}

export function getDriveAccess() {
    return function (dispatch, getState) {
        return request({
            partialUrl: `/API/Utilities/GetDriveAccess`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            window.open(data.response);
        })
        .catch(err => {
            return (err)
        });
    }
}


export function getPricesLists(currentPage=0,offset=100) {
    return function (dispatch, getState) {
        dispatch(getPriceListsBegin());
        return request({
            partialUrl: `/API/PriceList/GetPriceLists?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body:{}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getPriceListsSuccess(data.priceLists));
        })
        .catch(err => {
            return dispatch(getPriceListsFailure(err));
        });
    }
}
