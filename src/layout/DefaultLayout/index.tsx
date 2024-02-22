import Header from "../Header";
import Sidebar from "../Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-h-dvh w-full overflow-hidden bg-white dark:bg-slate-800'>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="h-dvh">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
