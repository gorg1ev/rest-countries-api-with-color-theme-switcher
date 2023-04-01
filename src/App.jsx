import React, { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './routes/RootElement';
import Home, { loader as formLoader } from './routes/Home';
import Country, { loader as countryLoader } from './routes/Country';
import context from './context/context';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootElement />,
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
   const { getThemeFromLocalStorage, darkModeHandler } = useContext(context);

   useEffect(() => {
      getThemeFromLocalStorage() && darkModeHandler();
   }, []);

   return <RouterProvider router={router} />;
}
