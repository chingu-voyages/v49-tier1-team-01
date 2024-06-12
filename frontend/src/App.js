import React from 'react';
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
  const [bgColor, setBgColor] = React.useState("#f7f7ed");

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

  return (
    <div id="page">
      <Header />
      <MainContent backgroundColor={bgColor} colorPicker={colorPickerRef} button={handleButtonClick} />
      <Card answer={answer} />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





