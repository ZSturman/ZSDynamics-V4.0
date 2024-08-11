import React from 'react'
import InViewContainer from '../../animations/InViewContainer'



const BioBottom = () => {
  return (
    <>
   <div className="flex flex-col items-center  p-10 rounded-lg mt-32 backdrop-blur-sm max-w-[900px]">
        <InViewContainer
          fromDirection="left"
          delay={0.15}
          className=" text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2"
        >
          why i do it
          <p className=" mb-6 text-lg font-medium text-left ">
          My main passion is animal welfare, focusing on advocacy, and education. I actively contribute and participate in conservation efforts, emphasizing the importance of ethical treatment and protection for all animals. My efforts are aimed at promoting animal rights and fostering a culture of respect and compassion towards animals.
          </p>
        </InViewContainer>
      </div>
       </>
  )
}

export default BioBottom