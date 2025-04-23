import "./css/style.css";
import HorizontalLine from "../NonInteractable/HorizontalLine";
import Button from "../Inputs/Button";

export default function ProprietorDetails(props: { proprietor: ProprietorGetResponseDTO, WhatsappLink: string }) {
    const { proprietor, WhatsappLink } = props;

    return (
        <div>
            <article style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px" }}>
                <div style={{ width: "160px", height: "160px", backgroundColor: "black" }}></div>
                <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                    <p className="realtorName">{proprietor.name}</p>
                    <p className="realtorEmail">{`Email - ${proprietor.email}`}</p>

                    <p className="realtorEmail">{proprietor.celphone ? `Telefone - ${proprietor.celphone}` : 'Telefone não informado'}</p>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
                        <Button type="button" size="large" text="Mandar E-mail" hover="darkHover" color="" background="" />
                        <p className="ou">OU</p>
                        <a href={WhatsappLink}>
                            <img src="/Image/whatsapp.png" alt="Whatsapp icon" />
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
}


