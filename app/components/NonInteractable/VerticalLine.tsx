import "./css/style.css"

export default function Line(props: {height :number}){
    return(
        <div style={{height: `${props.height}px`}} className="verticalLine"></div>
    );
}