import React, { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import ChevronDown from '../assets/ChevronDown';
import context from '../context/context';

export default function DropdownMenu() {
   const { dropdownMenuTitle, toggleList, toggleMenuHandler, changeTitle } =
      useContext(context);
   const navigate = useNavigate();

   return (
      <div className="w-[245px] flex flex-col gap-5">
         <div
            className="flex justify-between items-center shadow rounded-md text-color bg-color-component cursor-pointer px-[25px] py-5 md:px-[30px]"
            onClick={toggleMenuHandler}
         >
            <h4>{dropdownMenuTitle}</h4>
            <ChevronDown style="w-[20px] h-[20px]" />
         </div>
         {toggleList && (
            <Form
               id="form-id"
               defaultValue="form-dropdown"
               className="flex flex-col gap-[15px] px-[25px] py-5 md:px-[30px] text-color bg-color-component shadow rounded-md"
               role="dropdown menu"
               onClick={(e) => {
                  changeTitle(e);
                  navigate(`?${e.target.name}=${e.target.value}`);
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
