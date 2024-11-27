import { useLocation } from "react-router-dom";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/Context";
import Footer from "../Components/Footer";
import gsap from "gsap";

const Home = () => {
  const {loaded, setLoaded} = useContext(Context)
  const {loadedProjects, setLoadedProjects} = useContext(Context)
  const [el, setEL] = useState()

  const { state } = useLocation();
  const { targetId } = state || {};

  // receive info from navbar which button is clicked that is saved in a const
  useEffect(() => {
    const bl = document.getElementById(targetId);
    setEL(bl)
    setLoadedProjects(false)
    //reload page once to reset all scrolltriggers
    /*if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
      }*/

  window.scrollTo({
      top: 0,
      left: 0,
      //Check of dit ook in andere browsers werkt
      behavior: "instant",
    })

    //hier iets mee doen??
    gsap.globalTimeline.clear()
    
  },[])

  // when the page loads the el Const with the information which button is clicked gets loaded and scrolled towards otherwise do nothing. This is used this way because of we just scroll towards the section without loading the page first the images will load to slow and we won't go to the section we want to see fully
  useEffect(() => {
    console.log(el)
    if(loaded == true){
      if (el) {
        el.scrollIntoView({behavior: "instant", block: "start"});
      }
    } else {
      return
    }
  },[loaded])

    return (
      <main>
        <div style={{display: loaded ? 'none' : 'block'}}>
          
        </div>
        <div style={{display: loaded ? 'block' : 'none'}}>
          <Hero/>
          <Projects/>
          <Experience/>
          <Footer/>
        </div>
      </main>
  )
}

export default Home