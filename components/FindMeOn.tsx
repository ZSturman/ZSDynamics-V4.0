"use client";
import PersonalLinks from "./PersonalLinks";
import { socialLinks } from "@/site/links";

const FindMeOn = () => {


  return (
    <div className="flex flex-col p-10  mt-10  max-w-[900px] mx-auto">
    <h2
      className={`text-3xl  text-dark-shade p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade  font-semibold mb-6`}
    >
      <h2>Find Me At</h2>
    </h2>


       <PersonalLinks links={socialLinks} showTitles={true}/>



    </div>

  );
};

export default FindMeOn;
