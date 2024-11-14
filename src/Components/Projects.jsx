import { APPLEMOCKUPIMG, BORAIMG, CSSIMG, FILMREVIEWMOCKUPIMG, GSAPIMG, HTMLIMG, HYOIMG, ITZYIMG, JAVASCRIPTMOCKUPIMG, JOYIMG, JSIMG, ONLINEIDMOCKUPIMG, PFIMG, REACTIMG, RIVLMEDIAMOCKUPIMG, WORDIMG, YOOAHIMG } from "../utils"

const Projects = () => {
  return (
    <section id="Experience" className="text-gray">
      <div>
        <h2 className="text-lg title-max-width m-4 border-t-2 border-solid border-l-neutral-900">// Projects</h2>
          <div className="screen-max-width min-h-fit">
          <div className="experience-class px-4 relative">
              <div className="experience-img">
                <img src={RIVLMEDIAMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">RIVL Media Website</h3>
                    <h4 className="text-xs">Het ontwerpen en maken van een website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={APPLEMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Case Study: Apple Website</h3>
                    <h4 className="text-xs">Het begrijpen en nabouwen van de Apple website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={ONLINEIDMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Onderhoud Online-ID</h3>
                    <h4 className="text-xs">Het onderhouden en uitbreiden van de website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={WORDIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={JAVASCRIPTMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Javascript Game</h3>
                    <h4 className="text-xs">Kan je een game maken in Javascript?</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={BORAIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">WLOM Website</h3>
                    <h4 className="text-xs">Ontwerpen en uitrollen WLOM</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2023</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={FILMREVIEWMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700 ">Film Reviewer</h3>
                    <h4 className="text-xs">De online film reviewer</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={RIVLMEDIAMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">RIVL Media Website</h3>
                    <h4 className="text-xs">Het ontwerpen en maken van een website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={APPLEMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Case Study: Apple Website</h3>
                    <h4 className="text-xs">Het begrijpen en nabouwen van de Apple website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                      <img src={GSAPIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={ONLINEIDMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Onderhoud Online-ID</h3>
                    <h4 className="text-xs">Het onderhouden en uitbreiden van de website</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={WORDIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={JAVASCRIPTMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">Javascript Game</h3>
                    <h4 className="text-xs">Kan je een game maken in Javascript?</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={JOYIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700">WLOM Website</h3>
                    <h4 className="text-xs">Ontwerpen en uitrollen WLOM</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="CSS image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2023</h3>
                    <h5 className="text-xs">Professional</h5>
                  </div>
                </div>
              </div>
              <div className="experience-img">
                <img src={FILMREVIEWMOCKUPIMG} alt="PF image" className="img-exp"/>
                <div className="flex flex-row justify-between mt-1">
                  <div className="max-w-[70%]">
                    <h3 className="text-base font-bold text-neutral-700 ">Film Reviewer</h3>
                    <h4 className="text-xs">De online film reviewer</h4>
                    <div className="flex mt-1 items-center">
                      <img src={HTMLIMG} alt="HTML image" className="tech-used !ml-0"/>
                      <img src={CSSIMG} alt="CSS image" className="tech-used"/>
                      <img src={JSIMG} alt="Javascript image" className="tech-used"/>
                      <img src={REACTIMG} alt="React image" className="tech-used"/>
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-sm font-semibold">2024</h3>
                    <h5 className="text-xs">Personal</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects