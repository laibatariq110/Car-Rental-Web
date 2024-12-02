import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import React from 'react';
import App from './App.jsx';
import About from './pages/Home/About/About.jsx';
import Contact from './pages/Home/About/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
], {
  basename: "/Car-Rental-Web", // Set your repository name here
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
