//@ts-nocheck
"use client";
import React, { useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import Map, { MapProvider } from "react-map-gl/maplibre";
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";

const MainMap = () => {
  const mapRef = useRef(null);
  const [directions, setDirections] = useState(null);
  const [waypoints, setWaypoints] = useState([{ lat: "", lng: "" }]);

  const handleMapLoad = () => {
    const map = mapRef.current?.getMap();

    if (!map) {
      console.error("Map instance not found.");
      return;
    }

    const directionsInstance = new MapLibreGlDirections(map);
    setDirections(directionsInstance);

    directionsInstance.interactive = true;

    map.addControl(new LoadingIndicatorControl(directionsInstance));

    directionsInstance.setWaypoints([
      [90.412521, 23.810331], // Dhaka center (Example: Shahbagh)
      [90.407608, 23.74585], // Dhanmondi (Example: Dhanmondi Lake)
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index][field] = value;
    setWaypoints(newWaypoints);
  };

  const addWaypointFields = () => {
    setWaypoints([...waypoints, { lat: "", lng: "" }]);
  };

  const createWaypoints = () => {
    if (directions) {
      const validWaypoints = waypoints
        .filter((wp) => wp.lat && wp.lng)
        .map((wp) => [parseFloat(wp.lng), parseFloat(wp.lat)]);

      if (validWaypoints.length > 0) {
        directions.setWaypoints(validWaypoints);
      } else {
        console.error("Please enter valid latitude and longitude values.");
      }
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

      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "white",
          padding: 10,
        }}
      >
        {waypoints.map((wp, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <input
              type="number"
              placeholder="Latitude"
              value={wp.lat}
              onChange={(e) => handleInputChange(index, "lat", e.target.value)}
              style={{ marginRight: 5 }}
            />
            <input
              type="number"
              placeholder="Longitude"
              value={wp.lng}
              onChange={(e) => handleInputChange(index, "lng", e.target.value)}
            />
          </div>
        ))}
        {waypoints.length < 5 && (
          <button onClick={addWaypointFields} style={{ marginRight: 10 }}>
            Add More Waypoints
          </button>
        )}
        <button onClick={createWaypoints}>Create Waypoints</button>
      </div>
    </MapProvider>
  );
};

export default MainMap;
