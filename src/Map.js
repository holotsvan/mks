import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map({ location }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [zoom] = useState(2);
  maptilersdk.config.apiKey = "luioGiz1sRZx0SWK8rfn";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [location.longitude, location.latitude],
      zoom: zoom,
    });

    marker.current = new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([location.longitude, location.latitude])
      .addTo(map.current);
  }, [zoom]);

  useEffect(() => {
    if (marker.current) {
      marker.current.setLngLat([location.longitude, location.latitude]);
      map.current.flyTo({ center: [location.longitude, location.latitude] });
    }
  }, [location]);

  return (
    <div className="map-wrap">
      <div
        ref={mapContainer}
        className="map"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}
