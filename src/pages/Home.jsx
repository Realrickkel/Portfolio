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
  const {loadedAbout, setLoadedAbout} = useContext(Context)
  const [hashTrue, setHashTrue] = useState(false)
  const [scroll, setScroll] = useState(false)
  //const [el, setEL] = useState()
  var el = useRef()
  var ql = localStorage.getItem("someVarKey");

  const { state } = useLocation();
  const { targetId } = state || {};

  // receive info from navbar which button is clicked that is saved in a const
  useEffect(() => {
    var cl
    setLoadedProjects(false)
    setLoadedAbout(false);
    //reload page once to reset all scrolltriggers
    if(!window.location.hash) {
      const bl = document.getElementById(targetId);
      setHashTrue(false)
      //setEL(bl)
      if(bl){
        cl = bl.id
        localStorage.setItem("someVarKey", cl);
      }
      window.location = window.location + '#loaded';
      window.location.reload();
      } else {
        setHashTrue(true)
      }
    
  },[])

  // when the page loads the el Const with the information which button is clicked gets loaded and scrolled towards otherwise do nothing. This is used this way because of we just scroll towards the section without loading the page first the images will load to slow and we won't go to the section we want to see fully
  useEffect(() => {
    if(hashTrue == true) {
      if (ql) {
        var el = document.getElementById(ql)
        //var el = document.getElementById('Projects')
        if(loaded == true){
          //om een of andere reden doet scrollintoview het alleen als je een delay toevoegt, vraag me niet waarom https://stackoverflow.com/questions/71181018/scrollintoview-doesnt-scroll-anywhere
          setTimeout(function () {
          el.scrollIntoView({behavior: "instant", block: "start"}) 
          }, 100);

          localStorage.setItem("someVarKey", 'Hero');
          
        }
    } else {
      return
    }
  }
  },[loaded,scroll])

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