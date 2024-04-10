import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HomeData } from "../../data/data";
import { Link } from "react-router-dom";

interface SearchResult {
  courseName: string;
  className: string;
  subjectName: string;
  playlistId: string;
}

function removeVietnameseAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function SearchVideos() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "m") {
        setIsFocused(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const matchSearch = (item: SearchResult, searchTerm: string): boolean => {
    const searchWords = removeVietnameseAccents(searchTerm)
      .split(/\s+/)
      .filter(Boolean);
    const normalizedItem = {
      courseName: removeVietnameseAccents(item.courseName),
      className: removeVietnameseAccents(item.className),
      subjectName: removeVietnameseAccents(item.subjectName),
      playlistId: item.playlistId,
    };
    return searchWords.every((word) => {
      const lowerCaseWord = word.toLowerCase();
      return (
        normalizedItem.courseName.toLowerCase().includes(lowerCaseWord) ||
        normalizedItem.className.toLowerCase().includes(lowerCaseWord) ||
        normalizedItem.subjectName.toLowerCase().includes(lowerCaseWord) ||
        normalizedItem.playlistId.toLowerCase().includes(lowerCaseWord)
      );
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];

    for (const course of HomeData) {
      for (const classItem of course.classes) {
        for (const subject of classItem.subjects) {
          const searchItem: SearchResult = {
            courseName: course.name,
            className: classItem.name,
            subjectName: subject.name,
            playlistId: subject.playlist_id,
          };

          if (matchSearch(searchItem, value)) {
            results.push(searchItem);
          }
        }
      }
    }

    setSearchResults(results);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className="h-10 w-72 items-center dark:bg-slate-800 dark:highlight-white/5 overflow-hidden rounded-lg border-[1px] border-slate-900/10 bg-white px-4 flex"
      ref={searchContainerRef}
    >
      <div className="text-base text-slate-400 dark:text-slate-100">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        className="ml-3 w-full text-sm dark:bg-slate-800 text-slate-600 dark:text-slate-50 focus:outline-none"
        type="text"
        placeholder="Tìm kiếm khoá học"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!isFocused && (
        <kbd
          className={
            "w-16 font-sans font-semibold dark:text-slate-100 text-slate-500"
          }
        >
          <abbr
            title="Control"
            className="text-slate-300 dark:text-slate-100 no-underline"
          >
            Ctrl{" "}
          </abbr>{" "}
          M
        </kbd>
      )}

      {searchResults.length > 0 && searchTerm && (
        <div className="absolute top-full right-[100px] bg-white w-[500px] dark:bg-slate-900 border-b border-l border-r border-slate-900/10 dark:border-slate-50/10 rounded-b-lg overflow-y-auto max-h-[400px] z-50">
          {searchResults.map((result, index) => (
            <Link
              to={`/video?list=${result.playlistId}`}
              key={index}
              className=" block px-4 py-2 cursor-pointer text-slate-800 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <div>
                {result.courseName} - {result.className} - {result.subjectName}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchVideos;
