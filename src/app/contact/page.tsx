"use client";
import React, {  useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";


const contactInfo = [
  {
    id: "email",
    label: "Email",
    value: "piyushnawal19@gmail.com",
    href: "mailto:piyushnawal19@gmail.com",
    Icon: MdEmail,
    copyText: "Copy Email",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "@peyush-nuwal",
    href: "https://www.linkedin.com/in/peyush-nuwal/",
    Icon: FaLinkedin,
    copyText: "Copy LinkedIn",
  },
  {
    id: "twitter",
    label: "Twitter",
    value: "@Nuwal_Peyush",
    href: "https://x.com/Nuwal_Peyush",
    Icon: FaTwitter,
    copyText: "Copy Twitter",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    value: "peyush-nuwal.vercel.app",
    href: "https://peyush-nuwal-portfolio.vercel.app",
    Icon: FaGlobe,
    copyText: "Copy Portfolio",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@peyush-nuwal",
    href: "https://github.com/peyush-nuwal",
    Icon: FaGithub,
    copyText: "Copy GitHub",
  },
];

const Page = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  

  // console.log(formRef.current)
  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1500); // 1.5s
  };


  return (
    <div className=" px-6 py-8 flex flex-col items-center justify-center min-h-screen p-4 dark:bg-foreground">
      <div className="w-full h-[30vh] max-w-md flex flex-col items-center justify-center space-y-4">
        <h1 className="text-center text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white leading-0">
          Get In Touch
        </h1>
        <p className="text-center text-base mt-0 md:mt-2 text-gray-600 dark:text-gray-300">
          Have a question, idea, or just want to say hi? Feel free to reach out
          — I’d love to connect!
        </p>
      </div>

      {/* contact form  */}
      <div className=" w-[98%] lg:w-7/10 h-auto lg:h-[70vh] flex flex-col md:flex-row  bg-white dark:bg-neutral-800 shadow-md rounded-xl p-5 mt-6">
        <div className=" lg:w-2/5  rounded-lg bg-accent p-6 text-white">
          <h2 className="text-2xl font-medium">Contact Information</h2>
          <p className="text-sm text-white/90">
            Let’s build something great — drop a message!
          </p>

          <div className="my-6  space-y-4 px-3">
            {contactInfo.map(({ id, Icon, value, href, label }) => (
              <div
                key={id}
                className="relative text-base flex items-center gap-4 group cursor-pointer"
              >
                <Icon className="text-2xl shrink-0" />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-sm"
                >
                  {value}
                </a>

                {/* Clipboard icon */}
                <div className="relative z-[999]  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <span
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => handleCopy(id, value)}
                    className="group-hover:opacity-100 text-xs border border-white rounded-md p-2 transition-all duration-300 ease-in-out flex items-center gap-1"
                  >
                    <FaRegCopy />
                  </span>
                  <span
                    className={`absolute top-1  left-full ml-5  text-xs text-white transition-all ease-in-out duration-300  text-nowrap ${
                      copiedId === id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0  -translate-x-3"
                    }`}
                  >
                    {label} copied!
                  </span>
                </div>

                {/* Label shown on click */}
              </div>
            ))}
          </div>
        </div>

        {/* ---form container--- */}
        <div className="flex-1  p-6  mt-6 lg:mt-0 lg:ml-6  ">
          <h2 className="text-2xl text-accent font-medium mb-4">
            Send a Message
          </h2>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Page;
