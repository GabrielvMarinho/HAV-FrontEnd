// src/redux/authAction.js
import { LOGIN, REQ_USER, SEARCH_USER } from "./actionType";

export const loginUser = (email: string, password: string) => async (dispatch) => {

    const url = "http://localhost:9090/auth/singin";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email: email, password: password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.jwt)
                localStorage.setItem("token", data.jwt)
            dispatch({ type: LOGIN, payload: data });
            dispatch(currentUser(data.jwt));

            return {
                success: true,
                jwt: data.jwt,
                user: data.user,
            };

        } else {
            const errorText = await response.json();
            return { success: false, message: errorText || "Login falhou" };
        }

    } catch (error) {
        return {
            success: false,
            message: "Erro ao tentar fazer login",
        };
    }
};

export const currentUser = (token) => async (dispatch) => {
    console.log("current user", token);
    try {
        const res = await fetch(`http://localhost:9090/api/usersecurity/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const resData = await res.json();
        console.log("current user", resData);
        dispatch({ type: REQ_USER, payload: resData })
    } catch (error) {
        console.log("catch error", error);
    }
}

export const searchUser = (data) => async (dispatch) => {
    console.log("search data", data);
    try {
        const res = await fetch(`http://localhost:9090/api/usersecurity/search?query=${data.keyword}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
            }
        })
        const resData = await res.json();
        console.log("search user", resData);
        dispatch({ type: SEARCH_USER, payload: resData })
    } catch (error) {
        console.log("catch error", error);
    }
}