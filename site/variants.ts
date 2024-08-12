const jobTitleVariant = {
    init: {
      opacity: 0,
      scaleX: 0,
    },
    headerEnter: {
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: .25,
        duration: .9,
        type: "spring",
        stiffness: 120,
      },
    },
    headerExit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
      },
    },
  };
  const nameVariant = {
    init: {
      opacity: 0,
      scaleY: 0,
    },
    headerEnter: {
      opacity: 1,
      scaleY: 1,
      rotate: 0,
      transition: {
        delay: 0.15,
        duration: .7,
        ease: "easeOut",
      },
    },
    hover: (index: number) => ({
      rotate: index % 2 === 0 ? 5 : -5,
    }),
    headerExit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
      },
    },
  };
  
  const socialLinksVariantChildren = {
    init: {
      opacity: 0,
      scaleY: 0,
      y: -100,
    },
    headerEnter: (index: number) => ({
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: index * 0.1 + .5,
      },
    }),
  };

  const subtleVariant = {
    init: {
      opacity: 0,
      scaleY: 0
    },
    start:  (index: number = 0) => ({
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: index * 0.1 + .5,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };



  
  

  export { jobTitleVariant, nameVariant, socialLinksVariantChildren, subtleVariant };