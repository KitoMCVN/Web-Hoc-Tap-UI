import React, { Dispatch, SetStateAction, useState } from "react";
import { HomeData, Course } from "./data";
import { Link } from "react-router-dom";

interface Props {
  courses: Course[];
}

interface SelectedClass {
  description: string;
  id: string;
  name: string;
  subjects: { name: string; playlist_id: string }[];
}

const Home: React.FC<Props> = ({ courses }) => {
  const [selectedClass, setSelectedClass]: [SelectedClass | null, Dispatch<SetStateAction<SelectedClass | null>>] = useState<SelectedClass | null>(null);

  const handleClassClick = (description: string) => {
    setSelectedClass((prevSelectedClass: SelectedClass | null) => {
      if (prevSelectedClass && prevSelectedClass.description === description) {
        return null;
      } else {
        const foundClass = courses.map((course) => course.classes.find((classItem) => classItem.description === description)).find(Boolean); // Find the first truthy value
        return foundClass || null;
      }
    });
  };

  return (
    <div className="pb-5">
      {courses.map((course) => (
        <div key={course.id} className="mt-5 dark:text-slate-200 text-slate-800">
          <h2 className="text-2xl font-bold mb-1">{course.name}</h2>
          <p className="text-gray-600 dark:text-slate-300 mb-4">{course.description}</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 xl:grid-cols-5">
            {course.classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`min-h-[200px] flex items-center p-4 rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer ${selectedClass && selectedClass.description === classItem.description ? "" : ""}`}
                onClick={() => handleClassClick(classItem.description)}
              >
                <h3 className="text-4xl font-bold mx-auto min-w-[120px]">{classItem.name}</h3>
              </div>
            ))}
          </div>
          {course.classes.map((classItem) => (
            <>
              {selectedClass && selectedClass.description === classItem.description && (
                <>
                  <h4 className="text-xl font-bold mt-5 mb-1">Liên Kết:</h4>
                  <ul className="flex gap-4 h-full">
                    {classItem.subjects.map((subject) => (
                      <Link to={`/video?list=${subject.playlist_id}`} key={subject.playlist_id}>
                        <li className="h-[50px] w-[200px] bg-slate-300 rounded-lg flex items-center content-center dark:bg-slate-800">
                          <p className="mx-auto">{subject.name}</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

const HomeWithData: React.FC = () => {
  return <Home courses={HomeData} />;
};

export default HomeWithData;
