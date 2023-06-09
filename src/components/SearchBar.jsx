import React, { useState, useEffect } from 'react';
import { Form, useSubmit, useNavigate } from 'react-router-dom';
import MagnifyingGlass from '../assets/MagnifyingGlass';

export default function SearchBar() {
   const submit = useSubmit();
   const [searchValue, setSearchValue] = useState('');

   useEffect(() => {
      const url = window.location.href;
      const searchParams = new URL(url).search;
      searchParams.includes('?name') && setSearchValue(searchParams.slice(6));
   }, []);

   return (
      <div className="w-full flex items-center gap-8 px-10 py-5 text-color bg-color-component shadow rounded-md sm:w-[480px] sm:gap-6 md:px-8 ease-in-out duration-300">
         <MagnifyingGlass style="w-[25px] h-[25px]" />
         <Form
            autoComplete="off"
            className="w-full"
            id="form-id"
            defaultValue="form-search"
            role="search"
         >
            <input
               className="w-full bg-transparent focus:outline-none"
               placeholder="Search of a country..."
               defaultValue={searchValue}
               name="name"
               onChange={(e) => {
                  submit(e.currentTarget.form);
               }}
            />
         </Form>
      </div>
   );
}
