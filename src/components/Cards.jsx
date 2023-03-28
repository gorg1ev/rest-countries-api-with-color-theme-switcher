import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

export default function Cards() {
   const data = useLoaderData();

   return (
      <ul className="flex flex-wrap justify-center  gap-[50px]">
         {data.map((country) => (
            <li key={country.name.common}>
               <Card data={country} />
            </li>
         ))}
      </ul>
   );
}
