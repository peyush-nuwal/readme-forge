'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTheme } from "../ThemeProvider";
const Hero = () => {
 const {theme}= useTheme()
  return (
    <div className="min-h-screen flex flex-col  items-center  justify-center mt-20 lg:mt-0 gap-10 lg:gap-0 ">
      {/*----left-side----  */}
      <div className="h-[70vh]  flex flex-col justify-center ">
        <h1 className="text-3xl lg:text-5xl text-accent font-medium leading-8 lg:leading-12 text-center">
          Build Your GitHub README <br /> Like a Pro
        </h1>
        <h3 className="text-sm  lg:text-base text-gray-500 text-centerdark:text-background font-light mt-2 max-lg:max-w-[270px]">
          Design, customize, and export stunning READMEs with zero Markdown
          skills.
        </h3>
        <div className="flex mt-4 gap-4 justify-center">
          <button className="btn btn-primary">
            <Link href="/dashboard">Try it Now</Link>
          </button>
          <button className="btn btn-outline">
            <a href="https://github.com/peyush-nuwal/readme-forge">
              ⭐ Star on GitHub
            </a>
          </button>
        </div>
      </div>
      {/*----right-side----  */}
      <div className=" lg:w-9/10 h-full bg-white dark:bg-neutral-800 dark:border border-neutral-700 rounded-2xl p-4 ">
        <Image
          src={theme === "dark" ? "/dashboard-dark.png" : "/dashboard.png"}
          alt="dashobard"
          width={700}
          height={500}
          className="w-full h-full object-contain rounded-2xl   "
        />
      </div>
    </div>
  );
};

export default Hero;
