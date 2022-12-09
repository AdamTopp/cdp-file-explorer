import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const doc = document.getElementById('root');
const root = ReactDOM.createRoot(doc as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
