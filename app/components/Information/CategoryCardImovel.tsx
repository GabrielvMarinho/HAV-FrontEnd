import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";

export default function CategoryCardImovel(props: { text: string }) {
    const label = globalDatabaseNameConverter[props.text];

    if (!label) return null;

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "102px",
            height: "23px",
            borderRadius: "30px",
            backgroundColor: "var(--box-mid-dark-red)",
            fontSize: "var(--text-xs)"
        }}>
            <p style={{ color: "var(--text-white)" }}>{label.toUpperCase()}</p>
        </div>
    );
}
