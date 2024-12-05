import { useContext } from "react"
import Footer from "../Components/Footer"
import OnlineIDComponent from "../Components/OnlineIDComponent"
import { Context } from "../context/Context"

const OnlineID = () => {
  const {loadedProjects, setLoadedProjects} = useContext(Context)
  return (
    <main>
      <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedProjects ? 'none' : 'block'}}>
                  <div className='loader'>
                    <i className="fa-solid fa-gear"></i>
                    <p className="text-xs text-gray font-semibold">Loading...</p>
                  </div>
      </div>
        <OnlineIDComponent/>
        <Footer/>
    </main>
  )
}

export default OnlineID