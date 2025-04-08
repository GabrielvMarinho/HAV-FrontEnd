// src/redux/authAction.js
import { LOGIN } from "./actionType";

export const loginUser = (email: string, password: string) => async (dispatch: (arg0: { type: string; payload: string; }) => void) => {

    const url = "http://localhost:9090/auth/login";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ username: email, password: password }),
        });

        if (response.ok) {
            const data = await response.text();

            dispatch({ type: LOGIN, payload: data });

            return { success: true, message: data };

        } else {
            const errorText = await response.text();
            return { success: false, message: errorText || "Login falhou" };
        }

    } catch (error) {
        return {
            success: false,
            message: "Erro ao tentar fazer login",
        };
    }
};
