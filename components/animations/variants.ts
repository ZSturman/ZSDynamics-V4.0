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
      transition: {
        delay: 0.15,
        duration: .7,
        ease: "easeOut",
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
      scale: 0.9,
    },
    headerEnter: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    headerExit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  
  
  

  export { jobTitleVariant, nameVariant, socialLinksVariantChildren, subtleVariant };