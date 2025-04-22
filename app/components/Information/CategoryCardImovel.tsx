import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";

export default function CategoryCardImovel(props: {text: string}){  
    console.log(globalDatabaseNameConverter[props.text])
    if(props.text ==null || props.text ==undefined ){
        return (
            <>
            </>
        );
    }
    // const text = (props.text || "")
    // const keywords = ["venda", "locacao", "misto", "compra"];
    // const backgroundColor = keywords.some(keyword => text.toLocaleLowerCase().includes(keyword))
    // ? "var(--box-mid-dark-red)"
    // : "var(--box-dark-red-option)"
    return(
        <div style={{display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "102px", 
        height: "23px", 
        borderRadius: "30px", 
        backgroundColor: "var(--box-mid-dark-red)", 
        fontSize: "var(--text-xs)"}}>
            <p style={{color: "var(--text-white)"}}>{globalDatabaseNameConverter[props.text].toUpperCase()}</p>
        </div>  
    );
}
