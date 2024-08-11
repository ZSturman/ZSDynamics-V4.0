"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import socialMediaLinks from "@/components/social-links";

const ContactSheet = () => {
  const [flashMessage, setFlashMessage] = useState({
    message: "",
    type: "",
    active: false,
  });

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {flashMessage.active && (
        <div
          className={`${
            flashMessage.type === "success" ? "bg-green-400/50" : "bg-red-400/50"
          } text-white p-5 text-center backdrop-blur-sm`}
        >
          {flashMessage.message}
        </div>
      )}
      <div className="rounded-lg  backdrop-blur-sm m-2 sm:m-5 sm:px-5 py-10 sm:w-[500px] md:w-[650px] lg:w-[900px]">
        <ContactForm setFlashMessage={setFlashMessage} />

      </div>
    </div>
  );
};

export default ContactSheet;
