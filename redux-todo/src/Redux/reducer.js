import { ERROR, GET_SUCCESS, LOADING, SUCCESS } from "./actionType"
const initState = {
    loading: false,
    error: false,
    todo: []
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state, loading: true,
            }
        case ERROR:
            return { ...state, loading: false, error: true }
        case SUCCESS:
            return {
                ...state, todo: [...state.todo, payload], loading: false
            }
        case GET_SUCCESS:
            return {
                ...state, todo: payload, loading: false, error: false
            }
        default:
            return state
    }
}
