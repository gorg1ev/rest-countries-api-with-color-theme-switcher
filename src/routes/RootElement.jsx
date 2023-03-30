import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootElement() {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   );
}
