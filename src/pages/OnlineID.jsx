import { useContext } from "react"
import Footer from "../Components/Footer"
import OnlineIDComponent from "../Components/OnlineIDComponent"
import { Context } from "../context/Context"

const OnlineID = () => {
  const {loadedProjects, setLoadedProjects} = useContext(Context)
  return (
    <main style={{display: loadedProjects ? 'block' : 'none'}}>
        <OnlineIDComponent/>
        <Footer/>
    </main>
  )
}

export default OnlineID