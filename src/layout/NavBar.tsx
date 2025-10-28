import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "../components/ui/Logo";
import { NavLink} from "react-router";
import Button from "../components/ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "#about" },
  { name: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full fixed top-4 md:top-12 z-1 px-4 md:px-0  bg-white ">
      <div
        className={`w-full max-w-[1440px] mx-auto shadow-2xl  px-5 py-0 md:py-5  flex md:h-auto flex-col gap-y-14 md:flex-row items-center md:justify-between  ${
          isOpen ? "h-screen" : ""
        } `}
      >
        <div
          className={`w-full flex items-center justify-between py-4 md:hidden  ${
            isOpen ? "border-b" : ""
          }`}
        >
          <Logo color="#000c54" />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" text-4xl cursor-pointer "
          >
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        {/* navigation */}
        <div
          className={`w-full flex flex-col md:flex-row gap-4 md:items-center  md:justify-between  ${
            isOpen ? "" : "hidden md:flex "
          }`}
        >
          <div className="hidden md:block">
            <Logo color="#2c3f83" />
          </div>
          <ul className="  flex flex-col md:flex-row  gap-y-4 gap-x-8 md:items-center ">
            {navLinks.map(link => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    ` text-xl font-medium md:text-base hover:text-red-500 uppercase
                ${isActive ? "text-deep-blue" : "text-nav-grey"}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <Button children="join us" href="#CTA" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
