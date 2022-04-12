import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/how-to-use">Document</Link>
        </nav>
     );
}
 
export default NavBar;