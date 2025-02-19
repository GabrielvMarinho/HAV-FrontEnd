import './components.css';


export default function Title(props: {size :string, tag :string, text :string}){
    if(props.tag=="h1"){
        return (
            <div className="title" style={{display: "flex", flexDirection: "column"}}>
                <h1 className={props.size+"Title"}>{props.text.toUpperCase()}</h1>
                <div className="titleLine"></div>
            </div>
        );
    }
    return ( 
        <div className="title" style={{display: "flex", flexDirection: "column"}}>
                <h2 className={props.size+"Title"}>{props.text.toUpperCase()}</h2>
                <div className="titleLine"></div>
            </div>
    );
}