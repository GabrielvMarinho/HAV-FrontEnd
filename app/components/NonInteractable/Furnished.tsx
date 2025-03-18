import "./css/style.css"

export default function Furnished(props : {obj :Pick<PropertySpecific, "isFurnished">}){
    return (
        <p className="isFurnishedText">{props.obj.isFurnished ? "Mobiliado" : "Não Mobiliado"}</p>  
    );
}