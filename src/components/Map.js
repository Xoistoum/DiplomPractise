import React from 'react';
import { Map } from 'react-yandex-maps';
import "./map.css";

function Map({ attractions }) {
  useEffect(() => {

    const initMap = () => {
      const map = new window.ymaps.Map("map", {
        center: [55.751574, 37.573856], // Координаты центра карты (Москва)
        zoom: 10 
      });


      attractions.forEach(attraction => {
        const { name, coordinates } = attraction;
        const placemark = new window.ymaps.Placemark(
          coordinates,
          { hintContent: name, balloonContent: name }
        );
        map.geoObjects.add(placemark);
      });
    };


    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=2d946bac-f9f4-4460-9308-bd4bc9813ffd&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}

export default Map;