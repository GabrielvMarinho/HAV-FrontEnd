export default async function login(email: string, password: string) {
    const url = "http://localhost:9090/auth/login";

    try {
        const response = await fetch(url, {
            method: "POST",
          credentials:"include",
            headers: {
                "Content-Type": "application/json",
            },
            credentials:"include",
            body: JSON.stringify({ username: email, password: password }),
        });

        if (response.ok) {
            const data = await response.text(); 
            return {
                success: true,
                message: data,
            };
        } else {
            const errorText = await response.text();
            return {
                success: false,
                message: errorText || "Login falhou",
                status: response.status,
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "Algum erro ocorreu ao tentar fazer login",
            error: error instanceof Error ? error.message : String(error),
        };
    }
}
