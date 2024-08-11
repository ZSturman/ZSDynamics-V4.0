import InViewContainer from "../../animations/InViewContainer"

const BioTop = () => {
  return (
    <>
   <div className="flex flex-col items-center  p-10 rounded-lg mt-32 backdrop-blur-sm max-w-[900px]">
        <InViewContainer
          fromDirection="left"
          delay={0.15}
          className=" text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2"
        >
          what i do
          <p className=" mb-6 text-lg font-medium text-left ">
            I&apos;m a front-end developer specializing in crafting exceptional
            user experiences through thoughtful UI/UX design and a focus on
            performance optimization. My passion for cutting-edge technologies
            drives my continuous learning and growth.
          </p>
        </InViewContainer>
      </div>
       </>
  )
}

export default BioTop