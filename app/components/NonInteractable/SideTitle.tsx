import './css/style.css';

export default function SideTitle(props: { tag: string, text: string }) {
    //retorna um h1 caso ele seja o primeiro título da página
    if (props.tag == "h1") {
        return (
            <div className="sideTitle" style={{display: "flex", flexDirection: "column"}}>
                <p className='sizeSideTitle'>{props.text.toUpperCase()}</p>
                <div className="sideTitleLine"></div>
            </div>
        );
    }
    return (
        <div className="sideTitle" style={{ display: "flex", flexDirection: "column" }}>
            <p className='sizeSideTitle'>{props.text.toUpperCase()}</p>
            <div className="sideTitleLine"></div>
        </div>
    );
}