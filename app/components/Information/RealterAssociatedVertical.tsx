import "./css/style.css";
import decodeDoubleBase64 from "@/app/utils/decodeDoubleBase64";

export default function RealterAssociatedVertical(props: {
    objPropertyList: Pick<PropertySpecific, "realtorPropertySpecific">;
}) {
    console.log("realtor", props.objPropertyList)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <p id="realtor">CORRETOR (A) RESPONSÁVEL</p>
            {props.objPropertyList?.realtorPropertySpecific?.length ? (
                props.objPropertyList.realtorPropertySpecific.map((realtor, index) => (
                    <article key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "21px" }}>
                        {realtor.image ?
                                <img 
                                src={`data:image/png;base64,${realtor.image}`} 
                                style={{ width: "200px", height:"200px", objectFit:"cover"}}
                                >
                                </img>
                        : 

                            <img
                            src="/Image/fotoSemPropriedade.png" 
                            alt="imagem user"
                            style={{ width: "200px", height:"200px", objectFit:"cover"}}

                            />

                        }
                        <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                            <p id="realtorNameVertical">{realtor.name}</p>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>

                                <p id="realtorNumberVertical">Telefone - {realtor.phoneNumber}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>

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