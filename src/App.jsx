import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './routes/RootElement';
import Home, { loader as formLoader } from './routes/Home';
import { ContextProvider } from './context/context';

const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <ContextProvider>
            <RootElement />
         </ContextProvider>
      ),
      children: [{ index: true, element: <Home />, loader: formLoader }],
   },
]);

export default function App() {
   return <RouterProvider router={router} />;
}
