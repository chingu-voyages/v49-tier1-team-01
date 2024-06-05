import React from 'react';
import iro from '@jaames/iro';

export default function ColorPicker(props) {
  const colorPickerRef = React.useRef(null);
  let colorPicker;

  React.useEffect(() => {
    colorPicker = new iro.ColorPicker(colorPickerRef.current, {
    width: 250,
    color: "#f00",
    margin: 20,
    wheelLightness: false,
    borderWidth: 2,
    borderColor: "#fff",
  });

  return () => colorPicker.off('color:change');
  }, []);

  React.useEffect(() => {
    if (colorPicker) {
      colorPicker.on(['color:change'], (col) => {
        props.onColorChange(col.hexString);
        if (col.hsl.l <= 45) {
          const ele = document.querySelector("#colortext")
          ele.style.color = "#FFFFF0"
        }
        else {
          const ele = document.querySelector("#colortext")
          ele.style.color = "black"
        }
      });
    }
  }, [props.onColorChange])

  return colorPicker
}



