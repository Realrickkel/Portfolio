import { useContext } from "react";
import Aboutme from "../Components/Aboutme"
import Footer from "../Components/Footer"
import { Context } from "../context/Context";

const About = () => {
  const {loadedAbout, setLoadedAbout} = useContext(Context)
    return (
        <main>
        <div className="z-10 w-screen h-screen bg-white fixed top-0 left-0" style={{display: loadedAbout ? 'none' : 'block'}}></div>
        <Aboutme/>
        <Footer/>
        </main>
      );
    };

export default About;