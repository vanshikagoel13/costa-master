import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import CostaExp from './pages/CostaExp';
import Destination from './pages/Destination';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/CostaExp",
    element: <CostaExp />,
  },
  {
    path: "/Destination",
    element: <Destination />,
  },
]);

root.render(
  <RouterProvider router={router} />
);