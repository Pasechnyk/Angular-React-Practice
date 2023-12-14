import React, { useState } from 'react';
import '../styles/Event.css';

const Event = ({ event, selectedCategory, onLike, isLiked }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike(event.id, !liked); 
  };

  // Check if the category matches the selected category
  const showEvent = selectedCategory ? event.category === selectedCategory : true;

  return (
    <div className="event-container" style={{ display: showEvent ? 'block' : 'none' }}>
      <h3 className="event-title" onClick={toggleDetails}>
        {event.title}
      </h3>
      {showDetails && (
        <div>
          <p>Category: {event.category}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
        </div>
      )}
      <button class="category-filters button" onClick={() => onLike(event.id, !isLiked)}>
        {isLiked ? 'Unlike' : 'Like'}
        </button>
    </div>
  );
};

export default Event;
