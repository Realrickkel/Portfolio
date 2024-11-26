import { useContext } from "react"
import Footer from "../Components/Footer"
import RIVLMediaComponent from "../Components/RIVLMediaComponent"
import { Context } from "../context/Context"

const RIVLMedia = () => {
  const {loadedProjects, setLoadedProjects} = useContext(Context)


  return (
    <main style={{display: loadedProjects ? 'block' : 'none'}}>
        <RIVLMediaComponent/>
        <Footer/>
    </main>
  )
}

export default RIVLMedia