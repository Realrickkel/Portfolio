import { Link, useNavigate } from "react-router-dom";
import { navLists } from "../Constants";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

const Navbar = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    const {loadedAbout, setLoadedAbout} = useContext(Context)
    const {classChangeProject,setClassChangeProject} = useContext(Context)
    const {classChangeExperience,setClassChangeExperience} = useContext(Context)
    const {classChangeHero,setClassChangeHero} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState(false)
    const [listen, setListen] = useState (false)
    let [windowWidth, setWindowWidth] = useState()
    let [windowWidthChange, setWindowWidthChange] = useState()
    
    
    new ResizeObserver(() => {
        setWindowWidth(document.body.clientWidth)
      }).observe(document.body)
    
    useEffect(() => {
        var navEl = document.getElementById('menuLinks')
        if(windowWidth > 1024){
            navEl.classList.remove("closed")
        }
        setWindowWidthChange(document.body.clientWidth)
    },[])

    useEffect(() => {
        var navEl = document.getElementById('menuLinks')
        var windowWidthMax = windowWidth +1
        var windowWidthMin = windowWidth -1
        if(windowWidth >= 1024){
            navEl.classList.remove("closed")
            setMenuOpen(true)
        }else if(windowWidth <= 1024 ){
            navEl.classList.add("closed")
            setMenuOpen(false)
        }else{
            if(windowWidthMax < windowWidthChange || windowWidthMin > windowWidthChange){
                navEl.classList.add("closed")
                setMenuOpen(false)
                setWindowWidthChange(document.body.clientWidth)
            }
        }
    },[windowWidth])

    useEffect(() => {
        var element = document.getElementById('ProjectsNav')
        if(loadedProjects == true || classChangeProject == true){
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        }
    },[loadedProjects, classChangeProject])

    useEffect(() => {
        var element = document.getElementById('HomeNav')
        if(classChangeHero == true){
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        }
    },[classChangeHero])

    useEffect(() => {
        var element = document.getElementById('ExperienceNav')
        if(classChangeExperience == true){
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        }
    },[classChangeExperience])

    useEffect(() => {
        var element = document.getElementById('AboutNav')
        if(loadedAbout == true){
            element.classList.add("active");
        }
        else{
            element.classList.remove("active");
        }
    },[loadedAbout])

    useEffect(() => {
        var navEl = document.getElementById('menuLinks')
        if(menuOpen === true){
            navEl.classList.remove("closed")
            setListen(true)
        } else {
            if(!mediaQueryNav.matches){
            navEl.classList.add("closed")
            setListen(false)
            } else { 
            navEl.classList.remove("closed")
            }
        }

    },[menuOpen])

    useEffect(() => {
         window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick);
        };
    },[listen])

    const handleClick = (event) => {
        if(listen == true) {
        setMenuOpen(false)
        }
      };
    
    var mediaQueryNav = window.matchMedia("(min-width: 1024px)");
    


    const navigate = useNavigate();
    return (
        <>
            <Nav className="fixed top-0 w-screen lg:w-fit lg:h-screen z-10 flex ">
                <NavMenu className="mt-auto mb-auto navigationId">
                    <div onClick={() => setMenuOpen(!menuOpen)} className="absolute top-4 right-4 flex lg:hidden flex-row justify-center items-center py-1 px-2 glass-view-nav cursor-pointer">
                        <div className="flex flex-row">
                            <p className="text-sm whitespace-nowrap ">Menu</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" mt-1 size-3.5">
                            <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                    <div id="menuLinks" className="flex mt-14 lg:mt-0 justify-center w-screen lg:w-fit h-max px-4 lg:px-0 closed">
                        <div className="flex glass-view-nav px-3 flex-col w-full h-max">
                            <Link id="HomeNav" className='px-3 my-3 lg:my-2 lg:py-1 p-5 text-sm cursor-pointer glass-view-nav-item lg:text-gray flex flex-col hover:text-neutral-900 hover:underline navstuff' onClick={() => {window.scrollTo(0, 0)}} to="/">
                                Home
                            </Link>

                            <div className="">
                            {navLists.map((nav) => (
                            <a key={nav.name} id={nav.targetName} className='px-3 mb-3 lg:mb-2 lg:py-1 p-5 text-sm cursor-pointer glass-view-nav-item lg:text-gray flex flex-col hover:text-neutral-900 hover:underline navstuff' href={nav.link} onClick={() => {
                                navigate("/", { state: { targetId: nav.targetid } });}}>
                                {nav.name}
                            </a>
                            ))}
                            </div>

                            <Link id="AboutNav" className='px-3 mb-3 lg:mb-2 lg:py-1 p-5 text-sm cursor-pointer glass-view-nav-item lg:text-gray flex flex-col hover:text-neutral-900 hover:underline navstuff' to="/about">
                                Over mij
                            </Link>
                        </div>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;