import { CREATE_CHAT, GET_USERS_CHAT } from "./actionType";

export const createChat = (chatData: { token: any; data: any; }) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {

    try {

        const res = await fetch(`http://localhost:9090/api/chats/single`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${chatData.token}`,
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

export const getUsersChat = (chatData: { token: any; }) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {

    try {

        const res = await fetch(`http://localhost:9090/api/chats/user`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${chatData.token}`,
            },

        })

        const data = await res.json();
        console.log("users chat", data)
        dispatch({ type: GET_USERS_CHAT, payload: data })

    } catch (error) {
        console.log("catch error", error)
    }
}
