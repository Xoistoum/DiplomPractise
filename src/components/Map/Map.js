import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
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
        geocode: [48.86, 2.3522],
        popUp: <button>Избранное</button>
    },
    {
        geocode: [48.85, 2.3522],
        popUp: "Hello, I am pop up 2"
    },
    {
        geocode: [48.855, 2.34],
        popUp: "Hello, I am pop up 3"
    }
];

const defaultCenter = [53.8829, 27.7];

export default function Map() {
    const [center, setCenter] = useState(defaultCenter);

    return (
        <MapContainer center={center} zoom={13}>
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
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
                //url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />

            <LocationMarker/>

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

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({});

    useEffect(() => {
        map.locate();
        map.on("locationfound", handleLocationFound);

        return () => {
            map.off("locationfound", handleLocationFound);
        };
    }, []);

    const handleLocationFound = (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
    };

    return position === null ? null : (
        <Marker position={position} icon={customIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
}
