import { types } from "../types/types";

const initialSate = {
    isBarActive: false
}


export const sideReducer = ( state = initialSate, action  ) => {
    
    switch ( action.type ) {
        case types.isBarActive:
            return {
                isBarActive: true
            }
        case types.isBarInactive:
            return {
                isBarActive: false
            }
    
        default:
            return state;
    }

}
