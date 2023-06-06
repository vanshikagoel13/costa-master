import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import CostaExp from './pages/CostaExp';

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
]);

root.render(
  <RouterProvider router={router} />
);