"use client";

import React, { useState } from "react";

interface MenuItem {
  route: string;
  title: string;
}

const DesktopMenu = ({ items }: { items: MenuItem[] }) => {
  return (
    <ul className="hidden space-x-8 lg:flex">
      {items.map((item) => {
        return (
          <li
            className="border-b border-gray-400 my-8 uppercase"
            key={item.route}
          >
            <a href={item.route} data-testid={`desktopMenu_${item.title}`}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { DesktopMenu };
