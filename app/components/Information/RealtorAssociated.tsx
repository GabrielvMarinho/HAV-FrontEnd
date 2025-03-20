// import "./css/style.css";
// import HorizontalLine from "../NonInteractable/HorizontalLine";
// import Button from "../Inputs/Button";

// export default function RealtorAssociated(props: { objPropertyList: Pick<PropertySpecific, "realtors"> }) {
//     return (
//         <div>
//             <h3>Corretores Associados</h3>
//             {props.objPropertyList.realtors.length > 0 ? (
//                 props.objPropertyList.realtors.map((realtor, index) => (
//                     <article key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px" }}>
//                         <div style={{ width: "160px", height: "160px", backgroundColor: "black" }}> </div>
//                         <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
//                             <p className="realtorName">{realtor.name}</p>
//                             <p className="realtorEmail">{`Email - ${realtor.email}`}</p>
//                             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "13px" }}>
//                                 <p className="realtorId">{`id: ${realtor.id}`}</p>
//                                 <HorizontalLine size={203} />
//                             </div>
//                             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
//                                 <Button type="button" size="large" text="Mandar E-mail" hover="darkHover" color="" background="" />
//                                 <p className="ou">OU</p>
//                                 <img src="/Image/whatsapp.png" alt="Whatsapp icon" />
//                             </div>
//                         </div>
//                     </article>
//                 ))
//             ) : (
//                 <p>Nenhum corretor associado.</p>
//             )}
//         </div>
//     );
// }



import "./css/style.css";
import HorizontalLine from "../NonInteractable/HorizontalLine";
import Button from "../Inputs/Button";

export default function RealtorAssociated(props: { objPropertyList: Pick<PropertySpecific, "realtors">,
obj: Pick<Realtor, "id" | "name" | "email"> }) {
    return (
        <div>
            <h3>Corretores Associados</h3>
            {props.objPropertyList.realtors.length > 0 ? (
                props.objPropertyList.realtors.map((realtor, index) => (
                    <article key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px" }}>
                        <div style={{ width: "160px", height: "160px", backgroundColor: "black" }}> </div>
                        <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "9px" }}>
                            <p className="realtorName">{realtor.name}</p>
                            <p className="realtorEmail">{`Email - ${realtor.email}`}</p>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "13px" }}>
                                <p className="realtorId">{`id: ${realtor.id}`}</p>
                                <HorizontalLine size={203} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
                                <Button type="button" size="large" text="Mandar E-mail" hover="darkHover" color="" background="" />
                                <p className="ou">OU</p>
                                <img src="/Image/whatsapp.png" alt="Whatsapp icon" />
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
