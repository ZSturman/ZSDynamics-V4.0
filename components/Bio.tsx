"use client"
import InViewContainer from "./animations/InViewContainer";

const Bio = () => {
  return (

    <div className="text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
    <div className="flex flex-col items-center p-10  mt-10  max-w-[900px] mx-auto">
      <h2 className="text-4xl font-bold mb-6">Me</h2>
        <p className="text-lg font-medium text-left leading-relaxed">
          I&apos;m Zachary Sturman, a full-stack developer passionate about
          creating innovative solutions with technologies like Next.js, React,
          and Python. I love to explore, tinker, and learn, always seeking new
          ways to enhance performance and user experiences.
        </p>
        <p className="text-lg font-medium text-left leading-relaxed mt-4">
          Committed to improving the world around me through creativity,
          education, and compassion, I blend technical expertise with a drive to
          make a meaningful impact.
        </p>
      </div>
    </div>

  );
};

export default Bio;
