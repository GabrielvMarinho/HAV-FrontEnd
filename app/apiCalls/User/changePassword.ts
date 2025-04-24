export default async function changePassword(token: string, newPassword: string) {
    try {
        const response = await fetch('http://localhost:9090/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, newPassword })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao redefinir a senha.');
        }

        return data; // { status: true, message: "Senha alterada com sucesso." }
    } catch (error: any) {
        return {
            status: false,
            message: error.message
        };
    }
}
