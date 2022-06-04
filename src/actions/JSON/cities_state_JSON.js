import { getCitiesBegin, getCitiesSucess, getStatesBegin, getStatesSucess } from "../systemsAction";

export function setStates() {
    return function (dispatch) {
        dispatch(getStatesBegin());
    const clients =[
            {
                id: 14,
                name: "Jalisco",     
            },
            {
                id: 13,
                name: "Hidalgo", 
            },
            {
                id: 11,
                name: "Colima",
            },
    ]
        dispatch(getStatesSucess(clients));
    }
}


export function setCities() {
    return function (dispatch) {
        dispatch(getCitiesBegin());
    const clients =[
            {
                cityNumber: 39,
                id: 645,
                name: "Guadalajara",
                stateId: 14,
            },
            {
                cityNumber: 40,
                id: 691,
                name: "Hostotipaquillo",
                stateId: 14,
            },
            {
                cityNumber: 70,
                id: 571,
                name: "El Salto",
                stateId: 14,
            },
    ]
        dispatch(getCitiesSucess(clients));


    }
}