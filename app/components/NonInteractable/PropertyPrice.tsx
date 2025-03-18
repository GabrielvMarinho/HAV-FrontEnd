import './css/style.css';

export default function Price(props: { PromotionalPrice: string; ActualPrice: string; Taxes: string; Purpose: string }) {
    if (props.Purpose == "venda") {
        return (
            <div className="Price" style={{ display: "flex", flexDirection: "column" }}>
                <h1 className='ActualPrice'>{`R$ ${props.ActualPrice.toUpperCase()},00`}</h1>
                <p className='Taxes'>IPTU: {`R$ ${props.Taxes.toUpperCase()},00`}</p>
            </div>
        );
    } else if (props.Purpose == "vendaPromocao") {
        return (
            <div className="Price" style={{ display: "flex", flexDirection: "column" }}>
                <p className='PromotionalPrice'>{`R$ ${props.PromotionalPrice.toUpperCase()},00`}</p>
                <h1 className='ActualPrice'>{`R$ ${props.ActualPrice.toUpperCase()},00`}</h1>
                <p className='Taxes'>IPTU: {`R$ ${props.Taxes.toUpperCase()},00`}</p>
            </div>
        );
    } else if (props.Purpose == "locacao") {
        return (
            <div className="Price" style={{ display: "flex", flexDirection: "column" }}>
                <h1 className='ActualPrice'>{`R$ ${props.ActualPrice.toUpperCase()},00 /MÊS`}</h1>
                <p className='Taxes'>{`Condomínio: ${props.Taxes.toUpperCase()}`}</p>
            </div>
        );
    }
}