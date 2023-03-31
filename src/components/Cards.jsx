import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Cards({ data }) {
   return (
      <ul className="w-auto flex flex-wrap justify-center gap-[50px]">
         {data.map((country) => (
            <Link
               to={`${country.name.common.toLowerCase()}`}
               key={country.name.common}
            >
               <li>
                  <Card data={country} />
               </li>
            </Link>
         ))}
      </ul>
   );
}
