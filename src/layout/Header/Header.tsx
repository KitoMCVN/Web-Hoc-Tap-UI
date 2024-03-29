import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../hook/darkMode";
import SearchVideos from "./search";

function Header() {
  return (
    <header className="backdrop-blur-xl h-[60px] flex items-center bg-white/50 dark:border-b-slate-50/10 dark:bg-slate-900/50 border-b border-b-slate-900/10">
      <div className=" flex size-full pr-5 pl-2 items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="text-lg size-10 text-neutral-900 dark:text-slate-50">
            <div className="size-full flex items-center justify-center dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </button>
          <Link to="/">
            <div className="size-12 cursor-pointer">
              <img src="/logo.png" alt="logo" />
            </div>
          </Link>
        </div>
        <div className="flex gap-2 items-center flex-1 justify-end">
          <SearchVideos />
          <div className="flex gap-3 pl-3 border-l border-l-slate-900/10 dark:border-slate-50/10">
            <div className="text-xl">
              <DarkModeToggle />
            </div>
            <div>
              <a
                className="bg-slate-900 hover:bg-slate-700 focus:outline-none text-slate-50 font-semibold h-10 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                href=""
              >
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
