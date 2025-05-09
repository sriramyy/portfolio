import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18's createRoot API
import './assets/css/styles.css'; // Ensure this path matches your CSS file
import App from './App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);