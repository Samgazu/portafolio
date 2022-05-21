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
import request from '../utils/request';


export const addGuardGroupHolidayBegin = () => ({
    type: ADD_GUARD_GROUP_HOLIDAY_BEGIN,
});

export const addGuardGroupHolidaySuccess = (addgroupGuardHoliday) => ({
    type: ADD_GUARD_GROUP_HOLIDAY_SUCCESS,
    payload: {
        addgroupGuardHoliday
    }
})
export const addGuardGroupHolidayFailure = () => ({
    type: ADD_GUARD_GROUP_HOLIDAY_FAILURE,
});

//Delete
export const deleteGuardGroupHolidayBegin = () => ({
    type: DELETE_GUARD_GROUP_HOLIDAY_BEGIN,
});

export const deleteGuardGroupHolidaySuccess = (deleteTeam) => ({
    type: DELETE_GUARD_GROUP_HOLIDAY_SUCCESS,
    payload: {
        deleteTeam,
    }
})
export const deleteGuardGroupHolidayFailure = () => ({
    type: DELETE_GUARD_GROUP_HOLIDAY_FAILURE,
});

//REMOVE ORDER
export const overrideGuardGroupOrderBegin = () => ({
    type: OVERRIDE_GUARD_GROUP_ORDER_BEGIN,
});

export const overrideGuardGroupOrderSuccess = (reorderSpefic) => ({
    type: OVERRIDE_GUARD_GROUP_ORDER_SUCCESS,
    payload: {
        reorderSpefic
    }
})


export const overrideGuardGroupOrderFailure = () => ({
    type: OVERRIDE_GUARD_GROUP_ORDER_FAILURE,
});


//asignar grupo de guardia a dia de guardia 
export function addGuardGroupHoliday(guardGroup) {
    return (dispatch, getState) => {
        dispatch(addGuardGroupHolidayBegin());
        return request(
            {
                partialUrl: `/API/GuardGroup/AddGuardGroupHoliday`,
                method: 'POST',
                state: getState().user.request,
                body: { ...guardGroup }
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(addGuardGroupHolidaySuccess(data.response));
            })
            .catch(err => {
                return dispatch(addGuardGroupHolidayFailure(err));
            })
    };

}

//delete grupo del dia
export function deleteGuardGroupHoliday(id) {
    return (dispatch, getState) => {
        dispatch(deleteGuardGroupHolidayBegin());
        return request(
            {
                partialUrl: `/API/GuardGroup/RemoveGuardGroupholiday?id=${id}`,
                method: 'DELETE',
                state: getState().user.request,
                body: {
                    
                 }
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(deleteGuardGroupHolidaySuccess(data.response));
            })
            .catch(err => {
                return dispatch(deleteGuardGroupHolidayFailure(err));
            })
    };

}

//Override reordenar grupo
export function overrideGuardGroupOrder(orderGroup) {
    return (dispatch, getState) => {
        dispatch(overrideGuardGroupOrderBegin());
        return request(
            {
                partialUrl: `/API/GuardGroup/OverrideGuardGroupOrder`,
                method: 'POST',
                state: getState().user.request,
                body: {...orderGroup}
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(overrideGuardGroupOrderSuccess(data.response));
            })
            .catch(err => {
                return dispatch(overrideGuardGroupOrderFailure(err));
            })
    };

}


