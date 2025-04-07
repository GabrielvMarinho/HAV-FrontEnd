import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const initialValue = {

}

const authReducer = (store = initialValue, { type, payload }) => {

    if (type === REGISTER) {
        
    }
}

const rootReducer = combineReducers({
    // auth: authReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))