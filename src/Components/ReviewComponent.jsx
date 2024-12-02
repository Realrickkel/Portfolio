/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CROSSIMG, CSSIMG, FILMREVIEWDATABASEIMG, FILMREVIEWKOPTITELIMG, FILMREVIEWLAADSCHERMIMG, FILMREVIEWLOGOIMG, FILMREVIEWRECENSIEIMG, FILMREVIEWRESULTAATIMG, FILMREVIEWSTANDAARDIMG, FILMREVIEWZOEKFUNCTIEIMG, HTMLIMG, JSIMG, REACTIMG, } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
gsap.registerPlugin(ScrollTrigger)

const ReviewComponent = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    const[animate, setAnimate] = useState(false)
    const[animateOut, setAnimateOut] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    let [targetValue, setTargetValue] = useState("")
    let [openMod, setOpenMod] = useState(false)
    let targetSRC

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
        //reload page once to reset all scrolltriggers
         if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
            } else {
                const img = new Image();
                img.onload = () => {
                // when it finishes loading, update the component state
                setLoadedProjects(true);
                }
                img.src = FILMREVIEWSTANDAARDIMG; // by setting an src, you trigger browser download
                history.back()
            }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          })
      }, [])

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
    }),

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

    },[])
    
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
        <section id='FilmReviewID' className="">

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
                    <h2 className="text-lg border-solid border-l-neutral-900">//Film Review</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="REACT image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={FILMREVIEWSTANDAARDIMG} name="FILMREVIEWSTANDAARDIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center t_slide">AI Film Recensent!</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-500">Hoe zou een brabantse <span className="text-gray-950">film recensie</span> er uit zien?</h2> 
                                    <p>Een innovatieve website die filmliefhebbers en seriekijkers helpt bij het ontdekken van hun volgende favoriete titels. Deze webapp maakt gebruik van de kracht van de IMDB API en de Gemini API om uitgebreide informatie en grappige beoordelingen te genereren.</p>

                                    <p>De app is ontworpen om op een grappige manier films en series in het brabants te beoordelen. Het doel van het bouwen van deze site was om meer te leren over het gebruik van API&#39;s en de REACT library.</p>
                                </div>
                                <div className="">
                                    <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                        <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-2">
                                                    <li>IMDB API,</li>
                                                    <li>Gemini API</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Periode</h3>
                                                <ul className="mt-2">
                                                    <li>2024</li>
                                                </ul>
                                            </div>

                                            <div className="flex flex-row gap-8 mb-3">
                                                <div className="me-3">
                                                    <h3 className="font-semibold">Link</h3>
                                                    <ul className="mt-2 relative">
                                                        <li><a href="https://istwa.netlify.app/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>De Filmrecensent</a></li>
                                                        <span id="linkUnderline" className="w-0 absolute"></span>
                                                    </ul>
                                                </div>

                                                <div className="lg:hidden flex flex-col">
                                                    <h3 className="font-semibold">Gebruikte tools</h3>
                                                    <ul className="mt-2 flex flex-row">
                                                        <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                        <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                        <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex flex-row mt-5 gap-8 ms-3 lg:ms-0">
                                            <div className="ms-3">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-2 flex flex-row mx-auto justify-center">
                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used"/></li>
                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    <li><img src={REACTIMG} alt="REACT image" className="tech-used"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden justify-center">
                                        <div className="grid grid-cols-2 mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-2">
                                                    <li>IMDB API,</li>
                                                    <li>Gemini API</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Periode</h3>
                                                <ul className="mt-2">
                                                    <li>2024</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Link</h3>
                                                <ul className="mt-2 relative w-fit">
                                                    <li className=""><a href="https://istwa.netlify.app/" id="link" target="blank" className="link relative w-fit" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>De Filmrecensent</a></li>
                                                    <span id="linkUnderline" className="w-0 absolute"></span>
                                                </ul>
                                            </div>

                                            <div className="lg:hidden flex flex-col">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-2 flex flex-row">
                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    <li><img src={REACTIMG} alt="REACT image" className="tech-used"/></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="mt-5">
                                        <p>Bekijk hieronder hoe de website is ontworpen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex hidden flex-col mx-auto flex-1">
                                <img src={FILMREVIEWLOGOIMG} name="FILMREVIEWLOGOIMG" onClick={searchStart} alt="PF image" className=" rounded-2xl cursor-pointer"/>
                                <h2 className="text-xl font-bold mt-3"></h2>
                            </div>
                        </div>
                        
                        <div className="lg:max-w-[70vw] xl:max-w-[78vw] max-w-[95vw] m-auto sm:max-w-[90vw] p-1 sm:p-0 h-full">
                            <div id="Design" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-14">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">IMDB</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">IMDB</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4">
                                        <img src={FILMREVIEWDATABASEIMG} name="FILMREVIEWDATABASEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">Filmdatabase: </h2>
                                                <p className="text-sm ">Er is geen bekendere database over films dan IMDB. De films en worden dan ook via de OMDB API aangeroepen.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">De OMDB API is een gebruiksvriendelijke versie van de IMDB API die erg intuïtief te gebruiken is.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={FILMREVIEWZOEKFUNCTIEIMG} name="FILMREVIEWZOEKFUNCTIEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Dynamische zoekfunctie: </h2>
                                                <p className="text-sm">Met behulp van de zoekfunctie kan je elke film of serie opzoeken die in de IMDB database te vinden is. Je krijgt een resultaat van maximaal 5 films of series te zien.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Door vervolgens degene te selecteren waar je meer informatie over wil hebben wordt alle benodigde informatie verzamelt en naar de Gemini API gestuurd.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <img src={FILMREVIEWKOPTITELIMG} name="FILMREVIEWKOPTITELIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Dynamische Koptitel: </h2>
                                                <p className="text-sm">Op basis van de score op IMDB genereert de website zonder tussenkomst van de Gemini API al een koptitel</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Van goed naar slecht zijn dit de opties:</p>
                                                <ul className="text-sm mt-1">
                                                    <li>&#9679; Goei spul!</li>
                                                    <li>&#9679; Da is een mooi filmpke</li>
                                                    <li>&#9679; Mwua</li>
                                                    <li>&#9679; des niks</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;De koppeling tussen de OMDB API en Gemini API was de lastigste klus. Het was niet zo&#39;n ingewikkeld proces om ze apart werkend te krijgen. Het was alleen een uitdaging om uit te vogelen hoe dynamische info van de een naar de ander gestuurd kan worden.&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Gemini</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Gemini</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4" >
                                        <img src={FILMREVIEWRECENSIEIMG} name="FILMREVIEWRECENSIEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">De Recensie: </h2>
                                                <p className="text-sm">De benodigde informatie, zoals het plot en score van de film of, worden middels een geheim prompt naar de Gemini API gestuurd.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Deze creeërt geheel zelf een recensie die accuraat is voor de film en bijvoorbeeld een slechte film ook slecht beoordeeld.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={FILMREVIEWLAADSCHERMIMG} name="FILMREVIEWLAADSCHERMIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Laadscherm: </h2>
                                                <p className="text-sm">Aangezien het altijd even duurt voordat je een volledig antwoord krijgt van een AI Chatbot is er gekozen om een laadscherm in te bouwen</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Deze kan zo uitgebreid zijn als we willen maar het beste is om de gebruiker op de hoogte te stellen van wat er op het moment gebeurd.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div id="SEO" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Review</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Review</h2>
                                    </div>
                                </div>
                                <div  className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4">
                                        <img src={FILMREVIEWRESULTAATIMG} name="FILMREVIEWRESULTAATIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Een unieke recensent:</h2>
                                                    <p className="text-sm ">Het resulteert altijd in een grappige recensie waar ik zelf af en toe om moet gniffelen. Daarnaast is het ook heel bruikbaar want je weet meteen of de film of serie iets voor jou is!</p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Gerichte Contentstrategie:</h2>
                                                    <p className="text-sm ">Door uitgebreid zoekwoordonderzoek is bepaald welke termen de doelgroep van RIVL Media gebruikt. Vervolgens zijn deze geïntegreerd in de tekst, meta-titels, en beschrijvingen zonder afbreuk te doen aan de leesbaarheid en kwaliteit van de content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 t_slide">
                                    <div className="flex-1 flex text-sm">
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;Een unieke manier om te kijken of een film iets voor jou is&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Al met al was dit een mooi experiment om te bouwen. Het gebruik van API&#39;s kan soms wel ingewikkeld zijn maar door vooral veel te testen en proberen is een oplossing altijd binnen handbereik.</p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Er zijn echter nog zeker verbeterpunten aan deze website. Zo is de website nu niet responsive wat vanuit technisch oogpunt nog een goede verbetering kan zijn. Daarnaast zou een toevoeging van spraak erg gewild zijn. Hier zou een Text-to-Speech AI voor geïmplementeerd kunnen worden.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default ReviewComponent