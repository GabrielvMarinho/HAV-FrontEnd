import './css/style.css';

export default function Price(props: {obj: Pick<PropertySpecific, "PromotionalPrice" | "ActualPrice" | "taxes" | "purpose">}) {
    // Formatador para moeda brasileira
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
                {props.obj.purpose === "locacao" ? "Condomínio: " : "IPTU: "}
                {formatCurrency(props.obj.taxes)}
            </p>
        </div>
    );
}
