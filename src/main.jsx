import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import Avaliacao from './pages/Avaliacao/Avaliacao';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/intro',
    element: <Intro />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/avaliacao',
    element: <Avaliacao />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
