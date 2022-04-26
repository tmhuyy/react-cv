import { Link } from "react-router-dom";
import { RiSunFoggyFill } from "react-icons/ri";
import { SiSnowflake } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";
// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             {/* <Link to="/how-to-use">Document</Link> */}
//         </nav>
//      );
// }

const NavBar = () => {
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

  }
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">Snowy CV</div>
        <RiSunFoggyFill
          size={"24px"}
          color="#FCD900"
          className="cursor-pointer"
          onClick={darkModeHandler}
        />
      </div>
      <ul className="ml-auto text-16 font-semibold">
        {isOpen ? (
          <CgClose
            size="30px"
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
        ) : (
          <SiSnowflake
            size="30px"
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
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
