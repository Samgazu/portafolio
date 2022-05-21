import {

    GET_USERS_BY_ROLE_LIST_SPECIFIC_BEGIN,
    GET_USERS_BY_ROLE_LIST_SPECIFIC_SUCCESS,
    GET_USERS_BY_ROLE_LIST_SPECIFIC_FAILURE,
    SET_CREATE_TEAM,
    SET_TEAM_GROUP_BEGIN,
    SET_TEAM_GROUP_SUCCESS,
    SET_TEAM_GROUP_FAILURE,
    GET_TEAM_GROUP_BEGIN,
    GET_TEAM_GROUP_SUCCESS,
    GET_TEAM_GROUP_FAILURE,
    GET_TEAM_GROUP_BY_ID_BEGIN,
    GET_TEAM_GROUP_BY_ID_SUCCESS,
    GET_TEAM_GROUP_BY_ID_FAILURE,
    GET_HOLIDAYS_BEGIN,
    GET_HOLIDAYS_SUCCESS,
    GET_HOLIDAYS_FAILURE,
    ADD_HOLIDAYS_BEGIN,
    ADD_HOLIDAYS_SUCCESS,
    ADD_HOLIDAYS_FAILURE,
    ADD_ATQ_BEGIN,
    ADD_ATQ_SUCCESS,
    ADD_ATQ_FAILURE,
    GET_ATQ_AVAILABLE_BEGIN,
    GET_ATQ_AVAILABLE_SUCCESS,
    GET_ATQ_AVAILABLE_FAILURE,
    REMOVE_HOLIDAYS_BEGIN,
    REMOVE_HOLIDAYS_SUCCESS,
    REMOVE_HOLIDAYS_FAILURE,
    ADD_MEMBER_TO_GUARD_GROUP_BEGIN,
    ADD_MEMBER_TO_GUARD_GROUP_SUCCESS,
    ADD_MEMBER_TO_GUARD_GROUP_FAILURE,
    REMOVE_MEMBER_TO_GUARD_GROUP_BEGIN,
    REMOVE_MEMBER_TO_GUARD_GROUP_SUCCESS,
    REMOVE_MEMBER_TO_GUARD_GROUP_FAILURE,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_BEGIN,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_SUCCESS,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_FAILURE,
    SET_SURGERY_CHOSEED,
    SET_ATQ_CHOSEED,
    SET_DATE_CHOSEED,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_BEGIN,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_SUCCESS,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_FAILLURE,
    ADD_ANSWER_ATQ_ON_APPOIMENT_BEGIN,
    ADD_ANSWER_ATQ_ON_APPOIMENT_SUCCESS,
    ADD_ANSWER_ATQ_ON_APPIMENT_FAILURE,
    REASING_ATQ_WITH_ANSWER_BEGIN,
    REASING_ATQ_WITH_ANSWER_SUCCESS,
    REASING_ATQ_WITH_ANSWER_FAILURE,
    SET_MODIFY_HOLIDAYS, 
    SET_MODIFY_HOLIDAYS_FINISHED,
    UPDATE_LIST_MEMBER,
    CREATE_REPORT_EXPERIENCE_BEGIN,
    CREATE_REPORT_EXPERIENCE_SUCCESS,
    CREATE_REPORT_EXPERIENCE_FAILURE,
    GET_QUOTATION_SELLER_BEGIN,
    GET_QUOTATION_SELLER_SUCCESS,
    GET_QUOTATION_SELLER_FAILURE,
    UPDATE_REPORT_EXPERIENCE_BEGIN,
    UPDATE_REPORT_EXPERIENCE_SUCCESS,
    UPDATE_REPORT_EXPERIENCE_FAILURE,
    

  
} from '../constants/actionTypes';
import request from '../utils/request';

//ESTOS SON LAS FUNCIONES NUEVAS QUE ESTOY HACIENDO


//Comentarios de experiencia
export const createReportExperienceBegin = () => ({
  type: CREATE_REPORT_EXPERIENCE_BEGIN,
});

export const createReportExperienceSuccess = (report) => ({
  type: CREATE_REPORT_EXPERIENCE_SUCCESS,
  payload: {
    report,

  }
})
export const createReportExperienceFailure = () => ({
  type: CREATE_REPORT_EXPERIENCE_FAILURE,
});


//Estos son cuando se modifica el comentario
export const updateReportExperienceBegin = () => ({
  type: UPDATE_REPORT_EXPERIENCE_BEGIN,
});

export const updateReportExperienceSuccess = (report) => ({
  type: UPDATE_REPORT_EXPERIENCE_SUCCESS,
  payload: {
    report,

  }
})
export const updateReportExperienceFailure = () => ({
  type: UPDATE_REPORT_EXPERIENCE_FAILURE,
});




//ESTOS TRES SON CUANDO EL ATQ RESPONDE
export const answerToReasingAtqBegin = () => ({
  type: REASING_ATQ_WITH_ANSWER_BEGIN,
});

export const answerToReasingAtqSuccess = (answerToReasingAtq) => ({
  type: REASING_ATQ_WITH_ANSWER_SUCCESS,
  payload: {
    answerToReasingAtq
  }
})
export const answerToReasingAtqFailure = () => ({
  type: REASING_ATQ_WITH_ANSWER_FAILURE,
});


//ESTA ES PARA SOLICITAR LA RESPUESTA DEL ATQ
export const addAnswerToAppoimentBegin = () => ({
  type: ADD_ANSWER_ATQ_ON_APPOIMENT_BEGIN,
});

export const addAnswerToAppoimentSuccess = (appoimentAnswered) => ({
  type: ADD_ANSWER_ATQ_ON_APPOIMENT_SUCCESS,
  payload: {
    appoimentAnswered
  },
});

export const addAnswerToAppoimentFailure = () => ({
  type: ADD_ANSWER_ATQ_ON_APPIMENT_FAILURE,
});

export const getAppoimentsWithSpecificATQBegin = () => ({
  type: GET_APPOIMENTS_WITH_SPECIFIC_ATQ_BEGIN,
});

export const getAppoimentsWithSpecificATQSuccess = (AppoimentListSpecific) => ({
  type: GET_APPOIMENTS_WITH_SPECIFIC_ATQ_SUCCESS,
  payload: {
    AppoimentListSpecific
  }
});

export const getAppoimentsWithSpecificATQFailure = () => ({
  type: GET_APPOIMENTS_WITH_SPECIFIC_ATQ_FAILLURE,
});


//HASTA AQUI SE TERMINAR LAS UEVAS FUNCIONES QUE ESTOY HACIENDO

export const reorderPrincipalOrderBegin = () => ({
  type: REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_BEGIN,
});
export const reorderPrincipalOrderSuccess = (reorderList) => ({
  type: REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_SUCCESS,
  payload: {
    reorderList
  }
});
export const reorderPrincipalOrderFailure = () => ({
  type: REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_FAILURE,
});

export const getAtqAvailableBegin = () => ({
  type: GET_ATQ_AVAILABLE_BEGIN,
});
export const getAtqAvailableSuccess = (atqAvailable) => ({
  type: GET_ATQ_AVAILABLE_SUCCESS,
  payload: {
    atqAvailable
  }
});
export const getAtqAvailableFailure = () => ({
  type: GET_ATQ_AVAILABLE_FAILURE,
});


export const getTeamGroupBegin = () => ({
  type: GET_TEAM_GROUP_BEGIN,
});

export const getTeamGroupSuccess = (listGroups) => ({
  type: GET_TEAM_GROUP_SUCCESS,
  payload: {
    listGroups
  }
});

export const getTeamGroupFailure = () => ({
  type: GET_TEAM_GROUP_FAILURE,
});

export const getTeamGroupBeginById = () => ({
  type: GET_TEAM_GROUP_BY_ID_BEGIN,
});

export const getTeamGroupSuccessById = (listGroupsById) => ({
  type: GET_TEAM_GROUP_BY_ID_SUCCESS,
  payload: {
    listGroupsById
  }
});

export const getTeamGroupFailureById = () => ({
  type: GET_TEAM_GROUP_BY_ID_FAILURE,
});

export const getHolidaysBegin = () => ({
  type: GET_HOLIDAYS_BEGIN,
});

export const getHolidaysSuccess = (listHolidays) => ({
  type: GET_HOLIDAYS_SUCCESS,
  payload: {
    listHolidays
  }
});

export const getHolidaysFailure = () => ({
  type: GET_HOLIDAYS_FAILURE,
});

//-----------
export const addHolidaysBegin = () => ({
  type: ADD_HOLIDAYS_BEGIN,
});

export const addHolidaysSuccess = (newATQ) => ({
  type: ADD_HOLIDAYS_SUCCESS,
  payload: {
    newATQ
  }
});

export const addHolidaysFailure = () => ({
  type: ADD_HOLIDAYS_FAILURE,
});

//-----------------
//-----------
export const addATQBegin = () => ({
  type: ADD_ATQ_BEGIN,
});

export const addATQSuccess = (newHolidays) => ({
  type: ADD_ATQ_SUCCESS,
  payload: {
    newHolidays
  }
});

export const addATQFailure = () => ({
  type: ADD_ATQ_FAILURE,
});

//-----------------

export const removeHolidaysBegin = () => ({
  type: REMOVE_HOLIDAYS_BEGIN,
});

export const removeHolidaysSuccess = (holidayToRemove) => ({
  type: REMOVE_HOLIDAYS_SUCCESS,
  payload: {
    holidayToRemove
  }
});

export const removeHolidaysFailure = () => ({
  type: REMOVE_HOLIDAYS_FAILURE,
});

export const addMemberToGroupBegin = () => ({
  type: ADD_MEMBER_TO_GUARD_GROUP_BEGIN,
});

export const addMemberToGroupSuccess = (member) => ({
  type: ADD_MEMBER_TO_GUARD_GROUP_SUCCESS,
  payload: {
    member
  }
});

export const removeMemberToGroupFailure = () => ({
  type: REMOVE_MEMBER_TO_GUARD_GROUP_FAILURE,
});

export const removeMemberToGroupBegin = () => ({
  type: REMOVE_MEMBER_TO_GUARD_GROUP_BEGIN,
});

export const removeMemberToGroupSuccess = (member) => ({
  type: REMOVE_MEMBER_TO_GUARD_GROUP_SUCCESS,
  payload: {
    member
  }
});

export const addMemberToGroupFailure = () => ({
  type: ADD_MEMBER_TO_GUARD_GROUP_FAILURE,
});



export const getUsersByRoleBegin = () => ({
  type: GET_USERS_BY_ROLE_LIST_SPECIFIC_BEGIN,
});

export const getUsersByRoleSuccess = (listUsersByRole) => ({
  type: GET_USERS_BY_ROLE_LIST_SPECIFIC_SUCCESS,
  payload: {
    listUsersByRole
  }
});

export const getUsersByRoleFailure = () => ({
  type: SET_TEAM_GROUP_FAILURE,
});

export const createTeam = (teamList) => ({
  type: SET_CREATE_TEAM,
  payload: teamList,
});

export const setGroupBegin = () => ({
  type: SET_TEAM_GROUP_BEGIN,
});

export const setGroupSuccess = (groupName) => ({
  type: SET_TEAM_GROUP_SUCCESS,
  payload: {
    groupName
  }
});

export const setSurgeryChoosed = (surgeryChoseed) => ({
  type: SET_SURGERY_CHOSEED,
  payload: {
    surgeryChoseed
  }
});

export const setATQChoosed = (ATQChoseed) => ({
  type: SET_ATQ_CHOSEED,
  payload: {
    ATQChoseed
  }
});
export const setDateChoosed = (DateChoseed) => ({
  type: SET_DATE_CHOSEED,
  payload: {
    DateChoseed
  }
});

export const setModifyHolidays = (holidaysWithGroup) => ({
    type: SET_MODIFY_HOLIDAYS,
    payload: {
      holidaysWithGroup
    },
  });
 
export const setModifyHolidaysFinished = (finished=true) => (
  {
    type: SET_MODIFY_HOLIDAYS_FINISHED,
    payload: {
      finished
    }
  }
);

export const updateListMember = () => ({
  type: UPDATE_LIST_MEMBER  ,
});

    



export const setGroupFailure = () => ({
  type: GET_USERS_BY_ROLE_LIST_SPECIFIC_FAILURE,
});

//Vendedor
export const getQuotationSellerBegin = () => ({
  type: GET_QUOTATION_SELLER_BEGIN,
});

export const getQuotationSellerSuccess = (QuotationSeller) => ({
  type: GET_QUOTATION_SELLER_SUCCESS,
  payload: {
    QuotationSeller
  }
});

export const getQuotationSellerFailure = () => ({
  type: GET_QUOTATION_SELLER_FAILURE,
});





//Comentario de experiencia
export function AddReportToAppoiment(report) {
  return (dispatch, getState) => {
    dispatch(createReportExperienceBegin());
    return request(
      {
        partialUrl: `/API/ATQ/CreateSurgeryExperienceReport`,
        method: 'POST',
        state: getState().user.request,
        body: { ...report },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(createReportExperienceSuccess(data.response));
      })
      .catch(err => {
        return dispatch(createReportExperienceFailure(err));
      })
  };
}

//Comentario Editado experiencia
export function UptadeReportToAppoiment(report) {
  return (dispatch, getState) => {
    dispatch(updateReportExperienceBegin());
    return request(
      {
        partialUrl: `/API/ATQ/UpdateSurgeryExperienceReport`,
        method: 'PUT',
        state: getState().user.request,
        body: { ...report },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(updateReportExperienceSuccess(data.response));
      })
      .catch(err => {
        return dispatch(updateReportExperienceFailure(err));
      })
  };
}



//SOLICITAR EL CAMBIO DE ATQ EN LA CIRUGIA

export function requestChageAtqToAppiment(requesChange) {
  return (dispatch, getState) => {
    dispatch(addAnswerToAppoimentBegin());
    return request(
      {
        partialUrl: `/API/ATQ/RequestReasignATQOnSurgery`,
        method: 'POST',
        state: getState().user.request,
        body: { ...requesChange },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(addAnswerToAppoimentSuccess(data.response));
      })
      .catch(err => {
        return dispatch(addAnswerToAppoimentFailure(err));
      })
  };
}



//RESPONDER LA SOLICITUD DE CAMBIO DE ATQ

export function answerAppoimentChangeAtq(atqAnswer) {
  return (dispatch, getState) => {
    dispatch(answerToReasingAtqBegin());
    return request(


      {
        partialUrl: `/API/ATQ/CompleteReasignATQOnSurgery`,
        method: 'PUT',
        state: getState().user.request,
        body: { ...atqAnswer },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(answerToReasingAtqSuccess(data.response));
      })
      .catch(err => {
        return dispatch(answerToReasingAtqFailure(err));
      })
  };
}




export function getAppoimentSpecifAtq(atqTargetId = null, surgeryTransferStatus = null) {
  return (dispatch, getState) => {
    dispatch(getAppoimentsWithSpecificATQBegin());
    return request(
      {
        partialUrl: `/API/ATQ/GetReasingATQOnSurgery${atqTargetId ? `?atqTargetId=${atqTargetId}` : ``}${atqTargetId ? `&surgeryTransferStatus=${surgeryTransferStatus}` : `?surgeryTransferStatus=${surgeryTransferStatus}`}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getAppoimentsWithSpecificATQSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getAppoimentsWithSpecificATQFailure(err));
      })
  };
}



export function principalorderMembers(reorderMember) {
  return (dispatch, getState) => {
    dispatch(reorderPrincipalOrderBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/ReorderGroupMembers`,
        method: 'PUT',
        state: getState().user.request,
        body: { ...reorderMember },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(reorderPrincipalOrderSuccess(data.response));
      })
      .catch(err => {
        return dispatch(reorderPrincipalOrderFailure(err));
      })
  };
}


export function addMembersToGroupGuard(newMember) {
  return (dispatch, getState) => {
    dispatch(addMemberToGroupBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/AddMemberToGuardGroup`,
        method: 'POST',
        state: getState().user.request,
        body: { ...newMember },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(addMemberToGroupSuccess(data.response));
      })
      .catch(err => {
        return dispatch(addMemberToGroupFailure(err));
      })
  };
}

export function reasigATQ(surgeryId = null, atqId = null, secondaryATQ = null) {
  return (dispatch, getState) => {
    dispatch(addATQBegin());
    return request(
      {
        partialUrl: `/API/ATQ/ReasignATQOnSurgery?surgeryId=${surgeryId}${atqId ? `&atqId=${atqId}` : ''}${secondaryATQ ? `&secondaryATQ=${secondaryATQ}` : ''}`,
        method: 'POST',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(addATQSuccess(data.response));
      })
      .catch(err => {
        return dispatch(addATQFailure(err));
      })
  };
}



export function removeMembersToGroupGuard(iddeleteMember) {
  return (dispatch, getState) => {
    dispatch(removeMemberToGroupBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/RemoveMemberFromGuardGroup?guardGroupMemberId=${iddeleteMember}`,
        method: 'DELETE',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(removeMemberToGroupSuccess(data.response));
      })
      .catch(err => {
        return dispatch(removeMemberToGroupFailure(err));
      })
  };
}

export function getGroupGuard(idGroup = 0) {
  return (dispatch, getState) => {
    dispatch(getTeamGroupBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/GetGuardGroup${idGroup ? `?id=${idGroup}` : ``}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getTeamGroupSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getTeamGroupFailure(err));
      })
  };
}
 export function getGroupGuardById(idGroup = 0) {
  return (dispatch, getState) => {
    dispatch(getTeamGroupBeginById());
    return request(
      {
        partialUrl: `/API/GuardGroup/GetGuardGroup${idGroup ? `?id=${idGroup}` : ``}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getTeamGroupSuccessById(data.response));
      })
      .catch(err => {
        return dispatch(getTeamGroupFailureById(err));
      })
  };
}

export function getAtqAvailability(available = true, surgeryDate = 0) {
  return (dispatch, getState) => {
    dispatch(getAtqAvailableBegin());
    return request(
      {
        partialUrl: `/API/ATQ/GetATQByAvailability?isAvailable=${available}&surgeryDate=${surgeryDate}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getAtqAvailableSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getAtqAvailableFailure(err));
      })
  };
}

export function getHolidays(startDate = 0, endDate = 0) {
  return (dispatch, getState) => {
    dispatch(getHolidaysBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/GetHolidays?startDate=${startDate}&endDate=${endDate}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getHolidaysSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getHolidaysFailure(err));
      })
  };
}


export function getUsersByRoleId({ roleId = 1 }) {
  return (dispatch, getState) => {
    dispatch(getUsersByRoleBegin());
    return request(
      {
        partialUrl: `/API/Account/GetUsersByRole?request=${roleId}`,
        method: 'GET',
        state: getState().user.request,
        body: {},
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getUsersByRoleSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getUsersByRoleFailure(err));
      })
  };
}


export function setGuardGroup(groupName) {
  return (dispatch, getState) => {
    dispatch(setGroupBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/CreateGuardGroup`,
        method: 'POST',
        state: getState().user.request,
        body: { groupName }
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(setGroupSuccess(data.response));
      })
      .catch(err => {
        return dispatch(setGroupFailure(err));
      })
  };
}


export function addHolidays(holidayDate) {
  return (dispatch, getState) => {
    dispatch(addHolidaysBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/AddHoliday`,
        method: 'POST',
        state: getState().user.request,
        body: { holidayDate }
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(addHolidaysSuccess(data.response));
      })
      .catch(err => {
        return dispatch(addHolidaysFailure(err));
      })
  };
}


export function removeHolidays(idHoliday) {
  return (dispatch, getState) => {
    dispatch(addHolidaysBegin());
    return request(
      {
        partialUrl: `/API/GuardGroup/RemoveHoliday?id=${idHoliday}`,
        method: 'DELETE',
        state: getState().user.request,
        body: {}
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(removeHolidaysSuccess(data.response));
      })
      .catch(err => {
        return dispatch(removeHolidaysFailure(err));
      })
  };
}


//Vendedor
export function getQuotationSeller(id) {
  return (dispatch, getState) => {
    dispatch(getQuotationSellerBegin());
    return request(


      {
        partialUrl: `/API/Quotation/GetQuotation?id=${id}`,
        method: 'GET',
        state: getState().user.request,
        body: { },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getQuotationSellerSuccess(data.response));
      })
      .catch(err => {
        return dispatch(getQuotationSellerFailure(err));
      })
  };
}
