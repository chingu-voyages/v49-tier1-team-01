import React, { useEffect, useRef, useState } from "react";
// import Color from './Color';
// import Home from "./Home"

import iro from "@jaames/iro";


// importing the other components
import Upper from "./Upper";
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";

export default function Iro(props) {
  const col = props.selectedcolor;
  const colorPickerRef = useRef(null);
  // const [colorNew,setcolorNew] = useState("black");
  // const colorNew = useRef("#FFFFF0")
  let colorPicker;

  useEffect(() => {
    colorPicker = new iro.ColorPicker(colorPickerRef.current, {
      // Color picker options
      width: 250,
      // color: "#fad9ff",
      margin: 20,

      // color wheel will not fade to black when the lightness decreases.
      wheelLightness: false,
      borderWidth: 2,
      borderColor: "#fff",
    });

    return () => colorPicker.off("color:change"); // Clean up the event listener
  }, []);

  useEffect(() => {
    if (colorPicker) {
      colorPicker.on(["color:change"], (col) => {
        props.onColorChange(col.hexString);
        // console.log("col value ",col)
        if (col.hsl.l <= 45) {
          console.log("herr col.l is less than 45", col.hsl.l);
          const ele = document.querySelector("#colortext");
          console.log("ele", ele);
          ele.style.color = "#FFFFF0";
        } else {
          console.log("not less than 45", col.hsl.l);
          const ele = document.querySelector("#colortext");
          console.log("ele", ele);
          ele.style.color = "black";
        }
      });
    }

    // return () => colorPicker.off('color:change');
  }, [props.onColorChange]);

  return (
    
    <React.Fragment>
      <div className="container-fluid-xs my-0 px-0">
        <Header />
        <Upper colorPickerRef={colorPickerRef} color={col} />

        <div className="filler"></div>
        <Middle />
        <div className="filler"></div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
