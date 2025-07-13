'use client'
import React, { useState } from 'react'
import { SortableDragContainer } from './SortableList'
import { RiDraggable, RiRefreshLine } from "react-icons/ri";

type Section = {
  id: string;
  name: string;
  // add other fields here like content, config, etc.
};
const sections = [
  { id: 'hero', name: 'Hero' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
];
const SelectedElement = () => {
    const [sectionList, setSectionList] = useState(sections); 
   const [selected, setSelected] = useState<Section | null>(null);
  return (
    <div className="my-5">
      <SortableDragContainer
        items={sectionList}
        setItems={setSectionList}
        getId={(item) => item.id}
      >
        {(item) => 
          (
            <Item
              id={item.id}
              name={item.name}
              
            
              
            />
          )}
      </SortableDragContainer>
    </div>
  );
}

export default SelectedElement
import { HiOutlineTrash } from "react-icons/hi2";


const Item = ({
  id,
  name,


}: {
  id: string;
  name: string;
}) => {
  console.log("id", id);

  return (
    <div
      
      className={`flex items-center justify-between px-2 py-2 border bg-slate-100 dark:bg-zinc-900 ${
      false
          ? "border-accent"
          : "border-stone-300 dark:border-zinc-700 "
      } border-stone-300 dark:border-zinc-700  rounded-lg group`}
    >
      <div className="flex items-center gap-2">
        <RiDraggable
          className="text-xl text-stone-500  group-hover:text-black group-hover:dark:text-white"
          
        />
        <h5 className="text-sm">{name}</h5>
      </div>

      <span className="p-1 flex items-center gap-2  text-stone-500  cursor-pointer ">
        <RiRefreshLine className="text-sm transform origin-center hover:rotate-180 group-hover:scale-105 transition-transform ease-in-out duration-300 hover:text-black hover:dark:text-white" />
        <HiOutlineTrash className="text-sm transform origin-center hover:-translate-y-[2px] group-hover:scale-105 transition-transform ease-in-out duration-300 hover:text-black hover:dark:text-white " />
      </span>
    </div>
  );
};