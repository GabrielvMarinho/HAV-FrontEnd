"use client"

import React, {useEffect} from "react"
import {Loader} from "@googlemaps/js-api-loader";
import { map } from "zod";

export default function Map() {
    
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect( () => {
        const initMap = async()=>{
            console.log('map init')

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const {Map} = await loader.importLibrary('maps')
            //init a marker
            const { AdvancedMarkerElement } = await loader.importLibrary('marker');
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;
            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }

            //map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MAY_MAPJS_MAPID'
            }

            //SETUP THE MAP
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            //put up a marker
            const marker = new AdvancedMarkerElement({
                map: map,
                position: position
            });

        }

        initMap();

    }, []);
    return (
        <div style={{height: '300px', width: '400px'}} ref={mapRef}/>
        
    )
}