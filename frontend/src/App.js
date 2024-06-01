import React, {useState} from 'react'
// import Home from "./components/Home"
import './App.css'
import Iro from './components/Iro';


export default function App() {
  // const [message, setMessage] = useState(null);

  // const [answer, setAnswer] = useState([]);

  const [selectedColor, setSelectedColor] = useState("#fad9ff");

const  handleColorChange = (choosenColor) =>
  {
    console.log("color before set",choosenColor)
    setSelectedColor(choosenColor);
    console.log("the color hex changes",choosenColor);
    // console.log("colorhsl",selectedColor.hsl)

    
  }


  // function handleInput(e) {
  //   setMessage(e.target.value);
  // }

  // async function handleButtonClick(e) {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:3001',{
  //     method: 'POST',  
  //     body: message,
  //   });
  //   if (response.ok) {
  //     const answerObject = await response.json();
  //     const answerArray = Object.entries(answerObject);
  //     setAnswer(answerArray);
  //   }
  // }

  return (
    <React.Fragment>
      <Iro onColorChange={handleColorChange} selectedcolor={selectedColor}/>
  
      
      


    </React.Fragment>
  );
}


