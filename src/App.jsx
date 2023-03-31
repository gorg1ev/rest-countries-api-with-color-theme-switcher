import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './routes/RootElement';
import Home, { loader as formLoader } from './routes/Home';
import { ContextProvider } from './context/context';
import Country, { loader as countryLoader } from './routes/Country';

const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <ContextProvider>
            <RootElement />
         </ContextProvider>
      ),
      children: [
         {
            index: true,
            element: <Home />,
            loader: formLoader,
         },
         { path: ':id', element: <Country />, loader: countryLoader },
      ],
   },
]);

export default function App() {
   return <RouterProvider router={router} />;
}
