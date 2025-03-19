import "./css/style.css"

export default function DescriptionTitlePropertySpecific(props :{text :string}){
    return(
        <div className="divDescriptionTitlePropertySpecific">
            <p className="descriptionTitlePropertySpecific">{props.text}</p>
            <div className="lineDescriptionTitlePropertySpecific"></div>
        </div>
    );
}