import {

    ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN,
    ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS,
    ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE,
    UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN,
    UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS,
    UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE,
    CREATE_CHAT_GROUP_BEGIN,
    CREATE_CHAT_GROUP_SUCCESS,
    CREATE_CHAT_GROUP_FAILURE,
    GET_CHAT_GROUP_BEGIN,
    GET_CHAT_GROUP_SUCCESS,
    GET_CHAT_GROUP_FAILURE,
    DELETE_CHAT_GROUP_BEGIN,
    DELETE_CHAT_GROUP_SUCCESS,
    DELETE_CHAT_GROUP_FAILURE,
    GET_SURGERIES_FOR_CHAT_BEGIN,
    GET_SURGERIES_FOR_CHAT_SUCCESS,
    GET_SURGERIES_FOR_CHAT_FAILURE,
    REMOVE_MEMBER_FROM_CHAT_GROUP_BEGIN,
    REMOVE_MEMBER_FROM_CHAT_GROUP_SUCCESS,
    REMOVE_MEMBER_FROM_CHAT_GROUP_FAILURE,
    ADD_MEMBER_FROM_TO_GROUP_BEGIN,
    ADD_MEMBER_FROM_TO_GROUP_SUCCESS,
    ADD_MEMBER_FROM_TO_GROUP_FAILURE,
    GET_CHAT_GROUP_MEMBERS_BEGIN,
    GET_CHAT_GROUP_MEMBERS_SUCCESS,
    GET_CHAT_GROUP_MEMBERS_FAILURE,
    ADD_CHAT_GROUP_MESSAGE_BEGIN,
    ADD_CHAT_GROUP_MESSAGE_SUCCESS,
    ADD_CHAT_GROUP_MESSAGE_FAILURE,
    GET_CHAT_GROUP_MESSAGES_BEGIN,
    GET_CHAT_GROUP_MESSAGES_SUCCESS,
    GET_CHAT_GROUP_MESSAGES_FAILURE,
    STATE_NEW_NOTIFICATION,
    GET_APPOINTMENT_NOTIFICACION_BEGIN,
    GET_APPOINTMENT_NOTIFICACION_SUCCESS,
    GET_APPOINTMENT_NOTIFICACION_FAILURE,
} from '../constants/actionTypes';
import request from '../utils/request';


//ESTAS FUNCIONES ES PARA OBTENER TODOS LOS MENSAJES DEL CHAT
export const get_chat_group_mesagges_begin = () => ({
  type:GET_CHAT_GROUP_MESSAGES_BEGIN,
});
export const get_chat_group_mesagges_success = (response) => ({
  type:GET_CHAT_GROUP_MESSAGES_SUCCESS,
  payload:{
      response
  }
});
export const get_chat_group_mesagges_failure = () => ({
  type:GET_CHAT_GROUP_MESSAGES_FAILURE,
});


//ESTAS FUNCIONES ES PARA AGREGAR UN MENSAJE AL CHAT
export const add_chat_group_message_begin = () => ({
  type:ADD_CHAT_GROUP_MESSAGE_BEGIN,
});
export const add_chat_group_message_success = (response) => ({
  type:ADD_CHAT_GROUP_MESSAGE_SUCCESS,
  payload:{
      response
  }
});
export const add_chat_group_message_failure = () => ({
  type:ADD_CHAT_GROUP_MESSAGE_FAILURE,
});


//FUNCIONES PARA OBTENER LOS MIEMBROS DE UN DETERMINADO CHAT
export const get_chat_group_members_begin = () => ({
    type:GET_CHAT_GROUP_MEMBERS_BEGIN,
});
export const get_chat_group_members_success = (response) => ({
    type:GET_CHAT_GROUP_MEMBERS_SUCCESS,
    payload:{
        response
    }
});
export const get_chat_group_members_failure = () => ({
    type:GET_CHAT_GROUP_MEMBERS_FAILURE,
});



//PARA AGREGAR UN MIEMBRO DEL CHAT
export const add_member_from_chat_group_begin = () => ({
    type:ADD_MEMBER_FROM_TO_GROUP_BEGIN,
});
export const add_member_from_chat_group_success = (response) => ({
    type:ADD_MEMBER_FROM_TO_GROUP_SUCCESS,
    payload:{
        response
    }
});
export const add_member_from_chat_group_failure = () => ({
    type:ADD_MEMBER_FROM_TO_GROUP_FAILURE,
});


//PARA ELIMINAR UN MIEMBRO DEL CHAT
export const delete_member_from_chat_group_begin = () => ({
    type:REMOVE_MEMBER_FROM_CHAT_GROUP_BEGIN,
});
export const delete_member_from_chat_group_success = (response) => ({
    type:REMOVE_MEMBER_FROM_CHAT_GROUP_SUCCESS,
    payload:{
        response
    }
});
export const delete_member_from_chat_group_failure = () => ({
    type:REMOVE_MEMBER_FROM_CHAT_GROUP_FAILURE,
});


//PARA OBTENER LAS CIRUGIAS QUE HACEN REFERENCIA AL CHAT
export const get_surgeries_for_chat_begin = () => ({
    type:GET_SURGERIES_FOR_CHAT_BEGIN,
});
export const get_surgeries_for_chat_success = (response) => ({
    type:GET_SURGERIES_FOR_CHAT_SUCCESS,
    payload:{
        response
    }
});
export const get_surgeries_for_chat_failure = () => ({
    type:GET_SURGERIES_FOR_CHAT_FAILURE,
});


//PARA ELIMINAR LOS CHAT DE LOS GRUPOS
export const delete_chat_group_begin = () => ({
    type:DELETE_CHAT_GROUP_BEGIN,
});
export const delete_chat_group_success = (response) => ({
    type:DELETE_CHAT_GROUP_SUCCESS,
    payload:{
        response
    }
});
export const delete_chat_group_failure = () => ({
    type:DELETE_CHAT_GROUP_FAILURE,
});



//PARA OBTENER LOS CHAT DE LOS GRUPOS
export const get_chat_group_begin = () => ({
    type:GET_CHAT_GROUP_BEGIN,
});
export const get_chat_group_success = (response) => ({
    type:GET_CHAT_GROUP_SUCCESS,
    payload:{
        response
    }
});
export const get_chat_group_failure = () => ({
    type:GET_CHAT_GROUP_FAILURE,
});



//PARA CREAR UN NUEVO CHAT DE GRUPO
export const create_chat_group_begin = () => ({
    type:CREATE_CHAT_GROUP_BEGIN,
});
export const create_chat_group_success = (response) => ({
    type:CREATE_CHAT_GROUP_SUCCESS,
    payload:{
        response
    }
});
export const create_chat_group_failure = () => ({
    type:CREATE_CHAT_GROUP_FAILURE,
});


export const suscrive_for_receive_not_begin = () => ({
    type:ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN,
});
export const suscrive_for_receive_not_success = (response) => ({
    type:ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS,
    payload:{
        response
    }
});
export const suscrive_for_receive_not_failure = () => ({
    type:ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE,
});

//FUNCIONES PARA LA FUNCION DE YA NO RECIBIR NOTIFICACIONES

export const unsuscrive_for_receive_not_begin = () => ({
    type:UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN,
});
export const unsuscrive_for_receive_not_success = (response) => ({
    type:UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS,
    payload:{
        response
    }
});
export const unsuscrive_for_receive_not_failure = () => ({
    type:UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE,
});

export const getAppointmentNotificacionBegin = () => ({
  type: GET_APPOINTMENT_NOTIFICACION_BEGIN
});
export const getAppointmentNotificacionSuccess = (appointment) => ({
  type: GET_APPOINTMENT_NOTIFICACION_SUCCESS,
  payload: {
      appointment
  }
});
export const getAppointmentNotificacionFailure = () => ({
  type: GET_APPOINTMENT_NOTIFICACION_FAILURE
});




//CON ESTA FUNCION TU OBTENER TODOS LOS MENSAJES DEL CHAT
export function getMessagesToChatGroup(ChatGroupId,currentPage,offset) {
  return (dispatch, getState) => {
    dispatch(get_chat_group_mesagges_begin());
    return request(
      {
        partialUrl: `/API/Chat/GetChatGroupMessages?chatGroupId=${ChatGroupId}&currentPage=${currentPage}&offset=${offset}`,
        state: getState().user.request,
        method: 'GET',
        body: {
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(get_chat_group_mesagges_success(data.response));
      })
      .catch(err => {
        return dispatch(get_chat_group_mesagges_failure(err));
      })
  };
}



//CON ESTA FUNCION TU PUEDES AGREGAR UN MENSAJE AL CHAT
export function addMessagesToChatGroup(ChatGroupId,Message,SurgeryId) {
  return (dispatch, getState) => {
    dispatch(add_chat_group_message_begin());
    return request(
      {
        partialUrl: `/API/Chat/AddChatGroupMessage`,
        state: getState().user.request,
        method: 'POST',
        body: {
          ChatGroupId: ChatGroupId,
          Message: Message,
          SurgeryId: SurgeryId
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(add_chat_group_message_success(data.response));
      })
      .catch(err => {
        return dispatch(add_chat_group_message_failure(err));
      })
  };
}



//CON ESTA FUNCION TU PUEDES OBTENER MIEMBROS QUE ESTAN EN ESE CHAT
export function getChatGroupMembers(id) {
  return (dispatch, getState) => {
    dispatch(get_chat_group_members_begin());
    return request(
      {
        partialUrl: `/API/Chat/GetChatGroupMembers?Id=${id}`,
        state: getState().user.request,
        method: 'GET',
        body: {
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(get_chat_group_members_success(data.response));
      })
      .catch(err => {
        return dispatch(get_chat_group_members_failure(err));
      })
  };
}



//CON ESTA FUNCION TU PUEDES ELIMINAR LOS MIEMBROS DEL CHAT
export function addMemberToChatGroup(idChat,IdUser) {
  return (dispatch, getState) => {
    dispatch(add_member_from_chat_group_begin());
    return request(
      {
        partialUrl: `/API/Chat/AddMemberToChatGroup`,
        state: getState().user.request,
        method: 'POST',
        body: {
          ChatGroupId:idChat,
          User:
            {
                UserID:IdUser
            }
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(add_member_from_chat_group_success(data.response));
      })
      .catch(err => {
        return dispatch(add_member_from_chat_group_failure(err));
      })
  };
}



//CON ESTA FUNCION TU PUEDES ELIMINAR LOS MIEMBROS DEL CHAT
export function removeMemberForChat(id) {
  return (dispatch, getState) => {
    dispatch(delete_member_from_chat_group_begin());
    return request(
      {
        partialUrl: `/API/Chat/RemoveMemberFromChatGroup`,
        state: getState().user.request,
        method: 'POST',
        body: {
          Id:id
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(delete_member_from_chat_group_success(data.response));
      })
      .catch(err => {
        return dispatch(delete_member_from_chat_group_failure(err));
      })
  };
}


//CON ESTA FUNCION TU PUEDES OBTENER LOS CHATS DE UN GRUPO DE CIRUGIA
export function getSurgeriesForChat(onStatus,startDate,endDate,currentPage,offset) {
    return (dispatch, getState) => {
      dispatch(get_surgeries_for_chat_begin());
      return request(
        {
          partialUrl: `/API/Chat/GetSurgeriesForChat?onStatus=${onStatus}&startDate=${startDate}&endDate=${endDate}&currentPage=${currentPage}&offset=${offset}`,
          state: getState().user.request,
          method: 'GET',
          body: {
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(get_surgeries_for_chat_success(data.response));
        })
        .catch(err => {
          return dispatch(get_surgeries_for_chat_failure(err));
        })
    };
  }


//CON ESTA FUNCION TU PUEDES OBTENER LOS CHATS DE UN GRUPO DE CIRUGIA
export function deleteChatGroup(id) {
    return (dispatch, getState) => {
      dispatch(delete_chat_group_begin());
      return request(
        {
          partialUrl: `/API/Chat/DeleteChatGroup?Id=${id}`,
          state: getState().user.request,
          method: 'DELETE',
          body: {
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(delete_chat_group_success(data.response));
        })
        .catch(err => {
          return dispatch(delete_chat_group_failure(err));
        })
    };
  }



//CON ESTA FUNCION TU PUEDES OBTENER LOS CHATS DE UN GRUPO DE CIRUGIA
export function getChatGroup(id,currentPage=0,offset=10,onlyUserChats=true) {
    return (dispatch, getState) => {
      dispatch(create_chat_group_begin());
      return request(
        {
          partialUrl: `/API/Chat/GetChatGroup?surgeryId=${id}&currentPage=${currentPage}&offset=${offset}&onlyUserChats=${onlyUserChats}`,
          state: getState().user.request,
          method: 'GET',
          body: {
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(create_chat_group_success(data.response));
        })
        .catch(err => {
          return dispatch(create_chat_group_failure(err));
        })
    };
  }



//CON ESTA FUNCION TU PUEDES CREAR UN NUEVO CHAT PARA TU GRUPO DE CIRUGIA
export function createChatGroup(idApoiment,name) {
    return (dispatch, getState) => {
      dispatch(create_chat_group_begin());
      return request(
        {
          partialUrl: `/API/Chat/CreateChatGroup`,
          state: getState().user.request,
          method: 'POST',
          body: {
            SurgeryAppointmentId:idApoiment,
            ChatGroupName:name,
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(create_chat_group_success(data.response));
        })
        .catch(err => {
          return dispatch(create_chat_group_failure(err));
        })
    };
  }




//CON ESTA FUNCION TE SUSCRIBES EN EL BACK PARA QUE PUEDAS RECIBIR NOTIFICACIONES
export function suscribeForNotification(deviceTarget,deviceToken) {
    return (dispatch, getState) => {
      dispatch(suscrive_for_receive_not_begin());
      return request(
        {
          partialUrl: `/API/PushNotification/SubscriveForPushNotifications`,
          state: getState().user.request,
          method: 'POST',
          body: {
            DeviceTarget: deviceTarget,
            DeviceToken: deviceToken,
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(suscrive_for_receive_not_success(data.response));
        })
        .catch(err => {
          return dispatch(suscrive_for_receive_not_failure(err));
        })
    };
  }




  //ESTA FUNCION ES PARA YA NO RECIBIR NOTIFICACIONES Y SE DEBE DE UTILIZAR  AL HACER LOG OUT 
  //O PARA CUANDO SE TERMINA EL TIEMPO DEL TOKEN Y SE REINICIA LA SESION, SE DEBE DE ANALIZAR SI ES IGUAL SI NO LO UTILZAS
  // YA QUE UNA COMPUTADORA PUEDE TENER VASRIAS SESIONES ABIERTAS
  export function unsuscribeForNotification(id) {
    return (dispatch, getState) => {
      dispatch(unsuscrive_for_receive_not_begin());
      return request(
        {
          partialUrl: `/API/PushNotification/UnsubscriveForPushNotifications?id=${id}`,
          state: getState().user.request,
          method: 'DELETE',
          body: {
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch(unsuscrive_for_receive_not_success(data.response));
        })
        .catch(err => {
          return dispatch(unsuscrive_for_receive_not_failure(err));
        })
    };
  }

  export const getAppointmentNotificacion = (  SearchBy = null, searchByParam = null) => {
    return async(dispatch, getState) => {
        try {
            dispatch(getAppointmentNotificacionBegin());
            const fetchrequest = await request({
                partialUrl: `/API/Appointment/GetAppointments?searchBy=${SearchBy}&searchByParam=${searchByParam}`,
                method: 'GET',
                state: getState().user.request,
                body:{}
            })
            const response = await fetchrequest.json();
            const data = await response.response;
            const [appoiment] = data;
            return dispatch(getAppointmentNotificacionSuccess(appoiment));
            
        } catch (err) {
            console.log(err)
            return dispatch(getAppointmentNotificacionFailure(err))
            
        }
    }
}


  export function setStateNewNotification(isNewNotifiction){
    return (dispatch) => {
        return dispatch({
            type: STATE_NEW_NOTIFICATION,
            isNewNotifiction
        });
    }
}