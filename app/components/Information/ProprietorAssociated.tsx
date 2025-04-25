import "./css/style.css";
import HorizontalLine from "../NonInteractable/HorizontalLine";
import Button from "../Inputs/Button";
import decodeDoubleBase64 from "@/app/utils/decodeDoubleBase64";

export default function ProprietorDetails(props: { proprietor: ProprietorGetResponseDTO, WhatsappLink: string }) {
    const { proprietor, WhatsappLink } = props;
    console.log("prop", proprietor)
    return (
        <div>
            <article style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px", marginTop:"20px" }}>
                    {proprietor.image ?
                                <img 
                                src={`data:image/png;base64,${props.proprietor.image}`} 
                                style={{ width: "120px", height:"120px", objectFit:"cover"}}
                                >
                                </img>
                        : 

                            <img
                            src="/Image/fotoSemPropriedade.png" 
                            alt="imagem user"
                            style={{ width: "120px", height:"120px", objectFit:"cover"}}

                            />

                        }
                
                            
                    
                <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                    <p className="realtorName">{proprietor.name}</p>
                    <p className="realtorEmail">{`Email - ${proprietor.email}`}</p>

                    <p className="realtorEmail">{proprietor.celphone ? `Telefone - ${proprietor.celphone}` : 'Telefone não informado'}</p>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${proprietor.email}`} target="_blank">


                        <Button type="button" size="large" text="Mandar E-mail" hover="darkHover" color="" background="" />

                        </a>
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


