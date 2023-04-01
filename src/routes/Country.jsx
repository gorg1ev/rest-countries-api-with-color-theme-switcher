import React, { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { ArrowLeft } from '../assets';

export async function loader({ params }) {
   const res = await fetch('https://restcountries.com/v3.1/name/' + params.id, {
      cache: 'no-cache',
   });

   if (!res.ok) return { error: true, message: 'Something went wrong!' };

   return await res.json();
}

export default function Country() {
   const loaderData = useLoaderData();
   const [countryFullName, setCountryFullName] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      async function fetchBorders() {
         if (!loaderData[0].borders) return;

         const borders = loaderData[0].borders.join(',');

         const res = await fetch(
            'https://restcountries.com/v3.1/alpha?codes=' + borders,
            {
               cache: 'no-cache',
            }
         );

         const data = await res.json();

         setCountryFullName([...data.map((country) => country.name.common)]);
      }

      fetchBorders();
   }, []);

   function goBack() {
      navigate(-1);
   }

   return (
      <div className="text-color max-w-[1440px] mx-auto padding-x mt-[80px]">
         <button
            className="flex  gap-3 bg-color-component text-color px-[30px] py-[10px] rounded-md shadow-md"
            onClick={goBack}
         >
            <ArrowLeft style="w-[20px] h-[20px]" />
            <span className="text-[18px]">Back</span>
         </button>
         <div className="w-full flex flex-col gap-[100px] mt-[80px] lg:flex-row">
            <div className="w-full lg:w-[600px]">
               <img
                  src={loaderData[0].flags.svg}
                  alt={`${loaderData[0].name.common} Flag`}
               />
            </div>
            <div className="flex-1">
               <h4 className="font-extraBold text-[32px]">
                  {loaderData[0].name.common}
               </h4>
               <div className="flex flex-wrap gap-[30px] justify-between flex-col lg:flex-row  mt-[30px]">
                  <div className="flex flex-col gap-2">
                     <h6 className="font-semiBold text-[18px]">
                        Native Name:{' '}
                        <span className="font-light">
                           {
                              loaderData[0].name.nativeName[
                                 Object.keys(loaderData[0].name.nativeName)[0]
                              ].common
                           }
                        </span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Population:{' '}
                        <span className="font-light">
                           {loaderData[0].population.toLocaleString()}
                        </span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Region:{' '}
                        <span className="font-light">
                           {loaderData[0].region}
                        </span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Sub Region:{' '}
                        <span className="font-light">
                           {loaderData[0].subregion}
                        </span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Capital:{' '}
                        <span className="font-light">
                           {loaderData[0].capital}
                        </span>
                     </h6>
                  </div>
                  <div className="flex flex-col gap-2">
                     <h6 className="font-semiBold text-[18px]">
                        Top Level Domain:{' '}
                        <span className="font-light">{loaderData[0].tld}</span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Currencies:{' '}
                        <span className="font-light">
                           {
                              loaderData[0].currencies[
                                 Object.keys(loaderData[0].currencies)
                              ].name
                           }
                        </span>
                     </h6>
                     <h6 className="font-semiBold text-[18px]">
                        Languages:{' '}
                        <span className="font-light">
                           {Object.values(loaderData[0].languages).join(', ')}
                        </span>
                     </h6>
                  </div>
               </div>
               <div className="mt-[50px] flex gap-2 flex-wrap items-center">
                  <h6 className="font-semiBold text-[18px]">
                     Border Countries:{' '}
                  </h6>
                  {countryFullName.length === 0 && (
                     <span className="font-light">No borders</span>
                  )}
                  {countryFullName.map((country) => (
                     <span
                        key={country}
                        className="font-light px-[25px] py-[10px] bg-color-component shadow-md rounded-md"
                     >
                        {country}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
