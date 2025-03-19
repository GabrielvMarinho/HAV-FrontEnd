import './css/style.css';

export default function Title(props: { tag: string, text: string }) {
    //retorna um h1 caso ele seja o primeiro título da página
    if (props.tag == "h1") {
        return (
            <div className="title" style={{display: "flex", flexDirection: "column"}}>
                <h2 className='sizeTitle'>{props.text.toUpperCase()}</h2>
                <div className="titleLine"></div>
            </div>
        );
    }
    return (
        <div className="title" style={{ display: "flex", flexDirection: "column" }}>
            <h2 className='sizeTitle'>{props.text.toUpperCase()}</h2>
            <div className="titleLine"></div>
        </div>
    );
}