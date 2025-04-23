
"use client"

import { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';
import getByParamsPropertiesMap from "@/app/apiCalls/Property/getPropertiesMap";
import globalDatabaseNameConverter from "@/app/globalDatabaseNameConverter";
import getPropertiesMap from "@/app/apiCalls/Property/getPropertiesMap";
import getPropertiesMapFavorite from "@/app/apiCalls/Property/getPropertiesMapFavorite";

export default function MapSearchResult(props: {cards? :any; height? :string, width? :string, favorite? :boolean; addressSpecific? :any}) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: "quarterly",
                libraries: ['places']
            });

            const { Map } = await loader.importLibrary("maps");

            const geocoder = new google.maps.Geocoder();
            let addresses :string[]= [];
            const fetchAndUpdateMap = async function(){
                var data;
                //fetch
                if (props.cards) {
                    console.log("cards recebidos:", props.cards);
                  
                    const addresses = props.cards.map((property) => ({
                        city: property.city,
                        street: property.street,
                        propertyNumber: property.propertyNumber,
                        state: property.state,

                      }));

                    console.log("Endereços:", addresses);
                  
                    data = props.cards;
                  }
                else if(props.addressSpecific){
                    console.log("address", props.addressSpecific)
                    data = [props.addressSpecific]
                }
                else if(props.favorite){
                    data = await getPropertiesMapFavorite()
                }else{
                    data = await getPropertiesMap()
                }
                
                console.log("data", data)
                addresses = data.map(item => 
                    `${item.street}, ${item.propertyNumber}, ${globalDatabaseNameConverter[item.city]}, ${globalDatabaseNameConverter[item.state]}`
                );
                console.log("add", addresses)
                //update map
                const map = new Map(mapRef.current as HTMLElement, {
                    center: { lat: -26.48611, lng: -49.06667 },
                    zoom: 12,
                    mapId: "map",
                });
    
                const streetView = map.getStreetView();
                const streetViewService = new google.maps.StreetViewService();
                for (const address of addresses) {
                    geocoder.geocode({ address }, (results, status) => {
                        if (status === "OK" && results && results[0]) {
                            const result = results[0];
                            const location = result.geometry.location;
    
                            // Troca: Usando google.maps.Marker
                            const marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                title: result.formatted_address
                            });
    
                            const infoWindow = new google.maps.InfoWindow({
                                content: `<div style="font-size: 14px;">${result.formatted_address}</div>`
                            });
    
                            // Mouse over -> abre a caixinha
                            marker.addListener("mouseover", () => {
                                infoWindow.open(map, marker);
                            });
    
                            // Mouse out -> fecha a caixinha
                            marker.addListener("mouseout", () => {
                                infoWindow.close();
                            });
    
                            // Clique -> abre street view
                            marker.addListener("click", () => {
                                streetViewService.getPanorama({
                                    location,
                                    radius: 50,
                                }, (data, status) => {
                                    if (status === google.maps.StreetViewStatus.OK && data?.location?.latLng) {
                                        streetView.setPosition(data.location.latLng);
                                        streetView.setPov({ heading: 0, pitch: 0 });
                                        streetView.setVisible(true);
                                    } else {
                                        alert("Street View não está disponível nesse local 😕");
                                        map.setZoom(15);
                                        streetView.setVisible(false);
                                    }
                                });
                            });
    
                        } else {
                            console.error("Não foi possível geocodificar o endereço:", address);
                        }
                    });
                }
            }
            fetchAndUpdateMap();

            

            
        };

        initMap();
    }, []);

    return (
        <div
            ref={mapRef}
            style={{ marginBottom:"5px", marginTop:"5px", height: props.height, width: props.width }}
        />
    );
}



