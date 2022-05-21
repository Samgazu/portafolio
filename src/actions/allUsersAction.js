import {

    SET_USER_ROL_SELECTED_BEGIN,
    SET_USER_ROL_SELECTED_SUCCESS,
    SET_USER_ROL_SELECTED_FAILURE,
    GET_USERS_MEDICS_LIST_BEGIN,
    GET_USERS_MEDICS_LIST_SUCCESS,
    GET_USERS_MEDICS_LIST_FAILURE,
    SET_SELECTED_USER_BEGIN,
    SET_SELECTED_USER_SUCCESS,
    SET_SELECTED_USER_FAILURE,
    GET_SELECTED_USER_BEGIN,
    GET_SELECTED_USER_SUCCESS,
    GET_SELECTED_USER_FAILURE,
    GET_PATIENTS_IN_USER_BEGIN,
    GET_PATIENTS_IN_SELECTED_USER_SUCCESS,
    GET_PATIENTS_IN_SELECTED_USER_FAILURE,
    GET_PROCESSES_IN_USER_BEGIN,
    GET_PROCESSES_IN_SELECTED_USER_SUCCESS,
    GET_PROCESSES_IN_SELECTED_USER_FAILURE,
    GET_STATES_IN_PROCESSES_BEGIN,
    GET_STATES_IN_PROCESSES_SUCCESS,
    GET_STATES_IN_PROCESSES_FAILURE,
    GET_SURGERIES_IN_USER_BEGIN,
    GET_SURGERIES_IN_USER_SUCCESS,
    GET_SURGERIES_IN_USER_FAILURE,
    GET_USER_ROLS_BEGIN,
    GET_USER_ROLS_SUCCESS,
    GET_USER_ROLS_FAILURE,
    GET_USERS_CHAT_BEGIN,
    GET_USERS_CHAT_SUCCESS,
    GET_USERS_CHAT_FAILURE,
    GET_CHAT_FROM_USER_BEGIN,
    GET_CHAT_FROM_USER_SUCCESS,
    GET_CHAT_FROM_USER_FAILURE,
    SET_USER_CHAT_SELECTED_BEGIN,
    SET_USER_CHAT_SELECTED_SUCCESS,
    SET_USER_CHAT_SELECTED_FAILURE,
    GET_SELLERS_BEGIN,
    GET_SELLERS_SUCCESS,
    GET_SELLERS_FAILURE,
    SET_SELLER_USER,
    GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN,
    GET_USER_SPECIFIC_PRODUCT_GROUPS_SUCCESS,
    GET_USER_SPECIFIC_PRODUCT_GROUPS_FAILURE,
    GET_PRODUCT_GROUPS_BEGIN,
    GET_PRODUCT_GROUPS_SUCCESS,
    GET_PRODUCT_GROUPS_FAILURE,
    ADD_USER_SPECIFIC_GROUP_BEGIN,
    ADD_USER_SPECIFIC_GROUP_SUCCESS,
    ADD_USER_SPECIFIC_GROUP_FAILURE,
    REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN,
    REMOVE_USER_SPECIFIC_PRODUCT_GROUP_SUCCESS,
    REMOVE_USER_SPECIFIC_PRODUCT_GROUP_FAILURE,
    GET_SPECIFIC_BUNDLES_BEGIN,
    GET_SPECIFIC_BUNDLES_SUCCESS,
    GET_SPECIFIC_BUNDLES_FAILURE,
    ADD_USER_SPECIFIC_BUNDLE_BEGIN,
    ADD_USER_SPECIFIC_BUNDLE_SUCCESS,
    ADD_USER_SPECIFIC_BUNDLE_FAILURE,
    DELETE_SPECIFIC_BUNDLE_BEGIN,
    DELETE_SPECIFIC_BUNDLE_SUCCESS,
    DELETE_SPECIFIC_BUNDLE_FAILURE,
    GET_USER_SPECIFIC_PRICELISTS_BEGIN,
    GET_USER_SPECIFIC_PRICELISTS_SUCCESS,
    GET_USER_SPECIFIC_PRICELISTS_FAILURE,
    ADD_USER_SPECIFIC_PRICELIST_BEGIN,
    ADD_USER_SPECIFIC_PRICELIST_SUCCESS,
    ADD_USER_SPECIFIC_PRICELIST_FAILURE,
    REMOVE_USER_SPECIFIC_PRICELIST_BEGIN,
    REMOVE_USER_SPECIFIC_PRICELIST_SUCCESS,
    REMOVE_USER_SPECIFIC_PRICELIST_FAILURE,
    GET_USERS_BY_ROLE_ID_BEGIN,
    GET_USERS_BY_ROLE_ID_SUCCESS,
    GET_USERS_BY_ROLE_ID_FAILURE,
    SEARCH_PRODUCT_GROUPS_BEGIN,
    SEARCH_PRODUCT_GROUPS_SUCCESS,
    SEARCH_PRODUCT_GROUPS_FAILURE,

} from '../constants/actionTypes';

import request from '../utils/request';

// SET USER ROL SELECTED

export const setUserRolSelectedBegin= () => ({
    type: SET_USER_ROL_SELECTED_BEGIN,
});

export const setUserRolSelectedSuccess = (userRolSelected) => ({
    type: SET_USER_ROL_SELECTED_SUCCESS,
    payload: {
        userRolSelected
    }
});

export const setSellerUser = (sellerUser) => ({
    type: SET_SELLER_USER,
    payload: {
        sellerUser
    }
});

export const setUserRolSelectedFailure = () => ({
    type: SET_USER_ROL_SELECTED_FAILURE,
});

// GET MEDICS

export const getMedicsListBegin= () => ({
    type: GET_USERS_MEDICS_LIST_BEGIN,
});

export const getMedicsListSuccess = (getMedicList) => ({
    type: GET_USERS_MEDICS_LIST_SUCCESS,
    payload: {
        getMedicList
    }
});

export const getMedicsListFailure = () => ({
    type: GET_USERS_MEDICS_LIST_FAILURE,
});

// SET SELECTED USER ID

export const setUserIdBegin= () => ({
    type: SET_SELECTED_USER_BEGIN,
});

export const setUserIdSuccess = (id) => ({
    type: SET_SELECTED_USER_SUCCESS,
    payload: {
        id
    }
});

export const setUserIdFailure = () => ({
    type: SET_SELECTED_USER_FAILURE,
});

// GET SELECTED USER ID

export const getUserIdBegin= () => ({
    type: GET_SELECTED_USER_BEGIN,
});

export const getUserIdSuccess = (user) => ({
    type: GET_SELECTED_USER_SUCCESS,
    payload: {
        user
    }
});

export const getUserIdFailure = () => ({
    type: GET_SELECTED_USER_FAILURE,
});

// GET PATIENTS IN USER

export const getPatientsInUserBegin= () => ({
    type: GET_PATIENTS_IN_USER_BEGIN,
});

export const getPatientsInUserSuccess = (patients) => ({
    type: GET_PATIENTS_IN_SELECTED_USER_SUCCESS,
    payload: {
        patients
    }
});

export const getPatientsInUserFailure = () => ({
    type: GET_PATIENTS_IN_SELECTED_USER_FAILURE,
});

// GET PROCESSES IN USER

export const getProcessesInUserBegin= () => ({
    type: GET_PROCESSES_IN_USER_BEGIN,
});

export const getProcessesInUserSuccess = (processes) => ({
    type: GET_PROCESSES_IN_SELECTED_USER_SUCCESS,
    payload: {
        processes
    }
});

export const getProcessesInUserFailure = () => ({
    type: GET_PROCESSES_IN_SELECTED_USER_FAILURE,
});

// GET STATES IN PROCESSES

export const getStatesInProcessesBegin= () => ({
    type: GET_STATES_IN_PROCESSES_BEGIN,
});

export const getStatesInProcessesSuccess = (states) => ({
    type: GET_STATES_IN_PROCESSES_SUCCESS,
    payload: {
        states
    }
});

export const getStatesInProcessesFailure = () => ({
    type: GET_STATES_IN_PROCESSES_FAILURE,
});

// GET SURGERIES IN USER

export const getSurgeriesBegin= () => ({
    type: GET_SURGERIES_IN_USER_BEGIN,
});

export const getSurgeriesSuccess = (surgeries) => ({
    type: GET_SURGERIES_IN_USER_SUCCESS,
    payload: {
        surgeries
    }
});

export const getSurgeriesFailure = () => ({
    type: GET_SURGERIES_IN_USER_FAILURE,
});

// GET USER ROLS

export const getUserRolsBegin= () => ({
    type: GET_USER_ROLS_BEGIN,
});

export const getUserRolsSuccess = (rols) => ({
    type: GET_USER_ROLS_SUCCESS,
    payload: {
        rols
    }
});

export const getUserRolsFailure = () => ({
    type: GET_USER_ROLS_FAILURE,
});

// GET USERS CHAT

export const getUsersChatBegin= () => ({
    type: GET_USERS_CHAT_BEGIN,
});

export const getUsersChatSuccess = (users) => ({
    type: GET_USERS_CHAT_SUCCESS,
    payload: {
        users
    }
});

export const getUsersChatFailure = () => ({
    type: GET_USERS_CHAT_FAILURE,
});

// GET CHATS FROM USER

export const getChatsFromUserBegin= () => ({
    type: GET_CHAT_FROM_USER_BEGIN,
});

export const getChatsFromUserSuccess = (chats) => ({
    type: GET_CHAT_FROM_USER_SUCCESS,
    payload: {
        chats
    }
});

export const getChatsFromUserFailure = () => ({
    type: GET_CHAT_FROM_USER_FAILURE,
});

// SET USER CHAT SELECTED

export const setUserChatSelectedBegin= () => ({
    type: SET_USER_CHAT_SELECTED_BEGIN,
});

export const setUserChatSelectedSuccess = (id) => ({
    type: SET_USER_CHAT_SELECTED_SUCCESS,
    payload: {
        id
    }
});

export const setUserChatSelectedFailure = () => ({
    type: SET_USER_CHAT_SELECTED_FAILURE,
});

// GET SELLERS

export const getSellersBegin= () => ({
    type: GET_SELLERS_BEGIN,
});

export const getSellersSuccess = (listSellers) => ({
    type: GET_SELLERS_SUCCESS,
    payload: {
        listSellers
    }
});

export const getSellersFailure = () => ({
    type: GET_SELLERS_FAILURE,
});


// GET SELLERS

export const getUserSpecificProductGroupsBegin= () => ({
    type: GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN,
});

export const getUserSpecificProductGroupsSuccess = (listSpecificProductUser) => ({
    type: GET_USER_SPECIFIC_PRODUCT_GROUPS_SUCCESS,
    payload: {
        listSpecificProductUser
    }
});

export const getUserSpecificProductGroupsFailure = () => ({
    type: GET_USER_SPECIFIC_PRODUCT_GROUPS_FAILURE,
});


// GET SELLERS

export const addUserSpecificGroupBegin= () => ({
    type: ADD_USER_SPECIFIC_GROUP_BEGIN,
});

export const addUserSpecificGroupSuccess = (addedUserSpecificProductGroup) => ({
    type: ADD_USER_SPECIFIC_GROUP_SUCCESS,
    payload: {
        addedUserSpecificProductGroup
    }
});

export const addUserSpecificGroupFailure = () => ({
    type: ADD_USER_SPECIFIC_GROUP_FAILURE,
});


// GET SELLERS

export const getProductGroupsBegin= () => ({
    type: GET_PRODUCT_GROUPS_BEGIN,
});

export const getProductGroupsSuccess = (listProductGoups) => ({
    type: GET_PRODUCT_GROUPS_SUCCESS,
    payload: {
        listProductGoups
    }
});

export const getProductGroupsFailure = () => ({
    type: GET_PRODUCT_GROUPS_FAILURE,
});



// GET SELLERS

export const removeUserSpecificProductGroupBegin = () => ({
    type: REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN,
});

export const removeUserSpecificProductGroupSuccess = (deleteUserSpecificProductGroup) => ({
    type: REMOVE_USER_SPECIFIC_PRODUCT_GROUP_SUCCESS,
    payload: {
        deleteUserSpecificProductGroup
    }
});

export const removeUserSpecificProductGroupFailure = () => ({
    type: REMOVE_USER_SPECIFIC_PRODUCT_GROUP_FAILURE,
});

// GET SELLERS

export const getSpecificBundlesBegin= () => ({
    type: GET_SPECIFIC_BUNDLES_BEGIN,
});

export const getSpecificBundlesSuccess = (listBundlesGoups) => ({
    type: GET_SPECIFIC_BUNDLES_SUCCESS,
    payload: {
        listBundlesGoups
    }
});

export const getSpecificBundlesFailure = () => ({
    type: GET_SPECIFIC_BUNDLES_FAILURE,
});

// GET SELLERS

export const addUserSpecificBundleBegin= () => ({
    type: ADD_USER_SPECIFIC_BUNDLE_BEGIN,
});

export const addUserSpecificBundleSuccess = (addedUserSpecificBundleGroup) => ({
    type: ADD_USER_SPECIFIC_BUNDLE_SUCCESS,
    payload: {
        addedUserSpecificBundleGroup
    }
});

export const addUserSpecificBundleFailure = () => ({
    type: ADD_USER_SPECIFIC_BUNDLE_FAILURE,
});

// GET SELLERS

export const deleteSpecificBundleBegin = () => ({
    type: DELETE_SPECIFIC_BUNDLE_BEGIN,
});

export const deleteSpecificBundleSuccess = (deleteUserSpecificBundleGroup) => ({
    type: DELETE_SPECIFIC_BUNDLE_SUCCESS,
    payload: {
        deleteUserSpecificBundleGroup
    }
});

export const deleteSpecificBundleFailure = () => ({
    type: DELETE_SPECIFIC_BUNDLE_FAILURE,
});

// GET SELLERS

export const getUserSpecificPricelistsBegin= () => ({
    type: GET_USER_SPECIFIC_PRICELISTS_BEGIN,
});

export const getUserSpecificPricelistsSuccess = (listSpecificPricelists) => ({
    type: GET_USER_SPECIFIC_PRICELISTS_SUCCESS,
    payload: {
        listSpecificPricelists
    }
});

export const getUserSpecificPricelistsFailure = () => ({
    type: GET_USER_SPECIFIC_PRICELISTS_FAILURE,
});

// GET SELLERS

export const addUserSpecificPricelistBegin= () => ({
    type: ADD_USER_SPECIFIC_PRICELIST_BEGIN,
});

export const addUserSpecificPricelistSuccess = (addedUserSpecificPricelist) => ({
    type: ADD_USER_SPECIFIC_PRICELIST_SUCCESS,
    payload: {
        addedUserSpecificPricelist
    }
});

export const addUserSpecificPricelistFailure = () => ({
    type: ADD_USER_SPECIFIC_PRICELIST_FAILURE,
});

// GET SELLERS

export const removeUserSpecificPricelistBegin = () => ({
    type: REMOVE_USER_SPECIFIC_PRICELIST_BEGIN,
});

export const removeUserSpecificPricelistSuccess = (removeUserSpecificPricelist) => ({
    type: REMOVE_USER_SPECIFIC_PRICELIST_SUCCESS,
    payload: {
        removeUserSpecificPricelist
    }
});

export const removeUserSpecificPricelistFailure = () => ({
    type: REMOVE_USER_SPECIFIC_PRICELIST_FAILURE,
});

// GET SELLERS

export const getUsersByRoleIdBegin = () => ({
    type: GET_USERS_BY_ROLE_ID_BEGIN,
});

export const getUsersByRoleIdSuccess = (listUsersByRoleId) => ({
    type: GET_USERS_BY_ROLE_ID_SUCCESS,
    payload: {
        listUsersByRoleId
    }
});

export const getUsersByRoleIdFailure = () => ({
    type: GET_USERS_BY_ROLE_ID_FAILURE,
});

// GET SELLERS

export const searchProductGroupsBegin = () => ({
    type: SEARCH_PRODUCT_GROUPS_BEGIN,
});

export const searchProductGroupsSuccess = (listProductGroupsSearch) => ({
    type: SEARCH_PRODUCT_GROUPS_SUCCESS,
    payload: {
        listProductGroupsSearch
    }
});

export const searchProductGroupsFailure = () => ({
    type: SEARCH_PRODUCT_GROUPS_FAILURE,
});


// SET USER ROL SELECTED

export function setUserRolSelected( userRolSelected=null ) {
    
    return function (dispatch) {
        dispatch(setUserRolSelectedBegin());
        dispatch(setUserRolSelectedSuccess(userRolSelected));
    }
}



export function getUsersByRoleId({currentPage = 0, offset = 100, roleId = 1}){
    return (dispatch, getState) => {
        dispatch(getUsersByRoleIdBegin());
        return request(
          {
            partialUrl: `/API/Account/GetActiveUsers?currentPage=${currentPage}&offset=${offset}&roleId=${roleId}`,
            method: 'GET',
            state: getState().user.request,
            body: {},
          }
        )
        .then( response => response.json())
        .then(data => {
          dispatch(getUsersByRoleIdSuccess(data.response));
        })
        .catch(err => {
          return dispatch(getUsersByRoleIdFailure(err));
        })
    };
  }

  export function searchProductGroups({keyword}){
    return (dispatch, getState) => {
        dispatch(searchProductGroupsBegin());
        return request(
          {
            partialUrl: `/API/Products/SearchProductGroups?key=${keyword}`,
            method: 'GET',
            state: getState().user.request,
            body: {},
          }
        )
        .then( response => response.json())
        .then(data => {
          dispatch(searchProductGroupsSuccess(data.response));
        })
        .catch(err => {
          return dispatch(searchProductGroupsFailure(err));
        })
    };
  }

// GET MEDICS

export function getMedicsList( currentPage=0, offset=10, rol=null ) {
    return function (dispatch, getState) {
        dispatch(getMedicsListBegin());
        return request({
            partialUrl: `/API/${rol}?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            if ( rol == 'institutions' ) { // ESTE IF Y LO DE ADENTRO SE DEBEN DE QUITAR CUANDO SE TENGAN LOS ENDPOINTS, SOLO SON DATOS DE PRUEBA
                data = { ...data,
                    requirements: [
                    {
                        id: 1,
                        description: '1. Presentar cédula de identidad.'
                    },
                    {
                        id: 2,
                        description: '2. Firmar documento de autorización y responsabilidades que autoriza al hospital y a sus médicos a proporcionarle diagnósticos, tratamiento y rehabilitación.'
                    },
                    {
                        id: 3,
                        description: '3. Firmar el reglamento y rehabilitación.'
                    }
                ]

                };
            }
            dispatch(getMedicsListSuccess(data));
        })
        .catch(err => {
            return dispatch(getMedicsListFailure(err));
        });
    }
}
// GET MEDICS

export function getSellers( currentPage=0, offset=10 ) {
    return function (dispatch, getState) {
        dispatch(getSellersBegin());
        return request({
            partialUrl: `/API/Sellers/GetSellers?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSellersSuccess(data.sellers));
        })
        .catch(err => {
            return dispatch(getSellersFailure(err));
        });
    }
}

// GET MEDICS

export function getProductGroups() {
    return function (dispatch, getState) {
        dispatch(getProductGroupsBegin());
        return request({
            partialUrl: `/API/Products/GetProductGroups`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getProductGroupsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getProductGroupsFailure(err));
        });
    }
}

// 

// getUserSpecificProductGroups

export function getUserSpecificProductGroups( userId ) {
    return function (dispatch, getState) {
        dispatch(getUserSpecificProductGroupsBegin());
        return request({
            partialUrl: `/API/Products/GetUserSpecificProductGroups?userId=${userId}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getUserSpecificProductGroupsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getUserSpecificProductGroupsFailure(err));
        });
    }
}

export function addUserSpecificGroup(addItem) {
    return function (dispatch, getState) {
        dispatch(addUserSpecificGroupBegin());
        return request({
            partialUrl: `/API/Products/AddUserSpecificGroup`,
            method: 'POST',
            state: getState().user.request,
            body: {
                request: [...addItem]
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addUserSpecificGroupSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addUserSpecificGroupFailure(err));
        });
    }
}

// GET MEDICS

export function removeUserSpecificProductGroup( deleteItems ) {
    return function (dispatch, getState) {
        dispatch(removeUserSpecificProductGroupBegin());
        return request({
            partialUrl: `/API/Products/RemoveUserSpecificProductGroup`,
            method: 'POST',
            state: getState().user.request,
            body: {
                request: [...deleteItems]
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(removeUserSpecificProductGroupSuccess(true));
        })
        .catch(err => {
            return dispatch(removeUserSpecificProductGroupFailure(err));
        });
    }
}


// getUserSpecificProductGroups

export function getSpecificBundles( userId, mainSurgeryType = 0, includeAllSurgeryTypes = false ) {
    return function (dispatch, getState) {
        dispatch(getSpecificBundlesBegin());
        return request({
            partialUrl: `/API/Bundle/GetSpecificBundles?userId=${userId}&mainSurgeryType=${mainSurgeryType}&includeAllSurgeryTypes=${includeAllSurgeryTypes}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getSpecificBundlesSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getSpecificBundlesFailure(err));
        });
    }
}

export function addUserSpecificBundle(addItem) {
    return function (dispatch, getState) {
        dispatch(addUserSpecificBundleBegin());
        return request({
            partialUrl: `/API/Bundle/AddUserSpecificBundle`,
            method: 'POST',
            state: getState().user.request,
            body: {
                request: [...addItem]
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addUserSpecificBundleSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addUserSpecificBundleFailure(err));
        });
    }
}

// GET MEDICS

export function deleteSpecificBundle( deleteItem ) {
    return function (dispatch, getState) {
        dispatch(deleteSpecificBundleBegin());
        return request({
            partialUrl: `/API/Bundle/DeleteSpecificBundle`,
            method: 'POST',
            state: getState().user.request,
            body: {
                request: [...deleteItem]
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteSpecificBundleSuccess(true));
        })
        .catch(err => {
            return dispatch(deleteSpecificBundleFailure(err));
        });
    }
}


// getUserSpecificProductGroups

export function getUserSpecificPricelists( userId ) {
    return function (dispatch, getState) {
        dispatch(getUserSpecificPricelistsBegin());
        return request({
            partialUrl: `/API/PriceList/GetUserSpecificPricelists?userId=${userId}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getUserSpecificPricelistsSuccess(data.response));
        })
        .catch(err => {
            return dispatch(getUserSpecificPricelistsFailure(err));
        });
    }
}

export function addUserSpecificPricelist(addItem) {
    return function (dispatch, getState) {
        dispatch(addUserSpecificPricelistBegin());
        return request({
            partialUrl: `/API/PriceList/AddUserSpecificPricelist`,
            method: 'POST',
            state: getState().user.request,
            body: {
                request: [...addItem]
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addUserSpecificPricelistSuccess(data.response));
        })
        .catch(err => {
            return dispatch(addUserSpecificPricelistFailure(err));
        });
    }
}

// GET MEDICS

export function removeUserSpecificPricelist( deleteItem ) {
    return function (dispatch, getState) {
        dispatch(removeUserSpecificPricelistBegin());
        return request({
            partialUrl: `/API/PriceList/RemoveUserSpecificPricelist`,
            method: 'POST',
            state: getState().user.request,
            body: {request: deleteItem}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(removeUserSpecificPricelistSuccess(true));
        })
        .catch(err => {
            return dispatch(removeUserSpecificPricelistFailure(err));
        });
    }
}

// SET SELECTED USER ID

export function setUserIdSelected( id=null ) {
    
    return function (dispatch) {
        dispatch(setUserIdBegin());
        dispatch(setUserIdSuccess(id));
    }
}

// GET SELECTED USER ID

export function getUserIdSelected( id=null, dataRol ) {
    return function (dispatch, getState) {
        dispatch(getUserIdBegin());
        const user = getState().allUsers.getMedicsList[dataRol].filter(user => user.id == id)
        dispatch(getUserIdSuccess(user));
    }
}

// GET PATIENTS IN USER

export function getPatientsInUser( ) {
    
    return function (dispatch, getState) {
        dispatch(getPatientsInUserBegin());
        const userId = getState().allUsers.selectedUserId;
        // AQUI VA LA PETICION DONDE SE TRAE LOS PATIENTS DEL USUARIO CON EL ID userID
        const patients = [
            {
                id: 1,
                name: 'Jorge blanco',
                system: 'Neon',
                cx_date: '15/02/2021',
                hospital: 'San Javier',
            },
            {
                id: 2,
                name: 'Jorge blanco',
                system: 'Neon',
                cx_date: '15/02/2021',
                hospital: 'San Javier',
            },
            {
                id: 3,
                system: 'Neon',
                cx_date: '15/02/2021',
                hospital: 'San Javier',
            },
        ];
        dispatch(getPatientsInUserSuccess(patients));
    }
}

// GET PROCESSES IN USER

export function getProcessesInUser( ) {
    
    return function (dispatch, getState) {
        dispatch(getProcessesInUserBegin());
        const userId = getState().allUsers.selectedUserId;
        // AQUI VA LA PETICION DONDE SE TRAE LOS PROCESOS DEL USUARIO CON EL ID userID
        const processes = [
            {
                id: 1,
                name: 'Pedido 1',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 1,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
            {
                id: 2,
                name: 'Pedido 2',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 2,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
            {
                id: 3,
                name: 'Pedido 3',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 3,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
            {
                id: 4,
                name: 'Pedido 4',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 4,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
            {
                id: 5,
                name: 'Pedido 5',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 5,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
            {
                id: 6,
                name: 'Pedido 6',
                hospital: 'San Javier',
                date: '20/02/2021',
                activeStatus: 1,
                products: [
                    {
                    id: 1,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 2,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 3,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 4,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    },
                    {
                    id: 5,
                    material: [
                        {
                            id: 1,
                            name: 'UCENTUM'
                        },
                        {
                            id: 2,
                            name: 'UCENTUM ALL'
                        },
                        {
                            id: 3,
                            name: 'UCENTUM LIGHT'
                        },
                        {
                            id: 4,
                            name: 'TORNILLO MACIZO'
                        },
                    ],
                    location: 'LIGHT MONOX 1',
                    quantity: '1.00'
                    }
                ]
            },
        ];
        dispatch(getProcessesInUserSuccess(processes));
    }
}

// GET STATES IN PROCESSES

export function getStatesInProcesses( ) {
    
    return function (dispatch, getState) {
        dispatch(getStatesInProcessesBegin());
        const userId = getState().allUsers.selectedUserId;
        // AQUI VA LA PETICION DONDE SE TRAE LOS STATES DE LOS PROCESOS DEL USUARIO CON UN ROL ESPECIFICO
        const states = [
            {
                id: 1,
                name: 'Cirugia programada'
            },
            {
                id: 2,
                name: 'Material en proceso de entrega'
            },
            {
                id: 3,
                name: 'Material entregado'
            },
            {
                id: 4,
                name: 'Cirugia iniciada'
            },
            {
                id: 5,
                name: 'Cirugia finalizada'
            }
        ]
        dispatch(getStatesInProcessesSuccess(states));
    }
}

// GET SURGERIES IN USER

export function getSurgeriesInUser( ) {
    
    return function (dispatch, getState) {
        dispatch(getSurgeriesBegin());
        const userId = getState().allUsers.selectedUserId;
        // AQUI VA LA PETICION DONDE SE TRAE LAS SURGERIES DEL USER CON EL userId
        
        const surgeries = [
            {
                id: 1,
                name: 'Cirugía 1',
                institution: 'Real San José',
                place: 'Calzada Lázaro Cardenas 4149',
                patient: 'Jorge Blanco 1',
                time: '13:00'
            },
            {
                id: 2,
                name: 'Cirugía 2',
                institution: 'Real San José',
                place: 'Calzada Lázaro Cardenas 4149',
                patient: 'Jorge Blanco 2',
                time: '13:00'
            },
            {
                id: 3,
                name: 'Cirugía 3',
                institution: 'Real San José',
                place: 'Calzada Lázaro Cardenas 4149',
                patient: 'Jorge Blanco 3',
                time: '13:00'
            },
            {
                id: 4,
                name: 'Cirugía 4',
                institution: 'Real San José',
                place: 'Calzada Lázaro Cardenas 4149', 
                patient: 'Jorge Blanco 4',
                time: '13:00'
            },
        ];
        dispatch(getSurgeriesSuccess(surgeries));
    }
}

// GET USER ROLS

export function getUserRols( ) {
    
    return function (dispatch, getState) {
        dispatch(getUserRolsBegin());
        // AQUI VA LA PETICION DONDE SE TRAE LOS ROLES

    const rols = [
        {
            id: 1,
            name: 'doctor',
        },
        {
            id: 2,
            name: 'adminAtq',
        },
        {
            id: 3,
            name: 'atq',
        },
        {
            id: 4,
            name: 'seller',
        },
        {
            id: 5,
            name: 'storer',
        },
        {
            id: 6,
            name: 'delivery',
        },
    ];
        dispatch(getUserRolsSuccess(rols));
    }
}

// GET USERS CHAT

export function getUsersChat( idRol ) {
    
    return function (dispatch, getState) {
        dispatch(getUsersChatBegin());
        // AQUI VA LA PETICION DONDE SE TRAE LOS USUARIOS CON QUIEN TENGA CONVERSACIONES USANDO idRol
        let users;
        if ( idRol == 1 ) {
        users = [
            {
                id: 1,
                name: "Leonardo Oliva M",
                institution: "Hospital",
                email: "mail@mail.com",
                chats: [
                    {
                        id: 1,
                        message: 'Lrem ipsum dolor sit amet, consecture',
                        sendDate: '13/05/2021'
                    },
                    {
                        id: 1,
                        message: 'Lrem ipsum dolor sit amet, consecture',
                        sendDate: '12/05/2021'
                    }
                ]
            },
            {
                id: 2,
                name: "Leonardo Oliva M 2",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 3,
                name: "Leonardo Oliva M 3",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 4,
                name: "Leonardo Oliva M 4",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 5,
                name: "Leonardo Oliva M",
                institution: "Hospital",
                email: "mail@mail.com",
            },
        ];
    } else {
        users = [
            {
                id: 1,
                name: "Luis Paez",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 2,
                name: "Luis Paez",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 3,
                name: "Luis Paez",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 4,
                name: "Luis Paez",
                institution: "Hospital",
                email: "mail@mail.com",
            },
            {
                id: 5,
                name: "Luis Paez",
                institution: "Hospital",
                email: "mail@mail.com",
            },
        ];
    }
        dispatch(getUsersChatSuccess(users));
    }
}

// GET CHAT FROM USER

export function getChatFromUser( idRol ) {
    
    return function (dispatch, getState) {
        dispatch(getChatsFromUserBegin());
        // AQUI VA LA PETICION DONDE SE TRAE LOS CHATS
        let users;
        chats = [
            {
                id: 1,
                sender: 1,
                receiver: 2,
                message: 'Lrem ipsum dolor sit amet, consecture',
                sendDate: '13/05/2021'
            },
            {
                id: 1,
                sender: 2,
                receiver: 1,
                message: 'Lrem ipsum dolor sit amet, consecture',
                sendDate: '12/05/2021'
            }
        ];
        dispatch(getChatsFromUserSuccess(chats));
    }
}

// SET USER CHAT SELECTED

export function setUserChatSelected( id=null ) {
    
    return function (dispatch) {
        dispatch(setUserChatSelectedBegin());
        dispatch(setUserChatSelectedSuccess(id));
    }
}