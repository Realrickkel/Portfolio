import { useNavigate } from "react-router-dom";
import { navLists } from "../Constants";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Navbar = () => {
    const {loadedProjects, setLoadedProjects} = useContext(Context)
    const {loadedAbout, setLoadedAbout} = useContext(Context)

    useEffect(() => {
        if(loadedProjects == true){
            var element = document.getElementById('ProjectsNav')
            element.classList.add("active");
        }
    },[loadedProjects])

    useEffect(() => {
        if(loadedAbout == true){
            var element = document.getElementById('AboutNav')
            element.classList.add("active");
        }
    },[loadedAbout])


    const navigate = useNavigate(); // From react-router v6
    return (
        <>
            <Nav className="fixed h-screen z-10 lg:flex hidden">
                <NavMenu className="mt-auto mb-auto">
                    <NavLink id="HomeNav" className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline navstuff' to="/" activestyle={{ color:'red' }}>
                        Home
                    </NavLink>
                    <div>
                    {navLists.map((nav) => (
                    <a key={nav.name} id={nav.targetName} className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline navstuff' href={nav.link} onClick={() => {
                        navigate("/", { state: { targetId: nav.targetid } });}}>
                        {nav.name}
                    </a>
                    ))}
                    </div>
                    <NavLink id="AboutNav" className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline navstuff' to="/about" activestyle={{ color:'red' }}>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;