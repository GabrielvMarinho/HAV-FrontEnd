    import "./css/style.css"
    import TapeRetangleCardImovel from "../IconsTSX/TapeRetangleCardImovel";
    import TapeTopCardImovel from "../IconsTSX/TapeTopCardImovel";

    export default function TapeCardImovel(props: {text :string}) {
        if(props.text ==null || props.text ==undefined || props.text =="disponivel" ){
            return (
                <>
                </>
            );
        }
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <TapeTopCardImovel width={12} height={12} color="" />
                <div 
                    style={{
                        width: "144px",
                        height: "29px",
                        borderRadius: "4px",
                        backgroundColor: "var(--box-red-pink)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "13px"
                    }}>
                        {props.text =="promocao"?
                    <p style={{color: "var(--text-white)"}}>PROMOÇÃO</p>
:                    <p style={{color: "var(--text-white)"}}>{props.text?.toUpperCase()}</p>

                        }
                </div>
            </div>
        );
    }