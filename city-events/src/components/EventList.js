import React from 'react';
import Event from './Event';
import '../styles/EventList.css';

const EventList = ({ events, onLike, globalLikedEvents }) => {
  return (
    <div className="container">
      {events.map((event) => (
        <Event
          key={event.id}
          event={event}
          onLike={(isLiked) => onLike(event, isLiked)}
          isLiked={globalLikedEvents.some((likedEvent) => likedEvent.id === event.id)}
        />
      ))}
    </div>
  );
};

export default EventList;

