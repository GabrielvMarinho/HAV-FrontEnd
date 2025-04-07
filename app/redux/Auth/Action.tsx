import { LOGIN, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./ActionType";

export const register = (data) => async (dispatch) => {
    try {
        const res = await fetch(`localhost:9090/auth/singup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await res.json();
        console.log("register", resData)
        dispatch(type: REGISTER, payload: resData)
    } catch (error) {
        console.log("catch error ", error)
    }
}

export const login = (data) => async (dispatch) => {
    try {
        const res = await fetch(`localhost:9090/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await res.json();
        console.log("register", resData)
        dispatch(type: LOGIN, payload: resData)
    } catch (error) {
        console.log("catch error ", error)
    }
}

export const currentUser = (token) => async (dispatch) => {
    try {
        const res = await fetch(`localhost:9090/users/profile`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })

        const resData = await res.json();
        console.log("register", resData)
        dispatch(type: REQ_USER, payload: resData)
    } catch (error) {
        console.log("catch error ", error)
    }
}

export const searchUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`localhost:9090/users/search?name=${data.keyword}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${data.token}`,
                "Content-Type": "application/json"
            },
        })

        const resData = await res.json();
        console.log("register", resData)
        dispatch(type: SEARCH_USER, payload: resData)
    } catch (error) {
        console.log("catch error ", error)
    }
}

export const updateUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`localhost:9090/users/update/${data.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${data.token}`,
                "Content-Type": "application/json"
            },
        })

        const resData = await res.json();
        console.log("register", resData)
        dispatch(type: UPDATE_USER, payload: resData)
    } catch (error) {
        console.log("catch error ", error)
    }
}   