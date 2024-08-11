"use client"
import { createContext, useContext } from 'react';
import { AnimationControls, MotionValue } from 'framer-motion';


interface AnimationContextType {
    controls: AnimationControls | null;
    scrollYProgress: MotionValue<number>; 
}


const defaultValue: AnimationContextType = {
    controls: null,
    scrollYProgress: new MotionValue<number>(), 
};

export const AnimationContext = createContext<AnimationContextType>(defaultValue);

// Hook to access the context
export const useAnimationControlsContext = () => useContext(AnimationContext);
