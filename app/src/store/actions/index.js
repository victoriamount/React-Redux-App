import axios from 'axios'

export const ACTIVITY_LOADING = 'ACTIVITY_LOADING'
export const ACTIVITY_SUCCESS = 'ACTIVITY_SUCCESS'
export const ACTIVITY_ERROR = 'ACTIVITY_ERROR'


export const fetchActivities = (activity) => {
    return (dispatch) => {
        dispatch({ type: ACTIVITY_LOADING })

        axios
            .get(
                `http://www.boredapi.com/api/activity?type=${activity}`
            )
            .then(res => {
                // if (res.data.type === 'charity' || res.data.type === 'social') {
                //     dispatch({ type: ACTIVITY_ERROR, payload: 'Select a valid activity' })
                //     console.log('inside if')
                // }
                console.log('API call: ', res.data)
                dispatch({ type: ACTIVITY_SUCCESS, payload: res.data })                 
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ACTIVITY_ERROR, payload: err.message })
            })
    }
}