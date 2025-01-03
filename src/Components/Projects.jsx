/* eslint-disable react/jsx-no-comment-textnodes */
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { APPLEMOCKUPIMG, CSSIMG, FILMREVIEWMOCKUPIMG, GSAPIMG, HTMLIMG, JAVASCRIPTMOCKUPIMG, JSIMG, ONLINEIDMOCKUPIMG, REACTIMG, RIVLMEDIAMOCKUPIMG, TEAMLANDINGIMG, THREEIMG, WORDIMG } from "../utils"

import { ScrollTrigger } from "gsap/all";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { animateHoverExperienceWithGsap, animateUnHoverExperienceWithGsap } from "../utils/Animations";
import { Context } from "../context/Context";
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const {loaded, setLoaded} = useContext(Context)
  const {classChangeProject,setClassChangeProject} = useContext(Context)
  const[scrollt, setScrollt] = useState(false)
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)
  const [hover5, setHover5] = useState(false)
  const [hover6, setHover6] = useState(false)
  const scrollRef = useRef();

    const attrObserver = new MutationObserver(() => {
          var myElement = document.getElementById("Projects");
          if(myElement){
            if (myElement.classList.contains("active")) {
              setClassChangeProject(true)
            }else{
                setClassChangeProject(false)
              }
          }
    });
    const ELS_test = document.querySelectorAll("#Projects");
    ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));
  

  useEffect(() => {
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
      setLoaded(true);
  });
    //disable scroll until page is loaded
    window.onscroll = function () {
    window.scrollTo(0, 0);
};  
  }, [])


  useEffect(() => {
    if(loaded === true){
        //laat alles inladen
        setTimeout(function () {
            setScrollt(true)
            }, 100); 
            window.onscroll = function () { };
    }
  },[loaded])

  useEffect(() => {
      ScrollTrigger.refresh()
  },[scrollt])

  useGSAP(() => {

    const fadeInTitlesProjects = gsap.utils.toArray(".fade_in_title_pro");

    fadeInTitlesProjects.forEach((fadeTitleP) => {
      gsap.fromTo(fadeTitleP, {
          opacity: 0,
      },{
          opacity: 1,
          duration: 1,
          scrollTrigger: {
              trigger: fadeTitleP,
              start: 'top 90%',
          },
          ease: 'power2.Out'
      })
  })
  
  gsap.to('#Projects',{
    scrollTrigger: {
      trigger: '#Projects',
      toggleClass: 'active',
      start: 'top 40%',
      end: 'bottom 50%'
    }
  })

  },[])
  
  
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
        delay:0.1,
        scrollTrigger: {
          trigger: box,
          start: 'top 110%',
          toggleActions: "play none none reset",
        },
        ease: 'power2.Out'
      })
    })

    

  },{scope: scrollRef})

  useGSAP(() => {
    if(hover===true){
      animateHoverExperienceWithGsap('#experience-img1', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img1', {})
    }
  },[hover])

  useGSAP(() => {
    if(hover2===true){
      animateHoverExperienceWithGsap('#experience-img2', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img2', {})
    }
  },[hover2])

  useGSAP(() => {
    if(hover3===true){
      animateHoverExperienceWithGsap('#experience-img3', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img3', {})
    }
  },[hover3])

  useGSAP(() => {
    if(hover4===true){
      animateHoverExperienceWithGsap('#experience-img4', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img4', {})
    }
  },[hover4])

  useGSAP(() => {
    if(hover5===true){
      animateHoverExperienceWithGsap('#experience-img5', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img5', {})
    }
  },[hover5])

  useGSAP(() => {
    if(hover6===true){
      animateHoverExperienceWithGsap('#experience-img6', {})
    } else {
      animateUnHoverExperienceWithGsap('#experience-img6', {})
    }
  },[hover6])
  
  return (
    <section id="Projects" className="text-gray flex flex-col justify-center items-center common-padding">
        <div className="w-[90vw] md:w-[76vw] fade_in_title_pro">
          <h2 className="flex justify-between title-max-width m-4 border-t-2 p-2 px-4 lg:px-2">// Projecten</h2>
        </div>
      
      <div className="max-w-[90vw] md:max-w-[76vw]">
          <div className="screen-max-width min-h-fit">
          <div className="experience-class px-4 relative" ref = {scrollRef}>
              <div id="experience-img1" className="experience-img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                <NavLink to="/rivlmedia">
                <img src={RIVLMEDIAMOCKUPIMG} alt="PF image" className="img-exp"  loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">RIVL Media Website</h3>
                    <h4 className="text-xs text-gray">Het ontwerpen en maken van een website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Zakelijk</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div id="experience-img2" className="experience-img" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
              <NavLink to="/apple">
                <img src={APPLEMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">Case Study: Apple Website</h3>
                    <h4 className="text-xs text-gray">Het begrijpen en nabouwen van de Apple website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="GSAP image" className="tech-used"/>
                      <img src={THREEIMG} alt="Three.js image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Persoonlijk</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div id="experience-img3" className="experience-img" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                <NavLink to="/onlineid">
                <img src={ONLINEIDMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">Onderhoud Online ID</h3>
                    <h4 className="text-xs text-gray">Het onderhouden en uitbreiden van de website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={WORDIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Zakelijk</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div id="experience-img4" className="experience-img" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
              <NavLink to="/javascriptgame">
                <img src={JAVASCRIPTMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">Javascript Game</h3>
                    <h4 className="text-xs text-gray">Kan je een game maken in Javascript?</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Persoonlijk</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div id="experience-img5" className="experience-img" onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
              <NavLink to="/review">
                <img src={FILMREVIEWMOCKUPIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">Film Reviewer</h3>
                    <h4 className="text-xs text-gray">De online film reviewer</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Persoonlijk</h5>
                  </div>
                </div>
                </NavLink>
              </div>
              <div id="experience-img6" className="experience-img" onMouseEnter={() => setHover6(true)} onMouseLeave={() => setHover6(false)}>
              <NavLink to="/teampage">
                <img src={TEAMLANDINGIMG} alt="PF image" className="img-exp" loading="eager"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold">Teampagina</h3>
                    <h4 className="text-xs text-gray">Originele Teampagina</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="GSAP image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold text-black">2024</h3>
                    <h5 className="text-xs text-gray">Persoonlijk</h5>
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