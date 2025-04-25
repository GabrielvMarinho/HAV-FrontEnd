import "./css/style.css";


export default function RealterAssociatedVertical(props: {
    objPropertyList: Pick<PropertySpecific, "realtorPropertySpecific">;
    InstagramLink: string;
    WhatsappLink: string;
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <p id="realtor">CORRETOR (A)</p>
            {props.objPropertyList?.realtorPropertySpecific?.length ? (
                props.objPropertyList.realtorPropertySpecific.map((realtor, index) => (
                    <article key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "21px" }}>
                        <div style={{ width: "160px", height: "160px", backgroundColor: "black" }}> </div>
                        <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                            <p id="realtorNameVertical">{realtor.name}</p>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                <a href={props.WhatsappLink} target="_blank" rel="noopener noreferrer">
                                    <img src="/Image/whatsapp.png" alt="Instagram Icons" />
                                </a>
                                <p id="realtorNumberVertical">{realtor.phoneNumber}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                <a href={props.InstagramLink} target="_blank" rel="noopener noreferrer">
                                    <img src="/Image/Instagram.png" alt="Whatsapp icon" />
                                </a>
                                <p id="realtorNumberVertical">@nathanj.oao</p> {/*era pra ser o atributo @ */}
                            </div>
                        </div>
                    </article>
                ))
            ) : (
                <p>Nenhum corretor associado.</p>
            )}
        </div>
    );
}