import React from 'react';
import Event from './Event';
import { useEventContext } from './EventContext';
import '../styles/EventList.css';

const EventList = ({ events }) => {
  // Context use
  const { globalLikedEvents } = useEventContext();

  // Removed onLike property
  return (
    <div className="container">
      {events.map((event) => (
        <Event
          key={event.id}
          event={event}
          isLiked={globalLikedEvents.some((likedEvent) => likedEvent.id === event.id)}
        />
      ))}
    </div>
  );
};

export default EventList;


