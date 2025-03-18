const Bio = () => {
  return (
    <div className="text-center sm:text-left text-base sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
      <div className="flex flex-col items-center p-10  mt-10  max-w-[900px] mx-auto">
        <h2 className="text-lg md:text-xl lg:text-4xl font-bold mb-6">
          {" "}
          I&apos;m Zachary Sturman,{" "}
        </h2>

        <div className="px-10">
          <p className="text-sm md:text-base lg:text-lg text-left leading-relaxed">
            I am a full-stack developer with a strong focus on building
            high-performance front-end experiences. I specialize in creating
            intuitive, responsive user interfaces using React, Next.js, and
            TypeScript, while also architecting robust backend systems and
            scalable data solutions.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-left leading-relaxed mt-4 hidden sm:block">
            My work spans from developing dynamic web applications and
            LLM-powered assistants to optimizing data pipelines and backend
            architectures.
          </p>
          <div className="hidden sm:block">
            <p className="text-sm md:text-base lg:text-lg text-left leading-relaxed mt-4">
              Outside of programming, I enjoy:
            </p>
            <ul className="text-sm md:text-base lg:text-lg text-left leading-relaxed list-disc pl-8">
              <li>Creative writing and animation</li>
              <li>Exploring topics in neuroscience and quantum physics</li>
              <li>
                Volunteering for animal welfare and non-profit initiatives
              </li>
            </ul>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-left leading-relaxed mt-4">
            I&apos;m passionate about leveraging technology to solve real-world challenges through thoughtful design and effective, scalable solutions.
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
