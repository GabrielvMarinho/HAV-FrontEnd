import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE, MARK_MESSAGES_AS_READ, SET_UNREAD_COUNTS } from "./actionType"

const initialValue = {
    messages: [],
    newMessage: null,
    unreadCounts: []
}

export const messageReducer = (store = initialValue, { type, payload }) => {

    if (type === CREATE_NEW_MESSAGE) {
        return { ...store, newMessage: payload }
    } else if (type === GET_ALL_MESSAGE) {
        return { ...store, messages: payload }
    } else if (type === SET_UNREAD_COUNTS) {
        return { ...store, unreadCounts: payload }
    } else if (type === MARK_MESSAGES_AS_READ) {
        return {
            ...store,
            unreadCounts: store.unreadCounts.filter(item => item.chatId !== payload)
        }
    }

    return store;
}