import React, {  useState } from 'react'

type TooltipProps = {
     text:string
}
const Tooltip = ({ text }: TooltipProps) => {
    const [hovered, setHovered] = useState<boolean>(false)

    const handleHover = () => {
        setTimeout(() => {
             setHovered(true)
         },1000)
    }
   
    
    return (
      <>
        <div
          onMouseOver={handleHover}
          onMouseOut={() => setHovered(false)}
           className="absolute top-0 left-0 z-[30] w-5 h-6 bg-transparent "
        >
          {" "}
        </div>
        <div
          className={`absolute top-full -left-1/4 z-[50] -translate-x-1/4 mt-2 px-[5px] py-[3px] bg-gray-300 dark:bg-neutral-800  border border-stone-200 dark:border-stone-700 rounded-sm  text-[10px] ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          } trasition-all ease-in-out duration-200`}
        >
          {text}
        </div>
        <div
          style={{ clipPath: "path('M 2,0 L 12,0 L 12,10')" }}
          className={`h-3 w-3 absolute top-full left-0  z-[50] bg-gray-300 -rotate-45  mt-1 dark:bg-neutral-800  border border-stone-300 dark:border-stone-700 rounded-xs ${
            hovered ? "opacity-100" : "opacity-0"
          } trasition-all ease-in-out duration-200`}
        />
      </>
    );
};

export default Tooltip