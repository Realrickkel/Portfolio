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
            //startpositie van de animatie
            start: 'top 80%',
            ...scrollProps,
        }
    })
}