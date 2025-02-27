export default function RetangleStatusImovel(props: { text: string }) {
    return (
        <div
            style={{
                width: "144px",
                height: "29px",
                borderRadius: "4px",
                backgroundColor: "var(--box-red-pink)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <p style={{ color: "var(--text-white)" }}>{props.text}</p>
        </div>
    );
}