import searchIcon from "../../icons/search-icon.png";
import './searchPlace.css';

const SearchPlace = () => {
    return (
        <div className="searchInput">
            <img src={searchIcon} alt="Поиск" />
            <input placeholder="Место, адрес..." />
        </div>
    );
};

export default SearchPlace;