import {RECIVE_CODES, LOADING_CODES, CODES_FAILED} from '../ActionTypes'

export const Codes = (state = {
    isLoading: true,
    error: null,
    codes: []
}, action) => {
    switch (action.type) {
        case LOADING_CODES:
            return {...state, isLoading: true, error: null, codes: []}
        case CODES_FAILED:
            return {...state, isLoading: false, error: action.payload, codes: []}
        case RECIVE_CODES:
            return {...state, isLoading: false, error: null, codes: action.payload}
        default:
            return state
    }
}