import { GET_APPOINTMENT_NOTIFICACION_BEGIN, GET_APPOINTMENT_NOTIFICACION_FAILURE, GET_APPOINTMENT_NOTIFICACION_SUCCESS, NOTIFICATION_ADD, NOTIFICATION_CLEAR, STATE_NEW_NOTIFICATION } from '../constants/actionTypes';
import request from '../utils/request';

export function addNotification(notificationConfig){
    return (dispatch) => {
        return dispatch({
            type: NOTIFICATION_ADD,
            ...notificationConfig
        });
    }
}

export function clearNotification(){
    return (dispatch) => {
        return dispatch({
            type: NOTIFICATION_CLEAR
        });
    }
}


