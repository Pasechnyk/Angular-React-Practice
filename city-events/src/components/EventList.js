import React, { useState } from 'react';
import Event from './Event';
import './Event.css';

const EventList = ({ events }) => {
  const [likedEvents, setLikedEvents] = useState([]);

  const handleLike = (eventId, isLiked) => {
    // Update liked events
    if (isLiked) {
      setLikedEvents((prevLikedEvents) => [...prevLikedEvents, eventId]);
    } else {
      setLikedEvents((prevLikedEvents) => prevLikedEvents.filter((id) => id !== eventId));
    }
  };

  return (
    <div>
      <p>Liked Events: {likedEvents.length}</p>
      {events.map((event) => (
        <Event key={event.id} event={event} onLike={handleLike} />
      ))}
    </div>
  );
};

export default EventList;

