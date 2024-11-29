import { useContext } from "react"
import AppleComponent from "../Components/AppleComponent"
import Footer from "../Components/Footer"
import { Context } from "../context/Context"

const Apple = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    return (
        <main style={{display: loadedProjects ? 'block' : 'none'}}>
            <AppleComponent/>
            <Footer/>
        </main>
      )
    }

export default Apple