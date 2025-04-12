const BASE_URL = `http://localhost:9090/api`;

export default async function readNotification(props: { id: number }) {
    try {
        const response = await fetch(`${BASE_URL}/readNotification/${props.id}`, {
            method: "PUT",
        });

        if (!response.ok) throw new Error("Notificação não encontrada");
        return true;
    } catch (e) {
        console.log(e, "Erro no método de marcar notificação como lida");
        return false;
    }
}
