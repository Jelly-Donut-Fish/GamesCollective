import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// import hello from "./images/helloworld.gif"; // how to import images

const root = createRoot(document.getElementById('root'));

root.render(<App />);
