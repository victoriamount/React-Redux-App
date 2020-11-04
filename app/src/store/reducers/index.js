import { ACTIVITY_ERROR, ACTIVITY_SUCCESS, ACTIVITY_LOADING } from "../actions"

const initialState = {
    isLoading: false,
    activityData: {},
    error: ''
}

export const activityReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIVITY_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ACTIVITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                activityData: action.payload,
                error: ''
            }
        case ACTIVITY_ERROR: 
            return {
                ...state,
                isLoading: false,
                activityData: {},
                error: action.payload
            }
        default:
            return state
    }
}