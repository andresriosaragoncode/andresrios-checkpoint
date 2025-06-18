"use client";
import React, { useState } from "react";
import { getRowData } from "./getRowData";
import { Drawer } from "@components/Drawer";

const DAYS = ["USER", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

const SummaryTable = ({ standups }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerData, setDrawerData] = useState({});
  const userHeadings = DAYS.map((day) => (
    <th key={day} scope="col" className="px-6 py-3 ">
      {day}
    </th>
  ));

  const rowData = getRowData(standups, DAYS);

  const rows = rowData?.map((userData: any, index: number) => {
    const mappedStandups = userData.map((daily: any) => {
      if (daily.today) {
        return (
          <td
            key={`${daily.username}_${daily.dayOfWeek}`}
            className="px-6 py-4 hover:bg-gray-300 dark:hover:text-gray-900"
            onClick={() => {
              setDrawerOpen(true);
              setDrawerData(daily);
            }}
          >
            <ul>
              <li>{daily.today}</li>
              <li>{daily.blockers}</li>
            </ul>
          </td>
        );
      }
      return (
        <td key={`${daily.user}_${daily.dayOfWeek}`} className="px-6 py-4 ">
          {daily.label}
        </td>
      );
    });
    return (
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        key={`${userData[0].username}_${index}`}
      >
        {mappedStandups}
      </tr>
    );
  });

  return (
    <>
      <Drawer isOpen={drawerOpen} setIsOpen={setDrawerOpen} data={drawerData} />
      <table className=" w-full" data-testid="summaryTable">
        <thead className="text-xs dark:text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
          <tr>{...userHeadings}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
  return null;
};

export { SummaryTable };
``;
