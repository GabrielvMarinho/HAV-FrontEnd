import "./css/style.css";


export default function RealterAssociatedVertical(props: { obj: Pick<Realtor, "name" | "cellphone"> }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <p id="realtor">corretor</p>
            <div style={{ width: "170px", height: "170px", borderRadius: "99px", backgroundColor: "black" }}></div>
            <p id="realtorNameVertical">{props.obj.name}</p>
            <p id="realtorNumberVertical">
                <img src="/Image/whatsapp.png" alt="Whatsapp icon" />
                {props.obj.cellphone}
            </p>
        </div>
    );
}