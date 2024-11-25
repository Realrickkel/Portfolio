import { PFIMG } from "../utils"

const Aboutme = () => {
  return (
    <section id='About' className="flex min-h-screen justify-center items-center">
      <div className="max-w-[90vw] md:max-w-[76vw]">
          <div className="screen-max-width">
              <div className="common-padding !px-0 flex lg:flex-row flex-col lg:max-w-[70vw] xl:max-w-[55vw] 2xl:max-w-[50vw] m-auto gap-10 overflow-hidden h-full items-center">
                <div className="lg:max-w-[45vw] xl:max-w-[35vw] max-w-[90vw] mx-auto flex flex-col gap-5">
                  <h1 className="text-3xl font-bold">Wie ben ik?</h1>
                  <p className="mt-4">Het is bijna onmogelijk om alles op te noemen waar ik in geïnteresseerd ben, toch ga ik mijn best doen. Mijn grootste talent is superscherp analyseren hoe Formule 1-coureurs uit de bocht vliegen… Zelf kan ik dat natuurlijk ook… maar dan wel in een virtuele race.</p>
                  
                  <p>Naast professioneel “sportkijker,” ben ik ook behoorlijk geïnteresseerd in kunstmatige intelligentie. En dan bedoel ik niet de AI die me ooit een keer met 4-0 versloeg in schaken. Maar van die slimme algoritmes die data omtoveren tot inzichten, en daar ben ik eigenlijk net zo goed.</p> 
                  
                  <p>Dus, of het nu gaat om het ontdekken van het geheim achter een slimme AI, juichen voor een recordronde in de F1, of een marathon gamen zonder afleiding, ben ik van de partij.</p>
                  
                </div>
                <div className="flex flex-col mx-auto">
                  <img src={PFIMG} alt="PF image" className="rounded-2xl flex flex-1 max-h-[30vh]"/>
                  <h2 className="text-xl font-bold mt-3">Waar kan je me &apos;s nachts voor wakker maken?</h2>
                    <ul className="mt-2">
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