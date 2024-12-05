/* eslint-disable react/jsx-no-comment-textnodes */
import { useGSAP } from "@gsap/react"
import { CROSSIMG, CSSIMG, GAMEENEMYIMG, GAMEKARAKTERIMG, GAMENPCIMG, GAMEROUNDIMG, GAMEWERELDIMG, GAMEWINIMG, HTMLIMG, JSIMG, NINJAGAMESTANDAARDIMG, NINJAGAMEVID, } from "../utils"
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/Animations";
import { Context } from "../context/Context"
gsap.registerPlugin(ScrollTrigger)

const JavascriptGameComponent = () => {
    const videoRef = useRef();
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    const {classChangeHero, setClassChangeHero} = useContext(Context)
    const {classChangeExperience,setClassChangeExperience} = useContext(Context)
    const [loadedImages, setLoadedImages] = useState(false)
    const [loadedVideos, setLoadedVideos] = useState(false)
    const[scrollt, setScrollt] = useState(false)
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
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
            setLoadedImages(true)
        });

            setClassChangeHero(false)
            setClassChangeExperience(false)     
            
            window.onscroll = function () {
                window.scrollTo(0, 0);
            };  
  }, [])

  useEffect(() => {
    if(loadedImages && loadedVideos){
        setLoadedProjects(true);
    }
  },[loadedImages, loadedVideos])

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

    gsap.to('#NinjaGameVideo', {
        scrollTrigger: {
            trigger: '#NinjaGameVideo',
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
        <section id='JavascriptGameID' className="">

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
                    <h2 className="text-lg border-solid border-l-neutral-900">//Javascript Game</h2>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                </div>
                    <div className="screen-max-width flex flex-col">
                        <div className="flex lg:max-w-[70vw] xl:max-w-[78vw] m-auto justify-center items-center lg:h-[80vh] h-max lg:py-10 py-52 xl:mt-10 mt-0 my-24 bg-slate-100 lg:rounded-2xl px-10 lg:px-24 xl:px-12">
                            <img src={NINJAGAMESTANDAARDIMG} name="NINJAGAMESTANDAARDIMG" onClick={searchStart} alt="HTML image" className="flex rounded-2xl cursor-pointer"/>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center mx-4 t_slide">Een Game in de browser maken!</h1>
                        </div>

                        <div className="common-padding !px-0 flex flex-1 lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[78vw] m-auto gap-10 overflow-hidden h-full t_slide_up">
                            <div id="" className="lg:max-w-[51vw] xl:max-w-[65%] max-w-[90vw] mx-auto flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold text-gray-500">Een game in de <span className="text-gray-950">browser,</span> hoe maak je zo iets?</h2> 
                                    <p>Een game maken is altijd al iets wat ik interresant heb gevonden. Om mezelf uit te dagen wilde ik kijken of ik een game kon maken die in de browser speelbaar is. Gelukkig zijn er een hoop tutorials te vinden die uitleggen waar je moet beginnen. Zo heb ik zelf <a id="link" target="blank" className="link" href="https://www.youtube.com/watch?v=zogxGGDJ2Ok">deze tutorial</a> gevolgd om te leren waar ik moet beginnen.</p>
                                    <p>Vervolgens heb ik met mijn opgedane kennis de game verder uitgebreid met o.a. een win en verlies condition, interactieve NPC&#39;s, een vernieuwd collision systeem en meer!</p>
                                    <p>Ter info: De game is alleen speelbaar op een laptop of desktop</p>
                                </div>
                                <div className="">
                                    <div className="flex flex-row lg:justify-between justify-start flex-wrap">
                                        <div className="lg:flex hidden flex-row flex-wrap md:justify-normal justify-center mt-5 gap-8">
                                            <div className="me-3">
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-0">
                                                    <li>Basics van Game Design,</li>
                                                    <li>NPC&#39;s,</li>
                                                    <li>Details</li>
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
                                                        <li><a href="https://ninjajavascriptgamerick.netlify.app/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Speel de game hier!</a></li>
                                                        <span id="linkUnderline" className="w-0 absolute"></span>
                                                    </ul>
                                                </div>

                                                <div className="lg:hidden flex flex-col">
                                                    <h3 className="font-semibold">Gebruikte tools</h3>
                                                    <ul className="mt-0 flex flex-row">
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
                                                <ul className="mt-0 flex flex-row mx-auto justify-center">
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
                                                <h3 className="font-semibold">Focuspunten</h3>
                                                <ul className="mt-0">
                                                    <li>Basics van Game Design,</li>
                                                    <li>NPC&#39;s,</li>
                                                    <li>Details</li>
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
                                                    <li><a href="https://ninjajavascriptgamerick.netlify.app/" id="link" target="blank" className="link relative" onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimateOut(true)}>Speel de game hier!</a></li>
                                                    <span id="linkUnderline" className="w-0 absolute"></span>
                                                </ul>
                                            </div>

                                            <div className="lg:hidden flex flex-col">
                                                <h3 className="font-semibold">Gebruikte tools</h3>
                                                <ul className="mt-0 flex flex-row">
                                                    <li><img src={HTMLIMG} alt="HTML image" className="tech-used !ms-0"/></li>
                                                    <li><img src={CSSIMG} alt="CSS image" className="tech-used"/></li>
                                                    <li><img src={JSIMG} alt="Javascript image" className="tech-used"/></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="mt-5">
                                        <p>Bekijk hieronder hoe de game is gemaakt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex hidden flex-col mx-auto flex-1">
                                <img src={GAMEROUNDIMG} name="GAMEROUNDIMG" onClick={searchStart} alt="PF image" className=" rounded-2xl cursor-pointer"/>
                                <h2 className="text-xl font-bold mt-3"></h2>
                            </div>
                        </div>
                        
                        <div className="lg:max-w-[70vw] xl:max-w-[78vw] max-w-[95vw] m-auto sm:max-w-[90vw] p-1 sm:p-0 h-full">
                            <div id="Design" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Basics</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Basics</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4">
                                        <img src={GAMEWERELDIMG} name="GAMEWERELDIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold">Wereld: </h2>
                                                <p className="text-sm ">De wereld heb ik vanuit <a id="link" target="blank" className="link" href="https://mappermate.com/">mappermate</a> geïmporteerd. Hierbij kan je in een grid sprites plaatsen en deze exporteren zodat de basis onderdelen van je game al meteen in code worden omgezet. </p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Denk aan de basis player controls, collision detection systeem en uiteraard de sprites die in het grid zijn geplaatst.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={GAMEKARAKTERIMG} name="GAMEKARAKTERIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Karakter:</h2>
                                                <p className="text-sm">De basisonderdelen van het karakter zij al met mappermate geïmporteerd. Het enige wat je nog moet toevoegen is de sprites die horen bij welke actie je karakter uitvoert, vecht animaties en of je wordt geraakt door een vijand.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Een van de onderdelen die je toevoegt is het aanvallen van een vijand. Door op spatiebalk te klikken kan je met je speer slaan en de vijand raken.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <img src={GAMEENEMYIMG} name="GAMEENEMYIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Vijanden:</h2>
                                                <p className="text-sm">In de tutorial leer je hoe je een vijand maakt. De vijand krijgt een pathfinding AI en doet damage op het moment dat je als speler met de vijand in aanraking komt. Daarnaast kan je ook damage doen door de vijand met de speer te slaan. Ik heb zelf de overige vijanden toegevoegd en ze een knockback gegeven op het moment dat ze worden geraakt. </p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">Het is heel simpel een vijand toe te voegen. Elke vijand refereert aan het Enemy.js bestand en door een paar parameters aan te passen kan je heel simpel nieuwe vijanden toevoegen zonder voor elke vijand de hele code opnieuw te schrijven. Dit is het laatste onderdeel wat je leert in de tutorial. Vanaf hier is alles wat ik in de game maak zelf bedacht.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <video playsInline id='NinjaGameVideo' src={NINJAGAMEVID} onLoadedData={() => setLoadedVideos(true)} className='rounded-2xl i_fade' preload='none' muted autoPlay loop ref={videoRef}>
                                            {/*<source src={NINJAGAMEVID} type='video/mp4'/>*/}
                                        </video>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Collision systeem: </h2>
                                                <p className="text-sm">Het collision systeem uit de tutorial werkt niet zoals het hoort. Het grootste issue was dat het keek naar de richting in de Y en X assen en als het dan een karakter in contact komt met een collision blok werd het karakter teruggezet in de tegengestelde richting. Wat er kon gebeuren was dat als de detectie net iets te langzaam was het karakter bijvoorbeeld al 2 frames in de collision blok kon zitten. Wanneer de game je dan in tegengestelde richting eruit wil duwen detecteert de colliosion detectie dat je nu weer in een collision blok zit en de andere kant op gestuurd moet worden. Hierdoor ontstond een infinite loop waarbij het karakter vast zat in de muur.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <p className="text-sm mt-1">In het nieuwe collision systeem wordt er gekeken naar wat de richting was op het moment van impact tussen twee objecten. Zelfs als de collision nu te laat wordt gedetecteerd kan hij nu niet in een infinite loop vallen</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="common-padding px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 ">
                                <div className="md:text-4xl text-xl font-bold md:leading-[3rem] leading-[1.6rem] italic">
                                    <p className="t_slide">&ldquo;Nu de basis is gelegd voor de game is het tijd om extra dingen toe te voegen, te beginnen met NPC&#39;s. Daarna nog de laatste details toevoegen om de gameplay ervaring te complementeren!&ldquo;</p>
                                </div>
                            </div>

                            <div id="UX/UI" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">NPC&#39;s</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">NPC&#39;s</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="my-4" >
                                        <img src={GAMENPCIMG} name="GAMENPCIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">NPC&#39;s met Pathfinding toevoegen:</h2>
                                                <p className="text-sm">Het toevoegen van NPC&#39;s werkt vrijwel hetzelfde als de vijanden. Er is een standaard NPC bestand waar elke NPC met zijn eigen parameters aan refereert waardoor het toevoegen erg simpel is. De pathfinding van de NPC&#39;s werkt echter iets anders dan die van de vijanden. Ze lopen op een vooraf bedacht pad en herhalen deze steeds. Een beetje zoals je in de klassieke RPG&#39;s ook ziet. Deze paden zijn ook makkelijk voor elke NPC met parameters aan te geven waardoor iedereen toch anders loopt.</p>
                                            </div>
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                <h2 className="text-xl font-semibold ">Interactie:</h2>
                                                <p className="text-sm mt-1">Daarnaast heb ik interactie toegevoegd. Elke NPC heeft zijn eigen tekst die zichtbaar wordt als je dichtbij genoeg bent en op Z klikt op je toetsenbord. Dit was nog best een uitdaging omdat Canvas waarin de game wordt gerenderd het niet zo leuk vindt als je teksten in beeld en weer uit beeld laat gaan. Ik heb het opgelost door een afbeelding te maken die naar de juiste tekst scrollt als je met een NPC praat. Als je niet met iemand praat is deze tekst onzichtbaar tot je hem weer activeert.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div id="SEO" className="common-padding !px-0 flex flex-row justify-between items-start h-100%">
                                <div id="" className="max-w-[15%] sticky top-2">
                                    <div className="relative md:rotate-0 md:translate-y-0 -rotate-90 sm:translate-y-24 translate-y-20">
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold absolute opacity-0 z-10 text_light">Details</h2>
                                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-500 absolute text_dark">Details</h2>
                                    </div>
                                </div>
                                <div  className="flex flex-col md:max-w-[80%] max-w-[90%]">
                                    <div className="mt-4">
                                        <img src={GAMEWINIMG} name="GAMEWINIMG" onClick={searchStart} alt="PF image" className="rounded-2xl i_fade cursor-pointer"/>
                                        <div className="flex md:flex-row flex-col gap-3 mt-2">
                                            <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Win/Verlies: </h2>
                                                    <p className="text-sm ">Natuurlijk kan je de game winnen en ook verliezen. Als je alle vijanden weet te verslaan win je. Lukt dat niet en ga je zelf dood dan ben je af en moet je opnieuw beginnen.</p>
                                                </div>
                                                <div className="flex flex-col flex-1 t_slide_up">
                                                    <h2 className="text-xl font-semibold">Geluid:</h2>
                                                    <p className="text-sm ">Als laatst heb ik geluid toegevoegd om de game af te maken. Er speelt een muziekje als je de game opstart en verschillende geluidseffecten spelen af wanneer je in de game bepaalde acties uitvoert.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="px-0 md:px-28 flex flex-row justify-start items-start h-100% gap-16 t_slide">
                                    <div className="flex-1 flex text-sm">
                                        <p className="md:text-4xl text-xl font-bold md:leading-[3rem] italic leading-[1.6rem]">&ldquo;Dus zo maak je een game die speelbaar is in de browser&ldquo;</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 mt-2 md:px-28">
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Dit was een erg leuk project om te maken. Het programmeren van de game vraagt een heel andere manier van programmeren doordat je veel bezig bent met het uitvogelen hoe de browser jouw acties interpreteert, en deze vertaald naar het scherm.</p>
                                    </div>
                                    <div className="flex flex-col flex-1 t_slide_up">
                                        <p className="text-sm ">Qua eindproduct is het natuurlijk geen volledige game, maar dit als losstaand level is wel een complete gameplay ervaring. Kwalitatief zit het dan ook erg goed in elkaar.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
        </section>
      )
    }

export default JavascriptGameComponent