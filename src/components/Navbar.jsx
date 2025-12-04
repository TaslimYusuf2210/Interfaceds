import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Menu from "./menu";
import Close from "./Close";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo.svg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleIsOpen() {
        setIsOpen((prev) => !prev)
    }

    return ( 
        <nav className="bg-black flex justify-between px-4 pt-2 pb-2 border-b-accent border-b fixed w-full z-9999 max-w-[1536px]">
            <NavLink to="/" className="cursor-pointer flex items-center gap-2 z-50">
                <span className="text-4xl">
                    <img src={logo} alt="" />
                </span>
                <span className="font-bold text-xl">
                    Interfaces DS
                </span>
            </NavLink>
            <div className="flex items-center gap-4 font-medium">
                <div className="lg:flex items-center gap-3 hidden">
                    <NavLink
                    to="/"
                    end
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 w-fit h-fit
                    ${isActive ? "pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Home</NavLink>
                    <NavLink
                    to="/pricing"
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 w-fit h-fit
                    ${isActive ? "pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Pricings</NavLink>
                    <NavLink
                    to="/articles"
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 w-fit h-fit
                    ${isActive ? "pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Articles</NavLink>
                    <Link smooth to="/#connect" className="px-5 nav-element-animate rounded-sm py-3 hover:bg-accent">Contact</Link>
                </div>    
                <div className="lg:flex gap-2 p-2 hidden">
                    <NavLink to="/preview" 
                    className={({isActive}) => 
                    `nav-element-animate cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:bg-accent
                    ${isActive ? "after:relative after:top-3  after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white" : ""}`}>
                    Preview</NavLink>
                    <NavLink to="/pricing" className={`nav-element-animate cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50`}>Get it now</NavLink>
                </div>
                <button onClick={handleIsOpen} className="lg:hidden z-50" type="button">
                    <Menu
                    open={isOpen}
                    ></Menu>
                    <Close
                    open={isOpen}
                    ></Close>
                </button>

                {/* mobile  view dropdown menu content */}
                <div className={`
                absolute left-0 px-4 w-full top-16 bg-black text-white shadow-lg lg:hidden overflow-hidden z-50
                transition-all duration-600 flex flex-col space-y-3 dropdown-menu ${isOpen ? "block h-fit open" : "hidden"}
                `}>
                    <NavLink 
                    to="/"
                    onClick={() => setIsOpen(false)}
                    end
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white ]" : "px-6"} `}>
                    Home
                    </NavLink>
                    <NavLink 
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Pricings
                    </NavLink>
                    <NavLink 
                    to="/articles"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Articles
                    </NavLink>
                    <Link 
                    smooth
                    to="/#connect"
                    onClick={()=> setIsOpen(false)}
                    className={
                    `nav-element-animate hover:bg-accent rounded-sm flex items-center gap-6 px-6 py-3 h-fit
                     `}>
                    Contact
                    </Link>
                    <NavLink 
                    to="/preview"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `nav-element-animate hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit border border-accent
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Preview
                    </NavLink>
                    <NavLink 
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className={
                    `nav-element-animate hover:bg-gray-200 rounded-sm flex items-center gap-6 px-6 py-3 h-fit bg-white text-black
                     `}>
                    Get it now
                    </NavLink>
                </div>

                {/* Background while dropdown navbar is open */}
                {isOpen && (
                <div className="fixed inset-0 bg-black z-40"
                onClick={() => setIsOpen(false)}
                >

                </div>
                )}
            </div>
        </nav>
     );
}

export default Navbar;