import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            //dit handelt de verschillende manieren hoe een blokje in beeld komt af, 1: First enter, 2: leave 3: enter back 4: leave back
            toggleActions: 'play none play none',
            //startpositie van de animatie, deze nog ff checken
            start: 'top 60%',
            ...scrollProps,
        }
    })
}

export const animateHoverWithGsap = (target, animationProps, scrollProps) =>{
        
            gsap.to(target, {
              color: '#FF9A00',
              duration: 0.2,
              boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)',
            })
              
}

export const animateUnHoverWithGsap = (target, animationProps, scrollProps) =>{
        
    gsap.to(target, {
      color: '#000',
      duration: 0.2,
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
    })
      
}

export const animateHoverExperienceWithGsap = (target, animationProps, scrollProps) =>{       
  gsap.to(target, {
    color: '#ff9A00',
    duration: 0.2,
    
  })
    
}

export const animateUnHoverExperienceWithGsap = (target, animationProps, scrollProps) =>{ 
  gsap.to(target, {
    color: '#000',
    duration: 0.2,
    
  })
    
}