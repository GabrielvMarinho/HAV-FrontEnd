import CardImovel from "../Cards/CardImovel"
import PageManager from "../Inputs/PageManager";
import "./css/style.css"


export default function CardContainer(props: { cards: PropertySpecificCard[], totalPages: number }) {

    return (
        <>
            <div>
                <div className="cardsContainer">
                    {Array.isArray(props.cards) && props.cards.map((card) => (
                        <CardImovel key={card.id} obj={card} idUser={0} />
                    ))}

                </div>
                <PageManager totalPages={props.totalPages} />
            </div>
        </>
    );
}
