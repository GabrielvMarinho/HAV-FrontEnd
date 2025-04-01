"use client";

import { useEffect, useState } from "react";
import CardImovel from "@/app/components/Cards/CardImovel";
import getByParamsPropertiesCard from "@/app/apiCalls/Property/getByParamsPropertiesCard";

export default function Favorite(props: { propertyId: number }) {
    const propertyId = props.propertyId; // Recebe o propertyId via props
    const [property, setProperty] = useState<PropertySpecificCard | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProperty() {
            if (!propertyId){
                console.log("propertyId não encontrado");
                return;
            }
            console.log("Iniciando requisição para o ID:", propertyId);
            try {
                const data = await getByParamsPropertiesCard(propertyId.toString());
                const selectedProperty = data.properties.find(prop => prop.id === propertyId);
                if (selectedProperty) {
                    setProperty(selectedProperty);
                } else {
                    console.warn("Propriedade não encontrada para o ID:", propertyId);
                    setProperty(null);
                }
            } catch (error) {
                console.error("Erro ao buscar propriedade:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProperty();
    }, [propertyId]);

    if (loading) {
        return <p>Carregando imóvel...</p>;
    }

    return (
        <div>
            {property ? (
                <CardImovel obj={property} /> // Passando a propriedade carregada para o CardImovel
            ) : (
                <p>Propriedade não encontrada.</p>
            )}
        </div>
    );
}
