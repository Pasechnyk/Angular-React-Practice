import React, { useState } from 'react';
import { useEventContext } from './EventContext';
import '../styles/Event.css';

const Event = ({ event, selectedCategory, isLiked }) => {
  // Context use
  const { handleLike } = useEventContext();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLikeClick = () => {
    handleLike(event, !isLiked);
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
      <button className="category-filters button" onClick={handleLikeClick}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Event;

