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
import initialState from './initialState';


export function NotificationChatReducer(state = initialState.notificationChat, action) {
    switch (action.type) {

        //ESTA ES PARA OBTENER LOS MENSAJES A UN DETERMINADO CHAT
        case GET_CHAT_GROUP_MESSAGES_BEGIN:
            return state;
        case GET_CHAT_GROUP_MESSAGES_FAILURE:
            return state;
        case GET_CHAT_GROUP_MESSAGES_SUCCESS:
            return {
                ...state,
                getMessages: action.payload.response
            };


        //ESTA ES PARA AGREGAR MENSAJES A UN DETERMINADO CHAT
        case ADD_CHAT_GROUP_MESSAGE_BEGIN:
            return state;
        case ADD_CHAT_GROUP_MESSAGE_FAILURE:
            return state;
        case ADD_CHAT_GROUP_MESSAGE_SUCCESS:
            return {
                ...state,
                addMessages: action.payload.response
            };


        //ESTA ES PARA OBTENER TODOS LOS MIEMBROS DE UN DETERMINADO CHAT
        case GET_CHAT_GROUP_MEMBERS_BEGIN:
            return state;
        case GET_CHAT_GROUP_MEMBERS_FAILURE:
            return state;
        case GET_CHAT_GROUP_MEMBERS_SUCCESS:
            return {
                ...state,
                getChatGroupMembers: action.payload.response
            };


        //ESTA ES PARA AGREGAR UN MIEMBRO DEL CHAT
        case ADD_MEMBER_FROM_TO_GROUP_BEGIN:
            return state;
        case ADD_MEMBER_FROM_TO_GROUP_FAILURE:
            return state;
        case ADD_MEMBER_FROM_TO_GROUP_SUCCESS:
            return {
                ...state,
                addMember: action.payload.response
            };


        //ESTA ES PARA ELIMINAR UN MIEMBRO DEL CHAT
        case REMOVE_MEMBER_FROM_CHAT_GROUP_BEGIN:
            return state;
        case REMOVE_MEMBER_FROM_CHAT_GROUP_FAILURE:
            return state;
        case REMOVE_MEMBER_FROM_CHAT_GROUP_SUCCESS:
            return {
                ...state,
                deleteMember: action.payload.response
            };


        //ESTA ES PARA OBTENER LAS CIRUGIAS A LA QUE HACE REFERENCIA ESE CHAT
        case GET_SURGERIES_FOR_CHAT_BEGIN:
            return state;
        case GET_SURGERIES_FOR_CHAT_FAILURE:
            return state;
        case GET_SURGERIES_FOR_CHAT_SUCCESS:
            return {
                ...state,
                getSurgeries: action.payload.response
            };


        //ESTA ES PARA ELIMINAR LOS CHATS DE UN DETERMINADO GRUPO
        case DELETE_CHAT_GROUP_BEGIN:
            return state;
        case DELETE_CHAT_GROUP_FAILURE:
            return state;
        case DELETE_CHAT_GROUP_SUCCESS:
            return {
                ...state,
                deleteChats: action.payload.response
            };


        //ESTA ES PARA OBTENER LOS CHATS DE UN DETERMINADO GRUPO
        case GET_CHAT_GROUP_BEGIN:
            return state;
        case GET_CHAT_GROUP_FAILURE:
            return state;
        case GET_CHAT_GROUP_SUCCESS:
            return {
                ...state,
                getGroup: action.payload.response
            };


        //ESTA ES PARA UN GRUPO DE CHAT DE UNA DETERMINADA CIRUGIA
        case CREATE_CHAT_GROUP_BEGIN:
            return state;
        case CREATE_CHAT_GROUP_FAILURE:
            return state;
        case CREATE_CHAT_GROUP_SUCCESS:
            return {
                ...state,
                createGroup: action.payload.response
            };


        //ESTA ES PARA SUSCRIBIRTE PARA RECIBIR NOTIFICACIONES
        case ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN:
            return state;
        case ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE:
            return state;
        case ADD_SUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                suscription: action.payload.response
            };


        //ESTA ES PARA DESUSCRIBIRTE DE RECIBIR NOTIFICACIONES
        case UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_BEGIN:
            return state;
        case UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_FAILURE:
            return state;
        case UNSUSCRIPTION_FOR_RECEIVE_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                unsuscribe: action.payload.response
            };

        case STATE_NEW_NOTIFICATION:
            return {
                ...state,
                stateNewNotification: action.isNewNotifiction,
            }

        case GET_APPOINTMENT_NOTIFICACION_BEGIN: {
            return state;
        }

        case GET_APPOINTMENT_NOTIFICACION_SUCCESS: {
            return {
                ...state,
                appoiment: action.payload.appointment,
            }
        }

        case GET_APPOINTMENT_NOTIFICACION_FAILURE: {
            return state;
        }

        default: return state;
    }
}
