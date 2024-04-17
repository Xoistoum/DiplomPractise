import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Geolocation from "../Geolocation/Geolocation";
import "./map.css";

const customIcon = new Icon({
    iconUrl: require("../../icons/placeholder.png"),
    iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
    });
};

const markers = [
    {
        geocode: [55.4879000, 28.7856000],
        popUp: <button>Избранное</button>
    },
    {
        geocode: [55.4879000, 28.8856000],
        popUp: "Точка 1"
    },
    {
        geocode: [55.5318000, 28.5987000],
        popUp: "Точка 2"
    }
];

const defaultCenter = [55.4879000, 28.7856000];

export default function Map() {
    const [center, setCenter] = useState(defaultCenter);
    const [isLocated, setIsLocated] = useState(false);

    const handleLocateButtonClick = () => {
        setIsLocated(true);
    };

    return (
        <MapContainer center={center} zoom={14}>
            {/* OPEN STREEN MAPS TILES */}
            {/*<TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />*/}
            {/* WATERCOLOR CUSTOM TILES */}
            {/*<TileLayer
             attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
             />*/}
            {/* GOOGLE MAPS TILES */}
            <TileLayer
                attribution="Google Maps"
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />

            <LocationMarker isLocated={isLocated} />

            <Geolocation onLocateClick={handleLocateButtonClick} />

            <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={customIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

function LocationMarker({ isLocated }) {
    const [position, setPosition] = useState(null);
    const [radius, setRadius] = useState(1000);
    const map = useMapEvents({});

    useEffect(() => {
        if (isLocated) {
            map.locate();
            map.on("геолокация обнаружена", handleLocationFound);
        }

        return () => {
            map.off("геолокация обнаружена", handleLocationFound);
        };
    }, [isLocated]);

    const handleLocationFound = (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());

        setRadius(1000);
    };

    return position === null ? null : (
        <>
            <Marker position={position} icon={customIcon}>
                <Popup>Вы здесь</Popup>
            </Marker>
            <Circle center={position} pathOptions={{
                fillColor: "#5E7BC7",
                fillOpacity: 0.3,
                dashArray: "15, 10",
                weight: 2,
                opacity: 0.4,

            }} radius={radius} />
        </>
    );
}

