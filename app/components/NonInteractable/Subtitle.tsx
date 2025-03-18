import "./css/style.css"

export default function Subtitle(props: { text: string; lineDirection: string }) {
    if(props.lineDirection == "center") {
        return (
            <div className="subtitle" style={{ display: "flex", flexDirection: "column" }}>
                <h1 className='sizesubtitle'>{props.text.toUpperCase()}</h1>
                <div className="subtitleLine"></div>
            </div>
        );
    }
    return (
        <div className="subtitle" style={{ display: "flex", flexDirection: "column", alignItems: "left"}}>
            <h1 className='sizesubtitle'>{props.text.toUpperCase()}</h1>
            <div className="subtitleLine"></div>
        </div>
    );
}