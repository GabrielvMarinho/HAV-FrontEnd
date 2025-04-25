import "./css/style.css";


export default function RealterAssociatedVertical(props: {
    objPropertyList: Pick<PropertySpecific, "realtorPropertySpecific">;
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
                    
                                <p id="realtorNumberVertical">{realtor.phoneNumber}</p>
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