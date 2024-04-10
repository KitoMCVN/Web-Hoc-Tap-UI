import { Link } from "react-router-dom";

const Practice = () => {
  return (
    <div className="">
      <div className="mt-5 dark:text-slate-200 text-slate-800">
        <h2 className="text-2xl font-bold mb-1">Luyện tập</h2>
        <p className="text-gray-600 dark:text-slate-300 mb-4">
          Luyện tập kỉ năng văn phòng
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:grid-cols-3">
          <Link
            to="/practice/keyboard"
            className="min-h-[200px] flex items-center p-4 rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer"
          >
            <h3 className="text-4xl font-bold mx-auto min-w-[120px]">
              Gõ Phím
            </h3>
          </Link>{" "}
          <Link
            to="/practice/mouse"
            className="min-h-[200px] flex items-center p-4 rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer"
          >
            <h3 className="text-4xl font-bold mx-auto min-w-[120px]">Chuột</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;
