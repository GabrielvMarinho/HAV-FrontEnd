import { LOGIN } from "./actionType"

const initialValue = {
    signin: null
}

export const authReducer = (store = initialValue, { type, payload }) => {

    if (type === LOGIN) {
        return { ...store, signin: payload }
    }

    return store;
}