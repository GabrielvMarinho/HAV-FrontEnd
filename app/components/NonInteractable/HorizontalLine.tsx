import "./css/style.css"

export default function Line(props: {size :number}){
    return(
        <div style={{width: `${props.size}px`}} className="horizontalLine"></div>
    );
}