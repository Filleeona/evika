import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const YandexMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    const initMap = () => {
      if (!mapRef.current) {
        map = new window.ymaps.Map("map", {
          center: [53.7098, 27.9534],
          zoom: 6,
          controls: ["zoomControl", "searchControl"],
        });
        mapRef.current = map;
      }
    };

    if (window.ymaps) {
      window.ymaps.ready(initMap);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
};

export default YandexMap;
