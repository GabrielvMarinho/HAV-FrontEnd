import { CREATE_CHAT, GET_USERS_CHAT } from "./actionType";

export const createChat = (chatData) => async (dispatch) => {

    try {

        const res = await fetch(`localhost:9090/api/single`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${chatData.token}`
            },
            body: JSON.stringify(chatData.data)
        })

        const data = await res.json();
        console.log("create chat", data)
        dispatch({ type: CREATE_CHAT, payload: data })

    } catch (error) {
        console.log("catch error", error)
    }
}

export const getUsersChat = (chatData) => async (dispatch) => {

    try {

        const res = await fetch(`localhost:9090/api/chats/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${chatData.token}`
            },

        })

        const data = await res.json();
        console.log("create chat", data)
        dispatch({ type: GET_USERS_CHAT, payload: data })

    } catch (error) {
        console.log("catch error", error)
    }
}