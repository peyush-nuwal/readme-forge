'use client'
import React, { useState } from "react";
import Input from "../ui/Input";
import ElementList from "./ElementLibrary";

const AddElements = () => {
    const [value, setValue] = useState("")
   
    
  return (
    <div className="my-4">
      {/* ---heading--- */}
      <h6 className="text-[10px] font-light text-gray-500 dark:text-stone-500">
        Click on a section below to add it to Readme.
      </h6>
      {/* ---input--- */}
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Search for a seaction"}
      />
      <ElementList value={value} />
    </div>
  );
};

export default AddElements;
