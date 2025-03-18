import "./css/style.css"
import HorizontalLine from "../NonInteractable/HorizontalLine"
import Button from "../Inputs/Button";

export default function RealtorAssociated(props: { obj: Pick<Realtor, "id" | "name" | "email"> }) {
    return (
        <article style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px" }}>
            <div style={{ width: "160px", height: "160px", backgroundColor: "black" }}> </div>
            <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                <p className="realtorName">{props.obj.name}</p>
                <p className="realtorEmail">{`Email - ${props.obj.email}`}</p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "13px" }}>
                    <p className="realtorId">{`id: ${props.obj.id}`}</p>
                    <HorizontalLine size={203} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
                    <Button type="button"
                        size="large"
                        text="Mandar E-mail"
                        hover="darkHover"
                        color=""
                        background="" />
                    <p className="ou">OU</p>
                </div>
            </div>
        </article>
    );
}