import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_BEGIN,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_SIGNUP_CLEAN,
  USER_SIGNUP_BEGIN,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  GET_PENDING_APPROVAL_USERS_BEGIN,
  GET_PENDING_APPROVAL_USERS_SUCCESS,
  GET_PENDING_APPROVAL_USERS_FAILURE,
  SET_UNAPPROVE_USER_BEGIN,
  SET_UNAPPROVE_USER_SUCCESS,
  SET_UNAPPROVE_USER_FAILURE,
  SET_APPROVE_USER_BEGIN,
  SET_APPROVE_USER_SUCCESS,
  SET_APPROVE_USER_FAILURE,
  SET_USER_PERMISSION_BEGIN,
  SET_USER_PERMISSION_SUCCESS,
  SET_USER_PERMISSION_FAILURE,
  GET_ROLS_BEGIN,
  GET_ROLS_SUCCESS,
  GET_ROLS_FAILURE,
  RECOVERY_PASS_BEGIN,
  RECOVERY_PASS_SUCCESS,
  RECOVERY_PASS_FAILURE,
  CLEAN_UNAPPROVE_USER,
  CLEAN_APPROVE_USER,
  RESET_PASS_BEGIN,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILURE,
  RESET_PASS_CLEAN,
  CLEAN_APPROVE_UNAPROVE_USER,
  ADD_USER_PERMISSION_BEGIN,
  ADD_USER_PERMISSION_SUCCESS,
  ADD_USER_PERMISSION_FAILURE,
  REMOVE_USER_PERMISSION_BEGIN,
  REMOVE_USER_PERMISSION_SUCCESS,
  REMOVE_USER_PERMISSION_FAILURE,
  GET_PERMISSION_BEGIN,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAILURE,
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  SEARCH_USERS_BEGIN,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,

} from '../constants/actionTypes';

import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case USER_LOGIN_BEGIN:
      return {
        ...state,
        loading: true
      };
    case USER_LOGIN_SUCCESS:{
      let stateOld = JSON.parse(JSON.stringify(state));
      stateOld.request.headers['Authorization'] = `Bearer ${action.user.token}`;
      return {
        ...stateOld,
        loading: false,
        user: action.user,
        isAuthenticated: true,
        error: false,
      };
    }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "algun error"
      };
    case USER_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: initialState.user.user,
        isAuthenticated: false,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || 'Se ha generado algun error'
      };

      // SIGN UP


      case USER_SIGNUP_CLEAN:
        return {
          ...state,
          isRegistered: false,
          loading: false
        };

      case USER_SIGNUP_BEGIN:
        return {
          ...state,
          isRegistered: false,
          loading: true
        };
      case USER_SIGNUP_SUCCESS:{
        return {
          ...state,
          isRegistered: true,
          loading: false,
        };
      }
      case USER_SIGNUP_FAILURE:
        return {
          ...state,
          isRegistered: false,
          loading: false,
          error: action.error || "algun error"
        };

      // GET PENDING APPROVAL USERS
      case GET_PENDING_APPROVAL_USERS_BEGIN:
        return state;
      case GET_PENDING_APPROVAL_USERS_SUCCESS:{
        return {
          ...state,
          getPendingApprovalUsers: action.payload.getPendingApprovalUsers
        };
      }
      case GET_PENDING_APPROVAL_USERS_FAILURE:
        return state;

      // UNAPPROVE USER
      case SET_UNAPPROVE_USER_BEGIN:
        return state;
      case SET_UNAPPROVE_USER_SUCCESS:{
        return {
          ...state,
          unapproveUser: action.payload.unapprove
        };
      }
      case SET_UNAPPROVE_USER_FAILURE:
        return state;


      case CLEAN_UNAPPROVE_USER:{
        return {
          ...state,
          unapproveUser: null
        };
      }
      // APPROVE USER
      case SET_APPROVE_USER_BEGIN:
        return state;
      case SET_APPROVE_USER_SUCCESS:{
        return {
          ...state,
          aproveUser: action.payload.aprove
        };
      }
      case SET_APPROVE_USER_FAILURE:
        return state;

      case CLEAN_APPROVE_USER:{
        return {
          ...state,
          aproveUser: null
        };
      }

      case CLEAN_APPROVE_UNAPROVE_USER:{
        return {
          ...state,
          getPendingApprovalUsers: action.payload.pendingUsers
        };
      }
        // USER PERMISSION
      case SET_USER_PERMISSION_BEGIN:
        return state;
      case SET_USER_PERMISSION_SUCCESS:{
        return state;
      }
      case SET_USER_PERMISSION_FAILURE:
        return state;

      // GET ROLS
      case GET_ROLS_BEGIN:
        return state;
      case GET_ROLS_SUCCESS:{
        return {
          ...state,
          rols: action.payload.rols
        };
      }
      case GET_ROLS_FAILURE:
        return state;

      // RECOVERY PASS
      case RECOVERY_PASS_BEGIN:
        return state;
      case   RECOVERY_PASS_SUCCESS:{
        return {
          ...state,
          recoveryPass: action.payload.data
        };
      }
      case   RECOVERY_PASS_FAILURE:
        return state;


      case RESET_PASS_BEGIN:
        return state;
      case   RESET_PASS_SUCCESS:{
        return {
          ...state,
          resetPass: action.payload.data
        };
      }
      case   RESET_PASS_FAILURE:
        return state;
        
        case   RESET_PASS_CLEAN:{
          return {
            ...state,
            resetPass: null,
            recoveryPass: null
          };
        }
        case ADD_USER_PERMISSION_BEGIN:
          return state;
        case   ADD_USER_PERMISSION_SUCCESS:{
          // Actualizar permisos de usuario en el state respecto a respuesta del enpoint
          return state;
        }
        case   ADD_USER_PERMISSION_FAILURE:
          return state;

        case REMOVE_USER_PERMISSION_BEGIN:
          return state;
        case   REMOVE_USER_PERMISSION_SUCCESS:{
          // Actualizar permisos de usuario en el state respecto a respuesta del enpoint
          return state;
        }
        case   REMOVE_USER_PERMISSION_FAILURE:
          return state;

        case GET_PERMISSION_BEGIN:
          return state;
        case   GET_PERMISSION_SUCCESS:{
          // Actualizar permisos de usuario en el state respecto a respuesta del enpoint
          return {
            ...state,
            permissionsList: action.payload.data,
          };
        }
        case   GET_PERMISSION_FAILURE:
          return state;

        case GET_ALL_USERS_BEGIN:
          return state;

        case GET_ALL_USERS_SUCCESS:{
          // Actualizar permisos de usuario en el state respecto a respuesta del enpoint
          return {
            ...state,
            //allUsers: action.payload.data,
           allUsers: action.payload.data
          };
        }
        case   GET_ALL_USERS_FAILURE:
          return state;

        case SEARCH_USERS_BEGIN:
          return state;
        case   SEARCH_USERS_SUCCESS:{
          // Actualizar permisos de usuario en el state respecto a respuesta del enpoint
          return {
            ...state,
            searchUsers: action.payload.data,
          };
        }
        case   SEARCH_USERS_FAILURE:
          return state;
        
    default:
      return state;
  }
}
