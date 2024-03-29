import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClipboard, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const sidebar = [
    { name: "Trang Chủ", link: "/", icon: <FontAwesomeIcon icon={faHouse} /> },
    { name: "Luyện Tập", link: "/practice", icon: <FontAwesomeIcon icon={faClipboard} /> },
    { name: "Tiện Ít", link: "/practice", icon: <FontAwesomeIcon icon={faBriefcase} /> },
  ];

  return (
    <div className="hidden md:block h-dvh overflow-y-auto backdrop-blur-xl bg-white/50 text-lg dark:bg-slate-900/50 text-slate-800 dark:text-slate-200">
      <div className="px-1 py-3">
        {sidebar.map((sidebar, index) => (
          <Link key={index} to={sidebar.link}>
            <div className="hover:dark:bg-slate-800 hover:bg-slate-100 px-1 rounded-lg cursor-pointer flex my-2 flex-col py-3 w-full justify-center items-center">
              <span className="">{sidebar.icon}</span>
              <span className="text-xs">{sidebar.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
