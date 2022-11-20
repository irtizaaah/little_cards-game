import "./Menu.css";
import QRCode from "react-qr-code";

function Menu(props) {
  let currentDeckIndex = props.currentDeckIndex;
  let url = "https://irtizaaah.github.io/little-cards/#/card-page/" + currentDeckIndex;
  
  return (
    <div className="Menu" onClick={()=>props.setShowMenu(!props.showMenu)}>
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "80%" }}
      value={url}
      viewBox={`0 0 256 256`}
    />
    <div className="options">
      <h1>Deck Shared</h1>
      {/*<h1>Shuffle</h1> */}
    </div>
    </div>
  );
}

export default Menu;
