"use client";
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import HeaderFavoritesPage from "@/app/components/Header/HeaderFavoritesPage";
import FavoriteCardContainer from "@/app/components/Information/FavoriteCardContainer";
import Dropdown from "@/app/components/Inputs/Dropdown";
import InputDropdown from "@/app/components/Inputs/InputDropdown";
import InputDropdownNoLabel from "@/app/components/Inputs/InputDropdownNoLabel";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./style/style.css"
import Button from "@/app/components/Inputs/Button";
import ButtonBackAPoint from "@/app/components/Inputs/ButtonBackAPoint";
import ButtonComparison from "@/app/components/Inputs/ButtonComparison";
import StarIcon from "@/app/components/IconsTSX/StarIcon";
import MapSearchResult from "@/app/components/Maps/MapSearchResult";


export default function page() {
    const searchParams = useSearchParams();
    const idUser = 2;
    
    const [favorites, setFavorites] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    
    useEffect(() => {
        if (!idUser) return;

        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:9090/favorites`, {
                    credentials:"include"
                });

                if (!response.ok) throw new Error("Erro ao buscar favoritos");

                const data = await response.json();
                const formattedProperty = data.content.map((property : any) => ({
                    ...property,
                    ...property.propertyFeatures,
                    ...property.address
                }))
    
                setFavorites(formattedProperty);
                setTotalPages(data.totalPages || 1);

            } catch (error) {
                console.error("Erro ao buscar favoritos:", error);
            }
        };

        fetchFavorites();
    }, [idUser]);

    
    
    if(searchParams.get("visualization")==="card"|| searchParams.get("visualization")===null){

        return (
        
            <>
                <HeaderFavoritesPage />
                <div className="containerFavoriteButtons">
                    <div className="dropDonwFavorite">
                        
                        <InputDropdownNoLabel 
                            key={dropdownFields.visualization.id}
                            name={dropdownFields.visualization.name}
                            size={dropdownFields.visualization.size}
                            title={dropdownFields.visualization.title}
                            id={dropdownFields.visualization.id}
                            options={dropdownFields.visualization.options}
                        />
                    </div>
    
                    <div className="buttonFavorite">
                        <ButtonComparison size={"small"} text="comparação" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" point={"/comparison"} />
                    </div>
                    
                </div>
            
                
                
                <section style={{ marginTop: "80px" }}>
                    <FavoriteCardContainer
                        cards={favorites}
                        totalPages={totalPages}
                        userId={idUser}
                    />
                </section>
            </>
        ); 
    }
    
    else if(searchParams.get("visualization")==="map"){

        return (
        
            <>
                <HeaderFavoritesPage />
                <div className="containerFavoriteButtons">
                    <div className="dropDonwFavorite">
                        
                        <InputDropdownNoLabel 
                            key={dropdownFields.visualization.id}
                            name={dropdownFields.visualization.name}
                            size={dropdownFields.visualization.size}
                            title={dropdownFields.visualization.title}
                            id={dropdownFields.visualization.id}
                            options={dropdownFields.visualization.options}
                        />
                    </div>
    
                    <div className="buttonFavorite">
                        <ButtonComparison size={"small"} text="comparação" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" point={"/comparison"} />
                    </div>
                    
                </div>
            
                
                
                <MapSearchResult favorite={true} height="30vw" width="60vw"/>

            </>
        ); 
    }

    else if(searchParams.get("visualization")==="list"){

        return (
        
            <>
                <HeaderFavoritesPage />
                <div className="containerFavoriteButtons">
                    <div className="dropDonwFavorite">
                        
                        <InputDropdownNoLabel 
                            key={dropdownFields.visualization.id}
                            name={dropdownFields.visualization.name}
                            size={dropdownFields.visualization.size}
                            title={dropdownFields.visualization.title}
                            id={dropdownFields.visualization.id}
                            options={dropdownFields.visualization.options}
                        />
                    </div>
    
                    <div className="buttonFavorite">
                        <ButtonComparison size={"small"} text="comparação" hover="darkHover" color="var(--text-white)" background="var(--text-light-red)" point={"/comparison"} />
                    </div>
                    
                </div>
            
                
                
                

            </>
        ); 
    }
    
}
