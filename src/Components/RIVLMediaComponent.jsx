/* eslint-disable react/jsx-no-comment-textnodes */
import { JOYIMG } from "../utils"

const RIVLMediaComponent = () => {
    return (
        <section id='RIVLMediaID' className="">
            <div>
                <h2 className="text-lg title-max-width m-4 border-t-2 border-solid border-l-neutral-900">//RIVL media</h2>
                    <div className="screen-max-width flex flex-col p-10">
                        <div>
                            <h1 className="text-4xl font-bold text-center">TITEL EN ARTIEST!</h1>
                        </div>
                        <div className="common-padding !px-0 flex flex-row
                        justify-between">
                            <div className="flex flex-col max-w-[30%]">
                                <h2 className="text-2xl font-bold">Aanpak van de website van RIVL Media: Design, UX/UI en SEO verbeteringen</h2>
                                <p>De website van RIVL Media heeft onlangs een uitgebreide herziening ondergaan met als doel een modernere uitstraling, betere gebruikservaring en verbeterde zichtbaarheid online. Hieronder lichten we de belangrijkste verbeterpunten toe:</p>
                                <h3>1. Verfrissend en Modern Design</h3>
                                <p>Het ontwerp van de website is volledig vernieuwd om beter aan te sluiten bij de kernwaarden van RIVL Media en de behoeften van de doelgroep. Dit betekent:</p>
                                <ul>
                                    <li>
                                    •	Een strakke, professionele lay-out die gebruik maakt van moderne designtrends.
                                    </li>
                                    <li>
                                    •	Verbeterd kleurgebruik en typografie om de visuele aantrekkingskracht te vergroten.
                                    </li>
                                    <li>
                                    •	Consistente branding om de herkenbaarheid en betrouwbaarheid van RIVL Media te versterken.
                                    </li>
                                </ul>
                              
                                <h3>2. Betere User Experience (UX) en User Interface (UI)</h3>
                                <p>Een website moet meer doen dan er goed uitzien – het moet ook intuïtief en gebruiksvriendelijk zijn. Daarom hebben we specifieke aandacht besteed aan:</p>
                                <ul>
                                   <li>
                                   •	Navigatie: Het menu is opnieuw gestructureerd zodat bezoekers sneller de informatie vinden die ze zoeken.
                                    </li>
                                    <li>
                                    •	Snelheid: Optimalisaties zorgen voor een snellere laadtijd, waardoor gebruikers niet afhaken. 
                                    </li>
                                    <li>
                                    •	Responsiviteit: De website is geoptimaliseerd voor alle apparaten, van desktops tot smartphones, om overal een naadloze ervaring te bieden.
                                    </li>
                                    <li>
                                    •	Interactie: Heldere call-to-actions en interactieve elementen maken het voor gebruikers eenvoudiger om contact op te nemen of informatie te vergaren.
                                    </li>
                                </ul>

                                <h3>3. Verbeterde Zoekmachineoptimalisatie (SEO)</h3>
                                <p>Om de zichtbaarheid van RIVL Media te vergroten, zijn diverse SEO-technieken toegepast:</p>
                                <ul>
                                    <li>
                                    •	Technische SEO: Verbeteringen in de website-structuur, URL's en laadsnelheid.
                                    </li>
                                    <li>
                                    •	Contentoptimalisatie: Gebruik van relevante zoekwoorden en het toevoegen van hoogwaardige content die inspeelt op de behoeften van de doelgroep.
                                    </li>
                                    <li>
                                    •	Metadata: Optimalisatie van titels, beschrijvingen en alt-teksten voor afbeeldingen om beter te scoren in zoekmachines.
                                    </li>
                                    <li>
                                    •	Linkbuilding: Het ontwikkelen van een strategie om de autoriteit van de website te verhogen.
                                    </li>

                                </ul>

                                <p>Met deze verbeteringen is de website van RIVL Media niet alleen een stuk gebruiksvriendelijker geworden, maar ook een krachtig instrument om nieuwe klanten aan te trekken en bestaande relaties te versterken. De nieuwe site weerspiegelt nu de professionele en innovatieve aanpak die RIVL Media kenmerkt.</p>
                            </div>
                            <div  className="flex flex-col max-w-[60%]">
                            <img src={JOYIMG} alt="PF image" className="rounded-2xl"/>
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

export default RIVLMediaComponent