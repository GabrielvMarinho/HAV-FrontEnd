import "./css/style.css"
import DescriptionTitlePropertySpecific from "../NonInteractable/DescriptionTitlePropertySpecific";

export default function DescriptionProperty(props: { obj: Pick<PropertySpecific, "description"> }) {
    return (
        <div id="divDescriptionProperty">
            <DescriptionTitlePropertySpecific text="Descrição" />
            <p id="descriptionProperty">{props.obj.description}</p>
        </div>
    );
}