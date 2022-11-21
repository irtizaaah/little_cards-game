import './Nav.css';
import Menu from '../menu/Menu';

import menuIcon from "./menu-icon.png";
import {Link} from "react-router-dom";
import {useState} from "react";

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    props.setIsShared(true); // this is required for CardPage.js to know if it should split deck or not
    setShowMenu(!showMenu); 
  }
  
  return (
    <div className="Nav">
        {!props.isDeckPageOpen ? <img className="menu_img" src={menuIcon} alt="menu icon" onClick={handleClick}/>  : null}
        <Link to="/"><h1>Little Cards</h1></Link>
        {showMenu ? <Menu className="menu" showMenu={showMenu} setShowMenu={setShowMenu} currentDeckIndex={props.currentDeckIndex} /> : null}
    </div>
  );
}

export default Nav;
