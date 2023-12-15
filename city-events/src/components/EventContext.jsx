import { createContext, useState, useContext } from 'react';

// Create context
const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [globalLikedEvents, setGlobalLikedEvents] = useState([]);
  
  const handleLike = (event, isLiked) => {
    // Update liked events
    if (isLiked) {
      setGlobalLikedEvents((prevLikedEvents) => [...prevLikedEvents, event]);
    } else {
      setGlobalLikedEvents((prevLikedEvents) =>
        prevLikedEvents.filter((likedEvent) => likedEvent.id !== event.id)
      );
    }
  };

  const contextValue = {
    globalLikedEvents,
    handleLike,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};

export { EventProvider, useEventContext };