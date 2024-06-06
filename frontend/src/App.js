import React from 'react';
import Header from './components/header';
import MainContent from './components/main-content';
import iro from '@jaames/iro';
import Card from './components/card';
import Footer from './components/footer';

export default function App() {
  const [message, setMessage] = React.useState('');
  const [answer, setAnswer] = React.useState([]);
  const colorPickerRef = React.useRef(null);
  const colorPickerInitialized = React.useRef(false); 
  const [colorPicker, setColorPicker] = React.useState(null);
  const [bgColor, setBgColor] = React.useState("#ffc069");

  React.useEffect(() => {
    if (colorPickerRef.current && !colorPickerInitialized.current) {
      const newColorPicker = new iro.ColorPicker(colorPickerRef.current, {
        width: 250,
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

    function handleInput(e) {
      setMessage(bgColor);
    }
    
    async function handleButtonClick(e) {
      e.preventDefault();
      const response = await fetch('http://localhost:3001',{
        method: 'POST',  
        body: message,
      });
      if (response.ok) {
        const answerObject = await response.json();
        const answerArray = Object.entries(answerObject);
        setAnswer(answerArray);
      }
    }

  return (
    <div>
      <Header />
      <MainContent backgroundColor={bgColor} colorPicker={colorPickerRef} button={handleButtonClick} />
      <Card answer={answer} />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





