"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "../ui/Input";
import { CgClose } from "react-icons/cg";
import useElementStore from "@/store/useElementStore";

type CustomSectionFormProps = {
  open: boolean;
  close: () => void;
};
const CustomSectionForm = ({ open, close }: CustomSectionFormProps) => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>("")
  const createElement = useElementStore((state) => state.createElement)
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);
  
  const handleCreateElement = () => {
    createElement(value)
    setValue("");
    close()
  }
  return (
    open && (
      <div className="fixed top-0 left-0 z-[999] h-screen w-screen bg-neutral-950/10 flex items-center justify-center">
        {/* ---main-form---    */}
        <div
          ref={formRef}
          className="w-7/10 h-3/10 sm:w-5/10 sm:h-3/10 md:w-4/10 md:h-3/10 lg:w-3/10 lg:h-3/10 bg-white dark:bg-neutral-800 border border-stone-300 dark:border-stone-800 rounded-3xl px-5 py-6"
        >
          {/* --- close-btn --- */}
          <div onClick={close} className="flex justify-end cursor-pointer">
            <CgClose className="text-xl text-gray-500 dark:text-gray-300 hover:scale-110 hover:text-black hover:dark:text-white transition-all ease-in-out duration-200" />
          </div>
          {/* ---form title--       */}
          <h1 className="text-xl text-black dark:text-gray-400 ">
            {" "}
            Add Custom section
          </h1>

          <Input
            placeholder="Enter section name e.g. Header"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex justify-end mt-5">
            <button
              onClick={handleCreateElement}
              className="ml-full btn btn-primary text-base"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomSectionForm;
