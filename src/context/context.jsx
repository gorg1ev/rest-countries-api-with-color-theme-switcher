import React, { useState, createContext } from 'react';

const context = createContext();

const DEFAULT_TITLE = 'Filter by Region';
export function ContextProvider(props) {
   const [theme, setTheme] = useState(false);
   const [dropdownMenuTitle, setDropdownMenuTitle] = useState(DEFAULT_TITLE);
   const [toggleList, setToggleList] = useState(false);

   function darkModeHandler() {
      setTheme((prev) => !prev);
      document.documentElement.classList.toggle('dark');
   }

   function changeTitle(e) {
      if (e.target.closest('button'))
         setDropdownMenuTitle(e.target.textContent);

      toggleMenuHandler();
   }

   function defaultTitle() {
      setDropdownMenuTitle(DEFAULT_TITLE);
   }

   function toggleMenuHandler() {
      setToggleList((prev) => !prev);
   }

   const data = {
      theme,
      darkModeHandler,
      dropdownMenuTitle,
      changeTitle,
      defaultTitle,
      toggleList,
      toggleMenuHandler,
   };

   return <context.Provider value={data}>{props.children}</context.Provider>;
}

export default context;
