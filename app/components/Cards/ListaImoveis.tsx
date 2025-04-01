"use client";

import { useState, useEffect } from "react";
import CardImovel from "@/app/components/Cards/CardImovel";

interface PropertyCard {
    id: number;
    address: {
        neighborhood: string;
        city: string;
    };
    price: number;
    purpose: string;
    propertyStatus: string;
    propertyFeatures: {
        bathRoom: number;
        bedRoom: number;
        livingRoom: number;
    };
}

interface ListaImoveisProps {
    idUser: number;
}

export default function ListaImoveis({ idUser }: ListaImoveisProps) {
    const [properties, setProperties] = useState<PropertyCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFavorites() {
            try {
                const response = await fetch(`https://localhost9090/favorite/${idUser}`);
                if (!response.ok) throw new Error("Erro ao buscar imóveis favoritos");
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchFavorites();
    }, [idUser]);

    if (loading) return <p>Carregando...</p>;

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {properties.length > 0 ? (
                properties.map((property) => (
                    <CardImovel key={property.id} obj={property} idUser={idUser} />
                ))
            ) : (
                <p>Nenhum imóvel favorito encontrado.</p>
            )}
        </div>
    );
}
