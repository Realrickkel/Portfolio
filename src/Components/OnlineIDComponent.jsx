/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CROSSIMG, CSSIMG, HTMLIMG, ONLINECONTACTIMG, ONLINEDESIGNIMG, ONLINESTANDAARDIMG, ONLINEVACATUREIMG, RIVLMEDIALOGOIMG, WORDIMG } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
gsap.registerPlugin(ScrollTrigger)

const OnlineIDComponent = () => {
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
                img.src = ONLINESTANDAARDIMG; // by setting an src, you trigger browser download
                history.back()
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
        <section id='OnlineIDID' className="">

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
                    <h2 className="text-lg border-solid border-l-neutral-900">//Online ID</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={WORDIMG} alt="Wordpress image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={ONLINESTANDAARDIMG} name="ONLINESTANDAARDIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center t_slide">Website onderhouden</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-500">Website van <span className="text-gray-950">Online ID</span> onderhouden</h2> 
                                    <p>Tijdens mijn werk bij Online ID was ik verantwoordelijk voor het onderhouden en optimaliseren van de website. Dit omvatte een breed scala aan taken die essentieel waren voor het up-to-date houden van de site en het verbeteren van de gebruikerservaring.</p>
                                </div>
                                <div className="">
                                    <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                        <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-2">
                                                    <li>Vacatures</li>
                                                    <li>Design</li>
                                                    <li>Bugs</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Periode</h3>
                                                <ul className="mt-2">
                                                    <li>2023-2024</li>
                                                </ul>
                                            </div>

                                            <div className="flex flex-row gap-8 mb-3">
                                                <div className="me-3">
                                                    <h3 className="font-semibold">Link</h3>
                                                    <ul className="mt-2 relative">
                                                        <li><a href="https://online-id.nl/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>online-id.nl</a></li>
                                                        <span id="linkUnderline" className="w-0 absolute"></span>
                                                    </ul>
                                                </div>

                                                <div className="lg:hidden flex flex-col">
                                                    <h3 className="font-semibold">Gebruikte tools</h3>
                                                    <ul className="mt-2 flex flex-row">
                                                        <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                        <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                        <li><img src={WORDIMG} alt="Wordpress image" className="tech-used"/></li>
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
                                                    <li><img src={WORDIMG} alt="Wordpress image" className="tech-used"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden justify-center">
                                        <div className="grid grid-cols-2 mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-2">
                                                    <li>Vacatures,</li>
                                                    <li>Design,</li>
                                                    <li>Bugs</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Periode</h3>
                                                <ul className="mt-2">
                                                    <li>2023-2024</li>
                                                </ul>
                                            </div>

                                            <div className="me-3">
                                                <h3 className="font-semibold">Link</h3>
                                                <ul className="mt-2 relative w-fit">
                                                    <li><a href="https://online-id.nl/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>online-id.nl</a></li>
                                                    <span id="linkUnderline" className="w-0 absolute"></span>
                                                </ul>
                                            </div>

                                            <div className="lg:hidden flex flex-col">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-2 flex flex-row w-fit">
                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                    <li><img src={WORDIMG} alt="Wordpress image" className="tech-used"/></li>
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
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-24">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Vacatures</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Vacatures</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4">
                                        <img src={ONLINEVACATUREIMG} name="ONLINEVACATUREIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">Plaatsen van vacatures: </h2>
                                                <p className="text-sm ">Ik hield in de eerste plaats bezig met het plaatsen van vacatures. Ik zorgde ervoor dat nieuwe vacatures tijdig werden gepubliceerd, correct waren opgemaakt en goed vindbaar waren voor bezoekers.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Over het algemeen was dat vrij simpel doordat je blokken kon kopiëren, hier en daar was er wat technische kennis vereist over hoe je bijvoorbeeld de juiste afbeeldingen linkt.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Het ontwerp van de website is van essentieel belang voor de manier waarop bezoekers Online ID ervaren. Bij het onderhoud lag de focus op het ontwikkelen van een visueel aantrekkelijke en professionele uitstraling die perfect aansluit bij de missie en kernwaarden van het bedrijf.&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Design</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Design</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4" >
                                        <img src={ONLINEDESIGNIMG} name="ONLINEDESIGNIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Visuele Vernieuwing: </h2>
                                                <p className="text-sm">Ik vernieuwde regelmatig afbeeldingen op de website om een frisse en aantrekkelijke uitstraling te behouden.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Om de website nog dynamischer te maken, heb ik ook enkele originele GIFs ontworpen en toegevoegd.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div id="SEO" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Bugs</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Bugs</h2>
                                    </div>
                                </div>
                                <div  className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4">
                                        <img src={ONLINECONTACTIMG} name="ONLINECONTACTIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Bugs oplossen: </h2>
                                                    <p className="text-sm ">Hier en daar zaten er wat kleine bugs in de website zoals linkjes die verkeerd linkten, of verkeerd ingeladen afbeeldingen. Dat was allemaal vrij simpel op te lossen. De grootste bug die de website had was dat het contactformulier niet werkte. </p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <p className="text-sm ">Dit heb ik uiteindelijk met een klein stukje extra Javascript code kunnen oplossen. Het probleem zat hem in het feit dat alle mails die werden verstuurd van de site een koppeling hadden naar een vacature. Echter waren dit vacatures die allang niet meer bestonden dus het systeem begreep niet wat het dan met de mails aan moest.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 t_slide">
                                    <div className="flex-1 flex text-sm">
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;De website van Online ID is niet alleen geoptimaliseerd voor gebruikers maar ook voor zoekmachines&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Ik heb hier naast het onderhouden van een website ook veel over SEO geleerd. Hoe je een webpagina kan laten voldoen aan alle eisen zodat een search engine je website goed oppakt. </p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Zo is het belangrijk dat je pagina&#39;s zo klein mogelijk zijn zodat ze snel inladen. Interne links zijn belangrijk maar ook de structuur zoals het juiste gebruik van koppen en voetteksten is belangrijk.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default OnlineIDComponent