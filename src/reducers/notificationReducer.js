import { GET_APPOINTMENT_NOTIFICACION_BEGIN, GET_APPOINTMENT_NOTIFICACION_FAILURE, GET_APPOINTMENT_NOTIFICACION_SUCCESS, NOTIFICATION_ADD, NOTIFICATION_CLEAR } from '../constants/actionTypes';

import initialState from './initialState';

export default function notificationReducer(state = initialState.notification, action) {
    switch (action.type) {
        case NOTIFICATION_ADD:
            return {
                ...state,
                notificationType: action.notificationType || 'info',
                title: action.title || 'Nueva notificación',
                message: action.message || '',
            }
        case NOTIFICATION_CLEAR:
            return {
                ...state,
                title: null,
                message: null,
            }
        default:



            return state;
    }
}
