import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
    <BrowserRouter>
    {/* <p>hiiiiiiiiii</p> */}
        <App />
    </BrowserRouter>
    </FavoritesContextProvider>
);
