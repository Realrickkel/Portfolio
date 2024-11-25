import { useLocation } from "react-router-dom";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/Context";

const Home = () => {
  const {loaded, setLoaded} = useContext(Context)
  const [el, setEL] = useState()

  const { state } = useLocation();
  const { targetId } = state || {};

  // receive info from navbar which button is clicked that is saved in a const
  useEffect(() => {
    const bl = document.getElementById(targetId);
    setEL(bl)
  },[])

  // when the page loads the el Const with the information which button is clicked gets loaded and scrolled towards otherwise do nothing. This is used this way because of we just scroll towards the section without loading the page first the images will load to slow and we won't go to the section we want to see fully
  useEffect(() => {
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
        </div>
      </main>
  )
}

export default Home