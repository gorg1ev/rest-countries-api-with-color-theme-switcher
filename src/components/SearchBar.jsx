import React from 'react';
import { Form, useSubmit } from 'react-router-dom';
import MagnifyingGlass from '../assets/MagnifyingGlass';

export default function SearchBar() {
   const submit = useSubmit();

   return (
      <div className="w-full flex items-center gap-8 px-10 py-5 text-color bg-color-component shadow rounded-md sm:w-[480px] sm:gap-6 md:px-8">
         <MagnifyingGlass style="w-[25px] h-[25px]" />
         <Form
            className="w-full"
            id="form-id"
            defaultValue="form-search"
            role="search"
         >
            <input
               className="w-full bg-transparent focus:outline-none"
               placeholder="Search of a country..."
               name="country"
               onChange={(e) => {
                  submit(e.currentTarget.form);
               }}
            />
         </Form>
      </div>
   );
}
