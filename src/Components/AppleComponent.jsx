/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { APPLEDETAILSIMG, APPLEGSAPVID, APPLEHIGHLIGHTSIMG, APPLEHOMESCREENIMG, APPLELICHTIMG, APPLEROUNDIMG, APPLETHREEIMG,  CROSSIMG, CSSIMG,  GSAPIMG, HTMLIMG,  JSIMG,  REACTIMG, RIVLMEDIABANNERIMG, THREEIMG } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
gsap.registerPlugin(ScrollTrigger)

const AppleComponent = () => {
    const videoRef = useRef();
    const videoRef2 = useRef();
    const videoRef3 = useRef();
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

    gsap.to('#APPLEGSAPVID', {
        scrollTrigger: {
            trigger: '#APPLEGSAPVID',
            toggleActions: 'play none none none',
            start: '-10% bottom',
        },
        onComplete: () => {
            videoRef.current.play();
        }
    })

    gsap.to('#APPLEHIGHLIGHTSIMG', {
        scrollTrigger: {
            trigger: '#APPLEHIGHLIGHTSIMG',
            toggleActions: 'play none none none',
            start: '-10% bottom',
        },
        onComplete: () => {
            videoRef.current.play();
        }
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
        <section id='AppleID' className="">

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
                    <h2 className="text-lg border-solid border-l-neutral-900">//Apple</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="GSAP image" className="tech-used"/>
                      <img src={THREEIMG} alt="Three.js image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={APPLEHOMESCREENIMG} name="APPLEHOMESCREENIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center t_slide">Apple Website</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-500">Een dynamische website zoals die van <span className="text-gray-950">Apple.</span> Hoe maak je dat?</h2> 
                                    <p>Omdat ik meer wilde weten over GSAP ben ik gaan zoeken naar enkele tutorials. Zo kwam ik <a id="link" target="blank" className="link" href="https://www.youtube.com/watch?v=kRQbRAJ4-Fs&t=3891s">deze</a> tegen. </p>
                                    <p>In deze tutorial leer je de basis van GSAP en Threejs onder de knie te krijgen door middel van het nabouwen van de Apple website. Na de tutorial heb ik om mezelf uit te dagen de website verder geoptimaliseerd door meer effecten die Apple ook gebruikt toe te voegen en om</p>
                                </div>
                                <div className="">
                                    <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                        <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-2">
                                                    <li>GSAP,</li>
                                                    <li>Three.js,</li>
                                                    <li>Extra</li>
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
                                                        <li><a href="https://rick-webclone-enhanced.netlify.app/"id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Apple Clone</a></li>
                                                        <span id="linkUnderline" className="w-0 absolute"></span>
                                                    </ul>
                                                </div>

                                                <div className="lg:hidden flex flex-col">
                                                    <h3 className="font-semibold">Gebruikte tools</h3>
                                                    <ul className="mt-2 flex flex-row">
                                                    <div className="flex flex-row">
                                                        <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                        <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                        <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <li><img src={REACTIMG} alt="React image" className="tech-used"/></li>
                                                        <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                        <li><img src={THREEIMG} alt="Three.js image" className="tech-used"/></li>
                                                    </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex flex-row mt-5 gap-8 ms-3 lg:ms-0">
                                            <div className="ms-3">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-2 flex flex-col mx-auto justify-center">
                                                <div className="flex flex-row">
                                                        <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                        <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                        <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <li><img src={REACTIMG} alt="React image" className="tech-used !ms-0"/></li>
                                                        <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                        <li><img src={THREEIMG} alt="Three.js image" className="tech-used"/></li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:hidden justify-center">
                                        <div className="grid grid-cols-2 mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Verbeterpunten</h3>
                                                <ul className="mt-2">
                                                    <li>GSAP,</li>
                                                    <li>Three.js,</li>
                                                    <li>Extra</li>
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
                                                    <li><a href="https://rick-webclone-enhanced.netlify.app/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Apple Clone</a></li>
                                                    <span id="linkUnderline" className="w-0 absolute"></span>
                                                </ul>
                                            </div>

                                            <div className="lg:hidden flex flex-col">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-2 flex flex-col">
                                                    <div className="flex flex-row">
                                                        <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                        <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                        <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <li><img src={REACTIMG} alt="React image" className="tech-used !ms-0"/></li>
                                                        <li><img src={GSAPIMG} alt="GSAP image" className="tech-used"/></li>
                                                        <li><img src={THREEIMG} alt="Three.js image" className="tech-used"/></li>
                                                    </div>
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
                                <img src={APPLEROUNDIMG} name="APPLEROUNDIMG" onClick={searchStart} alt="PF image" className=" rounded-2xl cursor-pointer"/>
                                <h2 className="text-xl font-bold mt-3"></h2>
                            </div>
                        </div>
                        
                        <div className="lg:max-w-[70vw] xl:max-w-[78vw] max-w-[95vw] m-auto sm:max-w-[90vw] p-1 sm:p-0 h-full">
                            <div id="Design" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-16">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">GSAP</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">GSAP</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4">
                                        <video playsInline id='APPLEGSAPVID' className='rounded-2xl i_fade' preload='none' muted autoPlay loop ref={videoRef2}>
                                            <source src={APPLEGSAPVID} type='video/mp4'/>
                                        </video>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">GSAP interactie: </h2>
                                                <p className="text-sm ">Door middel van GSAP kunnen we elementen in de website simpel animeren. Denk daarbij aan teksten die infaden of elementen die komen inschuiven.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">De GSAP Library maakt het makkelijk om deze elementen toe te voegen zonder dat de code voor je webpagina een spaghetti wordt.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Een combinatie van GSAP en Three.js maakt dat de pagina enorm interactief en dynamisch oogt!&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Three.js</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Three.js</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4" >
                                        <img src={APPLETHREEIMG} name="APPLETHREEIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">3D-Model: </h2>
                                                <p className="text-sm">Met Three.js kan je 3D modellen in je website inladen die je vervolgens kan manipuleren door te klikken of swipen.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Het is heel makkelijk om dit fout te doen. Door de instellingen te begrijpen en de juiste toe te passen zorg je ervoor dat dit een professioneel ogend element is. Als je dit verkeerd implementeerd krijg je het tegenovergestelde effect en voelt het goedkoop aan.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Na de tutorial te hebben gevolgd wilde ik nog een paar extra elementen toevoegen die in de apple website zitten maar niet in de tutorial worden benoemd. Hierdoor lijkt de pagina nog meer op het origineel van Apple zelf.&ldquo;</p>
                                </div>
                            </div>
                            
                            <div id="SEO" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-16">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Extra</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Extra</h2>
                                    </div>
                                </div>
                                <div  className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4">
                                        <video playsInline id='APPLEHIGHLIGHTSIMG' className='rounded-2xl i_fade' preload='none' muted autoPlay loop ref={videoRef3}>
                                            <source src={APPLEHIGHLIGHTSIMG} type='video/mp4'/>
                                        </video>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Werkende highlights sectie: </h2>
                                                    <p className="text-sm ">De highlights sectie is een in het oog springend onderdeel. In de tutorial leer je hoe je deze moet vormgeven maar deze is buiten de pauzeer en speel knop niet interactief. Ik heb deze zelf verder uitgebouwd zodat hij volledig interactief is net als op de website van Apple.</p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <p className="text-sm ">Om deze sectie volledig interactief te krijgen heb ik de gehele GSAP code moeten veranderen. De originele code uit de tutorial kon je namelijk niet makkelijk op gebruikersinteractie laten reageren. Ik heb bijvoorbeeld het timeline balkje zo gemaakt dat, wanneer je op een ander onderdeel klikt, reset. Dit door het toevoegen van extra code om te weten waar er is geklikt en om te checken wat de vorige timeline was zodat de correcte timeline wordt gestopt.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={APPLELICHTIMG} name="APPLELICHTIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Lichteffecten: </h2>
                                                    <p className="text-sm ">De Apple website maakt gebruik van een oplicht effect op de tekst. Het lijkt dan net alsof er een neonlicht wordt aangezet op het moment dat je er langs scrollt. Dit zit een paar keer in de pagina verwerkt en geeft de pagina echt een dynamisch gevoel.</p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <p className="text-sm ">Dit is vrij simpel met GSAP te bouwen. Door een onzichtbare tekstlaag op de al bestaande tekst te plaatsen die op jou scrollpositie zichtbaar wordt lijkt het net alsof de tekst oplicht.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <img src={APPLEDETAILSIMG} name="APPLEDETAILSIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Details: </h2>
                                                    <p className="text-sm ">Als laatst heb ik nog wat kleine dingetjes toegevoegd zoals schaduwen en kleine aanpassingen aan de layout om het meer op apple te laten lijken.</p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <p className="text-sm "></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="">
                                <div className="px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 t_slide">
                                    <div className="flex-1 flex text-sm">
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;Deze opdracht heeft mij veel geleerd over Javascript, GSAP en Three.js&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Door zelf onderzoek te doen naar de originele website van Apple heb ik mijn kennis, in combinatie met de tutorial, van Javascript, GSAP en Three.js naar een hoger niveau weten te tillen.</p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Ook heeft het mijn ogen geopend voor wat er allemaal mogelijk is binnen webdesign. Vanuit die gedachte ben ik dan ook heel enthousiast geworden over het gebruik van Javascript, GSAP en Three.js in webdesign.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default AppleComponent