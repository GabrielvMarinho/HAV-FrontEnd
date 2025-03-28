import "./css/style.css";

export default function StatusScheduling(props: { text: string }) {  
    const text = props.text || "";
    const statusClass = text.toLowerCase(); 

    return (
        <div className={`containerStatusScheduling ${statusClass}`}>
            <p>{text.toUpperCase()}</p>
        </div>  
    );
}