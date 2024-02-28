import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../hook/darkMode";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "m") {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <header className='backdrop-blur-xl h-[60px] flex items-center bg-white/50 dark:border-b-slate-50/10 dark:bg-slate-900/50 border-b border-b-slate-900/10'>
      <div className=' flex size-full pr-5 pl-2 items-center gap-4'>
        <div className='flex items-center gap-2'>
          <button className='text-lg size-10 text-neutral-900 dark:text-slate-50'>
            <div className='size-full flex items-center justify-center dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full'>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </button>
          <Link to='/'>
            <div className='size-12 cursor-pointer'>
              <img src='/logo.png' alt='logo' />
            </div>
          </Link>
        </div>
        <div className='flex gap-2 items-center flex-1 justify-end'>
          <button className='text-lg size-10 text-neutral-900 dark:text-slate-50'>
            <div className=' md:hidden size-full flex items-center justify-center dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </button>
          <div className='hidden h-10 w-72 items-center dark:bg-slate-800 dark:highlight-white/5 overflow-hidden rounded-lg border-[1px] border-slate-900/10 bg-white px-4 md:flex'>
            <div className='text-base text-slate-400 dark:text-slate-100'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              ref={inputRef}
              className='ml-3 w-full text-sm dark:bg-slate-800 text-slate-600 dark:text-slate-50 focus:outline-none'
              type='text'
              placeholder='Tìm kiếm khoá học, video...'
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {isFocused ? null : (
              <kbd className={"w-16 font-sans font-semibold dark:text-slate-100 text-slate-500"}>
                <abbr title='Control' className='text-slate-300 dark:text-slate-100 no-underline'>
                  Ctrl{" "}
                </abbr>{" "}
                M
              </kbd>
            )}
          </div>
          <div className='flex gap-3 pl-3 border-l border-l-slate-900/10 dark:border-slate-50/10'>
            <div className='text-xl'>
              <DarkModeToggle />
            </div>
            <div>
              <a
                className='bg-slate-900 hover:bg-slate-700 focus:outline-none text-slate-50 font-semibold h-10 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'
                href=''>
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
