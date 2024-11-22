import { CSSIMG, GSAPIMG, HTMLIMG, JSIMG, REACTIMG, WORDIMG } from "../utils"

const Hero = () => {
  return (
    <section id='Hero' className="flex w-screen items-center justify-center overflow-hidden h-screen relative">
      
      <div className="flex overflow-hidden -z-10 w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center border-solid border-gray-950 border-2 rounded-2xl before:absolute xl:before:left-[80vw] xl:before:top-[70vh] xl:before:h-[60vh] xl:before:w-[35vw] xl:before:origin-[0%] before:left-[100vw] before:top-[5vh] before:h-[60vh] before:w-[80vw] before:origin-[0%] before:animate-blob-reverse before:bg-gradient-to-br before:from-[--color-b] before:via-[--color-d] before:to-[--color-b] before:rounded-full before:blur-[50px] before:brightness-125">
        <div className="flex w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center">
        <div className="noise"></div>
      </div>
      </div>

      <div className="flex overflow-hidden -z-10 w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center border-solid border-gray-950 border-2 rounded-2xl before:absolute xl:before:left-[80vw] xl:before:top-[45vh] xl:before:h-[50vh] xl:before:w-[21vw] xl:before:origin-[-30vw] lg:before:h-[40vh] lg:before:w-[28vw] before:left-[100vw] before:top-[5vh] before:h-[60vh] before:w-[80vw] before:origin-[-30vw] before:animate-blob before:animate-delay-1000 before:bg-gradient-to-br before:from-[--color-b] before:via-[--color-d] before:to-[--color-b] before:rounded-full before:blur-[50px] before:brightness-125">
        <div className="flex w-[90vw] md:w-[76vw] h-[85vh] absolute items-center justify-center">
        <div className="noise"></div>
      </div>
      </div>

      

        <div className="screen-max-width flex p-10"> 
            <div className="flex flex-col m-auto">
                <div className="flex flex-col items-center">
                  <p className="text-gray-500">front-end developer</p>
                  <h1 className="xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-bold">Rick van Laarhoven</h1>
                </div>
                <div className="flex md:mt-4 mt-1 items-center justify-center md:justify-start">
                  <img src={CSSIMG} alt="CSS image" className="expert-class"/>
                  <img src={HTMLIMG} alt="HTML image" className="expert-class"/>
                  <img src={JSIMG} alt="Javascript image" className="expert-class"/>
                  <img src={REACTIMG} alt="React image" className="expert-class"/>
                  <img src={GSAPIMG} alt="GSAP image" className="expert-class"/>
                  <img src={WORDIMG} alt="GSAP image" className="expert-class"/>
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