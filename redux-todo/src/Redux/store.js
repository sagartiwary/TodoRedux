
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk'
import { reducer as TodoReducer } from "./reducer"
export const store = legacy_createStore(TodoReducer, applyMiddleware(thunk))

