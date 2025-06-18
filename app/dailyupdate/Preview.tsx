"use client";
import React from "react";

import Markdown from "react-markdown";

import {
  useGetTodayText,
  useGetYesterdayText,
  useGetBlockerText,
} from "../store/storeHooks";

const Preview = ({ markdown, title }: any) => {
  const today = useGetTodayText();
  const yesterday = useGetYesterdayText();
  const blockers = useGetBlockerText();
  return (
    <div className="pt-5 mt-8 mb-10 xl:mx-8 xl:mt-0 overflow-scroll bg-gray-900 preview ">
      <span>{title}</span>
      <div className=" h-[250px] rounded p-4">
        <div className="mt-4 " data-testid="yesterdayPreview">
          <span className="text-2xl text-yellow-200">Yesterday:</span>
          <Markdown>{yesterday}</Markdown>
          <hr className="block h-[1px] border-red mt-2" />
        </div>
        <div className="mt-4 text-2xl" data-testid="todayPreview">
          <span className="text-2xl text-yellow-200">today:</span>
          <Markdown>{today}</Markdown>
          <hr className="block h-[1px] border-red mt-2" />
        </div>
        <div className="mt-4 text-2xl" data-testid="blockersPreview">
          <span className="text-2xl text-yellow-200">blockers:</span>
          <Markdown>{blockers}</Markdown>
          <hr className="block h-[1px] border-red mt-2" />
        </div>
      </div>
    </div>
  );
};

export { Preview };
