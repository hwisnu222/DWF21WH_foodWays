import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

export default function MapPartner() {
  const mapContainer = useRef();
  const [lng, setLng] = useState(106.8567);
  const [lat, setLat] = useState(-6.1775);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    console.log("data map", map.getCenter());
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="sidebar">
        <h3>Location</h3>
        <p>Longitude: {lng}</p>
        <p>Latitude: {lat}</p>
        <p>Zoom: {zoom}</p>
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
}
