import React from 'react';
import "./setImages.css";

import bg from "../../icons/bg6.PNG";
import culture from "../../icons/culture.png";
import entertainment from "../../icons/entertainment.png";
import food from "../../icons/food.png";
import gasStation from "../../icons/gasStation.png";
import nature from "../../icons/nature.png";
import other from "../../icons/other.png";
import shop from "../../icons/shop.png";
import sport from "../../icons/sport.png";


const images = [
    { src: gasStation, alt: "Gas Station" },
    { src: culture, alt: "Culture" },
    { src: entertainment, alt: "Entertainment" },
    { src: sport, alt: "Sport" },
    { src: nature, alt: "Nature" },
    { src: shop, alt: "Shop" },
    { src: other, alt: "Other" },
    { src: food, alt: "Food" }
];

const SetImage = () => {
    return (
        <div className="leaves">
            <div className="set">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} style={{ width: '50px', height: '50px' }} alt={image.alt} />
                    </div>
                ))}
            </div>
            <div>
                <img src={bg} className="bg" alt="" />
            </div>
        </div>
    );
};

export default SetImage;