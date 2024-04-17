import React from 'react';
import culture from '../../icons/culture.png';
import entertainment from '../../icons/entertainment.png';
import food from '../../icons/food.png';
import gasStation from '../../icons/gasStation.png';
import nature from '../../icons/nature.png';
import other from '../../icons/other.png';
import search_big from '../../icons/search_big.png';
import shop from '../../icons/shop.png';
import sport from '../../icons/sport.png';
import SearchPlace from "../SearchPlace/SearchPlace";
import TagsSearcher from "../TagsSearcher/TagsSearcher";
import './searchPanel.css';


const TAGS = [
    { title: ' заправка', icon: gasStation },
    { title: ' спорт', icon: sport },
    { title: ' магазин', icon: shop },
    { title: ' еда', icon: food },
    { title: ' равзлечения', icon: entertainment },
    { title: ' природа', icon: nature },
    { title: ' культура', icon: culture },
    { title: ' другое', icon: other },
];

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <SearchPlace/>
            <div className="text1">Искать:</div>
            <TagsSearcher tags={TAGS}/>
            <div className="text2">В радиусе:</div>
            <div className="radius">
                <input
                    className="radiusInput"
                    placeholder="1"
                    type="number"
                    min="1"
                    max="50"
                    /*onChange={handleRadiusChange}*/
                />
                км
            </div>
            <button className="searchButton" onClick={() => console.log("1")}>
                <img src={search_big} alt="поиск"/>
            </button>
        </div>
    );
}

export default SearchPanel;
