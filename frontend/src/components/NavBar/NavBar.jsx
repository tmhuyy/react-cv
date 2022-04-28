import { Link } from "react-router-dom";
import { RiSunFoggyFill } from "react-icons/ri";
import { SiSnowflake } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import { RiMoonFoggyFill } from "react-icons/ri";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";
// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             {/* <Link to="/how-to-use">Document</Link> */}
//         </nav>
//      );
// }

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
  console.log(isDarkMode)
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2 md:text-24">THE C.E.V</div>
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
          <SiSnowflake
            size="30px"
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu </li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </>
        )} 
        

        {isOpen && (
          <section className="flex flex-col	items-center absolute right-8 bg-white p-8 z-1 text-black text-13" onClick={itemHandler}>
            <li className="cursor-pointer" onClick={itemHandler}>Feature</li>
            <li className="cursor-pointer" onClick={itemHandler}>Document</li>
            <li className="cursor-pointer" onClick={itemHandler}>Contact</li>
          </section>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
