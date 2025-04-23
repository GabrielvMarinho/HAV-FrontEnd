"use client";
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import HeaderFavoritesPage from "@/app/components/Header/HeaderFavoritesPage";
import FavoriteCardContainer from "@/app/components/Information/FavoriteCardContainer";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Favorite() {
    const { idUser } = useParams();
    const searchParams = useSearchParams();

    const [favorites, setFavorites] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!idUser) return;

        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:9090/favorites`, {
                    method: "GET",
                    credentials: "include"
                });

                if (!response.ok) {
                    console.error("Erro na requisição:", response.status);
                    throw new Error(`Erro ao buscar favoritos: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Favoritos recebidos:", data);  // Verifique se chega aqui agora

                const formattedProperty = data.content.map((property: any) => ({
                    ...property,
                    ...property.propertyFeatures,
                    ...property.address
                }));

                setFavorites(formattedProperty);
                setTotalPages(data.totalPages || 1);
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
                const { properties } = await getByParamsPropertiesCard(
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
            <section style={{ marginTop: "80px" }}>
                <FavoriteCardContainer
                    cards={favorites}
                    userId={idUser}
                />
            </section>
        </>
    );
}
