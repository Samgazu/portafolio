import {

    GET_SCHEDULED_SURGERIES_BY_DATE_BEGIN,
    GET_SCHEDULED_SURGERIES_BY_DATE_SUCCESS,
    GET_SCHEDULED_SURGERIES_BY_DATE_FAILURE,
    GET_STATES_IN_SURGERY_BEGIN,
    GET_STATES_IN_SURGERY_SUCCESS,
    GET_STATES_IN_SURGERY_FAILURE

} from '../constants/actionTypes';

import request from '../utils/request';

// GET SCHEDULED SURGERIES

export const getScheduledSurgeriesBegin= () => ({
    type: GET_SCHEDULED_SURGERIES_BY_DATE_BEGIN,
});

export const getScheduledSurgeriesSuccess = (getScheduledSurgeries) => ({
    type: GET_SCHEDULED_SURGERIES_BY_DATE_SUCCESS,
    payload: {
        getScheduledSurgeries
    }
});

export const getScheduledSurgeriesFailure = () => ({
    type: GET_SCHEDULED_SURGERIES_BY_DATE_FAILURE,
});


// GET STATES IN SURGERY

export const getStatesInSurgeryBegin= () => ({
    type: GET_STATES_IN_SURGERY_BEGIN,
});

export const getStatesInSurgerySuccess = (states) => ({
    type: GET_STATES_IN_SURGERY_SUCCESS,
    payload: {
        states
    }
});

export const getStatesInSurgeryFailure = () => ({
    type: GET_STATES_IN_SURGERY_FAILURE,
});

// GET MEDICS

export function getScheduledSurgeries( currentPage=0, offset=10, date=null ) {
    return function (dispatch, getState) {
        dispatch(getScheduledSurgeriesBegin());
        /* return request({
            partialUrl: `/API/?currentPage=${currentPage}&offset=${offset}`,
            method: 'GET',
            state: getState().user.request,
            body: {}
        })
        .then(response => response.json())
        .then(data => {
             */
            const data = [
                {
                    id: 1,
                    institution: 'Hospital Real San José',
                    date: '20/02/2021',
                    time: '13:00',
                    description: 'Add Plus - 4 tornillos',
                    doctor: 'Daniel Ríos',
                    atq: 'Javier Martínez',
                    activeState: 1,
                },
                {
                    id: 2,
                    institution: 'Hospital Real San José',
                    date: '20/02/2021',
                    time: '13:00',
                    description: 'Add Plus - 4 tornillos',
                    doctor: 'Daniel Ríos',
                    atq: 'Javier Martínez',
                    activeState: 2,
                },
                {
                    id: 3,
                    institution: 'Hospital Real San José',
                    date: '20/02/2021',
                    time: '13:00',
                    description: 'Add Plus - 4 tornillos',
                    doctor: 'Daniel Ríos',
                    atq: 'Javier Martínez',
                    activeState: 3,
                },
            ]
            dispatch(getScheduledSurgeriesSuccess(data));
        /* })
        .catch(err => {
            return dispatch(getScheduledSurgeriesFailure(err));
        }); */
    }
}

// GET STATES IN PROCESSES

export function getStatesInSurgery( ) {
    
    return function (dispatch, getState) {
        
        dispatch(getStatesInSurgeryBegin());
        const userId = getState().allUsers.selectedUserId;
        // AQUI VA LA PETICION DONDE SE TRAE LOS STATES DE LOS PROCESOS DEL USUARIO CON UN ROL ESPECIFICO
        const states = [
            {
                id: 1,
                name: 'Cirugía Programada'
            },
            {
                id: 2,
                name: 'Programación atendida'
            },
            {
                id: 3,
                name: 'Material listo para recogerse'
            },
            {
                id: 4,
                name: 'Material en proceso de entrega'
            },
            {
                id: 5,
                name: 'Material entregado'
            },
            {
                id: 6,
                name: 'Cirugia iniciada'
            },
            {
                id: 7,
                name: 'Cirugia finalizada'
            },
            {
                id: 8,
                name: 'Material retornado a almacén'
            },
            {
                id: 9,
                name: 'Material en proceso de revisión'
            },
            {
                id: 10,
                name: 'Cirugía facturada'
            }
        ]
        dispatch(getStatesInSurgerySuccess(states));
    }
}