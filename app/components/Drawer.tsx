import React from "react";
import Markdown from "react-markdown";

const Drawer = ({ data, isOpen, setIsOpen }: any) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-gray-700 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg" data-testid="standupHeader">
            <div>{`${data.username} Standup`}</div>
            <div>{data.date}</div>
          </header>
          <div className=" h-[250px] rounded p-4">
            <div className="mt-4 ">
              <span className="text-2xl text-yellow-200">Yesterday:</span>
              <Markdown>{data.yesterday}</Markdown>
              <hr className="block h-[1px] border-red mt-2" />
            </div>
            <div className="mt-4 text-2xl">
              <span className="text-2xl text-yellow-200">today:</span>
              <Markdown>{data.today}</Markdown>
              <hr className="block h-[1px] border-red mt-2" />
            </div>
            <div className="mt-4 text-2xl">
              <span className="text-2xl text-yellow-200">blockers:</span>
              <Markdown>{data.blockers}</Markdown>
              <hr className="block h-[1px] border-red mt-2" />
            </div>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export { Drawer };
