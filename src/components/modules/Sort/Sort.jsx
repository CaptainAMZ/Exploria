"use client";
import React, { useEffect, useState } from "react";
import { useQueryParams } from "@/hooks/Query/useQuery";
import useComponentVisible from "@/hooks/Visibility-Control/useIsVisible";
import { getSingleQuery } from "@/utils/Query/GetSingleQuery";

const Sort = ({ query }) => {
  const [value, setValue] = useState(0);
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value == 0) deleteQueryParam(query);
    else updateQueryParam(query, e.target.value);
  };

  const handleClick = () => {
    setIsComponentVisible(true);
  };

  const { updateQueryParam, deleteQueryParam } = useQueryParams();

  useEffect(() => {
    const queryValue = getSingleQuery(query);
    setValue(queryValue);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        id="filterDropdownButton"
        data-dropdown-toggle="filterDropdown"
        className="h-full flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-4 h-4 mr-2 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        Filter
        <svg
          className="-mr-1 ml-1.5 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      {isComponentVisible && (
        <div
          ref={ref}
          id="filterDropdown"
          className="absolute inset-0 z-50 h-fit w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Sort By Date
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
              <input
                id="all"
                type="checkbox"
                value="0"
                name="date"
                onChange={handleChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                checked={value == 0 || !value}
              />
              <label
                htmlFor="all"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                All
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="latest"
                type="checkbox"
                value="1"
                name="date"
                onChange={handleChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                checked={value == 1}
              />
              <label
                htmlFor="latest"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Newest First
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="oldest"
                type="checkbox"
                value="2"
                name="date"
                onChange={handleChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                checked={value == 2}
              />
              <label
                htmlFor="latest"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Oldest First
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
