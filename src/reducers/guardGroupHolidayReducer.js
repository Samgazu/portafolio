import {

    ADD_GUARD_GROUP_HOLIDAY_BEGIN,
    ADD_GUARD_GROUP_HOLIDAY_SUCCESS,
    ADD_GUARD_GROUP_HOLIDAY_FAILURE,
    DELETE_GUARD_GROUP_HOLIDAY_BEGIN,
    DELETE_GUARD_GROUP_HOLIDAY_SUCCESS,
    DELETE_GUARD_GROUP_HOLIDAY_FAILURE,
    OVERRIDE_GUARD_GROUP_ORDER_BEGIN,
    OVERRIDE_GUARD_GROUP_ORDER_SUCCESS,
    OVERRIDE_GUARD_GROUP_ORDER_FAILURE,

} from '../constants/actionTypes';
import initialState from './initialState';


export function guardGroupHolidayReducer(state = initialState.guardGroupHoliday, action) {
    switch (action.type) {

        case OVERRIDE_GUARD_GROUP_ORDER_BEGIN:
            return state;
        case OVERRIDE_GUARD_GROUP_ORDER_SUCCESS: {
            return {
                ...state,
                reorderSpefic: action.payload.reorderSpefic,
            }
        }
        case OVERRIDE_GUARD_GROUP_ORDER_FAILURE:
            return state;
        case ADD_GUARD_GROUP_HOLIDAY_BEGIN:
            return state;
        case ADD_GUARD_GROUP_HOLIDAY_SUCCESS: {
            return {
                ...state,
                lastAddGroupGuardHoliday: action.payload.addgroupGuardHoliday,
            }
        }
        case ADD_GUARD_GROUP_HOLIDAY_FAILURE:
            return state;


        case DELETE_GUARD_GROUP_HOLIDAY_BEGIN:
            return state;
        case DELETE_GUARD_GROUP_HOLIDAY_SUCCESS: {
            return {
                ...state,
                deleteTeam: action.payload.deleteTeam,
            }
        }
        case DELETE_GUARD_GROUP_HOLIDAY_FAILURE:
            return state;


        default: return state;
    }
}
