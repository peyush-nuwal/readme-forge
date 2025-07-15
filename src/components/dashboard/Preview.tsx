"use client";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import useElementStore from "@/store/useElementStore";

const Preview = () => {
  const selectedElements = useElementStore((state) => state.selectedElements);
  const contents = selectedElements.map((el) => el.content).join("\n\n");

  const handleDownload = () => {
    const selectedElements = useElementStore.getState().selectedElements;
    const contents = selectedElements.map((el) => el.content).join("\n\n");

    const blob = new Blob([contents], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "README.md";
    link.click();

    URL.revokeObjectURL(url); // Clean up
  };
  return (
    <div className="col-span-24 lg:col-span-11 h-full px-4 py-6 bg-white dark:bg-neutral-800 border border-stone-300 dark:border-stone-800 rounded-xl shadow-sm prose dark:prose-invert max-w-none overflow-y-hidden">
      <div className=" flex justify-between items-center">
        <h4 className="text-base text-accent ">Preview</h4>
        <button onClick={handleDownload} className="btn btn-outline text-sm ">
          Download
        </button>
      </div>

      <div className="max-h-[90%] prose dark:prose-invert max-w-none overflow-y-auto  my-4 ">
        <MarkdownPreview source={contents} style={{ padding: 16 }} />
      </div>
    </div>
  );
};

export default Preview;
