'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ThemeToggle from './ui/ThemeToggle';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <div className="px-6 pt-4  bg-[var(--bg-gradient)] dark:bg-foreground   ">
      <div className="px-3 h-[50px] bg-white dark:bg-neutral-800 flex justify-between border border-stone-300 dark:border-stone-800 rounded-xl shadow-sm">
        <div className="flex items-center justify-start ">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={120}
              height={50}
              className="scale-105 object-cover object-center "
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 ">
          <a
            href="https://github.com/peyush-nuwal/readme-forge"
            className="text-sm text-black dark:text-white hover:text-accent"
          >
            Source
          </a>
          <Link
            href={"/contact"}
            className={`text-sm hover:text-accent ${
              pathname == "/contact"
                ? "text-accent"
                : "text-black dark:text-white"
            }`}
          >
            Contact
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Nav