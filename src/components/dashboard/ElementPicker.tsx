import React from "react";
import { RiRefreshLine } from "react-icons/ri";
import SelectedElement from "./SelectedElement";

const ElementPicker = () => {
  return (
    <div className="col-span-24 sm:col-span-10 lg:col-span-6  h-full p-4  bg-white dark:bg-neutral-800 border border-stone-300 dark:border-stone-800 rounded-xl shadow-sm">
      <div className="flex justify-between ">
        <h4 className="text-sm text-accent">Sections</h4>
        <span className="flex items-center gap-1 text-xs text-stone-500 hover:text-black group hover:dark:text-white cursor-pointer ">
          <RiRefreshLine className="text-sm transform origin-center group-hover:rotate-180 group-hover:scale-105 transition-transform ease-in-out duration-300" />
          Reset
        </span>
      </div>
      <h6 className="text-[10px] font-light text-gray-500 dark:text-stone-500">
        Click on a section below to edit the content.
      </h6>
      <SelectedElement />
    </div>
  );
};

export default ElementPicker;
