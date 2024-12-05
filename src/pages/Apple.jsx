import { useContext } from "react"
import AppleComponent from "../Components/AppleComponent"
import Footer from "../Components/Footer"
import { Context } from "../context/Context"

const Apple = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    return (

        <main>
            <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedProjects ? 'none' : 'block'}}>
                <div className='loader'>
                    <i className="fa-solid fa-gear"></i>
                    <p className="text-xs text-gray font-semibold">Loading...</p>
                  </div>
            </div>
            <AppleComponent/>
            <Footer/>
        </main>
      )
    }

export default Apple