import React, { useContext, useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import ChevronDown from '../assets/ChevronDown';
import context from '../context/context';

export default function DropdownMenu() {
   const { dropdownMenuTitle, toggleList, toggleMenuHandler, changeTitle } =
      useContext(context);
   const navigate = useNavigate();
   useEffect(() => {
      const url = window.location.href;
      const region = new URL(url).search;

      region.includes('?region') && changeTitle(region.slice(8));
   }, []);

   return (
      <div className="relative w-[245px]">
         <div
            className="flex justify-between items-center shadow rounded-md text-color bg-color-component cursor-pointer px-[25px] py-5 md:px-[30px] ease-in-out duration-300"
            onClick={toggleMenuHandler}
         >
            <h4>{dropdownMenuTitle}</h4>
            <ChevronDown style="w-[20px] h-[20px]" />
         </div>
         {toggleList && (
            <Form
               defaultValue="form-dropdown"
               className="flex flex-col gap-[15px] px-[25px] py-5 md:px-[30px] text-color bg-color-component shadow rounded-md absolute top-[70px] left-0 right-0 ease-in-out duration-300"
               role="dropdown menu"
               onClick={(e) => {
                  if (e.target.closest('button')) {
                     navigate(`?${e.target.name}=${e.target.value}`);
                     changeTitle(e.target.value);
                  }
               }}
            >
               <button
                  name="region"
                  type="submit"
                  value="africa"
                  className="w-full text-left hover:font-semiBold ease-in-out duration-200"
               >
                  Africa
               </button>
               <button
                  name="region"
                  type="submit"
                  value="america"
                  className="w-full text-left hover:font-semiBold ease-in-out duration-200"
               >
                  America
               </button>
               <button
                  name="region"
                  type="submit"
                  value="asia"
                  className="w-full text-left hover:font-semiBold ease-in-out duration-200"
               >
                  Asia
               </button>
               <button
                  name="region"
                  type="submit"
                  value="europe"
                  className="w-full text-left hover:font-semiBold ease-in-out duration-200"
               >
                  Europe
               </button>
               <button
                  name="region"
                  type="submit"
                  value="oceania"
                  className="w-full text-left hover:font-semiBold ease-in-out duration-200"
               >
                  Oceania
               </button>
            </Form>
         )}
      </div>
   );
}
