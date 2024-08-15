

const Bio = () => {
  return (

    <div className="text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
    <div className="flex flex-col items-center p-10  mt-10  max-w-[900px] mx-auto">
      <h2 className="text-4xl font-bold mb-6"> I&apos;m Zachary Sturman, </h2>


<div className="px-10">


        <p className="text-lg  text-left leading-relaxed">
         a full-stack developer passionate about
          creating innovative solutions with technologies like Next.js, React,
          and Python. 
        </p>
        <div className="">

        <p className="text-lg  text-left leading-relaxed mt-4">
          Outside of programming I enjoy:
          </p>

        <ul className="text-lg text-left leading-relaxed list-disc pl-8">
          <li>
            Writing and animating
          </li>
          <li>
            Learning about neuroscience & quantum physics
          </li>
          <li>
           And helping animals
          </li>
        </ul>
        </div>

        <p className="text-lg  text-left leading-relaxed mt-4">
          I&apos;m committed to improving the world around me through creativity,
          education, and compassion, 
        </p>

        <p className="text-sm italic text-center mt-4 opacity-50">
          scroll down to get in touch!
        </p>
      </div>
</div>
    </div>

  );
};

export default Bio;
