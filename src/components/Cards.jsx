import React from 'react';
import Card from './Card';

export default function Cards({ data }) {
   return (
      <ul className="w-auto flex flex-wrap justify-center gap-[50px]">
         {data.map((country) => (
            <li key={country.name.common}>
               <Card data={country} />
            </li>
         ))}
      </ul>
   );
}
