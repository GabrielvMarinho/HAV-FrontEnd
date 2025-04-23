import './css/style.css';

export default function Price(props: {obj: Pick<PropertySpecific, "PromotionalPrice" | "ActualPrice" | "taxes" | "purpose">}) {
    // Formatador para moeda brasileira
    console.log("taxes", props.obj.taxes)
    const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);

    return (
        <div className="Price" style={{ display: "flex", flexDirection: "column" }}>
            {props.obj.purpose === "vendaPromocao" && (
                <p className='PromotionalPrice'>{formatCurrency(props.obj.PromotionalPrice)}</p>
            )}
            <h1 className='ActualPrice'>{formatCurrency(props.obj.ActualPrice)}</h1>
            <p className='Taxes'>
                {props.obj.taxes.iptu? 
                <div style={{display:"flex", gap:"10px"}}>
                <p>IPTU</p>
                {formatCurrency(props.obj.taxes.iptu)}
                </div>
                :""}
                {props.obj.taxes.condominiumFee? 
                <div style={{display:"flex", gap:"10px"}}>
                <p>CONDOMÍNIO</p>
                {formatCurrency(props.obj.taxes.condominiumFee)}
                </div>
                :""}
            </p>
        </div>
    );
}
