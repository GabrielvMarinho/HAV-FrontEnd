import CardImovel from "../Cards/CardImovel"
import PageManager from "../Inputs/PageManager";
import "./css/style.css"


export default function CardContainer(props: { cards: PropertySpecificCard[], totalPages: number }) {

    return (
        <>
            <div>
                <div className="cardsContainer">
                    {props.cards.map((card) => (
                        <CardImovel obj={card} idUser={1} />
                    ))}
                </div>
                <PageManager totalPages={props.totalPages} />
            </div>
        </>
    );
}
