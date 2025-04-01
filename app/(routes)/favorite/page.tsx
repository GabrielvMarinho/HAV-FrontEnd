"use client"

import Filter from "@/app/components/Filters/Filter";
import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import TableList from "@/app/components/Information/TableList";
import InputDropdown from "@/app/components/Inputs/InputDropdownNoLabel";
import PageManager from "@/app/components/Inputs/PageManager";
import SearchFavorite from "@/app/components/Inputs/SearchFavorite";
import Favorites from "@/app/components/Inputs/SearchFavorite";
import SearchResult from "@/app/components/Inputs/SearchResult";
import { dropdownFields } from "@/app/components/globalFormsConfig/InputDropdownsConfig";
import CardImovel from "@/app/components/Cards/CardImovel";
import { useState } from "react";
import "./css/style.css"
import StarFavorite from "@/app/components/Inputs/StarFavorite";
import ListaImoveis from "@/app/components/Cards/ListaImoveis";


export default function favorite() {

    const idUser = 1;

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "left", gap: "83px"}}>
                <SearchFavorite />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "21px" }}>
                    <InputDropdown
                        key={dropdownFields.order.id}
                        name={dropdownFields.order.name}
                        size={dropdownFields.order.size}
                        title={dropdownFields.order.title}
                        id={dropdownFields.order.id}
                        options={dropdownFields.order.options}
                    />
                    <InputDropdown
                        key={dropdownFields.visualization.id}
                        name={dropdownFields.visualization.name}
                        size={dropdownFields.visualization.size}
                        title={dropdownFields.visualization.title}
                        id={dropdownFields.visualization.id}
                        options={dropdownFields.visualization.options}
                    />
                </div>

            </div>
            <ListaImoveis idUser={idUser}/>
        </>
    )

}

