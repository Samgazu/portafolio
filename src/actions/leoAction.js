import * as types from '../constants/actionTypes';

export function getSaludo (){
    return function (dispatch){
        return dispatch({
            type: types.LEO_TEST
        });
    };
}