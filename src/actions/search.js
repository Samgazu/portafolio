import { types } from "../types/types"

export const initialSearchActive = () =>({
    type: types.isSearchActive
}) 
export const finishSearchActive = () =>({
    type: types.isSearchInactive
})