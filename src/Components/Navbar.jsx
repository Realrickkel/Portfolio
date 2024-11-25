import { useNavigate } from "react-router-dom";
import { navLists } from "../Constants";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const Navbar = () => {
    const navigate = useNavigate(); // From react-router v6
    return (
        <>
            <Nav className="fixed h-screen z-10 lg:flex hidden">
                <NavMenu className="mt-auto mb-auto">
                    <NavLink className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline' to="/" activestyle>
                        Home
                    </NavLink>
                    <div>
                    {navLists.map((nav) => (
                    <a key={nav.name} className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline' href={nav.link} onClick={() => {
                        navigate("/", { state: { targetId: nav.targetid } });}}>
                        {nav.name}
                    </a>
                    ))}
                    </div>
                    <NavLink className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline' to="/about" activestyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;