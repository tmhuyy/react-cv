import { Link } from "react-router-dom";
import { RiSunFoggyFill } from "react-icons/ri";
import { SiSnowflake } from "react-icons/si";
import "./navbar.css";
// const NavBar = () => {
//     return ( 
//         <nav className="navbar">
//             {/* <Link to="/how-to-use">Document</Link> */}
//         </nav>
//      );
// }

const NavBar = () => {
    return ( 
        <nav className="flex items-center">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2">Snowy CV</div>
                <RiSunFoggyFill size={"24px"} color="#FCD900" className="cursor-pointer" />
            </div>
            <ul className="ml-auto text-16 font-semibold">
                <SiSnowflake size="30px" className="cursor-pointer"/>
            </ul>
        </nav>
     );
}
 
export default NavBar;