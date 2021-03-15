import React, { useRef, useEffect, useState } from "react";

// images
import Location from "../../assets/icon/location.svg";

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
      <div className="sidebar shadow p-3">
        <h6 className="avenir-font mb-4 font-weight-bold">
          Select Delivery Location
        </h6>
        <div className="d-flex">
          <div>
            <img src={Location} alt="location" className="mr-4" />
          </div>
          <div>
            <p className="address-title">Harbour Building</p>
            <p className="address-user">
              Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
              Selatan, Banten 15413, Indonesia
            </p>
          </div>
        </div>
        <p className="avenir-font font-weight-bold">Delivery Time</p>
        <p>10 - 15 Minutes</p>
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
}
