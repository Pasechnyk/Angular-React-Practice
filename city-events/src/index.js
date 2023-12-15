import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventProvider } from './components/EventContext';

ReactDOM.render(
  <React.StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


