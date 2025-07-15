"use client";
import React, { useEffect, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-tomorrow.css";

const Editor = () => {
  const [markdown, setMarkdown] = useState<string>(
    `
# Hello Markdown

\`\`\`js
const sayHi = () => {
  console.log("Hello, world!");
}
\`\`\`
    `.trim()
  );
   
  useEffect(() => {
    
    return () => {
      
    }
  }, [])
  

  return (
    <div className="col-span-24 sm:col-span-14 lg:col-span-8 h-full p-4 bg-black rounded-xl shadow-sm">
      <h4 className="text-sm text-accent mb-2">Editor</h4>
      <div className="h-full text-white">
        <CodeEditor
          value={markdown}
          onValueChange={setMarkdown}
          highlight={(code: string) =>
            Prism.highlight(code, Prism.languages.markdown, "markdown")
          }
          padding={10}
          textareaId="codeArea"
          textareaClassName="focus:outline-none font-mono text-black dark:text-white text-base bg-white dark:bg-transparent"
          style={{
            backgroundColor: "#0d1117",
            borderRadius: 0,
            fontFamily: '"Fira Code", monospace',
            fontSize: 16,
            minHeight: "300px",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
