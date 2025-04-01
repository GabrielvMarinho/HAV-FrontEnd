"use client";
import { useState } from "react";
import SelectedStar from "../IconsTSX/SelectedStar";
import NotSelectedStar from "../IconsTSX/NotSelectedStar";
import { favoriteProperty} from "@/app/apiCalls/Property/FavoriteProperty";
import { unfavoriteProperty}  from "@/app/apiCalls/Property/UnFavoriteProperty";

interface StarFavoriteProps {
    idUser: number;
    idProperty: number;
    selected: boolean;
    width: number;
    height: number;
    color: string;
}

export default function StarFavorite({ idUser, idProperty, selected, width, height, color}: StarFavoriteProps) {
    const [isFavorite, setIsFavorite] = useState(selected);

    const toggleStar = async () => {
        try {
            if (isFavorite) {
                await unfavoriteProperty(idUser, idProperty);
                console.log("Propriedade removida dos favoritos.");
            } else {
                await favoriteProperty(idUser, idProperty);
                console.log("Propriedade favoritada.");
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Erro ao favoritar/desfavoritar:", error);
        }
    };

    return (
        <div onClick={toggleStar} style={{ cursor: "pointer" }}>
            {isFavorite ? (
                <SelectedStar width={width} height={height} color={color} />
            ) : (
                <NotSelectedStar width={width} height={height} color={"#000000"} />
            )}
        </div>
    );
}
