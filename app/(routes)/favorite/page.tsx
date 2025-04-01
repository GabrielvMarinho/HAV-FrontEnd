import CardImovel from "@/app/components/Cards/CardImovel";
import CardContainer from "@/app/components/Information/CardContainer"
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";
import SearchFavorite from "@/app/components/Inputs/SearchResult";
import InputDropdown from "@/app/components/Inputs/InputDropdown";

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


    return (
        <>
            <CardContainer cards={properties} totalPages={totalPages} />
        </>
    )
}
