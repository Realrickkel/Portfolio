import { useContext } from "react"
import Footer from "../Components/Footer.jsx"
import ReviewComponent from "../Components/ReviewComponent.jsx"
import { Context } from "../context/Context.jsx"

const Review = () => {
  
  const {loadedProjects, setLoadedProjects} = useContext(Context)

    return (
        <main style={{display: loadedProjects ? 'block' : 'none'}}>
          <ReviewComponent/>
          <Footer/>
        </main>
      )
    }

export default Review