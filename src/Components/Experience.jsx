/* eslint-disable react/jsx-no-comment-textnodes */
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useState } from "react";
import { animateHoverWithGsap, animateUnHoverWithGsap } from "../utils/Animations";

const Experience = () => {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)

  useGSAP(() => {

    /*const expBoxes = gsap.utils.toArray(".experience-div");
    expBoxes.forEach((expBox) => {
    if(hover === true) {
      gsap.to(expBox, {
        color: '#FF9A00',
        duration: 0.2,
        boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)',
      })
    } else {
      gsap.to(expBox, {
        color: '#000',
        duration: 0.2,
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
      })
    }
  })*/
  if(hover === true){
    animateHoverWithGsap('#exp1', {})
    
  } else {
    animateUnHoverWithGsap('#exp1', {})
  }

  if(hover2 === true){
    animateHoverWithGsap('#exp2', {})
    
  } else {
    animateUnHoverWithGsap('#exp2', {})
  }

  if(hover3 === true){
    animateHoverWithGsap('#exp3', {})
    
  } else {
    animateUnHoverWithGsap('#exp3', {})
  }

  },[hover, hover2, hover3])
  
  
  return (

    <section id="Experience" className="text-gray flex flex-col justify-center items-center common-padding">
      <div className="w-[90vw] md:w-[76vw]">
          <h2 className="flex justify-between title-max-width m-4 border-t-2 p-2 px-4 lg:px-2">// Experience</h2>
        </div>

      <div className="lg:max-w-[70vw] xl:max-w-[76vw]">
        <div className="screen-max-width min-h-fit">
          <div className="relative">
            <div className="md:common-padding flex flex-col">
              <div id="exp1" className="experience-div" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="">
                  <p className="text-sm py-1 text-gray-100">2021-HEDEN</p>
                </div>
                <div className="experience-block">
                  <h3 className="font-semibold text-xl">Webdeveloper</h3>
                  <h4 className="font-semibold text-base text-black">Freelance</h4>
                  <p className="text-black">Met ervaring in front-end en back-end gebruik ik technieken zoals HTML, CSS, JavaScript, en frameworks zoals React of WordPress. Ik werk nauw samen met klanten om hun wensen en doelen te vertalen naar een functioneel en esthetisch sterk eindproduct. Mijn werkwijze kenmerkt zich door flexibiliteit, innovatie en oog voor detail, waardoor ik projecten oplever die zowel de gebruiker als de opdrachtgever tevreden stellen.</p>
                  <div className="text-sm flex flex-row flex-wrap gap-2 mt-2 text-black">
                    <p className="experience-tags">HTML</p>
                    <p className="experience-tags">CSS</p>
                    <p className="experience-tags">Javascript</p>
                    <p className="experience-tags">React</p>
                    <p className="experience-tags">GSAP</p>
                    <p className="experience-tags">Wordpress</p>
                    <p className="experience-tags">PHP</p>
                    <p className="experience-tags">Python</p>
                  </div>
                </div>
              </div>
              <div id="exp2" className="experience-div" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                <div className="">
                  <p className="text-sm py-1 text-gray-100">2023 - 2024</p>
                </div>
                <div className="experience-block">
                  <h3 className="font-semibold text-xl">Websites onderhouden</h3>
                  <h4 className="font-semibold text-base text-black">Online ID</h4>
                  <p className="text-black">Bij Online ID beheerde en onderhoudde ik websites om optimale prestaties, veiligheid en gebruiksvriendelijkheid te garanderen. Ik was verantwoordelijk voor contentupdates, technische implementaties, bugfixes en het naleven van webstandaarden en SEO-richtlijnen. Door proactieve verbeteringen en een nauwe samenwerken met andere teamleaden droeg ik bij aan een stabiele online aanwezigheid en een betere gebruikerservaring.</p>
                  <div className="text-sm flex flex-row flex-wrap gap-2 mt-2 text-black">
                    <p className="experience-tags">HTML</p>
                    <p className="experience-tags">CSS</p>
                    <p className="experience-tags">Javascript</p>
                    <p className="experience-tags">Wordpress</p>

                  </div>
                </div>
              </div>
              <div id="exp3" className="experience-div" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                <div className="">
                  <p className="text-sm py-1 text-gray-100">2019 - 2021</p>
                </div>
                <div className="experience-block">
                  <h3 className="font-semibold text-xl">CMS en E-learnings Ontwikkelen/Onderhouden</h3>
                  <h4 className="font-semibold text-base text-black">Instructiefilm.nl</h4>
                  <p className="text-black">Bij Instructiefilm.nl ontwikkelde en beheerde ik CMS&apos;en en interactieve e-learnings met focus op maatwerk en gebruiksvriendelijkheid. Ik implementeerde nieuwe functies, loste technische problemen op en optimaliseerde modules. Daarnaast beheerde ik databases en verbeterde daarin workflows, wat bijdroeg aan een schaalbare en betrouwbare technische infrastructuur voor gebruikers.</p>
                  <div className="text-sm flex flex-row flex-wrap gap-2 mt-2 text-black">
                    <p className="experience-tags">HTML</p>
                    <p className="experience-tags">CSS</p>
                    <p className="experience-tags">Javascript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience