import { useContext } from "react"
import Footer from "../Components/Footer"
import JavaScriptGameComponent from "../Components/JavascriptGameComponent"
import { Context } from "../context/Context"

const JavscriptGame = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    return (
        <main style={{display: loadedProjects ? 'block' : 'none'}}>
            <JavaScriptGameComponent/>
            <Footer/>
        </main>
      )
    }

export default JavscriptGame