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
import "../style/style.css"
import Button from "@/app/components/Inputs/Button";
import ButtonBackAPoint from "@/app/components/Inputs/ButtonBackAPoint";
import ButtonComparison from "@/app/components/Inputs/ButtonComparison";
import StarIcon from "@/app/components/IconsTSX/StarIcon";

export default function Favorite() {
    const { id: idUser } = useParams();
    const searchParams = useSearchParams();

    const [favorites, setFavorites] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!idUser) return;

        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:9090/favorites/${idUser}`);

                if (!response.ok) throw new Error("Erro ao buscar favoritos");

                const data = await response.json();
                const formattedProperty = data.content.map((property : any) => ({
                    ...property,
                    ...property.propertyFeatures,
                    ...property.address
                }))
    
                setFavorites(formattedProperty);
                setTotalPages(data.totalPages || 1);

                console.log("Favoritos recebidos:", data);
            } catch (error) {
                console.error("Erro ao buscar favoritos:", error);
            }
        };

        fetchFavorites();
    }, [idUser]);

    useEffect(() => {
        const fetchProperties = async () => {
            const params: any = {};

            if (searchParams.has("propertyCode")) params.propertyCode = searchParams.get("propertyCode");
            if (searchParams.has("minPrice")) params.minPrice = Number(searchParams.get("minPrice"));
            if (searchParams.has("maxPrice")) params.maxPrice = Number(searchParams.get("maxPrice"));
            if (searchParams.has("propertyType")) params.propertyType = searchParams.get("propertyType");
            if (searchParams.has("propertyStatus")) params.propertyStatus = searchParams.get("propertyStatus");
            if (searchParams.has("page")) params.page = Number(searchParams.get("page"));
            else params.page = 0;
            if (searchParams.has("purpose")) params.purpose = searchParams.get("purpose");

          
            const propertyFeatures = {
                bedRoom: searchParams.has("bedRoom") ? Number(searchParams.get("bedRoom")) : undefined,
                bathRoom: searchParams.has("bathRoom") ? Number(searchParams.get("bathRoom")) : undefined,
                garageSpace: searchParams.has("garageSpace") ? Number(searchParams.get("garageSpace")) : undefined,
                suite: searchParams.has("suite") ? Number(searchParams.get("suite")) : undefined,
                livingRoom: searchParams.has("livingRoom") ? Number(searchParams.get("livingRoom")) : undefined,
            };

            console.log("Parâmetros capturados:", propertyFeatures);

            try {
                const { properties, totalPages } = await getByParamsPropertiesCard(
                    params.propertyCode,
                    params.propertyType,
                    params.propertyStatus,
                    params.minPrice,
                    params.maxPrice,
                    false,
                    params.page,
                    propertyFeatures.bedRoom,
                    propertyFeatures.bathRoom,
                    propertyFeatures.garageSpace,
                    propertyFeatures.suite,
                    propertyFeatures.livingRoom,
                    params.purpose
                );

                console.log("Propriedades recebidas:", properties);
            } catch (error) {
                console.error("Erro ao buscar propriedades:", error);
            }
        };

        fetchProperties();
    }, [searchParams]);

    return (
        <>
            <HeaderFavoritesPage />
            <div className="containerFavoriteButtons">
                <div className="dropDonwFavorite">
                    <InputDropdownNoLabel 
                        key={dropdownFields.order.id}
                        name={dropdownFields.order.name}
                        size={dropdownFields.order.size}
                        title={dropdownFields.order.title}
                        id={dropdownFields.order.id}
                        options={dropdownFields.order.options}
                    />
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
