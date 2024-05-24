import React, {useState} from 'react'
// import Home from "./components/Home"
import './App.css'
import Iro from './components/Iro';


export default function App() {
  // const [message, setMessage] = useState(null);

  // const [answer, setAnswer] = useState([]);

  const [selectedColor, setSelectedColor] = useState("#f00");

const  handleColorChange = (color)=>
  {
    setSelectedColor(color);
    console.log(color)
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


