
"use client"

import { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function MapSearchResult() {
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

            const addresses = [
                "Avenida Paulista, 1578, São Paulo, SP",
                "Rua Erich Kaufmann, 14, Joinville, SC",
                "Rua José Jacob Martins, 114, Joinville, SC",
                "Rua da Consolação, 2000, São Paulo, SP"
            ];

            const map = new Map(mapRef.current as HTMLElement, {
                center: { lat: -23.561684, lng: -46.656139 },
                zoom: 15,
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
        };

        initMap();
    }, []);

    return (
        <div
            ref={mapRef}
            style={{ height: '300px', width: '500px' }}
        />
    );
}




// "use client"

// import { useEffect, useRef } from "react";
// import { Loader } from '@googlemaps/js-api-loader';

// export default function MapSearchResult() {
//     const mapRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initMap = async () => {
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//                 version: "quarterly",
//                 libraries: ['places']
//             });

//             const { Map } = await loader.importLibrary("maps");
//             const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

//             const geocoder = new google.maps.Geocoder();

//             const addresses = [
//                 "Avenida Paulista, 1578, São Paulo, SP",
//                 "Rua Erich Kaufumann, 14, SC",
//                 "Rua josé jacob martins, 114, SC",
//                 "Rua da Consolação, 2000, São Paulo, SP"
//             ];

//             const map = new Map(mapRef.current as HTMLElement, {
//                 center: { lat: -23.561684, lng: -46.656139 },
//                 zoom: 15,
//                 mapId: "map",
//             });

//             const streetView = map.getStreetView();
//             const streetViewService = new google.maps.StreetViewService();

//             for (const address of addresses) {
//                 geocoder.geocode({ address }, (results, status) => {
//                     if (status === "OK" && results && results[0]) {
//                         const location = results[0].geometry.location;

//                         const marker = new AdvancedMarkerElement({
//                             position: location,
//                             map: map
//                         });

//                         marker.addListener("click", () => {
//                             streetViewService.getPanorama({
//                                 location,
//                                 radius: 50,
//                             }, (data, status) => {
//                                 if (status === google.maps.StreetViewStatus.OK && data?.location?.latLng) {
//                                     streetView.setPosition(data.location.latLng);
//                                     streetView.setPov({ heading: 0, pitch: 0 });
//                                     streetView.setVisible(true);
//                                 } else {
//                                     alert("Street View não está disponível nesse local 😕");
//                                     map.setZoom(15);
//                                     streetView.setVisible(false);
//                                 }
//                             });
//                         });
//                     } else {
//                         console.error("Não foi possível geocodificar o endereço:", address);
//                     }
//                 });
//             }
//         };

//         initMap();
//     }, []);

//     return (
//         <div
//             ref={mapRef}
//             style={{ height: '300px', width: '500px' }}
//         />
//     );
// }



// "use client";

// import { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// export default function MapSearchResult() {
//     const mapRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initMap = async () => {
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//                 version: "quarterly",
//                 libraries: ["places"]
//             });

//             const { Map } = await loader.importLibrary("maps");

//             const options: google.maps.MapOptions = {
//                 center: { lat: -14.2350, lng: -51.9253 }, // Centro do Brasil
//                 zoom: 4,
//             };

//             const map = new Map(mapRef.current as HTMLElement, options);
//             const geocoder = new google.maps.Geocoder();

//             try {
//                 const response = await fetch("/api/enderecos"); // Substitua pela URL real da API
//                 const data = await response.json(); // Esperado: [{ endereco: "..." }]

//                 for (const item of data) {
//                     const results = await geocoder.geocode({ address: item.endereco });

//                     if (results && results.results.length > 0) {
//                         const location = results.results[0].geometry.location;

//                         const marker = new google.maps.Marker({
//                             position: location,
//                             map,
//                             title: item.endereco
//                         });

//                         // 👉 Centralizar ao clicar no marcador
//                         marker.addListener("click", () => {
//                             map.setZoom(15); // você pode ajustar o nível de zoom aqui
//                             map.setCenter(location);
//                         });
//                     }
//                 }
//             } catch (error) {
//                 console.error("Erro ao carregar endereços da API:", error);
//             }
//         };

//         initMap();
//     }, []);

//     return (
//         <div ref={mapRef} style={{ height: "300px", width: "500px" }} />
//     );
// }
