import CardImovel from "../Cards/CardImovel"
import "./css/style.css"


export default function CardContainer(props: {cards: PropertySpecificCard[], totalPages :number}){
    
    return (
        <>
        <div className="cardsContainer">
            {props.cards.map((card) => (
                <CardImovel obj={card} idUser={1}/>
            ))}
        </div>
        </>
    );
}
