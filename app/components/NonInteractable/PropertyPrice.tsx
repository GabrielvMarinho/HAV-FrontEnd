import './css/style.css';

export default function Price(props: {PromotionalPrice: string; ActualPrice: string; Taxes: string; Purpose: string}){
    if (props.Purpose === "venda") {
        return (
            <div className="Price" style={{display: "flex", flexDirection: "column"}}>
                <h1 className='ActualPrice'>{props.ActualPrice.toUpperCase()}</h1>
                <p className='Taxes'>IPTU: {props.Taxes.toUpperCase()}</p>
            </div>
        );
    } else if (props.Purpose === "vendaPromocao") {
        return (
            <div className="Price" style={{display: "flex", flexDirection: "column"}}>
                <p className='PromotionalPrice'>{props.PromotionalPrice.toUpperCase()}</p>
                <h1 className='ActualPrice'>{props.ActualPrice.toUpperCase()}</h1>
                <p className='Taxes'>IPTU: {props.Taxes.toUpperCase()}</p>
            </div>
        );
    } else if (props.Purpose === "locacao") {
        return ( 
            <div className="Price" style={{display: "flex", flexDirection: "column"}}>
                <h1 className='ActualPrice'>{props.ActualPrice.toUpperCase()}/MÊS</h1>
                <p className='Taxes'>Condomínio: {props.Taxes.toUpperCase()}</p>
            </div>
        );
    }
}