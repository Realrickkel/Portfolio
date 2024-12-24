/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CROSSIMG, CSSIMG, DYNAMISCHIMG, GSAPIMG, HTMLIMG, INTERACTIESIMG, JSIMG, KLEURIMG, MOBILEIMG, REACTIMG, RIVLMEDIABANNERIMG, RIVLMEDIALOGOIMG, RIVLMEDIASEOIMG, STRAKIMG, TEAMBIANCAIMG, TEAMDAVIDIMG, TEAMLANDINGIMG, TEAMMOBILEIMG, TEAMROUNDIMG } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom"
gsap.registerPlugin(ScrollTrigger)

const TeamComponent = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    const {classChangeHero, setClassChangeHero} = useContext(Context)
    const {classChangeExperience,setClassChangeExperience} = useContext(Context)
    const[animate, setAnimate] = useState(false)
    const[animateOut, setAnimateOut] = useState(false)
    const[scrollt, setScrollt] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    let [targetValue, setTargetValue] = useState("")
    let [openMod, setOpenMod] = useState(false)
    const scrollRef = useRef();
    let targetSRC
    const navigate = useNavigate();

    function searchStart (e) {
        targetSRC = e.target.src
        setTargetValue(targetSRC)
        setOpenMod(true)
    }

    useEffect(() => {
        if(openMod == true){
            setIsOpen(true)
            setOpenMod(false)
        }
    },[openMod])

      useEffect(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            })
            Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                setLoadedProjects(true);
            });
                setClassChangeHero(false)
                setClassChangeExperience(false)
                //disable scroll until page is loaded
                window.onscroll = function () {
                window.scrollTo(0, 0);
            };       
      }, [])

      useEffect(() => {
        if(loadedProjects === true){
            //laat alles inladen
            setTimeout(function () {
                setScrollt(true)
                }, 100); 
                window.onscroll = function () { };
                
        }
      },[loadedProjects])

    useEffect(() => {
        ScrollTrigger.refresh()
    },[scrollt])

    useGSAP(() => {
    const titleSlideLight = gsap.utils.toArray(".text_light");
    const titleSlideDark = gsap.utils.toArray(".text_dark");
    const sliders = gsap.utils.toArray(".t_slide");
    const slidersUp = gsap.utils.toArray(".t_slide_up");
    const images = gsap.utils.toArray(".i_fade");
    
    images.forEach((img) => {
        animateWithGsap(img,{
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: img,
              },
              
              ease: 'power2.Out'
        })
    })

    titleSlideLight.forEach((title) => {
        gsap.to(title, {
            opacity: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 30%',
                end: 'top 5%',
                scrub: true,
            }
        })
    })

    titleSlideDark.forEach((darktitle) => {
        gsap.to(darktitle, {
            opacity: 0,
            scrollTrigger: {
            trigger: darktitle,
            start: 'top 30%',
            end: 'top 5%',
            scrub: true,
        }
        })
    })

    sliders.forEach((slide) => {
        gsap.fromTo(slide, {
            opacity: 0,
            x: '-200',
        },{
            opacity: 1,
            x: '0',
            duration: 0.5,
            scrollTrigger: {
                trigger: slide,
                start: 'top 90%',
            },
            ease: 'power2.Out'
        })
    })

    slidersUp.forEach((slideUp) => {
        gsap.fromTo(slideUp, {
            opacity: 0,
            y: '50',
        },{
            opacity: 1,
            y: '0',
            duration: 0.5,
            scrollTrigger: {
                trigger: slideUp,
                start: 'top 90%',
            },
            ease: 'power2.Out'
        })
    })
    },{scope: scrollRef})
    
    useGSAP(() => {
        if(animate === true){
        gsap.fromTo('#linkUnderline',{
            width: '0%',
            left:'0%'
        }, {
            width: '100%',
            left:'0%'
        })
        setAnimate(false)
        }
        if(animateOut === true){
            gsap.to('#linkUnderline' ,{
                width: '0%',
                left: '100%',
            })
        setAnimateOut(false)
        }
    },[animate, animateOut])




    return (
        <section id='RIVLMediaID' className="" ref = {scrollRef}>

            <div className="">
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="flex flex-col lg:max-w-[80vw] lg:max-h-[80vh] space-y-4 lg:p-6 p-4 glass-view relative">
                            <img src={CROSSIMG} onClick={() => setIsOpen(false)} alt="Cross icon" className="absolute right-3 top-3 w-3 cursor-pointer"/>
                            <div className="flex">
                                <img src={`${targetValue}`} alt="HTML image" className="rounded-2xl max-h-[70vh]"/>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>

            <div className="">

                <div className="w-[90vw] items-center flex justify-between title-max-width mt-[3.75rem] lg:mt-4 m-0 border-t-2 p-2 pb-[0.7rem] px-2 lg:px-2">
                    <h2 className="text-lg border-solid border-l-neutral-900">//Teampagina</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="CSS image" className="tech-used"/>
                      <img src={GSAPIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={TEAMLANDINGIMG} name="RIVLMEDIABANNERIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center t_slide">Meet the team!</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                                            <div className="flex flex-col gap-2">
                                                                <h2 className="text-2xl font-bold text-gray-500">Hoe maak je een saai ogende <span className="text-gray-950">teampagina</span> dynamisch?</h2> 
                                                                <p>Je bent ze vast weleens tegengekomen. De pagina waarop alle werknemers van een bedrijf te vinden zijn. Vaak zijn dit statische weinigzeggende pagina&#39;s. Is er een manier om deze interessanter te maken?</p>
                                                                <p>Ik ben de uitdaging aangegaan en heb met behulp van React en GSAP een dynamisch ogend originele teampagina gebouwd waarin met simpele elementen heel veel informatie aan de bezoeker wordt duidelijk gemaakt. En dit alles dan ook nogeens in een origineel jasje gestoken.</p>
                                                                <p>Klik vooral op de link om de website te ervaren!</p>
                                                            </div>
                                                            <div className="">
                                                                <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                                                    <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                                                        <div className="me-3">
                                                                            <h3 className="font-semibold">Focuspunten</h3>
                                                                            <ul className="mt-0">
                                                                                <li>Design,</li>
                                                                                <li>Mobile</li>
                                                                                
                                                                            </ul>
                                                                        </div>
                            
                                                                        <div className="me-3">
                                                                            <h3 className="font-semibold">Periode</h3>
                                                                            <ul className="mt-0">
                                                                                <li>2024</li>
                                                                            </ul>
                                                                        </div>
                            
                                                                        <div className="flex flex-row gap-8 mb-3">
                                                                            <div className="me-3">
                                                                                <h3 className="font-semibold">Link</h3>
                                                                                <ul className="mt-0 relative">
                                                                                    <li><a href="https://democafeteam.netlify.app/"id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Demo Cafe</a></li>
                                                                                    <span id="linkUnderline" className="w-0 absolute"></span>
                                                                                </ul>
                                                                            </div>
                            
                                                                            <div className="lg:hidden flex flex-col">
                                                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                                                <ul className="mt-0 flex flex-row">
                                                                                <div className="flex flex-row">
                                                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                                                </div>
                                                                                <div className="flex flex-row">
                                                                                    <li><img src={REACTIMG} alt="React image" className="tech-used"/></li>
                                                                                    <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                                                    
                                                                                </div>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="hidden lg:flex flex-row mt-5 gap-8 ms-3 lg:ms-0">
                                                                        <div className="ms-3">
                                                                            <h3 className="font-semibold">Gebruikte tools</h3>
                                                                            <ul className="mt-0 flex flex-col mx-auto justify-center">
                                                                            <div className="flex flex-row">
                                                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                                                </div>
                                                                                <div className="flex flex-row mt-2">
                                                                                    <li><img src={REACTIMG} alt="React image" className="tech-used !ms-0"/></li>
                                                                                    <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                                                    
                                                                                </div>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                            
                                                                <div className="lg:hidden justify-center">
                                                                    <div className="grid grid-cols-2 mt-5 gap-8">
                                                                        <div className="me-3">
                                                                            <h3 className="font-semibold">Focuspunten</h3>
                                                                            <ul className="mt-0">
                                                                                <li>Design,</li>
                                                                                <li>Mobile</li>
                                                                                
                                                                            </ul>
                                                                        </div>
                            
                                                                        <div className="me-3">
                                                                            <h3 className="font-semibold">Periode</h3>
                                                                            <ul className="mt-0">
                                                                                <li>2024</li>
                                                                            </ul>
                                                                        </div>
                            
                                                                        <div className="me-3">
                                                                            <h3 className="font-semibold">Link</h3>
                                                                            <ul className="mt-0 relative w-fit">
                                                                                <li><a href="https://democafeteam.netlify.app/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Demo Cafe</a></li>
                                                                                <span id="linkUnderline" className="w-0 absolute"></span>
                                                                            </ul>
                                                                        </div>
                            
                                                                        <div className="lg:hidden flex flex-col">
                                                                            <h3 className="font-semibold">Gebruikte tools</h3>
                                                                            <ul className="mt-0 flex flex-col">
                                                                                <div className="flex flex-row">
                                                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                                                </div>
                                                                                <div className="flex flex-row mt-2">
                                                                                    <li><img src={REACTIMG} alt="React image" className="tech-used !ms-0"/></li>
                                                                                    <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                                                </div>
                                                                            </ul>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="mt-5">
                                                                    <p>Bekijk hieronder hoe de website is opgebouwd.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                            <div className="lg:flex hidden flex-col mx-auto flex-1">
                                <img src={TEAMROUNDIMG} name="RIVLMEDIALOGOIMG" onClick={searchStart} alt="PF image" className=" rounded-2xl cursor-pointer"/>
                                <h2 className="text-xl font-bold mt-3"></h2>
                            </div>
                        </div>
                        
                        <div className="lg:max-w-[70vw] xl:max-w-[78vw] max-w-[95vw] m-auto sm:max-w-[90vw] p-1 sm:p-0 h-full">
                            <div id="Design" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Design</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Design</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4">
                                        <img src={TEAMDAVIDIMG} name="KLEURIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">Layout: </h2>
                                                <p className="text-sm ">Ik heb ervoor gekozen om een dynamische layout te bouwen waarin met verschillende elementen diepte wordt gecre&#235;erd. Wanneer je een ander teamlid worden alle elementen via animaties vervangen.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">De positie van de elementen veranderd als je een ander teamlid aanklikt. Zo verveelt het design niet en oogt het lekker fris telkens als je een andere aanklikt.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={TEAMBIANCAIMG} name="DYNAMISCHIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Tekst Elementen: </h2>
                                                <p className="text-sm">In plaats van heel veel nietszeggende teksten die waarschijnlijk toch niemand leest heb ik gekozen om korte statements neer te zetten.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Zo zie je in &#233;&#233;n oogopslag de rol die de persoon in het team vervult, een persoonlijk statement en de kwaliteiten die iemand beheerst.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Uiteraard moet de website ook via mobiele apparaten goed te navigeren zijn. Een groot deel van de tijd is dan ook besteed aan het optimaliseren van de mobiele pagina.&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Mobile</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Mobile</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4" >
                                        <img src={TEAMMOBILEIMG} name="INTERACTIESIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Versimpelen: </h2>
                                                <p className="text-sm">Omdat mobiele apparaten vaak een kleiner oppervlak hebben om dezelfde informatie weer te geven moet je ervoor zorgen dat je een minimaal aantal elementen tegelijk laat zien om de bezoeker niet te overweldigen met informatie.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Een deel van de elementen van de desktop website is dan ook niet te zien op de mobiele pagina om het overzichtelijk te houden. Toch heeft het design er niet onder geleden en voelen beide website varianten als &#233;&#233;n geheel</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="">
                                <div className="px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 t_slide">
                                    <div className="flex-1 flex text-sm">
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;De website heeft een dynamische originele uitstraling waarin het design niet afleidt van de inhoud.&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Door slim gebruik te maken van bepaalde design technieken krijgt de bezoeker alle informatie tot zich die een saai ogende tekst ook had bevat.</p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Door het gebruik van slimme technische oplossingen wordt de gebruiker naar de juiste informatie geleid.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default TeamComponent