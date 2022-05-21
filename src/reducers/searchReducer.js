import { types } from "../types/types";

const initialSate = {
    isSearchActive: false
}


export const searchReducer = ( state = initialSate, action  ) => {
    
    switch ( action.type ) {
        case types.isSearchActive:
            return {
                isSearchActive: true
            }
        case types.isSearchInactive:
            return {
                isSearchActive: false
            }
    
        default:
            return state;
    }

}