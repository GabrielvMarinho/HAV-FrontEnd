export default function CategoryCardImovel(props: {text: string}){  
    const text = (props.text || "")
    const keywords = ["venda", "Locacao", "misto", "compra", "locação"];
    const backgroundColor = keywords.some(keyword => text.toLocaleLowerCase().includes(keyword))
    ? "var(--box-mid-dark-red)"
    : "var(--box-dark-red-option)"
    return(
        <div style={{display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "102px", 
        height: "23px", 
        borderRadius: "30px", 
        backgroundColor: backgroundColor, 
        fontSize: "var(--text-xs)"}}>
            <p style={{color: "var(--text-white)"}}>{props.text?.toUpperCase()}</p>
        </div>  
    );
}
