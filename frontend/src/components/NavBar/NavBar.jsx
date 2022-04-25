import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
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
                <div className="text-20 font-bold mr-2">
                    Snowy CV
                </div>
                <BsFillSunFill size={"24px"} color={"#FCD900"} className="cursor-pointer" />
                <ul className="ml-44 text-16 font-semibold">
                    <GiHamburgerMenu size="24px" className="cursor-pointer"/>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;