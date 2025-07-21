import React, { useState, ReactNode, useRef } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  delay?: number;
};

const Tooltip = ({ text, children, delay = 500 }: TooltipProps) => {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Tooltip box */}
      <div
        className={`absolute top-full left-1/2 z-[9999] -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded bg-gray-300 dark:bg-neutral-800 text-black dark:text-white border border-stone-300 dark:border-stone-700 shadow transition-all duration-200 ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        {text}
      </div>

      {/* Optional Arrow */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 h-2 w-2 rotate-45 bg-gray-300 dark:bg-neutral-800 border-l border-t border-stone-300 dark:border-stone-700 transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Tooltip;
