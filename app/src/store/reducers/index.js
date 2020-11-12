import { ACTIVITY_ERROR, ACTIVITY_SUCCESS, ACTIVITY_LOADING } from "../actions"

const initialState = {
    isLoading: false,
    activityData: {},
    error: '', 
    showActivity: false
}

export const activityReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIVITY_LOADING:
            return {
                ...state,
                isLoading: true,
                error: '',
                showActivity: false
            }
        case ACTIVITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                activityData: action.payload,
                error: '',
                showActivity: true
            }
        case ACTIVITY_ERROR: 
            return {
                ...state,
                isLoading: false,
                activityData: {},
                error: action.payload,
                showActivity: false
            }
        default:
            return state
    }
}