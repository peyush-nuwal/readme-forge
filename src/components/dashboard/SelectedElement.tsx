'use client'
import React from 'react'
import { SortableDragContainer } from './SortableList'
import { RiDraggable, RiRefreshLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi2";
// import Tooltip from '../ui/Tooltip';
import useElementStore from "@/store/useElementStore";

const SelectedElement = () => {
   
   const selectedElements = useElementStore((state) => state.selectedElements);
   const setElements = useElementStore((state) => state.setElements);
   console.log(selectedElements)

  return (
    <div className="my-5 overflow-x-clip">
      {selectedElements.length === 0 ? (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
          No sections added yet. <br />
          <span className="font-medium text-accent">
            Choose elements below
          </span>{" "}
          to build your README.
        </div>
      ) : (
        <SortableDragContainer
          items={selectedElements}
          setItems={setElements}
          getId={(item) => item.id}
        >
          {(item) => <Item key={item.id} id={item.id} name={item.title} />}
        </SortableDragContainer>
      )}
    </div>
  );
}

export default SelectedElement



const Item = ({
  id,
  name
}: {
  id:string
  name: string;
}) => {

  const removeElement = useElementStore((state) => state.removeElement);
  
const handleDeleteElement = (id: string, e: React.MouseEvent) => {
  e.stopPropagation();
  removeElement(id);
};

  return (
    <div
      className={`flex items-center justify-between text-sm px-2 py-2 border bg-slate-100 dark:bg-zinc-900 ${
        false ? "border-accent" : "border-stone-300 dark:border-zinc-700 "
      } rounded-lg group`}
    >
      <div className="flex items-center gap-2">
        <RiDraggable className="text-xl text-stone-500  group-hover:text-black group-hover:dark:text-white" />
        <h5 className="text-sm">{name}</h5>
      </div>

      <span className="p-1 flex items-center gap-2  text-stone-500 dark:text-gray-400   cursor-pointer ">
        {/* ---reset icons---  */}

        <div className="relative group">
          <RiRefreshLine className="relative text-sm transform origin-center hover:rotate-180 group-hover:scale-105 transition-transform ease-in-out duration-300 hover:text-black hover:dark:text-gray-200 " />
          {/* <Tooltip text="Reset" /> */}
        </div>

        {/* ---delete icons---  */}
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => handleDeleteElement(id, e)}
          className="relative "
        >
          <HiOutlineTrash className="text-sm transform origin-center hover:-translate-y-[2px] group-hover:scale-105 transition-transform ease-in-out duration-300  hover:dark:text-gray-200  " />
          {/* <Tooltip text="Delete" /> */}
        </div>
      </span>
    </div>
  );
};