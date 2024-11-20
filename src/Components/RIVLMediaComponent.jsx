/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CONTENTSTRATEGIEIMG, CROSSIMG, CSSIMG, DYNAMISCHIMG, HTMLIMG, INTERACTIESIMG, JSIMG, KLEURIMG, MOBILEIMG, RIVLMEDIABANNERIMG, RIVLMEDIALOGOIMG, RIVLMEDIASEOIMG, STRAKIMG } from "../utils"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
gsap.registerPlugin(ScrollTrigger)

const RIVLMediaComponent = () => {
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
                <div className="w-[90vw] flex justify-between title-max-width m-4 border-t-2 p-2 px-4 lg:px-2">
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
                            <h1 className="text-4xl font-bold text-center">Een Website designen!</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col">
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
                                        <h2 className="text-xl font-bold mt-2">Kleurenschema en Typografie: </h2>
                                        <p className="text-sm">Er is een harmonieus kleurenpalet ontwikkeld dat de merkidentiteit van RIVL Media versterkt. De gekozen typografie straalt moderniteit en toegankelijkheid uit, wat het leesgemak vergroot.</p>
                                    </div>

                                    <div className="my-4">
                                        <img src={DYNAMISCHIMG} name="DYNAMISCHIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Dynamische visuele Elementen:  </h2>
                                        <p className="text-sm">Het gebruik van hoogwaardige afbeeldingen, subtiele animaties en video’s maakt de website levendig en engaging.</p>
                                    </div>

                                    <div className="my-4">
                                        <img src={STRAKIMG} name="STRAKIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Strak en Gecontroleerd: </h2>
                                        <p className="text-sm">Overbodige elementen zijn verwijderd om een heldere en overzichtelijke lay-out te creëren. Hierdoor komen de belangrijkste boodschappen beter naar voren.</p>
                                    </div>

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
                                        <h2 className="text-xl font-bold mt-2">Geoptimaliseerde Interacties:  </h2>
                                        <p className="text-sm">Call-to-actions, zoals knoppen en formulieren, zijn strategisch geplaatst en duidelijk zichtbaar. Dit verhoogt de conversieratio en stimuleert interactie met bezoekers.</p>
                                    </div>

                                    <div className="my-4">
                                        <img src={MOBILEIMG} name="MOBILEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Mobile-first Design: </h2>
                                        <p className="text-sm">De website is volledig responsief en biedt een naadloze ervaring op alle apparaten. Of je nu op een desktop, tablet of smartphone kijkt, de website past zich moeiteloos aan.</p>
                                    </div>

                                    <div className="my-4">
                                        <img src={RIVLMEDIABANNERIMG} name="RIVLMEDIABANNERIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Nog een punt </h2>
                                        <p className="text-sm">ratatata ratata tata tatata</p>
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
                                    <div className="my-4">
                                        <img src={RIVLMEDIASEOIMG} name="RIVLMEDIABANNERIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Technische Optimalisaties:  </h2>
                                        <p className="text-sm">De laadsnelheid is verhoogd door bestanden te comprimeren, caching toe te passen en onnodige scripts te verwijderen. Ook is de site-structuur verbeterd, wat niet alleen gebruikers maar ook zoekmachines helpt om de inhoud beter te begrijpen.</p>
                                    </div>

                                    <div className="my-4">
                                        <img src={CONTENTSTRATEGIEIMG} name="CONTENTSTRATEGIEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <h2 className="text-xl font-bold mt-2">Gerichte Contentstrategie  </h2>
                                        <p className="text-sm">Door uitgebreid zoekwoordonderzoek is bepaald welke termen de doelgroep van RIVL Media gebruikt. Vervolgens zijn deze geïntegreerd in de tekst, meta-titels, en beschrijvingen zonder afbreuk te doen aan de leesbaarheid en kwaliteit van de content.</p>
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