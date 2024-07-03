import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
// something in store is not set up right
import store from './store';
import { BrowserRouter } from 'react-router-dom';

// console.log(Provider);

const root = createRoot(document.getElementById('contents'));
root.render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
