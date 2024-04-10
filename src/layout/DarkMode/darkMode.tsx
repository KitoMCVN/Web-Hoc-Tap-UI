import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedMode ? JSON.parse(savedMode) : false);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button className='focus:outline-none size-10' onClick={toggleDarkMode}>
      <div className='size-full flex items-center justify-center dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full'>
        {isDarkMode ? (
          <svg fill='none' className='w-6 h-6' viewBox='0 0 24 24'>
            <path d='M17.715 15.15A6.5 6.5 0 019 6.035c-2.894.887-5 3.61-5 6.832 0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853z' className='fill-sky-400/20' clipRule='evenodd'></path>
            <path
              d='M17.715 15.15l.95.316a1 1 0 00-1.445-1.185l.495.869zM9 6.035l.846.534a1 1 0 00-1.14-1.49L9 6.035zm8.221 8.246a5.47 5.47 0 01-2.72.718v2a7.47 7.47 0 003.71-.98l-.99-1.738zm-2.72.718A5.5 5.5 0 019 9.5H7a7.5 7.5 0 007.5 7.5v-2zM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 007 9.5h2zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99l-.586-1.91C5.397 6.094 3 9.201 3 12.867h2zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632z'
              className='fill-sky-500'></path>
            <path d='M17 3a1 1 0 011 1 2 2 0 002 2 1 1 0 110 2 2 2 0 00-2 2 1 1 0 11-2 0 2 2 0 00-2-2 1 1 0 110-2 2 2 0 002-2 1 1 0 011-1z' className='fill-sky-500' clipRule='evenodd'></path>
          </svg>
        ) : (
          <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
            <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' className='fill-sky-400/20 stroke-sky-500'></path>
            <path d='M12 4v1m5.66 1.344l-.828.828m3.173 4.832h-1m-1.345 5.66l-.828-.828M12 20.01V19m-5.66-1.336l.835-.836m-3.18-4.824h1.01M6 6l.835.836' className='stroke-sky-500'></path>
          </svg>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
