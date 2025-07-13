import Editor from '@/components/dashboard/Editor';
import ElementPicker from '@/components/dashboard/ElementPicker';
import Preview from '@/components/dashboard/Preview';
import React from 'react'

const page = () => {
  return (
    <div className="h-[calc(100vh-50px-16px)] grid  grid-cols-24 gap-4 px-6 py-4   bg-[var(--bg-gradient)] dark:bg-foreground  text-foreground dark:text-background">
      <ElementPicker />
      <Editor />
      <Preview />
    </div>
  );
}

export default page