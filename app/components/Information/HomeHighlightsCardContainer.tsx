import CardImovel from "../Cards/CardImovel"
import PageManager from "../Inputs/PageManager";
import "./css/style.css"


export default function HomeHighlightsCardContainer(props: { cards: PropertySpecificCard[], totalPages: number}) {
    return (
        <>
            <div>
                <div className="cardsContainer">
                    {(props.cards ?? []).map((card) => (
                        <CardImovel key={card.id} obj={card}/>
                    ))}
                </div>
                <PageManager totalPages={props.totalPages} />
            </div>
            
            
        </>
    );
}