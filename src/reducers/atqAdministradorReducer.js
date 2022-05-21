
import {

    GET_USERS_BY_ROLE_LIST_SPECIFIC_BEGIN,
    GET_USERS_BY_ROLE_LIST_SPECIFIC_SUCCESS,
    GET_USERS_BY_ROLE_LIST_SPECIFIC_FAILURE,
    SET_CREATE_TEAM,
    SET_TEAM_GROUP_BEGIN,
    SET_TEAM_GROUP_SUCCESS,
    SET_TEAM_GROUP_FAILURE,
    GET_TEAM_GROUP_BEGIN,
    GET_TEAM_GROUP_SUCCESS,
    GET_TEAM_GROUP_FAILURE,
    GET_HOLIDAYS_BEGIN,
    GET_HOLIDAYS_SUCCESS,
    GET_HOLIDAYS_FAILURE,
    ADD_MEMBER_TO_GUARD_GROUP_BEGIN,
    ADD_MEMBER_TO_GUARD_GROUP_SUCCESS,
    ADD_MEMBER_TO_GUARD_GROUP_FAILURE,
    ADD_HOLIDAYS_BEGIN,
    ADD_HOLIDAYS_SUCCESS,
    ADD_HOLIDAYS_FAILURE,
    REMOVE_HOLIDAYS_BEGIN,
    REMOVE_HOLIDAYS_SUCCESS,
    REMOVE_HOLIDAYS_FAILURE,
    REMOVE_MEMBER_TO_GUARD_GROUP_BEGIN,
    REMOVE_MEMBER_TO_GUARD_GROUP_SUCCESS,
    REMOVE_MEMBER_TO_GUARD_GROUP_FAILURE,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_BEGIN,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_SUCCESS,
    REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_FAILURE,
    SET_SURGERY_CHOSEED,
    GET_ATQ_AVAILABLE_BEGIN,
    GET_ATQ_AVAILABLE_SUCCESS,
    GET_ATQ_AVAILABLE_FAILURE,
    SET_ATQ_CHOSEED,
    SET_DATE_CHOSEED,
    ADD_ATQ_BEGIN,
    ADD_ATQ_SUCCESS,
    ADD_ATQ_FAILURE,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_BEGIN,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_SUCCESS,
    GET_APPOIMENTS_WITH_SPECIFIC_ATQ_FAILLURE,
    ADD_ANSWER_ATQ_ON_APPOIMENT_BEGIN,
    ADD_ANSWER_ATQ_ON_APPOIMENT_SUCCESS,
    ADD_ANSWER_ATQ_ON_APPIMENT_FAILURE,
    REASING_ATQ_WITH_ANSWER_BEGIN,
    REASING_ATQ_WITH_ANSWER_SUCCESS,
    REASING_ATQ_WITH_ANSWER_FAILURE,
    GET_TEAM_GROUP_BY_ID_BEGIN,
    GET_TEAM_GROUP_BY_ID_SUCCESS,
    GET_TEAM_GROUP_BY_ID_FAILURE,
    GET_QUOTATION_SELLER_BEGIN,
    GET_QUOTATION_SELLER_SUCCESS,
    GET_QUOTATION_SELLER_FAILURE,
    SET_MODIFY_HOLIDAYS,
    UPDATE_LIST_MEMBER,
    SET_MODIFY_HOLIDAYS_FINISHED,
    CREATE_REPORT_EXPERIENCE_BEGIN,
    CREATE_REPORT_EXPERIENCE_SUCCESS,
    CREATE_REPORT_EXPERIENCE_FAILURE,
    UPDATE_REPORT_EXPERIENCE_BEGIN,
    UPDATE_REPORT_EXPERIENCE_SUCCESS,
    UPTADE_REPORT_EXPERIENCE_FAILURE


} from '../constants/actionTypes';
import initialState from './initialState';


export function atqAdministradorReducer(state = initialState.atqAdministrador, action) {

    switch (action.type) {

        case CREATE_REPORT_EXPERIENCE_BEGIN:
            return state;
        case CREATE_REPORT_EXPERIENCE_SUCCESS: {
            return {
                ...state,
                AddReport: action.payload.report
            }
        }
        case CREATE_REPORT_EXPERIENCE_FAILURE:
            return state;

        //Nuevos metodos para cuando se edita el comentario
        case UPDATE_REPORT_EXPERIENCE_BEGIN:
            return state;
        case UPDATE_REPORT_EXPERIENCE_SUCCESS: {
            return {
                ...state,
                UptadeReport: action.payload.report
            }
        }
        case UPTADE_REPORT_EXPERIENCE_FAILURE:
            return state;


        //NUEVOS METODOS AGREGADOS PARA LA SECCION DE TRANSFERIR CX
        case REASING_ATQ_WITH_ANSWER_BEGIN:
            return state;
        case REASING_ATQ_WITH_ANSWER_SUCCESS: {
            return {
                ...state,
                answerToReasingAtq: action.payload.answerToReasingAtq
            }
        }
        case REASING_ATQ_WITH_ANSWER_FAILURE:
            return state;
        //AQUI TERMINA EL PRIMER METODO
        case ADD_ANSWER_ATQ_ON_APPOIMENT_BEGIN:
            return state;
        case ADD_ANSWER_ATQ_ON_APPOIMENT_SUCCESS: {
            return {
                ...state,
                appoimentAnswered: action.payload.appoimentAnswered
            }
        }
        case ADD_ANSWER_ATQ_ON_APPIMENT_FAILURE:
            return state;

        //AQUI SE TERMINA LOS SEGUNDOS METODOS
        case GET_APPOIMENTS_WITH_SPECIFIC_ATQ_BEGIN:
            return state;
        case GET_APPOIMENTS_WITH_SPECIFIC_ATQ_SUCCESS: {
            return {
                ...state,
                AppoimentListSpecific: action.payload.AppoimentListSpecific
            }
        }
        case GET_APPOIMENTS_WITH_SPECIFIC_ATQ_FAILLURE:
            return state;

        //AQUI SE TERMINAN LOS NUEVOS METODOS DEL CASE    
        case GET_ATQ_AVAILABLE_BEGIN:
            return state;
        case GET_ATQ_AVAILABLE_SUCCESS: {
            return {
                ...state,
                atqAvailable: action.payload.atqAvailable
            }
        }
        case GET_ATQ_AVAILABLE_FAILURE:
            return state;
        //GET USERS BY ROLE
        case GET_USERS_BY_ROLE_LIST_SPECIFIC_BEGIN:
            return state;
        case GET_USERS_BY_ROLE_LIST_SPECIFIC_SUCCESS: {
            return {
                ...state,
                rols: action.payload.listUsersByRole
            }
        }
        case GET_USERS_BY_ROLE_LIST_SPECIFIC_FAILURE:
            return state;
        case SET_CREATE_TEAM: {
            return {
                ...state,
                team: action.payload.teamList
            }
        }

        case SET_TEAM_GROUP_BEGIN:
            return state;
        case SET_TEAM_GROUP_SUCCESS: {
            return {
                ...state,
                teamGuard: action.payload.groupName
            }
        }
        case SET_TEAM_GROUP_FAILURE:
            return state;

        case GET_HOLIDAYS_BEGIN:
            return state;
        case GET_HOLIDAYS_SUCCESS: {
            return {
                ...state,
                holidays: action.payload.listHolidays
            }
        }
        case GET_HOLIDAYS_FAILURE:
            return state;

        case ADD_HOLIDAYS_BEGIN:
            return state;
        case ADD_HOLIDAYS_SUCCESS: {
            return {
                ...state,
                newHoliday: action.payload.newATQ
            }
        }
        case ADD_ATQ_FAILURE:
            return state;
        case ADD_ATQ_BEGIN:
            return state;
        case ADD_ATQ_SUCCESS: {
            return {
                ...state,
                newATQ: action.payload.newATQ
            }
        }
        case ADD_HOLIDAYS_FAILURE:
            return state;

        case REMOVE_HOLIDAYS_BEGIN:
            return state;
        case REMOVE_HOLIDAYS_SUCCESS: {
            return {
                ...state,
                deletedHoliday: action.payload.holidayToRemove
            }
        }
        case REMOVE_HOLIDAYS_FAILURE:
            return state;

        case GET_TEAM_GROUP_BEGIN:
            return state;
        case GET_TEAM_GROUP_SUCCESS: {
            return {
                ...state,
                group: action.payload.listGroups
            }
        }
        case GET_TEAM_GROUP_FAILURE:
            return state;

        case GET_TEAM_GROUP_BY_ID_BEGIN:
            return state;
        case GET_TEAM_GROUP_BY_ID_SUCCESS: {
            return {
                ...state,
                groupById: action.payload.listGroupsById
            }
        }
        case GET_TEAM_GROUP_BY_ID_FAILURE:
            return state;

        case ADD_MEMBER_TO_GUARD_GROUP_BEGIN:
            return state;
        case ADD_MEMBER_TO_GUARD_GROUP_SUCCESS: {
            return {
                ...state,
                member: action.payload.member,
            }
        }
        case ADD_MEMBER_TO_GUARD_GROUP_FAILURE:
            return state;


        case REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_BEGIN:
            return state;
        case REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_SUCCESS: {
            return {
                ...state,
                principalReorder: action.payload.reorderList,
            }
        }
        case REODER_PRINCIPAL_ORDER_TO_GUARD_GROUP_FAILURE:
            return state;
        case REMOVE_MEMBER_TO_GUARD_GROUP_BEGIN:
            return state;
        case REMOVE_MEMBER_TO_GUARD_GROUP_SUCCESS: {
            return {
                ...state,
                membeToDelete: action.payload.member,
            }
        }
        case SET_SURGERY_CHOSEED: {
            return {
                ...state,
                surgeryChosed: action.payload.surgeryChoseed,
            }
        }
        case SET_ATQ_CHOSEED: {
            return {
                ...state,
                ATQChosed: action.payload.ATQChoseed,
            }
        }
        case SET_DATE_CHOSEED: {
            return {
                ...state,
                DateChoseed: action.payload.DateChoseed,
            }
        }
        case REMOVE_MEMBER_TO_GUARD_GROUP_FAILURE:
            return state;
         //Vendedor   
        case GET_QUOTATION_SELLER_BEGIN: {
            return state;
        }
        case GET_QUOTATION_SELLER_SUCCESS: {
            return {
                ...state,
                Seller: action.payload.QuotationSeller,
            }
        }
        case GET_QUOTATION_SELLER_FAILURE:
            return state;


        case SET_MODIFY_HOLIDAYS:
            return {
                ...state,
                holidaysWithGroup: action.payload.holidaysWithGroup,
            }

        case SET_MODIFY_HOLIDAYS_FINISHED:
        return {
            ...state,
            finished: action.payload.finished,
        }

        case UPDATE_LIST_MEMBER:
                return {
                    ...state,
                    update: state.update ? state.update+1 : 1,
                }

        default: return state;

    }

}