import React, { useState } from 'react';
import AuthDetails from '../Authorization/AuthDetails';
import FavouritesPanel from '../Favourites/FavouritesPanel';
import SearchPanel from '../SearchPanel/SearchPanel';
import './panel.css';
function Panel() {
    const [isAuthDetailsVisible, setIsAuthDetailsVisible] = useState(false);
    const [isSearchPanelVisible, setIsSearchPanelVisible] = useState(false);
    const [isFavouritesPanelVisible, setIsFavouritesPanelVisible] = useState(false)

    const toggleAuthDetails = () => {
        setIsAuthDetailsVisible(!isAuthDetailsVisible);
    };

    const toggleSearchPanel = () => {
        setIsSearchPanelVisible(!isSearchPanelVisible);
        setIsFavouritesPanelVisible(false);
    };

    const toggleFavouritesPanel = () => {
        setIsFavouritesPanelVisible(!isFavouritesPanelVisible);
        setIsSearchPanelVisible(false);
    }

    return (
        <div className="panel">
            <div className="up">
                <button className="button" onClick={toggleSearchPanel}><img src={require("../../icons/searchbtn.png")} style={{ width: '50px', height: '50px' }} alt="Search"/></button>
                <button className="button" onClick={toggleFavouritesPanel}><img src={require("../../icons/favourites.png")} alt="Favorite"/></button>
            </div>
            <div className="down">
                <button className="button1" onClick={toggleAuthDetails}><img src={require("../../icons/user.png")} alt="User"/></button>
                {isAuthDetailsVisible && <AuthDetails />}
            </div>
            {isSearchPanelVisible && <SearchPanel style={{ zIndex: 101 }} />}
            {isFavouritesPanelVisible && <FavouritesPanel style={{ zIndex: 101 }} />}
        </div>
    );
}

export default Panel;