import { Link } from "react-router-dom";
import { RiSunFoggyFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { RiMoonFoggyFill } from "react-icons/ri";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";

const NavBar = (props) => {
  const { isMobile } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const openMenuHandler = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const itemHandler = (e) => {
    e.stopPropagation();
  }
  if (isOpen) {
    document.body.addEventListener("click", (e) => { 
      e.stopPropagation();
      setIsOpen(!isOpen);
    })
  }
  const darkModeHandler = () => {
    toggleDarkMode(!isDarkMode)
  }
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <Link to="/" className="text-20 font-bold mr-2 md:text-24 text-black dark:text-white">THE C.E.V</Link>
        {isDarkMode ? (
          <RiSunFoggyFill
            size={"24px"}
            color="#FCD900"
            className="cursor-pointer"
            onClick={darkModeHandler}
          />
        ) : (
          <RiMoonFoggyFill
            size={"24px"}
            color="#FCD900"
            className="cursor-pointer"
            onClick={darkModeHandler}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {isOpen && isMobile ? (
          <CgClose
            size="30px"
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
        ) : !isOpen && isMobile ? (
          <GiHamburgerMenu
            size="30px"
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
        ) : (
          <>
            <Link to="/" className="btn-hover dark:text-white text-black">Home</Link>
            <Link to="/create" className="btn-hover dark:text-white text-black">Create CV</Link>
            <a href="https://github.com/tmhuyy/react-cv#readme" className="btn-hover dark:text-white text-black">Document</a>
                <Link to="/cv-builder" className="btn-hover dark:text-white text-black">Your CV </Link>
            <a href="https://github.com/tmhuyy/react-cv" className="btn-hover dark:text-white text-black">Contact</a>
                
          </>
        )} 
        

        {isOpen && (
          <section className="flex flex-col	items-center absolute right-8 bg-white p-8 z-1 text-13" onClick={itemHandler}>
            <Link to="/" className="cursor-pointer text-black" onClick={itemHandler}>Home</Link>
            <Link to="/create" className="cursor-pointer text-black" onClick={itemHandler}>Create CV</Link>
            <a href="https://github.com/tmhuyy/react-cv#readme" className="cursor-pointer text-black" onClick={itemHandler}>Document</a>
            <Link to="/cv-builder" className="btn-hover text-black">Your CV </Link>

            <a href="https://github.com/tmhuyy/react-cv" className="cursor-pointer text-black" onClick={itemHandler}>Contact</a>
          </section>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
