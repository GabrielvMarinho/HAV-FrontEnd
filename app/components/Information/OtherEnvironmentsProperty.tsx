import "./css/style.css";
import DescriptionTitlePropertySpecific from "../NonInteractable/DescriptionTitlePropertySpecific";
import ArrowRight from "../IconsTSX/ArrowRight";

export default function OtherEnvironmentsProperty(props: { obj: Pick<PropertySpecific, "additional"> }) {
    const chunkSize = 3; 
    const additionalChunks = props.obj.additional.reduce<string[][]>((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

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
