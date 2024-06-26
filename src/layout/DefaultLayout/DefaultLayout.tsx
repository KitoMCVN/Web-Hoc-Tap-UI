import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh w-screen overflow-hidden bg-white dark:bg-slate-900">
      <Header></Header>
      <div className="flex overflow-x-hidden">
        <Sidebar></Sidebar>
        <div className="h-dvh flex-1 overflow-y-scroll">
          <div className="p-5 max-w-screen-2xl mx-auto w-full min-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
