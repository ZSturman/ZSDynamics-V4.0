"use client"
import PersonalLinks from "./PersonalLinks";
import { workLinks } from "@/site/links";

const ExploreMyWork = () => {


  return (
      <div className="flex flex-col p-10  mt-10  max-w-[900px] mx-auto">
        <h2
          className={`text-3xl text-center text-dark-shade p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade  font-semibold mb-6`}
        >
          <h2>Explore my works</h2>
        </h2>



       <PersonalLinks links={workLinks} showTitles={true}/>

    </div>

  );
};

export default ExploreMyWork;
