import { CSSIMG, HTMLIMG, JSIMG, REACTIMG } from "../utils"

const Hero = () => {
  return (
    <section id='Hero' className="flex w-screen items-center overflow-hidden h-screen common-padding">
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero