"use client";
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import HeaderFavoritesPage from "@/app/components/Header/HeaderFavoritesPage";
import FavoriteCardContainer from "@/app/components/Information/FavoriteCardContainer";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Favorite() {
    
    const { id: idUser } = useParams();

    const searchParams = useSearchParams();

    const [favorites, setFavorites] = useState([]);
    const [pages, setTotalPages] = useState(1);
    const [properties, setProperties] = useState([]);
    const [totalPages, setTotalPagesProperties] = useState(1);

    useEffect(() => {
        if (!idUser) return;

        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:9090/favorites/${idUser}`);
                
                if (!response.ok) throw new Error("Erro ao buscar favoritos");

                const data = await response.json();
                console.log("dados recebidos: ", data);
                setFavorites(data.content || []);
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

            if (searchParams.has("bedRoom")) params.bedRoom = Number(searchParams.get("bedRoom"));
            if (searchParams.has("bathRoom")) params.bathRoom = Number(searchParams.get("bathRoom"));
            if (searchParams.has("garageSpace")) params.garageSpace = Number(searchParams.get("garageSpace"));
            if (searchParams.has("suite")) params.suite = Number(searchParams.get("suite"));
            if (searchParams.has("purpose")) params.purpose = searchParams.get("purpose");

            try {
                const { properties, totalPages } = await getByParamsPropertiesCard(
                    params.propertyCode,
                    params.propertyType,
                    params.propertyStatus,
                    params.minPrice,
                    params.maxPrice,
                    false,
                    params.page, 
                    params.bedRoom,
                    params.bathRoom,
                    params.garageSpace,
                    params.suite,
                    params.purpose
                );

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
                    totalPages={totalPages}
                    userId={idUser}
                />
            </section>
        </>
    );
}
