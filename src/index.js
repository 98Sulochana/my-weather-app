import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherApplication from './WeatherApplication';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <WeatherApplication />
  </React.StrictMode>
);

reportWebVitals();
