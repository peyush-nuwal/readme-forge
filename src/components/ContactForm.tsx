"use client";

import React, { useRef, useState } from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(formRef.current!);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        formRef.current?.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSendMail}
      className={`space-y-4 grid grid-cols-2 gap-2 ${className}`}
    >
      <div className="col-span-2 lg:col-span-1">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-2 border-b-2 dark:bg-neutral-800"
        />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="w-full p-2 border-b-2 dark:bg-neutral-800"
        />
      </div>

      <div className="col-span-2">
        <label className="block text-sm font-medium">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-2 border-b-2 dark:bg-neutral-800"
        />
      </div>

      <div className="col-span-2">
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Write your message..."
          className="w-full p-2 border-b-2 dark:bg-neutral-800"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-fit btn btn-primary col-span-2"
      >
        Send Message
      </button>

      {status && <p className="col-span-2 text-sm">{status}</p>}
    </form>
  );
};

export default ContactForm;
