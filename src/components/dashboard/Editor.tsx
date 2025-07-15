"use client";
import React, {  useEffect, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-tomorrow.css";
import useElementStore from "@/store/useElementStore";

const Editor = () => {
  
  const selectedElements = useElementStore((state) => state.selectedElements);
  const selectedId=useElementStore((state)=>state.selectedId)
  const setSelected = useElementStore((state) => state.setSelected); 
  const updateSelectedElement = useElementStore(
    (state) => state.updateSelectedElement
  ); 
  const [markdown, setMarkdown] = useState<string>(selectedElements[0]?.content);
  


useEffect(() => {
  if (selectedElements.length === 0) return;

  const selected =
    selectedElements.find((ele) => ele.id === selectedId) ||
    selectedElements[0];
  if (!selectedId || !selectedElements.some((e) => e.id === selectedId)) {
    setSelected(selected.id);
  }

  // ✅ Only update markdown if different
  if (selected.content !== markdown) {
    setMarkdown(selected.content || "");
  }
}, [selectedId, selectedElements]);
   
useEffect(() => {
  const timeout = setTimeout(() => {
    updateSelectedElement({ content: markdown });
  }, 300); 

  return () => clearTimeout(timeout); 
}, [markdown]);

  return (
    <div className="col-span-24 sm:col-span-14 lg:col-span-8 h-full px-4 py-6 bg-black rounded-xl shadow-sm  overflow-y-hidden">
      <h4 className="text-base text-accent mb-2">Editor</h4>
      <div className="max-h-[95%] text-white py-2 overflow-y-auto no-scrollbar">
        <CodeEditor
          value={markdown}
          onValueChange={setMarkdown}
          highlight={(code: string) =>
            Prism.highlight(code, Prism.languages.markdown, "markdown")
          }
          padding={10}
          textareaId="codeArea"
          textareaClassName="min-h-full focus:outline-none font-mono text-black dark:text-white text-base bg-white dark:bg-transparent"
          style={{
            backgroundColor: "#000",
            borderRadius: 0,
            fontFamily: '"Fira Code", monospace',
            fontSize: 16,
            minHeight: "90%",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
