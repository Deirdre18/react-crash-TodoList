//  this is the source folder and entry point to react basically. We're importing the library we're importing react Dom and then we're importing the main app component.

import React from 'react';
import ReactDOM from 'react-dom';
// importing main parent app component which wraps around everything
import App from './App';

// Here React Dom is rendering the app component into this element with the ID of root, and is grabbing root div in public/index.html and inserting it into the app
ReactDOM.render(
    // This app component being loaded is app.js
    <App />,
  document.getElementById('root')
);
