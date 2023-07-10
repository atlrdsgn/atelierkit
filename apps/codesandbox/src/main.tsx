import '@atlrdsgn/kit/css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { KitProvider } from '@atlrdsgn/kit';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KitProvider>
      <App />
    </KitProvider>
  </React.StrictMode>,
);
