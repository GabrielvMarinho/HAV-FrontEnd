"use client";
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import HeaderFavoritesPage from "@/app/components/Header/HeaderFavoritesPage";
import FavoriteCardContainer from "@/app/components/Information/FavoriteCardContainer"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Favorite({ searchParams }: {
    searchParams: {
        propertyCode?: string;
        minPrice?: number;
        maxPrice?: number;
        propertyType?: string;
        propertyStatus?: string;
        page?: number;
        bedRoom?: boolean,
        bathRoom?: boolean,
        garageSpace?: boolean,
        suite?: boolean,
        purpose?: string
    }
}) {

    const params = await searchParams;
    const { propertyCode = null, minPrice = null, maxPrice = null, propertyType = null,
        propertyStatus = null, page = 0, bedRoom = null,
        bathRoom = null, garageSpace = null, suite = null, purpose = null } = params

    const { properties, totalPages } = await getByParamsPropertiesCard(propertyCode, propertyType, propertyStatus,
        minPrice, maxPrice, false, page, bedRoom, bathRoom, garageSpace, suite, purpose)
    
        interface Property{
            obj: PropertySpecificCard
        }


    return (
        <>
            <HeaderFavoritesPage />
            <section style={{ marginTop: "80px" }}>
                <FavoriteCardContainer cards={properties} totalPages={totalPages} />
            </section>
        </>
    )
}
