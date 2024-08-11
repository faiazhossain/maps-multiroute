//@ts-nocheck
"use client";
import React, { useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import Map, { MapProvider } from "react-map-gl/maplibre";
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";

const MainMap = () => {
  const mapRef = useRef<MapRef>(null);
  const [directions, setDirections] = useState(null);

  const handleMapLoad = () => {
    const map = mapRef.current?.getMap();

    if (!map) {
      console.error("Map instance not found.");
      return;
    }

    // Create an instance of the MapLibreGlDirections class
    const directionsInstance = new MapLibreGlDirections(map);
    setDirections(directionsInstance);

    // Enable interactivity
    directionsInstance.interactive = true;

    // Add the loading indicator control to the map
    map.addControl(new LoadingIndicatorControl(directionsInstance));

    // Set initial waypoints in Dhaka
    directionsInstance.setWaypoints([
      [90.412521, 23.810331], // Dhaka center (Example: Shahbagh)
      [90.407608, 23.74585], // Dhanmondi (Example: Dhanmondi Lake)
    ]);
  };

  const addWaypoint = () => {
    if (directions) {
      // Add a new waypoint
      directions.addWaypoint([90.399452, 23.72783]);
    } else {
      console.error("Directions instance not found.");
    }
  };

  return (
    <MapProvider>
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 23.810331,
          longitude: 90.412521,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.barikoimaps.dev/styles/barkoi_green/style.json"
        onLoad={handleMapLoad}
      />
      <button
        onClick={addWaypoint}
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        Add Waypoint
      </button>
    </MapProvider>
  );
};

export default MainMap;
