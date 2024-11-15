import { PFIMG } from "../utils"

const Aboutme = () => {
  return (
    <section id='About' className="flex h-screen items-center">
        <div className="screen-max-width">
          <div className="flex-col">
            <div className="flex flex-row justify-center mt-6 items-center gap-10">
              <div className="max-w-[31%]">
                <h1 className="text-3xl font-bold">Wie ben ik?</h1>
                <p className="mt-4">Het is bijna onmogelijk om alles op te noemen waar ik in geïnteresseerd ben, toch ga ik mijn best doen. Mijn grootste talent? Superscherp analyseren hoe Formule 1-coureurs uit de bocht vliegen… Zelf kan ik dat natuurlijk ook… in de wereld van de games. Dus als je me niet over het circuit hoort speculeren, zit ik waarschijnlijk midden in een spannende (virtuele) race.</p>
                
                <p>Naast een solide carrièreswitch richting professioneel “sportkijker,” ben ik ook behoorlijk geïnteresseerd in kunstmatige intelligentie. En nee, ik bedoel niet de AI die me ooit een keer met 4-0 versloeg in schaak. Ik werk echt met AI, van die slimme algoritmes die data omtoveren tot inzichten, en daar ben ik eigenlijk net zo goed in als in het vinden van een perfecte livestream van een voetbalwedstrijd.</p> 
                
                <p>Dus, of het nu gaat om het ontdekken van het geheim achter een slimme AI, juichen voor een recordronde in de F1, of een marathon gamen zonder afleiding, ik ben van de partij. En ja, ik beschouw Netflix-marathons als een sport, want dat is een endurance-test waar ik ook heus goed in ben. </p>
                
              </div>
              <div className="max-w-[31%]">
              <img src={PFIMG} alt="PF image" className="rounded-2xl"/>
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