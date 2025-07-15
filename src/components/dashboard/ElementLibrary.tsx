'use client'
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import CustomSectionForm from './CustomSectionForm';
import { predefinedElements } from '@/lib/data';
import useElementStore from '@/store/useElementStore';




const ElementLibrary = ({ value }: { value: string }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const addElement = useElementStore((state) => state.addElement);
  const selectedElements = useElementStore((state) => state.selectedElements);
  const setSelected = useElementStore((state) => state.setSelected);
  const availableElements = predefinedElements
    .filter(
      (pre) =>
        !selectedElements.some(
          (sel) => sel.originalId === pre.id || sel.id === pre.id
        )
    )
    .sort((a, b) => a.title.localeCompare(b.title)); // ✅ Sort alphabetically by title

  const filteredElements = availableElements.filter((pre) =>
    pre.title.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelectElement = (ele: ReadmeElement) => {
    addElement(ele);
    setTimeout(() => {
      const last = useElementStore.getState().selectedElements.at(-1);
      if (last) {
        setSelected(last.id); // select the one just added
      }
    }, 300);
  };

  return (
    <div data-testid="Element-library-container" className="">
      {/* ---add custom section --- */}
      <div
        onClick={() => setFormOpen(true)}
        className={`flex items-center justify-center gap-1 mb-2  text-gray-600 dark:text-gray-400 hover:text-black  hover:dark:text-gray-200 text-sm px-2 py-2 border bg-slate-100 dark:bg-zinc-900  border-stone-300 dark:border-zinc-700 
         rounded-lg  transition-colors ease-in duration-100 cursor-pointer`}
      >
        <BiPlus className="text-xl" />
        Custom Section
      </div>

      {/* ---predefined element list---  */}
      <div className="space-y-1 y-1">
        {filteredElements.map((ele) => (
          <Element
            key={ele.id}
            onClick={() => handleSelectElement(ele)}
            title={ele.title}
          />
        ))}
      </div>

      {/* form for custom section  */}
      <CustomSectionForm open={formOpen} close={() => setFormOpen(false)} />
    </div>
  );
};

export default ElementLibrary;

const Element = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      data-testid="Element-library-item"
      onClick={onClick}
      className={`flex items-center justify-start text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-200 text-sm px-2 py-2 border bg-slate-100 dark:bg-zinc-900  border-stone-300 dark:border-zinc-700 
         rounded-lg  transition-colors ease-in duration-100 cursor-pointer`}
    >
      {title}
    </div>
  );
};