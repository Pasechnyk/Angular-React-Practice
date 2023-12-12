import React, { useState } from 'react';
import './Event.css';

const Event = ({ event, selectedCategory, onLike }) => {
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
      <button onClick={handleLike} className={liked ? 'liked' : ''}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Event;
