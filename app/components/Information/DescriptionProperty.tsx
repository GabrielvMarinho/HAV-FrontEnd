import "./css/style.css"
import InterestPointsPropertySpecific from "../NonInteractable/InterestPoints";

export default function DescriptionProperty(props: { obj: Pick<PropertySpecific, "propertyDescription"> }) {
    return (
        <div className="divDescriptionProperty">
            <InterestPointsPropertySpecific text="Descrição" />
            <p id="descriptionProperty">{props.obj.propertyDescription}</p>
        </div>
    );
}