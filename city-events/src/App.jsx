import React, { useState, useEffect } from 'react';
import eventsData from './components/eventsData';
import EventList from './components/EventList';
import Categories from './components/Categories';
import '../src/styles/App.css';

const App = () => {
  const [globalLikedEvents, setGlobalLikedEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const storedLikedEvents = localStorage.getItem('likedEvents');
    if (storedLikedEvents) {
      setGlobalLikedEvents(JSON.parse(storedLikedEvents));
    }
    setIsLoaded(true);
  }, []);

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

  const handleDownload = () => {
    console.log(globalLikedEvents);
    const blob = new Blob([JSON.stringify(globalLikedEvents, null, 2)], { type: 'application/json' });
  
    // Download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'liked_events.json';
  
    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('likedEvents', JSON.stringify(globalLikedEvents));
    }
  }, [globalLikedEvents]);

  const eventsByCategory = eventsData.reduce((acc, event) => {
    acc[event.category] = acc[event.category] || [];
    acc[event.category].push(event);
    return acc;
  }, {});

  return (
    <div>
      <br></br>
      <button onClick={handleDownload}>Download Liked Events</button>
      {globalLikedEvents.length > 0 && <p>Total Liked Events: {globalLikedEvents.length}</p>}
      <h1>Popular Events</h1>
      <Categories categories={Object.keys(eventsByCategory)} onSelectCategory={() => {}} />
      {Object.entries(eventsByCategory).map(([category, events]) => (
        <div key={category}>
          <h2>{category}</h2>
          <EventList
            events={events}
            onLike={handleLike}
            globalLikedEvents={globalLikedEvents}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
