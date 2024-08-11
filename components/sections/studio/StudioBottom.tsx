import StickyScroll from "./studio/StickyScroll";
import { studioProjectsList } from "./studio/studioProjects";

const StudioBottom = () => {
  return (
    <div className=" text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
      what i&apos;ve done
      <div className=" mb-6 text-lg font-medium text-left ">
        <StickyScroll projects={studioProjectsList} />
      </div>
    </div>
  );
};

export default StudioBottom;
