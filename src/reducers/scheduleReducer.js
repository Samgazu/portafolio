import {

    GET_SCHEDULED_SURGERIES_BY_DATE_BEGIN,
    GET_SCHEDULED_SURGERIES_BY_DATE_SUCCESS,
    GET_SCHEDULED_SURGERIES_BY_DATE_FAILURE,
    GET_STATES_IN_SURGERY_BEGIN,
    GET_STATES_IN_SURGERY_SUCCESS,
    GET_STATES_IN_SURGERY_FAILURE

} from '../constants/actionTypes';
import initialState from './initialState';

export function  scheduleReducer(state = initialState.schedule, action) {
    switch (action.type) {
        

// GET SCHEDULED SURGERIES
        case GET_SCHEDULED_SURGERIES_BY_DATE_BEGIN:
            return state;
        case GET_SCHEDULED_SURGERIES_BY_DATE_SUCCESS:{
        return{
            ...state,
            getScheduledSurgeries: action.payload.getScheduledSurgeries
        } 
        }
        case GET_SCHEDULED_SURGERIES_BY_DATE_FAILURE:
            return state;



// GET STATES IN SURGERY
        case GET_STATES_IN_SURGERY_BEGIN:
            return state;
        case GET_STATES_IN_SURGERY_SUCCESS:{
          return{
            ...state,
            surgeryStates: action.payload.states
          } 
        }
        case GET_STATES_IN_SURGERY_FAILURE:
            return state;

// DEFAULT
        default:
            return state;

    }
}