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
import initialState from './initialState';

export function  allUsersReducer(state = initialState.allUsers, action) {
    switch (action.type) {
        

// SET USER ROL SELECTED
    case SET_USER_ROL_SELECTED_BEGIN:
        return state;
    case SET_USER_ROL_SELECTED_SUCCESS:{
        return{
            ...state,
            userRolSelected: action.payload.userRolSelected
        } 
    }
    case SET_USER_ROL_SELECTED_FAILURE:
        return state;
        
    case SET_SELLER_USER:{
        return{
            ...state,
            sellerUser: action.payload.sellerUser
        } 
    }

// GET MEDICS
        case GET_USERS_MEDICS_LIST_BEGIN:
            return state;
        case GET_USERS_MEDICS_LIST_SUCCESS:{
          return{
            ...state,
            getMedicsList: action.payload.getMedicList
          } 
        }
        case GET_USERS_MEDICS_LIST_FAILURE:
            return state;
        

// SET SELECTED USER ID
        case SET_SELECTED_USER_BEGIN:
            return state;
        case SET_SELECTED_USER_SUCCESS:{
        return{
            ...state,
            selectedUserId: action.payload.id
        } 
        }
        case SET_SELECTED_USER_FAILURE:
            return state;


// GET SELECTED USER ID
        case GET_SELECTED_USER_BEGIN:
            return state;
        case GET_SELECTED_USER_SUCCESS:{
        return{
            ...state,
            selectedUserInfo: action.payload.user
        } 
        }
        case GET_SELECTED_USER_FAILURE:
            return state;

// GET PATIENTS IN USER
        case GET_PATIENTS_IN_USER_BEGIN:
            return state;
        case GET_PATIENTS_IN_SELECTED_USER_SUCCESS:{
        return{
            ...state,
            patientsInUser: action.payload.patients
        } 
        }
        case GET_PATIENTS_IN_SELECTED_USER_FAILURE:
            return state;

// GET PROCESSES IN USER
        case GET_PROCESSES_IN_USER_BEGIN:
            return state;
        case GET_PROCESSES_IN_SELECTED_USER_SUCCESS:{
        return{
            ...state,
            processesInUser: action.payload.processes
        } 
        }
        case GET_PROCESSES_IN_SELECTED_USER_FAILURE:
            return state;

// GET STATES IN PROCESS
        case GET_STATES_IN_PROCESSES_BEGIN:
            return state;
        case GET_STATES_IN_PROCESSES_SUCCESS:{
        return{
            ...state,
            processesStates: action.payload.states
        } 
        }
        case GET_STATES_IN_PROCESSES_FAILURE:
            return state;

// GET SURGERIES IN USER
        case GET_SURGERIES_IN_USER_BEGIN:
            return state;
        case GET_SURGERIES_IN_USER_SUCCESS:{
        return{
            ...state,
            surgeriesInUser: action.payload.surgeries
        } 
        }
        case GET_SURGERIES_IN_USER_FAILURE:
            return state;

// GET USER ROLS
        case GET_USER_ROLS_BEGIN:
            return state;
        case GET_USER_ROLS_SUCCESS:{
        return{
            ...state,
            rols: action.payload.rols
        } 
        }
        case GET_USER_ROLS_FAILURE:
            return state;

// GET USERS CHAT
        case GET_USERS_CHAT_BEGIN:
            return state;
        case GET_USERS_CHAT_SUCCESS:{
        return{
            ...state,
            usersChat: action.payload.users
        } 
        }
        case GET_USERS_CHAT_FAILURE:
            return state;

// GET CHATS FROM USER
        case GET_CHAT_FROM_USER_BEGIN:
            return state;
        case GET_CHAT_FROM_USER_SUCCESS:{
        return{
            ...state,
            chatsFromUsers: action.payload.chats
        } 
        }
        case GET_CHAT_FROM_USER_FAILURE:
            return state;

// SET USER CHAT SELECTED
        case SET_USER_CHAT_SELECTED_BEGIN:
            return state;
        case SET_USER_CHAT_SELECTED_SUCCESS:{
        return{
            ...state,
            userChatSelected: action.payload.id
        } 
        }
        case SET_USER_CHAT_SELECTED_FAILURE:
            return state;
// GET SELLERS BEGIN
        case GET_SELLERS_BEGIN:
            return state;
        case GET_SELLERS_SUCCESS:{
        return{
            ...state,
            listSellers: action.payload.listSellers
        } 
        }
        case GET_SELLERS_FAILURE:
            return state;


// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN:
            return state;
        case GET_USER_SPECIFIC_PRODUCT_GROUPS_SUCCESS:{
        return{
            ...state,
            listSpecificProductUser: action.payload.listSpecificProductUser
        } 
        }
        case GET_USER_SPECIFIC_PRODUCT_GROUPS_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case GET_PRODUCT_GROUPS_BEGIN:
            return state;
        case GET_PRODUCT_GROUPS_SUCCESS:{
        return{
            ...state,
            listProductGoups: action.payload.listProductGoups
        } 
        }
        case GET_PRODUCT_GROUPS_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case ADD_USER_SPECIFIC_GROUP_BEGIN:
            return state;
        case ADD_USER_SPECIFIC_GROUP_SUCCESS:{
        return{
            ...state,
            addedUserSpecificProductGroup: action.payload.addedUserSpecificProductGroup
        } 
        }
        case ADD_USER_SPECIFIC_GROUP_FAILURE:
            return state;

// REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN
        case REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN:
            return state;
        case REMOVE_USER_SPECIFIC_PRODUCT_GROUP_SUCCESS:{
        return{
            ...state,
            deleteUserSpecificProductGroup: action.payload.deleteUserSpecificProductGroup
        } 
        }
        case REMOVE_USER_SPECIFIC_PRODUCT_GROUP_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case GET_SPECIFIC_BUNDLES_BEGIN:
            return state;
        case GET_SPECIFIC_BUNDLES_SUCCESS:{
        return{
            ...state,
            listBundlesGoups: action.payload.listBundlesGoups
        } 
        }
        case GET_SPECIFIC_BUNDLES_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case ADD_USER_SPECIFIC_BUNDLE_BEGIN:
            return state;
        case ADD_USER_SPECIFIC_BUNDLE_SUCCESS:{
        return{
            ...state,
            addedUserSpecificBundleGroup: action.payload.addedUserSpecificBundleGroup
        } 
        }
        case ADD_USER_SPECIFIC_BUNDLE_FAILURE:
            return state;

// REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN
        case DELETE_SPECIFIC_BUNDLE_BEGIN:
            return state;
        case DELETE_SPECIFIC_BUNDLE_SUCCESS:{
        return{
            ...state,
            deleteUserSpecificBundleGroup: action.payload.deleteUserSpecificBundleGroup
        } 
        }
        case DELETE_SPECIFIC_BUNDLE_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case GET_USER_SPECIFIC_PRICELISTS_BEGIN:
            return state;
        case GET_USER_SPECIFIC_PRICELISTS_SUCCESS:{
        return{
            ...state,
            listSpecificPricelists: action.payload.listSpecificPricelists
        } 
        }
        case GET_USER_SPECIFIC_PRICELISTS_FAILURE:
            return state;

// GET_USER_SPECIFIC_PRODUCT_GROUPS_BEGIN
        case ADD_USER_SPECIFIC_PRICELIST_BEGIN:
            return state;
        case ADD_USER_SPECIFIC_PRICELIST_SUCCESS:{
        return{
            ...state,
            addedUserSpecificPricelist: action.payload.addedUserSpecificPricelist
        } 
        }
        case ADD_USER_SPECIFIC_PRICELIST_FAILURE:
            return state;

// REMOVE_USER_SPECIFIC_PRODUCT_GROUP_BEGIN
        case REMOVE_USER_SPECIFIC_PRICELIST_BEGIN:
            return state;
        case REMOVE_USER_SPECIFIC_PRICELIST_SUCCESS:{
        return{
            ...state,
            removeUserSpecificPricelist: action.payload.removeUserSpecificPricelist
        } 
        }
        case REMOVE_USER_SPECIFIC_PRICELIST_FAILURE:
            return state;


// GET_USERS_BY_ROLE_ID_BEGIN
        case GET_USERS_BY_ROLE_ID_BEGIN:
            return state;
        case GET_USERS_BY_ROLE_ID_SUCCESS:{
        return{
            ...state,
            listUsersByRoleId: action.payload.listUsersByRoleId
        } 
        }
        case GET_USERS_BY_ROLE_ID_FAILURE:
            return state;

// GET_USERS_BY_ROLE_ID_BEGIN
        case SEARCH_PRODUCT_GROUPS_BEGIN:
            return state;
        case SEARCH_PRODUCT_GROUPS_SUCCESS:{
        return{
            ...state,
            listProductGroupsSearch: action.payload.listProductGroupsSearch
        } 
        }
        case SEARCH_PRODUCT_GROUPS_FAILURE:
            return state;

// DEFAULT
        default:
            return state;

    }
}