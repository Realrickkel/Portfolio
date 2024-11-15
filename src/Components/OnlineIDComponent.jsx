import { HYOIMG, JOYIMG } from "../utils"

const OnlineIDComponent = () => {
    return (
        <section id='OnlineIDID' className="">
            <div>
                <h2 className="text-lg title-max-width m-4 border-t-2 border-solid border-l-neutral-900">//Online ID</h2>
                    <div className="screen-max-width flex flex-col p-10">
                        <div>
                            <h1 className="text-4xl font-bold text-center">TITEL EN ARTIEST!</h1>
                        </div>
                        <div className="common-padding flex flex-row
                        justify-between">
                            <div className="flex flex-col max-w-[30%]">
                                <h2 className="font-bold">Hello World!</h2>
                                <p>ONGELOOFLIJK GOEDE TEKSTEN</p>
                            </div>
                            <div  className="flex flex-col max-w-[60%]">
                            <img src={HYOIMG} alt="PF image" className="rounded-2xl"/>
                                <h2 className="text-xl font-bold mt-3">Waar kan je me 's nachts voor wakker maken?</h2>
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

export default OnlineIDComponent