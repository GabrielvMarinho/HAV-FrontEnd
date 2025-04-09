import { LOGIN, REQ_USER, SEARCH_USER } from "./actionType"

const initialValue = {
    signin: null,
    reqUser: null,
    searchUser: null
}

export const authReducer = (store = initialValue, { type, payload }) => {

    if (type === LOGIN) {
        return { ...store, signin: payload }
    } else if (type === REQ_USER) {
        return { ...store, reqUser: payload }
    } else if (type === SEARCH_USER) {
        return { ...store, searchUser: payload }
    }

    return store;
}