import React, { useRef, useEffect, useState, useContext } from "react";
import { LocationContext } from "../../context/locationContext";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

import { getLocation } from "../../api/getNameLocation";

// images
import Location from "../../assets/icon/location.svg";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

export default function MapPartner() {
  const mapContainer = useRef();
  const [locationState, dispatchLocation] = useContext(LocationContext);
  const [lng, setLng] = useState(106.8567);
  const [lat, setLat] = useState(-6.1775);
  const [location, setLocation] = useState(null);
  const [zoom, setZoom] = useState(9);

  const formLocation = (lat, lng) => {
    const coordinate = `${lat},${lng}`;
    dispatchLocation({ type: "LOCATION", payload: { location: coordinate } });
  };

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

    async function onDragEnd() {
      let lngLat = marker.getLngLat();
      setLng(lngLat.lng);
      setLat(lngLat.lat);

      const lng = lngLat.lng.toFixed(5);
      const lat = lngLat.lat.toFixed(5);
      const location = await getLocation(lat, lng);

      setLocation(location);
      formLocation(lat, lng);
    }

    // move marker using drag
    let marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([lng, lat])
      .addTo(map);

    marker.on("dragend", onDragEnd);

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
            <p className="address-title">{location?.city}</p>
            <p className="address-user">{location?.address}</p>
          </div>
        </div>
        <p className="avenir-font font-weight-bold">Delivery Time</p>
        <p>10 - 15 Minutes</p>
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
}
