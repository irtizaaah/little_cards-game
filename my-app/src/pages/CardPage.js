import './CardPage.css';
import Nav from '../components/nav/Nav';
import Card from '../components/card/Card';
import {useState, useEffect} from "react";
import data from "../data/decks.json";

function CardPage(props) {
  const[mousePosition, setMousePosition] = useState({x:0, y:0});
  if(props.currentCardIndex < -1) props.setCurrentCardIndex(0);

  const handleClick = event => {
    setMousePosition({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  }

  const decrementIndex = () =>{
    if(props.currentCardIndex > 0) 
      props.setCurrentCardIndex(props.currentCardIndex-1);
  }

  const incrementIndex = () =>{
    if(props.currentCardIndex < data.decks[props.currentDeckIndex].cards.length-1) 
      props.setCurrentCardIndex(props.currentCardIndex+1);
  }

  useEffect(()=>{
    let midpoint = window.innerWidth/4;
    let buffer = 10;
    console.log(props.currentCardIndex)

    if(mousePosition.x < midpoint - buffer) decrementIndex()
    else if(mousePosition.x > midpoint + buffer) incrementIndex()

  },[mousePosition])

  return (
    <div className="CardPage" onClick = {handleClick}>
      <div className="top_container">
        <Nav/>
      </div>
      <Card currentCardIndex={props.currentCardIndex} currentDeckIndex = {props.currentDeckIndex} setCurrentDeckIndex={props.setCurrentDeckIndex}/>
      <p>{props.currentCardIndex+1}/{data.decks[props.currentDeckIndex].cards.length}</p>
    </div>
  );
}

export default CardPage;
