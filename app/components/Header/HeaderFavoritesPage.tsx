import NotSelectedStar from "@/app/components/IconsTSX/NotSelectedStar"
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine"

export default function HeaderFavoritesPage() {
    return (

        <div style={{ display: "flex", flexDirection: "row", gap: "35px" }}>
            <NotSelectedStar width={60} height={60} color="#81303D" />
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                <p className="favoritesP1">Meus</p>
                <p className="favoritesP2">Favoritos</p>
                <div style={{margin: "7px 0 0 110px"}}>
                    <HorizontalLine size={846} />
                </div>
            </div>

        </div>




    );
}