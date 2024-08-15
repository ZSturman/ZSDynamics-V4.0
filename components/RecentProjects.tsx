"use client";
import portfolioItems from "@/site/portfolio-items";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const RecentProjects = () => {
  // Select three items to display
  const selectedItems = portfolioItems.slice(0, 3);

  return (
    <div className="max-w-[900px] px-10">
    <HowsMyEatingAd/>


    </div>
  );
};

export default RecentProjects;



import React from "react";

const HowsMyEatingAd = () => {
  return (
    <div className="p-10 text-dark-shade">
      <h2 className="text-3xl  mb-4 text-center">
       Recent:         <strong className="font-bold">

&quot;How&apos;s My Eating?&quot;  {" "}
</strong>
      </h2>
      <h3 className="text-2xl   mb-4 text-center">

      An App to Slow Down Binge Eating
      </h3>

<div className="flex flex-row items-center justify-center">

      <a href="https://zacharysturman.hashnode.dev/hows-my-eating" className="bg-dark-shade text-light-shade px-2 py-1s m-1 rounded-md">View Article</a>
</div>

      <p className=" mb-4">
      &quot;How&apos;s My Eating?&quot;  {" "}is an iOS application designed to
        help users develop healthier eating habits by slowing down their eating
        pace. The app uses kinetic data collected from devices like AirPods to
        monitor your eating speed and provide real-time notifications if you’re
        eating too fast.
      </p>
      <p className=" mb-4">
        <strong>Key Features:</strong>
        <ul className="list-disc ml-6">
          <li>
            Real-Time Notifications: Get instant alerts to slow down if
            you&apos;re eating too fast.
          </li>
          <li>
            Kinetic Data Monitoring: Analyze your eating habits using motion
            data from AirPods.
          </li>
          <li>
            Privacy-Friendly: Focuses on kinetic data, ensuring a less intrusive
            experience.
          </li>
        </ul>
      </p>
      <p className=" mb-4">
        The app is currently in development, with ongoing data collection and
        model training. Stay tuned for the launch!
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/ZSturman/Hows-My-Eating"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Download the most recent build
        </a>
        <a
          href="https://www.linkedin.com/in/zacharysturman/"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};
