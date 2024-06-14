import React, { useRef } from 'react';
import Header from './components/header';
import MainContent from './components/main-content';
import iro from '@jaames/iro';
import Card from './components/card';
import Footer from './components/footer';

export default function App() {
  const [answer, setAnswer] = React.useState([]);
  const colorPickerRef = React.useRef(null);
  const colorPickerInitialized = React.useRef(false); 
  const [colorPicker, setColorPicker] = React.useState(null);
  const [bgColor, setBgColor] = React.useState("#ffc069");

  const scrollToNextSectionRef = React.useRef("null");


  React.useEffect(() => {
    if (colorPickerRef.current && !colorPickerInitialized.current) {
      const newColorPicker = new iro.ColorPicker(colorPickerRef.current, {
        width: 200,
        color: "#f00",
        margin: 20,
        wheelLightness: false,
        borderWidth: 2,
        borderColor: "#fff",
      });

      newColorPicker.on('color:change', (color) => {
        setBgColor(color.hexString);
      });

      setColorPicker(newColorPicker);
      colorPickerInitialized.current = true;
    }
  }, [colorPickerRef]);
    
    async function handleButtonClick(e) {
      e.preventDefault();
      const response = await fetch(process.env.REACT_APP_FETCH_URL,{
        method: 'POST',  
        body: bgColor,
      });
      if (response.ok) {
        const answerObject = await response.json();
        const answerArray = Object.entries(answerObject);
        setAnswer(answerArray);
      }
    }
    function onClickScroll(){
      console.log("hi this is from the onCickScroll");
      if (scrollToNextSectionRef.current) {
       scrollToNextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      console.log(document.getElementById("newHead"));
      // document.getElementById("newHead")
      

    }

  return (
    <div>
      <Header onClickScroll={onClickScroll}/>
      <MainContent scrollToNextSectionRef={scrollToNextSectionRef} backgroundColor={bgColor} colorPicker={colorPickerRef} button={handleButtonClick} />
      <Card answer={answer} />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





