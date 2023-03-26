import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './components/RootElement';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootElement />,
   },
]);

export default function App() {
   return <RouterProvider router={router} />;
}
