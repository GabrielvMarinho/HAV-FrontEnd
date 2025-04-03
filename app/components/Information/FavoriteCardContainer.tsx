import CardImovel from "../Cards/CardImovel"
import PageManager from "../Inputs/PageManager";
import "./css/style.css"


export default function FavoriteCardContainer(props: { cards: PropertySpecificCard[], totalPages: number, userId: number }) {

    return (
        <>
            <div>
                <div className="cardsContainer">
                    {props.cards.map((card) => (
                        <CardImovel obj={card} idUser={props.userId} />
                    ))}
                </div>
                <PageManager totalPages={props.totalPages} />
            </div>
        </>
    );
}
