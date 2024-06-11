import React, { useState } from "react";
import { DeOnData, Course } from "./data";
import { Link } from "react-router-dom";

interface Props {
  monhoc: Course[];
}

interface Class {
  id: string;
  name: string;
  description: string;
  subjects: { name: string; playlist_id: string }[];
}

const DeOn: React.FC<Props> = ({ monhoc }) => {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const handleClassClick = (description: string) => {
    if (description !== "") {
      const foundClass = monhoc.find((course) => course.classes.some((classItem) => classItem.description === description));
      const newSelectedClass = (foundClass?.classes.find((classItem) => classItem.description === description) as Class) || null;
      setSelectedClass((currentSelectedClass) => {
        if (currentSelectedClass && newSelectedClass && currentSelectedClass.id === newSelectedClass.id) return null;
        return newSelectedClass;
      });
    }
  };

  const classItemClickHandler = (description: string) => {
    return () => {
      handleClassClick(description);
    };
  };

  return (
    <div className="pb-20">
      {monhoc.map((course) => (
        <div key={course.id} className="mt-5 dark:text-slate-200 text-slate-800">
          <h2 className="text-2xl font-bold mb-1">{course.name}</h2>
          <p className="text-gray-600 dark:text-slate-300 mb-4">{course.description}</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:grid-cols-5">
            {course.classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`min-h-[200px] flex items-center p-4 rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer ${selectedClass && selectedClass.description === classItem.description ? "selected" : ""}`}
                onClick={classItemClickHandler(classItem.description)}
              >
                <h3 className="text-4xl font-bold mx-auto min-w-[120px]">{classItem.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedClass && (
        <div key={selectedClass.id}>
          <h4 className="text-xl font-bold mt-5 mb-1">Liên Kết:</h4>
          <ul className="flex gap-4 h-full flex-wrap">
            {selectedClass.subjects.map((subject) => (
              <li key={subject.playlist_id} className="h-[50px] w-[200px] bg-slate-300 rounded-lg flex items-center content-center dark:bg-slate-800">
                <Link to={`/de?name=${subject.playlist_id}`} className="w-full text-center ">
                  <p>{subject.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DeonWithData: React.FC = () => {
  return <DeOn monhoc={DeOnData} />;
};

export default DeonWithData;
