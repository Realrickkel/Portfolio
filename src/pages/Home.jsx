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
  const {classChangeProject,setClassChangeProject} = useContext(Context)
  const {classChangeExperience,setClassChangeExperience} = useContext(Context)
  const {scroll, setScroll} = useContext(Context)
  const [loadedHomePage, setLoadedHomePage] = useState(false)
  const [scrollt, setScrollt] = useState(false)
  var ql = localStorage.getItem("someVarKey");

  const { state } = useLocation();
  const { targetId } = state || {};

  // receive info from navbar which button is clicked that is saved in a const
  useEffect(() => {
    setLoadedProjects(false)
    setLoadedAbout(false)
    setClassChangeExperience(false)
    setClassChangeProject(false)
    //reload page once to reset all scrolltriggers
    setLoadedHomePage(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
  })
  },[])

  useEffect(() => {
    var cl
    const bl = document.getElementById(targetId);
    console.log(bl)
    if(bl){
      cl = bl.id
      localStorage.setItem("someVarKey", cl);
    } else {
      localStorage.setItem("someVarKey", 'Hero');
    }
    setScrollt(true)
  }, [scroll])

  // when the page loads the ql Const with the information which button is clicked gets loaded and scrolled towards otherwise do nothing. This is used this way because of we just scroll towards the section without loading the page first the images will load to slow and we won't go to the section we want to see fully
  useEffect(() => {
        var el = document.getElementById(ql)
        if(scrollt === true && loadedHomePage === false){
          console.log(el)
          //om een of andere reden doet scrollintoview het alleen als je een delay toevoegt, vraag me niet waarom https://stackoverflow.com/questions/71181018/scrollintoview-doesnt-scroll-anywhere
          setTimeout(function () {
          el.scrollIntoView({behavior: "instant", block: "start"}) 
          }, 100);
          setScrollt(false)
          setTimeout(function () {
          setLoadedHomePage(true)
          }, 100);
          setScroll(false)
        } else if(scrollt === true && loadedHomePage === true) {
          console.log(el)
          //om een of andere reden doet scrollintoview het alleen als je een delay toevoegt, vraag me niet waarom https://stackoverflow.com/questions/71181018/scrollintoview-doesnt-scroll-anywhere
          setTimeout(function () {
          el.scrollIntoView({behavior: "smooth", block: "start"}) 
          }, 100);
          setScrollt(false)
          setScroll(false)
        }
  },[loaded,scrollt,scroll])


    return (
      <main>
        <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedHomePage ? 'none' : 'block'}}>
          
        </div>
        <div>
          <Hero/>
          <Projects/>
          <Experience/>
          <Footer/>
        </div>
      </main>
  )
}

export default Home