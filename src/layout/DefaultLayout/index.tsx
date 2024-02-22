import Header from "../Header";
import Sidebar from "../Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-h-dvh w-full overflow-hidden font-inter'>
      <Header></Header>
      <Sidebar></Sidebar>
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
