import React from 'react'

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div>
      <input
        data-testid="Input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 w-full my-2 px-2 py-2 text-sm placeholder:text-stone-500 dark:placeholder:text-gray-400 bg-slate-100 dark:bg-zinc-900  border border-stone-300 dark:border-zinc-700  rounded-lg focus:outline-0"
      />
    </div>
  );
};

export default Input