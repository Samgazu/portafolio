import request from '../utils/request';
import {
    USER_LOGOUT_BEGIN,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_SIGNUP_BEGIN,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_CLEAN,
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

  // SIGN UP

  export const userSignupClean = () =>({
    type: USER_SIGNUP_CLEAN,
  });

  export const userSignupBegin = () =>({
    type: USER_SIGNUP_BEGIN,
  });

export const userSignupSuccess = () =>({
    type: USER_SIGNUP_SUCCESS,
});

export const userSignupFailure = () =>({
  type: USER_SIGNUP_FAILURE
});

// LOG OUT
  export const userLogoutBegin = () =>({
      type: USER_LOGOUT_BEGIN,
  });

  export const userLogoutSuccess = () =>({
      type: USER_LOGOUT_SUCCESS,
  });

  export const userLogoutFailure = () =>({
    type: USER_LOGOUT_FAILURE
  });
  
  // GET PENDING APPROVAL USERS
  export const getPendingApprovalUsersBegin = () =>({
    type: GET_PENDING_APPROVAL_USERS_BEGIN,
});

export const getPendingApprovalUsersSuccess = (getPendingApprovalUsers) =>({
    type: GET_PENDING_APPROVAL_USERS_SUCCESS,
    payload: {
      getPendingApprovalUsers
    },
});

export const getPendingApprovalUsersFailure = () =>({
  type: GET_PENDING_APPROVAL_USERS_FAILURE
});
  
// UNAPPROVE USER
export const setUnapproveUserBegin = () =>({
  type: SET_UNAPPROVE_USER_BEGIN,
});

export const setUnapproveUserSuccess = (unapprove) =>({
  type: SET_UNAPPROVE_USER_SUCCESS,
  payload: {
    unapprove
  }
});

export const setUnapproveUserFailure = () =>({
  type: SET_UNAPPROVE_USER_FAILURE
  
});


export const cleanStateUserUnapprove = () =>({
  type: CLEAN_UNAPPROVE_USER
});
  
// APPROVE USER
export const setApproveUserBegin = () =>({
  type: SET_APPROVE_USER_BEGIN,
});

export const setApproveUserSuccess = (aprove) =>({
  type: SET_APPROVE_USER_SUCCESS,
  payload:{
    aprove,
  }
});

export const setApproveUserFailure = () =>({
type: SET_APPROVE_USER_FAILURE
});

export const cleanStateUserAprove = () =>({
  type: CLEAN_APPROVE_USER
});

// CLEAN USER APPROVE OR UNAPPROVE
export const cleanUserAprove_Unaprove = (pendingUsers) =>({
  type: CLEAN_APPROVE_UNAPROVE_USER,
  payload: {
    pendingUsers
  }
});
  
// USER PERMISSION
export const setUserPermissionBegin = () =>({
  type: SET_USER_PERMISSION_BEGIN,
});

export const setUserPermissionSuccess = () =>({
  type: SET_USER_PERMISSION_SUCCESS
});

export const setUserPermissionFailure = () =>({
type: SET_USER_PERMISSION_FAILURE
});
  
// GET ROLS
export const getRolsBegin = () =>({
  type: GET_ROLS_BEGIN,
});

export const getRolsSuccess = (rols) =>({
  type: GET_ROLS_SUCCESS,
  payload: {
    rols
  },
});

export const getRolsFailure = () =>({
  type: GET_ROLS_FAILURE
});


// Recovery Pass
export const recoveryPassBegin = () =>({
  type: RECOVERY_PASS_BEGIN,
});

export const recoveryPassSuccess = (data) =>({
  type: RECOVERY_PASS_SUCCESS,
  payload: {
    data
  },
});

export const recoveryPassFailure = () =>({
  type: RECOVERY_PASS_FAILURE
});

// Reset Pass
export const resetPassBegin = () =>({
  type: RESET_PASS_BEGIN,
});

export const resetPassSuccess = (data) =>({
  type: RESET_PASS_SUCCESS,
  payload: {
    data
  },
});

export const resetPassFailure = () =>({
  type: RESET_PASS_FAILURE
});

export const resetPassClean = () =>({
  type: RESET_PASS_CLEAN,
});

// ADD PERMISSIONS USER
export const AddUserPermissionBegin = () =>({
  type: ADD_USER_PERMISSION_BEGIN,
});

export const AddUserPermissionSuccess = (data) =>({
  type: ADD_USER_PERMISSION_SUCCESS,
  payload: {
    data
  },
});

export const AddUserPermissionFailure = () =>({
  type: ADD_USER_PERMISSION_FAILURE
});

// REMOVE PERMISSIONS USER
export const RemoveUserPermissionBegin = () =>({
  type: REMOVE_USER_PERMISSION_BEGIN,
});

export const RemoveUserPermissionSuccess = (data) =>({
  type: REMOVE_USER_PERMISSION_SUCCESS,
  payload: {
    data
  },
});

export const RemoveUserPermissionFailure = () =>({
  type: REMOVE_USER_PERMISSION_FAILURE
});

// GET PERMISSION
export const GetPermissionBegin = () =>({
  type: GET_PERMISSION_BEGIN,
});

export const GetPermissionSuccess = (data) =>({
  type: GET_PERMISSION_SUCCESS,
  payload: {
    data
  },
});

export const GetPermissionFailure = () =>({
  type: GET_PERMISSION_FAILURE
});

// GET ALL USERS
export const GetAllUsersBegin = () =>({
  type: GET_ALL_USERS_BEGIN,
});

export const GetAllUsersSuccess = (data) =>({
  type: GET_ALL_USERS_SUCCESS,
  payload: {
    data
  },
});

export const GetAllUsersFailure = () =>({
  type: GET_ALL_USERS_FAILURE
});


// GET Search USERS
export const SearchUsersBegin = () =>({
  type: SEARCH_USERS_BEGIN,
});

export const SearchUsersSuccess = (data) =>({
  type: SEARCH_USERS_SUCCESS,
  payload: {
    data
  },
});

export const SearchUsersFailure = () =>({
  type: SEARCH_USERS_FAILURE
});

  // POST ------ ADD USER PERMISSION
  export function AddUserPermission(userID, userPermissionTypeID){
    return (dispatch, getState) => {
        dispatch(AddUserPermissionBegin());
        return request(
          {
            partialUrl: `/API/Account/AddUserPermission`,
            method: 'POST',
            state: getState().user.request,
            body: {
              userID,
              userPermissionTypeID
            },
          }
        )
        .then( response => {
          if (response.status !==  200 || response.status !==  200) throw response.status;
          return response.json()
        }).then(data => {
          dispatch(AddUserPermissionSuccess(data.response));
        })
        .catch(err => {
          return dispatch(AddUserPermissionFailure(err));
        })
    };
  }

  // POST ------ REMOVE USER PERMISSION
  export function RemoveUserPermission(userID, userPermissionTypeID){
    return (dispatch, getState) => {
        dispatch(RemoveUserPermissionBegin());
        return request(
          {
            partialUrl: `/API/Account/RemoveUserPermission`,
            method: 'POST',
            state: getState().user.request,
            body: {
              userID,
              userPermissionTypeID
            },
          }
        )
        .then( response => {
          if (response.status !==  200 || response.status !==  200) throw response.status;
          return response.json()
        }).then(data => {
          dispatch(RemoveUserPermissionSuccess(data.response));
        })
        .catch(err => {
          return dispatch(RemoveUserPermissionFailure(err));
        })
    };
  }


  // GET ------ GET PERMISSION
  export function GetPermission(){
    return (dispatch, getState) => {
        dispatch(GetPermissionBegin());
        return request(
          {
            partialUrl: `/API/Account/GetPermissions`,
            method: 'GET',
            state: getState().user.request,
            body: {},
          }
        )
        .then( response => response.json())
        .then(data => {
          dispatch(GetPermissionSuccess(data.response));
        })
        .catch(err => {
          return dispatch(GetPermissionFailure(err));
        })
    };
  }
  // GET ------ ALL USERS
  export function GetAllUsers(currentPage = 0, offset = 10){
    return (dispatch, getState) => {
        dispatch(GetAllUsersBegin());
        return request(
          {
            partialUrl: `/API/Account/GetActiveUsers?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {},
          }
        )
        .then( response => response.json())
        .then(data => {
          dispatch(GetAllUsersSuccess(data.response));
        })
        .catch(err => {
          return dispatch(GetAllUsersFailure(err));
        })
    };
  }

  // GET ------ ALL USERS
  export function SearchUsers( key ){
    return (dispatch, getState) => {
        dispatch(SearchUsersBegin());
        return request(
          {
            partialUrl: `/API/Account/SearchUsers?key=${key}`,
            method: 'GET',
            state: getState().user.request,
            body: {},
          }
        )
        .then( response => response.json())
        .then(data => {
          dispatch(SearchUsersSuccess(data.response));
        })
        .catch(err => {
          return dispatch(SearchUsersFailure(err));
        })
    };
  }


  //Recovery Pass
  export function recoveryPass(email, environment){
    return (dispatch, getState) => {
        dispatch(recoveryPassBegin());
        return request(
          {
            partialUrl: `/API/Account/SendRecoverPasswordMail`,
            method: 'POST',
            state: getState().user.request,
            body: {
              "Email": email,
              Environment: environment
            },
          }
        )
        .then( response => {
          if (response.status !==  200 || response.status !==  200) throw response.status;
          return response.json()
        }).then(response => {
          // console.log(response)
          dispatch(recoveryPassSuccess(response.statusCode));
        })
        .catch(err => {
          // console.log(err)
          return dispatch(recoveryPassFailure(err));
        })
    };
  }

  //Reset Pass
  export function resetPass(pass, token){
    return (dispatch, getState) => {
        dispatch(resetPassBegin());
        return request(
          {
            partialUrl: `/API/Account/RecoverPasswordByMail`,
            method: 'POST',
            state: getState().user.request,
            body: {
              Password: Buffer.from(pass).toString("base64"),
              Token: token
            },
          }
        )
        .then( response => {
          if (response.status !==  200 || response.status !==  200) throw response.status;
          return response.json()
        }).then(response => {
          // console.log(response)
          dispatch(resetPassSuccess(response.statusCode));
        })
        .catch(err => {
          // console.log(err)
          return dispatch(resetPassFailure(err));
        })
    };
  }

  // SIGN UP

  export function userSignup(FirstName,SecondName,FirstLastName,SecondLastName,Phone,Email,Password,RoleID){
    return (dispatch, getState) => {
        dispatch(userSignupBegin());
        return request(
          {
            partialUrl: `/API/Account/CreateAccount`,
            method: 'POST',
            state: getState().user.request,
            body: {
              "Password": Buffer.from(Password).toString("base64"),
              "Email": Buffer.from(Email).toString("base64"),
              "FirstLastName":FirstLastName,
              "FirstName":FirstName,
              "Phone":Phone,
              "Role": {
                  "RoleID": RoleID
              },
              "SecondName":SecondName,
              "SecondLastName":SecondLastName,
            },
          }
        )
        .then( response => {
          if (response.status !==  201 ) throw response.status;
          return response.json() 
        }).then(data => {
          dispatch(userSignupSuccess(data));
        })
        .catch(err => {
          return dispatch(userSignupFailure(err));
        })
    };
  }

  export function userLogout(){
      return (dispatch) => {
        dispatch(userLogoutBegin());
        return dispatch(userLogoutSuccess());
      }
  }

// GET PENDING APPROVAL USERS
export function getPendingApprovalUsers() {
    
  return function (dispatch, getState) {
      dispatch(getPendingApprovalUsersBegin());
      return request({
          partialUrl: `/API/Account/GetPendingApprovalUsers`,
          method: 'GET',
          state: getState().user.request,
          body: {}
      })
      .then(response => response.json())
      .then(data => {
          dispatch(getPendingApprovalUsersSuccess(data.response));
      })
      .catch(err => {
          return dispatch(getPendingApprovalUsersFailure(err));
      });
  }
}

// UNAPPROVE USER
export function setUnapproveUser(id, rolId) {
    
  return function (dispatch, getState) {
      dispatch(setUnapproveUserBegin());
      return request({
          partialUrl: `/API/Account/UnapproveAccount`,
          method: 'POST',
          state: getState().user.request,
          body: {
            "id": id,
            "role": {
                "roleID": rolId,
                "roleDescription": null
            }
          },
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
          dispatch(setUnapproveUserSuccess(data));
      })
      .catch(err => {
        // console.log(err)
          return dispatch(setUnapproveUserFailure(err));
      });
  }
}

// APPROVE USER
export function setApproveUser(id, rolId, sellercode, atqcode, zonescode, distributorcode, biddercode) {
    
  return function (dispatch, getState) {
      dispatch(setApproveUserBegin());
      return request({
          partialUrl: `/API/Account/ApproveAccount`,
          method: 'POST',
          state: getState().user.request,
          body: {
            "id": id,
            "role": {
                "roleID": parseInt(rolId, 10),
                "roleDescription": null
            },
            "sellerCode": sellercode,
            "atqCode": atqcode,
            "zoneSupervisorCode": zonescode,
            "distributorCode": distributorcode,
            "bidderCode": biddercode
          },
      })
      .then(response => response.json())
      .then(data => {
          dispatch(setApproveUserSuccess(data));
      })
      .catch(err => {
          return dispatch(setApproveUserFailure(err));
      });
  }
}

// USER PERMISSION
export function setUserPermission(id, atqcode, sellercode, zonescode, distributorcode, biddercode) {
    
  return function (dispatch, getState) {
      dispatch(setUserPermissionBegin());
      return request({
          partialUrl: `/API/Account/AddUserPermission`,
          method: 'POST',
          state: getState().user.request,
          body: {
            "userID": id,
            "sellerCode": sellercode,
            "atqCode": atqcode,
            "zoneSupervisorCode": zonescode,
            "distributorCode": distributorcode,
            "bidderCode": biddercode
          },
      })
      .then(response => response.json())
      .then( () => {
          dispatch(setUserPermissionSuccess());
      })
      .catch(err => {
          return dispatch(setUserPermissionFailure(err));
      });
  }
}

// GET ROLS
export function getRols() {
    
  return function (dispatch, getState) {
      dispatch(getRolsBegin());
      return request({
          partialUrl: `/API/Utilities/GetRoles`,
          method: 'GET',
          state: getState().user.request,
          body: {}
      })
      .then(response => response.json())
      .then(data => {
          dispatch(getRolsSuccess(data.roles));
      })
      .catch(err => {
          return dispatch(getRolsFailure(err));
      });
  }
}