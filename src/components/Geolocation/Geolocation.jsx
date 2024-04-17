import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";

import location_off from '../../icons/location-off.png';
import location_on from '../../icons/location-on.png';
import "./geolocation.css";

const Geolocation = ({ onLocateClick }) => {
    const map = useMapEvents({});
    const [locationAvailable, setLocationAvailable] = useState(false);

    const handleLocateButtonClick = () => {
        onLocateClick();

        map.locate();
        map.once("locationfound", handleLocationFound);
    };

    const handleLocationFound = (e) => {
        map.flyTo(e.latlng, map.getZoom());
        setLocationAvailable(true);
    };

    return (
        <button
            className="locationButton"
            onClick={handleLocateButtonClick}
        >
            <img
                src={locationAvailable ? location_on : location_off}
                alt={locationAvailable ? "current location" : "location off"}
            />
        </button>
    );
}

export default Geolocation;