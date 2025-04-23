"use client";
import { useEffect, useState } from "react";
import SelectedStar from "../IconsTSX/SelectedStar";
import NotSelectedStar from "../IconsTSX/NotSelectedStar";
import { favoriteProperty } from "@/app/apiCalls/Property/FavoriteProperty";
import { unfavoriteProperty } from "@/app/apiCalls/Property/UnFavoriteProperty";

interface StarFavoriteProps {
    idUser: number;
    idProperty: number;
    selected: boolean; // Esse valor pode não estar atualizado corretamente ao carregar a página
    width: number;
    height: number;
    color: string;
}

export default function StarFavorite({ idUser, idProperty, selected, width, height, color }: StarFavoriteProps) {
    const [isFavorite, setIsFavorite] = useState(selected);

    //verificar se já está favoritada pra ficar com estilização certa
    useEffect(() => {
        const checkFavoriteStatus = async () => {
            try{
                const response = await fetch(`http://localhost:9090/favorites/map`)
                const data = await response.json();

                const isPropertyFavorited = data.content.some((property: any) => property.id === idProperty);
                setIsFavorite(isPropertyFavorited);
            }catch(e){
                console.log(e);
            }
        };

        checkFavoriteStatus();
    }, [idUser, idProperty]);


    const toggleStar = async () => {
        try {
            if (isFavorite) {
                
                await unfavoriteProperty(idUser, idProperty);
                console.log("Propriedade removida dos favoritos.");
                setIsFavorite(false); 
               
            } else {
                await favoriteProperty(idUser, idProperty);
                console.log("Propriedade favoritada.");
                setIsFavorite(true); 
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Erro ao favoritar/desfavoritar:", error);
        }
    };

    return (
        <div onClick={toggleStar} style={{ cursor: "pointer" }}>
            {!isFavorite ? (
                <SelectedStar width={width} height={height} color={color} />
            ) : (
                <NotSelectedStar width={width} height={height} color={color} />
            )}
        </div>
    );
}
