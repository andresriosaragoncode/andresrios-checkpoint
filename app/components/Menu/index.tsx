"use client";

import React, { useState } from "react";
import { DesktopMenu } from "./Desktop";
import { MobileMenu } from "./Mobile";

interface MenuItem {
  route: string;
  title: string;
}

const items = [
  { title: "Week Summary", route: "summary" },
  { title: "Team View", route: "teamview" },
  { title: "History View", route: "historyview" },
  { title: "Daily Updates", route: "dailyupdate" },
];

// const Menu = ({ items }: { items: MenuItem[] }) => {
const Menu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 px-4">
      <a href="/">Home</a>
      <nav>
        <DesktopMenu items={items} />
        <MobileMenu
          setIsNavOpen={setIsNavOpen}
          isNavOpen={isNavOpen}
          items={items}
        />
      </nav>
    </div>
  );
};

export { Menu };
export type { MenuItem };
