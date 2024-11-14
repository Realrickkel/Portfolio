import { navLists } from "../Constants";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav className="flex fixed h-screen z-10">
                <NavMenu className="mt-auto mb-auto">
                    <NavLink className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline' to="/" activestyle>
                        Home
                    </NavLink>
                    <div>
                    {navLists.map((nav) => (
                    <a key={nav.name} className='px-5 py-1 text-sm cursor-pointer text-gray flex flex-col hover:text-neutral-900 transition-all hover:underline' href={nav.link}>
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