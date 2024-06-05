import React, { useRef, useEffect, useState } from 'react';
import Header from './components/header';
import MainContent from './components/main-content';
import iro from '@jaames/iro';
import Card from './components/card';
import Footer from './components/footer';

export default function App() {
  const colorPickerRef = useRef(null);
  const colorPickerInitialized = useRef(false); 
  const [colorPicker, setColorPicker] = useState(null);
  const [bgColor, setBgColor] = useState("#ffc069");

  useEffect(() => {
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

  return (
    <div>
      <Header />
      <MainContent backgroundColor={bgColor} colorPicker={colorPickerRef} />
      <Card />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}





