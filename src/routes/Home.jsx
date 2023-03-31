import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DropdownMenu from '../components/DropdownMenu';
import Cards from '../components/Cards';
import Loading from '../assets/Loading';
import Error from '../components/Error';

export async function loader({ request }) {
   const url = new URL(request.url);
   const name = url.searchParams.get('name');
   const region = url.searchParams.get('region');

   const api = 'https://restcountries.com/v3.1';
   let extend = '/all';

   if (name) extend = `/name/${name}`;
   if (region) extend = `/region/${region}`;

   const res = await fetch(api + extend, { cache: 'no-cache' });

   if (!res.ok)
      return {
         error: true,
         data: [],
      };

   const data = await res.json();

   return { data };
}

export default function Home() {
   const navigation = useNavigation();
   const loaderData = useLoaderData();

   return (
      <div
         className={`max-w-[1440px] mx-auto flex flex-col gap-[50px] ${
            loaderData.error && 'gap-[150px]'
         } padding-x py-[30px] md:py-[80px] `}
      >
         <div className="flex flex-wrap justify-between items-start gap-[50px]">
            <SearchBar />
            <DropdownMenu />
         </div>
         {loaderData.error && <Error />}
         {!loaderData.error && navigation.state === 'loading' ? (
            <Loading />
         ) : (
            <Cards data={loaderData.data} />
         )}
      </div>
   );
}
