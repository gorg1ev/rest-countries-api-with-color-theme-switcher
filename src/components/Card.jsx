import React from 'react';

export default function Card({ data }) {
   return (
      <div className="groupe text-color bg-color-component w-[330px] h-[400px] flex flex-col sm:w-[280px] rounded-md overflow-hidden cursor-pointer shadow-md easy-in-out duration-300 hover:scale-105">
         <div className="h-[180px]  bg-red-500">
            <img
               src={data.flags.png}
               alt={`${data.flags.alt} Flag`}
               className="h-full w-full object-fill"
            />
         </div>
         <div className="pt-[30px] px-[25px]">
            <h3 className="font-extraBold text-[20px]">{data.name.common}</h3>
            <p className="font-semiBold text-[16px] mt-[20px]">
               Population: <span className="font-light">{data.population}</span>
            </p>
            <p className="font-semiBold mt-[5px]">
               Region: <span className="font-light">{data.region}</span>
            </p>
            <p className="font-semiBold mt-[5px]">
               Capital: <span className="font-light">{data.capital}</span>
            </p>
         </div>
      </div>
   );
}
