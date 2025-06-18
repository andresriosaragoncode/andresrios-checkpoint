"use client";

import React, { useState } from "react";

interface MenuItem {
  route: string;
  title: string;
}

const MobileMenu = ({
  setIsNavOpen,
  isNavOpen,
  items,
}: {
  setIsNavOpen: Function;
  isNavOpen: boolean;
  items: MenuItem[];
}) => {
  return (
    <section className="MOBILE-MENU flex lg:hidden">
      <div
        className="HAMBURGER-ICON space-y-2"
        onClick={() => setIsNavOpen((prev: any) => !prev)}
        data-testid="mobileMenuToggle"
      >
        {items.map((item) => {
          return (
            <span
              className="block h-0.5 w-8 animate-pulse bg-gray-600"
              key={item.route}
            ></span>
          );
        })}
      </div>

      <div
        className={
          isNavOpen
            ? "block absolute w-full h-[100hv] top-0 right-0 left-0 bg-black flex flex-col items-center justify-evenly z-40"
            : "hidden"
        }
      >
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          {items.map((item) => {
            return (
              <li
                className="border-b border-gray-400 my-8 uppercase"
                key={item.route}
              >
                <a href={item.route} data-testid={`mobileMenu_${item.route}`}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { MobileMenu };
