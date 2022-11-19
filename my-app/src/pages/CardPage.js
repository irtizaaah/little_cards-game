import './CardPage.css';
import Nav from '../components/nav/Nav';
import Card from '../components/card/Card';

function CardPage() {
  return (
    <div className="App">
      <div className="top_container">
        <Nav/>
      </div>
      <Card/>
      <p>3/10</p>
    </div>
  );
}

export default CardPage;
