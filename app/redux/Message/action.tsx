import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE, MARK_MESSAGES_AS_READ, SET_UNREAD_COUNTS } from "./actionType";

export const createMessage = (messageData) => async (dispatch) => {

    try {

        const res = await fetch(`http://localhost:9090/api/messages/create`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${messageData.token}`
            },
            body: JSON.stringify(messageData.data)
        })

        const data = await res.json();
        console.log("create message", data)
        dispatch({ type: CREATE_NEW_MESSAGE, payload: data })

    } catch (error) {
        console.log("catch error", error)
    }
}

export const getAllMessage = (reqData) => async (dispatch) => {

    try {
        const res = await fetch(`http://localhost:9090/api/messages/chat/${reqData.chatId}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${reqData.token}`
            },
        })

        const data = await res.json();
        console.log("get all message", data)
        dispatch({ type: GET_ALL_MESSAGE, payload: data })

    } catch (error) {
        console.log("catch error", error)
    }
}

export const fetchUnreadCounts = (token) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:9090/api/messages/unread-counts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log("Unread messages per chat:", data);

        dispatch({ type: SET_UNREAD_COUNTS, payload: data });

    } catch (err) {
        console.log("Erro ao buscar contagens de mensagens não lidas", err);
    }
}

export const markMessagesAsRead = (chatId) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:9090/api/messages/read/${chatId}`, {
            method: "PUT",
            credentials: "include",
        });

        if (res.ok) {
            console.log(`Mensagens do chat ${chatId} marcadas como lidas.`);
            dispatch({ type: MARK_MESSAGES_AS_READ, payload: chatId });
        } else {
            console.error("Erro ao marcar mensagens como lidas:", res.status);
        }
    } catch (error) {
        console.error("Erro na requisição markMessagesAsRead:", error);
    }
};
