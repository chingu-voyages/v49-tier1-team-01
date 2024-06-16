import React, { useRef } from 'react';
import Header from './components/header';
import MainContent from './components/main-content';
import iro from '@jaames/iro';
import Card from './components/card';
import Footer from './components/footer';
import ErrorWindow from './components/modal.js';

export default function App() {
  const [answer, setAnswer] = React.useState([]);
  const colorPickerRef = React.useRef(null);
  const colorPickerInitialized = React.useRef(false); 
  const [colorPicker, setColorPicker] = React.useState(null);
  const [slidedown, setSlidedown] = React.useState(false);
  const cardRef = React.useRef(null);
  const scrollToNextSectionRef = React.useRef(null);
  const [bgColor, setBgColor] = React.useState("#f7f7ed");
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    const page = document.getElementById('page')
    if(page) {
      page.classList.add('fade-in')
    }
  }, []);

  React.useEffect(() => {
    if (colorPickerRef.current && !colorPickerInitialized.current) {
      const newColorPicker = new iro.ColorPicker(colorPickerRef.current, {

        width: 250,
        color: "#f7f7ed",

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
      setErrorMessage('')
      e.preventDefault();
      try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL,{
        method: 'POST',  
        body: bgColor,
      });

      if (response.status >= 200 && response.status < 300) {
        const answerObject = await response.json();
        const answerArray = Object.entries(answerObject);
        setAnswer(answerArray);
        setSlidedown(true);

        if (cardRef.current) {
          cardRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const errorResponse = await response.json(); 
        setErrorMessage(errorResponse["error"]);
      }}
       catch (error) {
        setErrorMessage(`Fetch error: ${error.message}`);
      }
    }

   function onClickScroll(){
      console.log(scrollToNextSectionRef);
      if (scrollToNextSectionRef.current) {
       scrollToNextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

  return (
    <div id="page">
      <Header onClickScroll={onClickScroll} />
      <MainContent scrollToNextSectionRef={scrollToNextSectionRef} backgroundColor={bgColor} colorPicker={colorPickerRef} button={handleButtonClick} />
      <Card ref={cardRef} answer={answer} className={`slide-down ${slidedown ? 'expanded' : ''}`}  />
      <ErrorWindow errorMessage={errorMessage}/>
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





