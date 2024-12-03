import { useContext } from "react"
import Footer from "../Components/Footer"
import OnlineIDComponent from "../Components/OnlineIDComponent"
import { Context } from "../context/Context"

const OnlineID = () => {
  const {loadedProjects, setLoadedProjects} = useContext(Context)
  return (
    <main>
      <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedProjects ? 'none' : 'block'}}></div>
        <OnlineIDComponent/>
        <Footer/>
    </main>
  )
}

export default OnlineID