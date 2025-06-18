"use client";
import { Drawer } from "@components/Drawer";
import React, { useState } from "react";

const StandupList = ({ data }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerData, setDrawerData] = useState({});
  const list = data.map((standup: any) => (
    <li
      className="border-solid rounded hover:bg-gray-700 mb-2 p-4 border-black bg-gray-500 "
      key={`${standup.date}_${standup.username}`}
      onClick={() => {
        setDrawerOpen(true);
        setDrawerData(standup);
      }}
    >
      <ul>
        <li>{`username:${standup.username}`}</li>
        <li>{`date:${standup.date}`}</li>
        <li>{`today:${standup.today}`}</li>
        <li>{`yesterday:${standup.yesterday}`}</li>
        <li>{`blockers:${standup.blockers}`}</li>
      </ul>
    </li>
  ));
  return (
    <div className="bg-gray-400 p-4 ">
      <Drawer isOpen={drawerOpen} setIsOpen={setDrawerOpen} data={drawerData} />
      <ul>{list}</ul>
    </div>
  );
};

export { StandupList };
