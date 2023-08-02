import { ERROR, LOADING, SUCCESS, GET_SUCCESS } from "./actionType"
import axios from 'axios'

export const addTodo = (obj) => (dispatch) => {
    dispatch({ type: LOADING })
    axios.post(`http://localhost:8080/todos`, obj)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data })

        }).catch((err) => {
            console.log(err)
            dispatch({ type: ERROR })
        })
}


export const getTodo = (dispatch) => {
    dispatch({ type: LOADING })
    axios.get(`http://localhost:8080/todos`)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_SUCCESS, payload: res.data })
        }).catch((err) => {
            console.log(err);
            dispatch({ type: ERROR })
        })
}

