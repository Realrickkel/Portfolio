import { useContext } from "react"
import Footer from "../Components/Footer.jsx"
import ReviewComponent from "../Components/ReviewComponent.jsx"
import { Context } from "../context/Context.jsx"

const Review = () => {
  
  const {loadedProjects, setLoadedProjects} = useContext(Context)

    return (
        <main>
          <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedProjects ? 'none' : 'block'}}>
                  <div className='loader'>
                    <i className="fa-solid fa-gear"></i>
                    <p className="text-xs text-gray font-semibold">Loading...</p>
                  </div>
          </div>
          <ReviewComponent/>
          <Footer/>
        </main>
      )
    }

export default Review