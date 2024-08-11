// import React, { useEffect } from "react";
// import { useMap } from "react-map-gl";
// import MapLibreGlDirections, {
//   LoadingIndicatorControl,
// } from "@maplibre/maplibre-gl-directions";

// const MapRoute = () => {
//   const { current: map } = useMap(); // Get the current map instance

//   useEffect(() => {
//     if (!map) return;
//     console.log('map done')
//     // Create an instance of the MapLibreGlDirections class
//     const directions = new MapLibreGlDirections(map);

//     // Enable interactivity
//     directions.interactive = true;

//     // Add the loading indicator control to the map
//     map.addControl(new LoadingIndicatorControl(directions));

//     // Set waypoints programmatically
//     directions.setWaypoints([
//       [-73.8271025, 40.8032906],
//       [-73.8671258, 40.82234996],
//     ]);

//     // Remove and add waypoints as needed
//     directions.removeWaypoint(0);
//     directions.addWaypoint([-73.8671258, 40.82234996], 0);

//     // Cleanup directions when the component is unmounted
//     return () => {
//       directions.clear();
//     };
//   }, [map]);

//   return <div>MapRoute</div>;
// };

// export default MapRoute;
