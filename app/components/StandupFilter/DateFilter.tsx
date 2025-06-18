"use client";
import { format } from "date-fns";
import { useSetStartTime, useSetEndTime } from "@store/storeHooks";

const DateFilter = () => {
  const setStartTime = useSetStartTime();
  const setEndTime = useSetEndTime();

  return (
    <div id="date-range-picker" className="flex items-center">
      <div className="relative">
        <input
          id="datepicker-range-start"
          name="start"
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        />
      </div>
      <span className="mx-4 text-gray-500">to</span>
      <div className="relative">
        <input
          id="datepicker-range-end"
          name="end"
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
          max={format(new Date(), "yyyy-MM-dd")}
        />
      </div>
    </div>
  );
};

export { DateFilter };
