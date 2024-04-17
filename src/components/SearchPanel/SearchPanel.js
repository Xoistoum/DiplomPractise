import React from 'react';
import gasStation from '../../icons/gasStation.png';
import shop from '../../icons/shop.png';
import sport from '../../icons/sport.png';
import './searchPanel.css';

const TAGS = [
    { title: 'gas station', icon: gasStation },
    { title: 'sport', icon: sport },
    { title: 'shop', icon: shop },
];
{/* Добавить остальные и подправить стили */}
const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input type="text" placeholder="Search..." />
            <div className="tags-container">
                {TAGS.map((tag, index) => (
                    <div key={index} className="tag">
                        <img src={tag.icon} alt={tag.title} style={{ width: '20px', height: '20px' }}/>
                        <span>{tag.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPanel;
