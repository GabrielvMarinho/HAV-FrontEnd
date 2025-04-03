import "./css/style.css";

export default function StatusScheduling(props: { size?:boolean, text: string }) {  
    const text = props.text || "";
    const statusClass = text.toLowerCase(); 

    return (
        <div className={`containerStatusScheduling ${statusClass} ${props.size?"containerStatusSchedulingSmaller":""}`}>
            <p>{text.toUpperCase()}</p>
        </div>  
    );
}