import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './content.css';

const body = document.querySelector('body');
const app = document.createElement('div');

app.id = 'webext-e2e-root';

if (body) {
  body.append(app);
}

const container = document.getElementById('webext-e2e-root');
const root = createRoot(container);

root.render(<App />); // Render react component
