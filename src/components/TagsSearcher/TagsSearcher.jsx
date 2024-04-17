import React, { useState } from 'react';
import './tagsSearcher.css';

const TagsSearcher = ({ tags }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (index) => {
        const tagIndex = selectedTags.indexOf(index);
        if (tagIndex === -1) {
            setSelectedTags([...selectedTags, index]);
        } else {
            const updatedTags = [...selectedTags];
            updatedTags.splice(tagIndex, 1);
            setSelectedTags(updatedTags);
        }
    }

    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className="tag"
                    style={{ opacity: selectedTags.includes(index) ? 1 : 0.5 }}
                    onClick={() => toggleTag(index)}
                >
                    <img src={tag.icon} alt={tag.title} style={{ width: '30px', height: '30px' }}/>
                    <span>{tag.title}</span>
                </div>
            ))}
        </div>
    );
}

export default TagsSearcher;