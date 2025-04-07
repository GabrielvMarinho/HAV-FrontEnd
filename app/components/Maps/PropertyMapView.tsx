"use client"

import React, { useEffect, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader";
import { PropertySpecificCard } from "@/app/models/Property/PropertySpecificCard";
import "./css/style.css";

interface PropertyMapViewProps {
  properties: PropertySpecificCard[];
}

export default function PropertyMapView({ properties }: PropertyMapViewProps) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [activeProperty, setActiveProperty] = useState<PropertySpecificCard | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Default center (Jaraguá do Sul coordinates)
  const defaultCenter = { lat: -26.3044, lng: -49.0651 };

  useEffect(() => {
    const initMap = async () => {
      console.log('Initializing map with properties:', properties.length);

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
        libraries: ['places', 'geocoding']
      });

      try {
        const { Map } = await loader.importLibrary('maps');
        const { Marker } = await loader.importLibrary('marker');
        const { InfoWindow } = await loader.importLibrary('maps');
        const { Geocoder } = await loader.importLibrary('geocoding');

        // Map options
        const mapOptions: google.maps.MapOptions = {
          center: defaultCenter,
          zoom: 12,
          mapId: 'MAY_MAPJS_MAPID',
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        };

        // Setup the map
        const mapInstance = new Map(mapRef.current as HTMLDivElement, mapOptions);
        setMap(mapInstance);

        // Create info window
        const infoWindowInstance = new InfoWindow();
        setInfoWindow(infoWindowInstance);

        // Create geocoder
        const geocoderInstance = new Geocoder();
        setGeocoder(geocoderInstance);

        // Clear existing markers
        markers.forEach(marker => marker.setMap(null));
        const newMarkers: google.maps.Marker[] = [];
        const bounds = new google.maps.LatLngBounds();

        // Add markers for each property
        for (const property of properties) {
          // Create address string from property data
          const address = `${property.street || ''}, ${property.propertyNumber || ''}, ${property.neighborhood}, ${property.city}, ${property.state || 'SC'}, ${property.cep || ''}`;
          
          // Geocode the address
          try {
            const result = await geocodeAddress(geocoderInstance, address);
            
            if (result) {
              const marker = new Marker({
                position: result,
                map: mapInstance,
                title: `${property.neighborhood}, ${property.city}`,
                animation: google.maps.Animation.DROP
              });

              // Add mouseover event to marker
              marker.addListener("mouseover", () => {
                setActiveProperty(property);
                if (infoWindowInstance) {
                  const content = createInfoWindowContent(property);
                  infoWindowInstance.setContent(content);
                  infoWindowInstance.open(mapInstance, marker);
                }
              });

              // Add click event to marker
              marker.addListener("click", () => {
                window.location.href = `/property/${property.id}`;
              });

              newMarkers.push(marker);
              bounds.extend(result);
            }
          } catch (error) {
            console.error(`Error geocoding address for property ${property.id}:`, error);
          }
        }

        setMarkers(newMarkers);

        // Fit bounds to include all markers
        if (newMarkers.length > 0) {
          mapInstance.fitBounds(bounds);
        }
        
        setIsLoading(false);

      } catch (error) {
        console.error("Error initializing map:", error);
        setIsLoading(false);
      }
    };

    initMap();
  }, [properties]);

  // Helper function to geocode an address
  const geocodeAddress = (geocoder: google.maps.Geocoder, address: string): Promise<google.maps.LatLng | null> => {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          resolve(results[0].geometry.location);
        } else {
          console.warn(`Geocoding failed for address: ${address}, status: ${status}`);
          resolve(null);
        }
      });
    });
  };

  // Create HTML content for info window
  const createInfoWindowContent = (property: PropertySpecificCard) => {
    return `
      <div class="property-info-window">
        <h3>${property.neighborhood}, ${property.city}</h3>
        <p class="price">R$ ${property.price.toLocaleString('pt-BR')}${property.purpose === "locacao" ? "/mês" : ""}</p>
        <div class="property-details">
          ${property.propertyType !== "terreno" ? `
            <span><i class="bed-icon"></i> ${property.bedRoom} quartos</span>
            <span><i class="bath-icon"></i> ${property.bathRoom} banheiros</span>
            <span><i class="area-icon"></i> ${property.area}m²</span>
          ` : `
            <span><i class="area-icon"></i> ${property.area}m²</span>
          `}
        </div>
        <a href="/property/${property.id}" class="view-property-btn">Ver detalhes</a>
      </div>
    `;
  };

  return (
    <div className="property-map-container">
      {isLoading ? (
        <div className="map-loading">
          <p>Carregando mapa...</p>
        </div>
      ) : (
        <>
          <div className="map-container" ref={mapRef}></div>
          {activeProperty && (
            <div className="property-details-panel">
              <h3>{activeProperty.neighborhood}, {activeProperty.city}</h3>
              <p className="price">R$ {activeProperty.price.toLocaleString('pt-BR')}{activeProperty.purpose === "locacao" ? "/mês" : ""}</p>
              <div className="property-features">
                {activeProperty.propertyType !== "terreno" ? (
                  <>
                    <span>{activeProperty.bedRoom} quartos</span>
                    <span>{activeProperty.bathRoom} banheiros</span>
                    <span>{activeProperty.area}m²</span>
                  </>
                ) : (
                  <span>{activeProperty.area}m²</span>
                )}
              </div>
              <a href={`/property/${activeProperty.id}`} className="view-property-link">Ver detalhes</a>
            </div>
          )}
        </>
      )}
    </div>
  );
} 