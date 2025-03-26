import "./css/style.css";
import DescriptionTitlePropertySpecific from "../NonInteractable/DescriptionTitlePropertySpecific";
import ArrowRight from "../IconsTSX/ArrowRight";

export default function OtherEnvironmentsProperty(props: { obj: Pick<PropertySpecific, "additional"> }) {
    const chunkSize = 3;
    
    // Verifica se additional é um objeto e extrai o nome corretamente
    const additionalName = props.obj.additional ? props.obj.additional.name : "Não informado";

    // Como é um único item, não precisa dividir em chunks
    const additionalChunks = [[additionalName]]; // Colocamos em uma lista para manter a estrutura

    return (
        <div className="divDescriptionPropertySpecific">
            <DescriptionTitlePropertySpecific text="Outros Ambientes" />
            <div style={{ display: "flex", gap: "50px" }}>
                {additionalChunks.map((chunk, colIndex) => (
                    <ul key={colIndex} className="enviromentsUl">
                        {chunk.map((item, index) => (
                            <li key={index} className="enviromentLi">
                                <ArrowRight width={25} height={25} color="var(--box-mid-dark-red)" />
                                <p className="enviromentName">{item}</p>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
