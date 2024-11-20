/* eslint-disable react/jsx-no-comment-textnodes */
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { APPLEMOCKUPIMG, CSSIMG, FILMREVIEWMOCKUPIMG, GSAPIMG, HTMLIMG, JAVASCRIPTMOCKUPIMG, JSIMG, ONLINEIDMOCKUPIMG, REACTIMG, RIVLMEDIAMOCKUPIMG, WORDIMG } from "../utils"

import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const scrollRef = useRef();
  
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.fromTo(box,{
        opacity: 0.01,
        y: 50,
      },{
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          toggleActions: "play none play none",
        },
        ease: 'power2.Out'
      })
    })
  },{scope: scrollRef})
  
  
  
  return (
    <section id="Projects" className="text-gray flex flex-col justify-center items-center common-padding">
        <div className="w-[70vw] xl:w-[78vw]">
          <h2 className="flex justify-between title-max-width m-4 border-t-2 p-2 px-4 lg:px-2">// Projects</h2>
        </div>
      
      <div className="max-w-[70vw] xl:max-w-[78vw]">
          <div className="screen-max-width min-h-fit">
          <div className="experience-class px-4 relative" ref = {scrollRef}>
              <div className="experience-img" >
                <NavLink to="/rivlmedia">
                <img src={RIVLMEDIAMOCKUPIMG} alt="PF image" className="img-exp"  loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">RIVL Media Website</h3>
                    <h4 className="text-xs">Het ontwerpen en maken van een website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div className="experience-img">
              <NavLink to="/apple">
                <img src={APPLEMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Case Study: Apple Website</h3>
                    <h4 className="text-xs">Het begrijpen en nabouwen van de Apple website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div className="experience-img">
                <NavLink to="/onlineid">
                <img src={ONLINEIDMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Onderhoud Online-ID</h3>
                    <h4 className="text-xs">Het onderhouden en uitbreiden van de website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={WORDIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div className="experience-img">
              <NavLink to="/javascriptgame">
                <img src={JAVASCRIPTMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Javascript Game</h3>
                    <h4 className="text-xs">Kan je een game maken in Javascript?</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div className="experience-img">
              <NavLink to="/review">
                <img src={FILMREVIEWMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700 ">Film Reviewer</h3>
                    <h4 className="text-xs">De online film reviewer</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
                </NavLink>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects