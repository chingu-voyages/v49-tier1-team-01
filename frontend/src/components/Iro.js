import React, { useEffect, useRef } from 'react';
// import Color from './Color';
import Home from "./Home"


import iro from '@jaames/iro';


export default function Iro(props){
    const col = props.selectedColor;
    const colorPickerRef = useRef(null);
    let colorPicker;
    
    useEffect(
      () => {
      colorPicker = new iro.ColorPicker(colorPickerRef.current, {
        // Color picker options
        width: 250,
        color: "#f00",
        margin:20,
  
        // color wheel will not fade to black when the lightness decreases.
        wheelLightness:false,
        borderWidth:2,
        borderColor:"#fff",
      });

    
    


  

    return () => colorPicker.off('color:change'); // Clean up the event listener
  },[]);

  useEffect(()=>{
    if (colorPicker)
        {
                colorPicker.on(['color:change'], (col) => {
                props.onColorChange(col.hexString);
                // document.body.style.backgroundColor = color.hexString
            });
            
        }
        
        // return () => colorPicker.off('color:change');
  }, [props.onColorChange])

  return (
    // <Color colorPickerRef={colorPickerRef}/>
    <Home colorPickerRef={colorPickerRef} color={col}/>

   
  );
}



