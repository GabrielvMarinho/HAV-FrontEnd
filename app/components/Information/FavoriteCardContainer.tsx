import CardImovel from "../Cards/CardImovel"
import PageManager from "../Inputs/PageManager";
import "./css/style.css"


export default function FavoriteCardContainer(props: { cards: PropertySpecificCard[], userId: number }) {
    return (
        <>
            <div>
                <div className="cardsContainer">
                    {props.cards.map((card) => (
                        <CardImovel key={card.id} obj={card} idUser={props.userId} />
                    ))}
                </div>
            </div>
            
            
        </>
    );
}
