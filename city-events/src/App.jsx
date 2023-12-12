import React from 'react';
import eventsData from './components/eventsData';
import EventsList from './components/EventList';

const App = () => {
  const eventsByCategory = eventsData.reduce((acc, event) => {
    acc[event.category] = acc[event.category] || [];
    acc[event.category].push(event);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(eventsByCategory).map(([category, events]) => (
        <div key={category}>
          <h2>{category}</h2>
          <EventsList events={events} />
        </div>
      ))}
    </div>
  );
};

export default App;
