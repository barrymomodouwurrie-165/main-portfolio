import { NavLink } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../assets/myprofile.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

const linkClass = ({isActive}) => `btn btn-ghost btn-sm ${isActive? "italic underline underline-offset-4 text-secondary": ""}`


  return (
    <div className="fixed top-0 z-[500] bg-[#1a103d] w-full px-4 py-4 border-b border-purple-400/20 shadow-sm">
      <div className="flex items-center justify-between">
        <div className={`${isOpen ? "hidden": "flex"} md:flex items-center justify-between gap-2`}>
          <img
            src={profile}
            alt="A profile picture"
            className="w-[80px] h-[80px] rounded-full object-left-top object-cover"
          />
          <span className="bg-gradient-to-t from-[#c7d2fe] to-primary bg-clip-text text-xl text-transparent">
            MOMODOU WURRIE BARRY
          </span>
        </div>
        <div className="hidden md:flex items-center justify-between">
          {Links &&
            Links.map((link) => {
              return (
                
              <NavLink
                key={link.name}
                to={link.to}
                className={linkClass}
              >
                {link.name}
              </NavLink>
              )
            })}
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 text-secondary font-medium backdrop-blur-3xl">
              Resume
            </span>
          </button>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (

        <div className="lg:hidden flex items-center justify-center">
          {Links &&
            Links.map((link) => {
              return (
                
              <NavLink
                key={link.name}
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
              )
            })}
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 text-secondary font-medium backdrop-blur-3xl">
              Resume
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
