"use client";
import React from "react";
import { SortableDragContainer } from "./SortableList";
import { RiDraggable, RiRefreshLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi2";
// import Tooltip from '../ui/Tooltip';
import useElementStore from "@/store/useElementStore";
import { predefinedElements } from "@/lib/data";


const SelectedElement = () => {
  const selectedElements = useElementStore((state) => state.selectedElements);
  const setElements = useElementStore((state) => state.setElements);
 

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
};

export default SelectedElement;

const Item = ({ id, name }: { id: string; name: string }) => {
  
  const removeElement = useElementStore((state) => state.removeElement);
  const setSelected = useElementStore((state) => state.setSelected);
  const selectedId = useElementStore((state) => state.selectedId);
  const updateSelectedElement = useElementStore(
    (state) => state.updateSelectedElement
  );
  const getSelectedElement = useElementStore(
    (state) => state.getSelectedElement
  );

  const handleDeleteElement = () => {

    removeElement(id);
  };

    const handleSelect = (e: React.MouseEvent) => {
      e.stopPropagation(); // Stop from bubbling to drag
      setSelected(id);
  };
  

  const isSelected = selectedId === id;

  // updateSelectedElement({ content: markdown });
  
  const resetElement = () => {
    const currentElement = getSelectedElement();
     setSelected(id)
    const originalElement = predefinedElements.find((item) => item.id === currentElement?.originalId);
     updateSelectedElement({ content: originalElement?.content });
  }
  

  return (
    <div
      onClick={handleSelect}
      className={`flex items-center justify-between text-sm px-2 py-2 border bg-slate-100 dark:bg-zinc-900 ${
        isSelected ? "border-accent" : "border-stone-300 dark:border-zinc-700 "
      } rounded-lg group`}
    >
      <div className="flex items-center gap-2">
        <RiDraggable className="text-xl text-stone-500  group-hover:text-black group-hover:dark:text-white" />
        <h5 onPointerDown={(e) => e.stopPropagation()} className="text-sm">
          {name}
        </h5>
      </div>

      <span className="p-1 flex items-center gap-2  text-stone-500 dark:text-gray-400   cursor-pointer ">
        {/* ---reset icons---  */}

        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={resetElement}
          className="relative group"
        >
          <RiRefreshLine className="relative text-sm transform origin-center hover:rotate-180 group-hover:scale-105 transition-transform ease-in-out duration-300 hover:text-black hover:dark:text-gray-200 " />
          {/* <Tooltip text="Reset" /> */}
        </div>

        {/* ---delete icons---  */}
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleDeleteElement}
          className="relative "
        >
          <HiOutlineTrash className="text-sm transform origin-center hover:-translate-y-[2px] group-hover:scale-105 transition-transform ease-in-out duration-300  hover:dark:text-gray-200  " />
          {/* <Tooltip text="Delete" /> */}
        </div>
      </span>
    </div>
  );
};
