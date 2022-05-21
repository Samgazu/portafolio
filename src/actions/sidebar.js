import { types } from "../types/types"

export const initialSideActive = () =>({
    type: types.isBarActive
}) 
export const finishSideActive = () =>({
    type: types.isBarInactive
})