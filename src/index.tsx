import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { ErrorBoundary } from './components';
import './resets.scss';
import { StoreProvider } from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
);
