import { useContext } from "react"
import Footer from "../Components/Footer"
import JavaScriptGameComponent from "../Components/JavascriptGameComponent"
import { Context } from "../context/Context"

const JavscriptGame = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    return (
        <main>
            <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedProjects ? 'none' : 'block'}}></div>
            <JavaScriptGameComponent/>
            <Footer/>
        </main>
      )
    }

export default JavscriptGame