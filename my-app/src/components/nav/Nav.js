import './Nav.css';
import menuIcon from "./menu-icon.png";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
        <img src={menuIcon} alt="menu icon"/>
        <Link to="/"><h1>Little Cards</h1></Link>
        
    </div>
  );
}

export default Nav;
