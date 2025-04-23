"use client";
import { useEffect, useState } from "react";
import SelectedStar from "../IconsTSX/SelectedStar";
import NotSelectedStar from "../IconsTSX/NotSelectedStar";
import { favoriteProperty } from "@/app/apiCalls/Property/FavoriteProperty";
import { unfavoriteProperty } from "@/app/apiCalls/Property/UnFavoriteProperty";

interface StarFavoriteProps {
    idProperty: any;
    selected: boolean; // Esse valor pode não estar atualizado corretamente ao carregar a página
    width: number;
    height: number;
    color: string;
}

export default function StarFavorite({ idProperty, selected, width, height, color }: StarFavoriteProps) {
    const [isFavorite, setIsFavorite] = useState(selected);

    //verificar se já está favoritada pra ficar com estilização certa
    useEffect(() => {
        
        const checkFavoriteStatus = async () => {
            try{
                const response = await fetch(`http://localhost:9090/favorites/isFavorited/${idProperty}`,{
                method: "GET",    
                credentials: "include"
                })
                const data = await response.json();
                setIsFavorite(data)

                const isPropertyFavorited = data.content.some((property: any) => property.id === idProperty);
                setIsFavorite(isPropertyFavorited);
            }catch(e){
                console.log(e);
            }
        };

        checkFavoriteStatus();
    }, [idProperty]);


    const toggleStar = async () => {
        try {
            if (isFavorite) {
                
                await unfavoriteProperty(idProperty);
                console.log("Propriedade removida dos favoritos.");
                setIsFavorite(false); 
               
            } else {
                await favoriteProperty(idProperty);
                console.log("Propriedade favoritada.");
                setIsFavorite(true); 
            };
        } catch (error) {
            console.error("Erro ao favoritar/desfavoritar:", error);
        }
    };

    return (
        <div onClick={toggleStar} style={{ cursor: "pointer" }}>
            {isFavorite ? (
                <NotSelectedStar width={width} height={height} color={color} />
            ) : (
                <SelectedStar width={width} height={height} color={color} />
            )}
        </div>
    );
}
