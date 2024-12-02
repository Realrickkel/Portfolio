/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CROSSIMG, CSSIMG, DYNAMISCHIMG, HTMLIMG, INTERACTIESIMG, JSIMG, KLEURIMG, MOBILEIMG, RIVLMEDIABANNERIMG, RIVLMEDIALOGOIMG, RIVLMEDIASEOIMG, STRAKIMG } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
gsap.registerPlugin(ScrollTrigger)

const RIVLMediaComponent = () => {
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
        console.log(targetSRC)
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
                img.src = RIVLMEDIABANNERIMG; // by setting an src, you trigger browser download
                history.back()
                //history.pushState( {} , 'foo', '/rivlmedia' );
            }

        window.scrollTo({
            top: 0,
            left: 0,
            //Check of dit ook in andere browsers werkt
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
        // deze is wel vervelend misschien toch ook een y verandering aanbrengen zodat niet al de foto inlaadt terwijl de tekst nog aan het animeren is opzich met de 0.5 als duration gaat het wel wat netter
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
        <section id='RIVLMediaID' className="">

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
                    <h2 className="text-lg border-solid border-l-neutral-900">//RIVL media</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={RIVLMEDIABANNERIMG} name="RIVLMEDIABANNERIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center t_slide">Een Website designen!</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-500">Aanpak van de website van <span className="text-gray-950">RIVL Media:</span> Design, UX/UI en SEO verbeteringen</h2> 
                                    <p>De website van RIVL Media heeft onlangs een uitgebreide herziening ondergaan met als doel een modernere uitstraling, betere gebruikservaring en verbeterde zichtbaarheid online.</p>
                                    <p>Met deze verbeteringen is de website van RIVL Media niet alleen een stuk gebruiksvriendelijker geworden, maar ook een krachtig instrument om nieuwe klanten aan te trekken en bestaande relaties te versterken. De nieuwe site weerspiegelt nu de professionele en innovatieve aanpak die RIVL Media kenmerkt.</p>
                                </div>
                                <div className="">
                                    <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                        <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Verbeterpunten</h3>
                                                <ul className="mt-2">
                                                    <li>Design,</li>
                                                    <li>UX/UI,</li>
                                                    <li>SEO</li>
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
                                                        <li><a href="https://www.rivlmedia.nl" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>rivlmedia.nl</a></li>
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
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden justify-center">
                                        <div className="grid grid-cols-2 mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Verbeterpunten</h3>
                                                <ul className="mt-2">
                                                    <li>Design,</li>
                                                    <li>UX/UI,</li>
                                                    <li>SEO</li>
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
                                                    <li><a href="https://www.rivlmedia.nl" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>rivlmedia.nl</a></li>
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
                                    <div className="mt-5">
                                        <p>Bekijk hieronder hoe de verbeteringen zijn toegepast</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex hidden flex-col mx-auto flex-1">
                                <img src={RIVLMEDIALOGOIMG} name="RIVLMEDIALOGOIMG" onClick={searchStart} alt="PF image" className=" rounded-2xl cursor-pointer"/>
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
                                        <img src={KLEURIMG} name="KLEURIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">Kleurenschema en Typografie: </h2>
                                                <p className="text-sm ">Er is een harmonieus kleurenpalet ontwikkeld dat de merkidentiteit van RIVL Media versterkt.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">De gekozen typografie straalt moderniteit en toegankelijkheid uit, wat het leesgemak vergroot.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={DYNAMISCHIMG} name="DYNAMISCHIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Dynamische Elementen: </h2>
                                                <p className="text-sm">Het gebruik van hoogwaardige afbeeldingen, subtiele animaties en video’s maakt de website levendig en engaging.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Hierdoor voelen bezoekers zich sneller vertrouwd met de website, wat de kans vergroot dat ze terugkeren of overgaan tot actie.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <img src={STRAKIMG} name="STRAKIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Strak en Gecontroleerd: </h2>
                                                <p className="text-sm">Overbodige elementen zijn verwijderd om een heldere en overzichtelijke lay-out te creëren. Hierdoor komen de belangrijkste boodschappen beter naar voren.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Deze benadering zorgt ervoor dat bezoekers niet worden afgeleid, wat de navigatie vereenvoudigt en de gebruikerservaring aanzienlijk versterkt.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Het design van de website speelt een cruciale rol in hoe bezoekers RIVL Media ervaren. Bij het herontwerpen is er gefocust op het creëren van een visueel aantrekkelijke en professionele uitstraling die naadloos aansluit bij de missie en waarden van het bedrijf.&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">UX/UI</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">UX/UI</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4" >
                                        <img src={INTERACTIESIMG} name="INTERACTIESIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Geoptimaliseerde Interacties: </h2>
                                                <p className="text-sm">Call-to-actions, zoals knoppen en formulieren, zijn strategisch geplaatst en duidelijk zichtbaar. Dit verhoogt de conversieratio en stimuleert interactie met bezoekers.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Door gebruik te maken van visuele hiërarchie en voldoende witruimte, worden bezoekers subtiel maar effectief geleid naar de gewenste acties.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={MOBILEIMG} name="MOBILEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Mobile-first Design: </h2>
                                                <p className="text-sm">De website is volledig responsief en biedt een naadloze ervaring op alle apparaten. Of je nu op een desktop, tablet of smartphone kijkt, de website past zich moeiteloos aan.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Dit is essentieel in een tijd waarin een groot deel van je bezoekers de website op een telefoon of tablet bekijkt.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div id="SEO" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">SEO</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">SEO</h2>
                                    </div>
                                </div>
                                <div  className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4">
                                        <img src={RIVLMEDIASEOIMG} name="RIVLMEDIABANNERIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Technische Optimalisaties: </h2>
                                                    <p className="text-sm ">De laadsnelheid is verhoogd door bestanden te comprimeren, caching toe te passen en onnodige scripts te verwijderen. Ook is de site-structuur verbeterd, wat niet alleen gebruikers maar ook zoekmachines helpt om de inhoud beter te begrijpen.</p>
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
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;De website van RIVL Media is een krachtig instrument geworden om nieuwe klanten aan te trekken en bestaande relaties te versterken.&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Met een slimme combinatie van visueel aantrekkelijk design en strategische content biedt de website een optimale gebruikerservaring die bezoekers inspireert en overtuigt. Door heldere navigatie en boeiende call-to-actions wordt het voor potentiële klanten eenvoudig om de diensten van RIVL Media te ontdekken en contact op te nemen.</p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">De website fungeert als een overtuigend visitekaartje dat direct vertrouwen wekt. Dankzij duidelijke informatie over diensten, succesverhalen en een professioneel design krijgen bezoekers een helder beeld van de waarde die RIVL Media kan bieden, waardoor ze worden aangemoedigd om de eerste stap te zetten naar een samenwerking.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default RIVLMediaComponent