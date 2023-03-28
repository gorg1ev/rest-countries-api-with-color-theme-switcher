import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import DropdownMenu from '../components/DropdownMenu';
import Cards from '../components/Cards';

export async function loader({ request }) {
   const url = new URL(request.url);
   const country = url.searchParams.get('country');
   const region = url.searchParams.get('region');

   const api = 'https://restcountries.com/v3.1';
   let extend = '/all';

   if (country) extend = `/name/${country}`;

   if (region) extend = `/region/${region}`;

   const res = await fetch(api + extend);
   const data = await res.json();

   return data;
}

export default function Home() {
   return (
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[50px] padding-x py-[30px] md:py-[80px]">
         <div className="flex flex-wrap justify-between items-start gap-[50px]">
            <SearchBar />
            <DropdownMenu />
         </div>
         <Cards />
      </div>
   );
}
