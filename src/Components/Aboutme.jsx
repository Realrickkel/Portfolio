import { PFIMG } from "../utils"

const Aboutme = () => {
  return (
    <section id='About' className="flex h-screen items-center">
        <div className="screen-max-width">
          <div className="flex-col">
          <div className="flex flex-row justify-center items-center bg-red-400 gap-5">
              <div className="max-w-[30%]">
                <img src={PFIMG} alt="PF image"/>
              </div>
              <div className="max-w-[30%]">
                <img src={PFIMG} alt="PF image"/>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-6 items-center bg-red-400 gap-5">
              <div className="max-w-[30%]">
                <h1 className="text-xl font-bold">Wie ben ik?</h1>
                <p>Als je hier hebt geklikt wil je vast weten wat voor persoon ik ben buiten het werk om. </p>
              </div>
              <div className="max-w-[30%]">
                <h2 className="text-xl font-bold">Waar kan je me 's nachts voor wakker maken?</h2>
                <ul>
                  <li>- Broodje carpaccio</li>
                  <li>- Rondje in de Python</li>
                  <li>- Nieuw album van TripleS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Aboutme