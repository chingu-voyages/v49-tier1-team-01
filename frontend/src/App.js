import React from 'react';
import Header from './components/header';
import MainContent from './components/main-content';
import iro from '@jaames/iro';
import Card from './components/card';
import Footer from './components/footer';
import ErrorWindow from './components/modal';

export default function App() {
  const [answer, setAnswer] = React.useState([]);
  const colorPickerRef = React.useRef(null);
  const colorPickerInitialized = React.useRef(false); 
  const [colorPicker, setColorPicker] = React.useState(null);
  const [bgColor, setBgColor] = React.useState("#ffc069");
  const [errorMessage, setErrorMessage] = React.useState('');

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
    
    async function handleButtonClick(e) {
      setErrorMessage('')
      e.preventDefault();
      const response = await fetch(process.env.REACT_APP_FETCH_URL,{
        method: 'POST',  
        body: bgColor,
      });
      if (response.ok) {
        const answerObject = await response.json();
        const answerArray = Object.entries(answerObject);
        setAnswer(answerArray);
      } else {
        setErrorMessage(response.statusText)
      }
    }

  return (
    <div>
      <Header />
      <MainContent backgroundColor={bgColor} colorPicker={colorPickerRef} button={handleButtonClick} />
      <Card answer={answer} />
      <ErrorWindow errorMessage={errorMessage}/>
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





