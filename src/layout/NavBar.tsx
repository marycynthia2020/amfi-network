import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";

const navLinks = [
  { name: "home", path: "/" },
  { name: "about us", path: "#about" },
  { name: "contact", path: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full fixed top-0 inset-x-0 z-50 md:py-5 px-5 shadow-2xl bg-white ">
      <div
        className={`w-full max-w-[1440px] mx-auto  flex md:h-auto flex-col gap-y-14 md:flex-row items-center md:justify-between  ${
          isOpen ? "h-screen" : ""
        } `}
      >
        <div
          className={`w-full flex items-center justify-between py-3 md:hidden  ${
            isOpen ? "border-b" : ""
          }`}
        >
          <Logo color="#000c54" />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" text-4xl cursor-pointer text-deep-blue "
          >
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        {/* navigation */}
        <div
          className={`w-full flex flex-col md:flex-row gap-4 gap-y-5 md:items-center  md:justify-between ${
            isOpen ? "" : "hidden md:flex "
          }`}
        >
          <div className="hidden md:block">
            <Logo color="#2c3f83" />
          </div>
          <ul className="  flex flex-col md:flex-row  gap-y-5 gap-x-8 md:items-center ">
            {navLinks.map(link => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <a
                  href={link.path}
                  className="text-xl font-medium text-deep-blue md:text-base hover:text-nav-grey uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="">
            <Button children="join us today" href="#contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
