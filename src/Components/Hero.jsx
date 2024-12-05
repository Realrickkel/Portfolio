import { useGSAP } from "@gsap/react"
import { CSSIMG, GSAPIMG, HTMLIMG, JSIMG, REACTIMG, THREEIMG, WORDIMG } from "../utils"

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useContext } from "react";
import { Context } from "../context/Context";
gsap.registerPlugin(ScrollTrigger)



const Hero = () => {
  const {classChangeHero,setClassChangeHero} = useContext(Context)

  const attrObserver = new MutationObserver(() => {
      var myElement = document.getElementById("Hero");
      if(myElement){
      if (myElement.classList.contains("active")) {
        setClassChangeHero(true)
      }else{
          setClassChangeHero(false)
        }
      }
  });
  
  const ELS_test = document.querySelectorAll("#Hero");
  ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));

  useGSAP(() => {

    const sliders = gsap.utils.toArray(".t_slide");
    const slidersUp = gsap.utils.toArray(".t_slide_up");
    const slidersDown = gsap.utils.toArray(".t_slide_down");
    const fadeIn = gsap.utils.toArray(".fade_in");

    fadeIn.forEach((fade) => {
      gsap.fromTo(fade, {
          opacity: 0,
      },{
          opacity: 1,
          duration: 3,
          delay: 0.1,
          scrollTrigger: {
              trigger: fade,
              start: 'top 90%',
          },
          ease: 'power2.Out'
      })
  })
    
    sliders.forEach((slide) => {
      gsap.fromTo(slide, {
          opacity: 0,
          x: '-200',
      },{
          opacity: 1,
          x: '0',
          delay: 0.3,
          duration: 0.5,
          scrollTrigger: {
              trigger: slide,
              start: 'top 90%',
          },
          ease: 'power2.inOut'
      })
  })
  
  slidersUp.forEach((slideUp) => {
    gsap.fromTo(slideUp, {
        opacity: 0,
        y: '50',
    },{
        opacity: 1,
        y: '0',
        delay: 0.7,
        duration: 0.5,
        scrollTrigger: {
            trigger: slideUp,
            start: 'top 90%',
        },
        ease: 'power2.inOut'
    })
  })

  slidersDown.forEach((slideDown) => {
    gsap.fromTo(slideDown, {
        opacity: 0,
        y: '-50',
    },{
        opacity: 1,
        y: '0',
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
            trigger: slideDown,
            start: 'top 90%',
        },
        ease: 'power2.inOut'
    })
  })

  gsap.to('#Hero',{
    scrollTrigger: {
      trigger: '#Hero',
      toggleClass: 'active',
      start: 'top 40%',
      end: 'bottom 50%'
    }
  })
  
  },[])

  return (
    <section id='Hero' className="flex w-screen items-center justify-center overflow-hidden h-screen relative">
      
      <div className="flex overflow-hidden -z-10 w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center border-solid border-gray-950 border-2 rounded-2xl before:absolute xl:before:left-[80vw] xl:before:top-[70vh] xl:before:h-[60vh] xl:before:w-[35vw] xl:before:origin-[0%] before:left-[100vw] before:top-[5vh] before:h-[60vh] before:w-[80vw] before:origin-[0%] before:animate-blob-reverse before:bg-gradient-to-br before:from-[--color-b] before:via-[--color-d] before:to-[--color-b] before:rounded-full before:blur-[50px] before:brightness-125 fade_in">
        <div className="flex w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center">
        <div className="noise"></div>
      </div>
      </div>

      <div className="flex overflow-hidden -z-10 w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center border-solid border-gray-950 border-2 rounded-2xl before:absolute xl:before:left-[80vw] xl:before:top-[45vh] xl:before:h-[50vh] xl:before:w-[21vw] xl:before:origin-[-30vw] lg:before:h-[40vh] lg:before:w-[28vw] before:left-[100vw] before:top-[5vh] before:h-[60vh] before:w-[80vw] before:origin-[-30vw] before:animate-blob before:animate-delay-1000 before:bg-gradient-to-br before:from-[--color-b] before:via-[--color-d] before:to-[--color-b] before:rounded-full before:blur-[50px] before:brightness-125 fade_in">
        <div className="flex w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center">
        <div className="noise"></div>
      </div>
      </div>

      

        <div className="w-[90vw] md:w-[76vw] flex overflow-hidden"> 
            <div className="flex flex-col m-auto">
                <div className="flex flex-col items-center">
                  <p className="text-gray-500 t_slide_down">web developer</p>
                  <h1 className="xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-bold t_slide">Rick van Laarhoven</h1>
                </div>
                <div className="flex md:mt-4 mt-1 items-center justify-center md:justify-start t_slide_up">
                  <img src={CSSIMG} alt="CSS image" className="expert-class"/>
                  <img src={HTMLIMG} alt="HTML image" className="expert-class"/>
                  <img src={JSIMG} alt="Javascript image" className="expert-class"/>
                  <img src={REACTIMG} alt="React image" className="expert-class"/>
                  <img src={GSAPIMG} alt="GSAP image" className="expert-class"/>
                  <img src={WORDIMG} alt="GSAP image" className="expert-class"/>
                  <img src={THREEIMG} alt="Three.js image" className="expert-class"/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero