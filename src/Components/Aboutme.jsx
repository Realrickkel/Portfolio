import gsap from "gsap";
import { PFAANGEPASTIMG, PFIMG } from "../utils"
import { useGSAP } from "@gsap/react";
import { useContext, useEffect, useState } from "react";
import { TextPlugin } from "gsap/all";
import { animateTextWithGsap } from "../utils/Animations";
import { Context } from "../context/Context";

gsap.registerPlugin(TextPlugin)

const Aboutme = () => {
  const {loadedAbout, setLoadedAbout} = useContext(Context)
  const[scrollt, setScrollt] = useState(false)
  const[animateImg, setAnimateImg] = useState(false)
  const[animateOutImg, setAnimateOutImg] = useState(false)
  const {classChangeProject,setClassChangeProject} = useContext(Context)
  const {classChangeExperience,setClassChangeExperience} = useContext(Context)
  const {classChangeHero,setClassChangeHero} = useContext(Context)
  const {loadedProjects, setLoadedProjects} = useContext(Context)

  useEffect(() => {
    setClassChangeExperience(false)
    setClassChangeHero(false)
    setClassChangeProject(false)
    setLoadedProjects(false)
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
    })
        const img = new Image();
        img.onload = () => {
        // when it finishes loading, update the component state
        setLoadedAbout(true);
        }
        img.src = PFIMG; // by setting an src, you trigger browser download            
}, [])

useEffect(() => {
  if(loadedAbout === true){
      //laat alles inladen
      setTimeout(function () {
          setScrollt(true)
          }, 100); 
  }
},[loadedAbout])

useEffect(() => {

},[scrollt])
  

  useGSAP(() => {
    if(mediaQuery.matches) {
    if(animateImg === true){
        gsap.fromTo('#img_slide', {
            opacity: 0,
            y:'0px',
            x:'0px'
        },{
            opacity: 1,
            y:'-20px',
            x:'-20px',
            duration: 0.4,
            ease: 'power2.Out'
        })
      setAnimateImg(false)
    }
    if(animateOutImg === true){
          gsap.fromTo('#img_slide', {
              opacity: 1,
              y:'-20px',
              x:'-20px'
          },{
              opacity: 0,
              y:'0px',
              x:'0px',
              duration: 0.4,
              ease: 'power2.Out'
          })
      setAnimateOutImg(false)
    }
  } else {
    if(animateImg === true){
      gsap.fromTo('#img_slide', {
          opacity: 0,
      },{
          opacity: 1,
          duration: 0.4,
          ease: 'power2.Out'
      })
    setAnimateImg(false)
  }
  if(animateOutImg === true){
        gsap.fromTo('#img_slide', {
            opacity: 1,
        },{
            opacity: 0,
            duration: 0.4,
            ease: 'power2.Out'
        })
    setAnimateOutImg(false)
  }
  }
  if(animateImg === true){
    gsap.fromTo('#img_og_slide', {
        opacity: 1,
    },{
        opacity: 0.3,
        duration: 0.4,
        ease: 'power2.Out'
    })
  setAnimateImg(false)
  }
  if(animateOutImg === true){
        gsap.fromTo('#img_og_slide', {
            opacity: 0.3,
        },{
            opacity: 1,
            duration: 0.4,
            ease: 'power2.Out'
        })
    setAnimateOutImg(false)
  }
  },[animateImg, animateOutImg])

  var mediaQuery = window.matchMedia("(min-width: 769px)");

  useGSAP(() => {

    const slidersAbout = gsap.utils.toArray(".t_slideA");
    const slidersAboutLeft = gsap.utils.toArray(".t_slideLeftA");
    const slidersAboutUp = gsap.utils.toArray(".t_slideUpA");

    slidersAbout.forEach((slideAbout) => {
      gsap.fromTo(slideAbout, {
          opacity: 0,
          x: '-200',
      },{
          opacity: 1,
          x: '0',
          duration: 0.5,
          ease: 'power2.inOut'
      })
    })

    slidersAboutLeft.forEach((slideAboutLeft) => {
      gsap.fromTo(slideAboutLeft, {
          opacity: 0,
          x: '200',
      },{
          opacity: 1,
          x: '0',
          duration: 0.5,
          ease: 'power2.inOut'
      })
    })

    slidersAboutUp.forEach((slideAboutUp) => {
      gsap.fromTo(slideAboutUp, {
          opacity: 0,
          y: '50',
      },{
          opacity: 1,
          y: '0',
          duration: 0.5,
          ease: 'power2.inOut'
      })
    })

    animateTextWithGsap('#artist', 'TWICE', 'TripleS', 'NMIXX', 'aespa', 'Taeyeon')

  },[])

  return (
    <section id='About' className="flex min-h-[89vh] justify-center items-center">
      <div className="max-w-[90vw]">
          <div className="screen-max-width-about">
              <div className="common-padding !px-0 flex md:flex-row flex-col max-w-[90vw] lg:max-w-[70vw] m-auto gap-10 h-full">
                <div className="md:w-[350px] lg:w-[400px] mx-auto flex flex-col gap-5 t_slideA">
                  <h1 className="text-3xl font-bold">Wie ben <span className="font-bold" style={{color: '#FF9A00'}}>ik?</span></h1>
                  <p className="mt-4">Het is bijna onmogelijk om alles op te noemen waar ik in geïnteresseerd ben, toch ga ik mijn best doen. Mijn grootste talent is superscherp analyseren hoe Formule 1 coureurs uit de bocht vliegen… Zelf kan ik dat natuurlijk ook… maar dan wel in een virtuele race.</p>
                  
                  <p>Naast professioneel “sportkijker,” ben ik ook behoorlijk geïnteresseerd in kunstmatige intelligentie. En dan bedoel ik niet de AI die me ooit een keer met 4-0 versloeg in schaken. Maar van die slimme algoritmes die data omtoveren tot inzichten, en daar ben ik eigenlijk net zo goed in als in het sport kijken.</p> 
                  
                  <p>Dus, of het nu gaat om het ontdekken van het geheim achter een slimme AI, juichen voor een recordronde in de F1, of een marathon gamen zonder afleiding, ik ben van de partij.</p>
                  
                </div>
                <div className="flex md:flex-col flex-row-reverse flex-1 md:px-0 md:gap-0 gap-5 max-w-full text-sm md:justify-start justify-center md:items-start items-center relative md:mx-0 mx-0">
                  <div className="relative t_slideLeftA">
                    <div className="rounded-2xl bg-black">
                      <img src={PFIMG} alt="PF image" id="img_og_slide" className="rounded-2xl max-w-[32vw] md:max-w-full "/>
                    </div>
                    <img src={PFAANGEPASTIMG} alt="PF image" id="img_slide" onMouseEnter={() => setAnimateImg(true)} onMouseLeave={() => setAnimateOutImg(true)} className="rounded-2xl max-w-[32vw] md:max-w-full absolute opacity-0 top-0 left-0"/>
                  </div>
                  <div className="flex flex-col justify-start !items-start t_slideUpA">
                    <h2 className="text-sm font-bold mt-3">Waar kan je me &apos;s nachts voor wakker maken?</h2>
                    <ul className="mt-2 md:whitespace-nowrap">
                      <li>&#9679; Broodje carpaccio</li>
                      <li>&#9679; Rondje in de Python</li>
                      <li>&#9679; Nieuw album van <span id="artist" className="font-bold" style={{color: '#FF9A00'}}></span></li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Aboutme