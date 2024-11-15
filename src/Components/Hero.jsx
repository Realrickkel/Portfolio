import { CSSIMG, GSAPIMG, HTMLIMG, JSIMG, REACTIMG } from "../utils"

const Hero = () => {
  return (
    <section id='Hero' className="flex w-screen items-center overflow-hidden h-screen relative">
        <div className="screen-max-width flex p-10"> 
            <div className="flex flex-col m-auto">
                <div className="flex flex-col items-center">
                  <p className="text-gray-500">front-end developer</p>
                  <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl font-bold">Rick van Laarhoven</h1>
                </div>
                <div className="flex mt-4 items-center">
                  <img src={CSSIMG} alt="CSS image" className="expert-class"/>
                  <img src={HTMLIMG} alt="HTML image" className="expert-class"/>
                  <img src={JSIMG} alt="Javascript image" className="expert-class"/>
                  <img src={REACTIMG} alt="React image" className="expert-class"/>
                  <img src={GSAPIMG} alt="GSAP image" className="expert-class"/>
                </div>
            </div>
        </div>
        
        <div className="absolute -z-10 w-screen h-screen">
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Hero