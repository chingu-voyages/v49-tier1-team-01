var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 250,
    // Set the initial color to pure red
    color: "#dbffc4",
    margin:15,

    // color wheel will not fade to black when the lightness decreases.
    wheelLightness:false,
    borderWidth:2,
    borderColor:"#fff",
  });

// here we put the hex value in the box  and changing the background as wheel changes the color

const hexbox = document.getElementById("hexbox")
// for testing purpose 
console.log(hexbox)



colorPicker.on(["color:init","color:change"],(color)=>{
  hexbox.innerHTML = color.hexString
  const divEle = document.getElementById("changecolor")
  divEle.style.backgroundColor = color.hexString


  const brightness = color.hsl
  console.log(brightness.l)
  const h2Ele = document.getElementById("h2color")
  const pEle = document.getElementById("pcolor")
  if (brightness.l <= 45){
    console.log("here lightness describes")
    
    h2Ele.style.color = "#FFFFF0";
    pEle.style.color = "#FFFFF0"
  }
  else{
    h2Ele.style.color = "black"
    pEle.style.color = "black"

  }  

    // console.log(h2Ele.innerHTML)
    // console.log(pEle)

  
  
})

// change the color of text when user selects the blackish shades color













// changing the background of app when color picker wheel change its colors

// colorPicker.on("color:setActive",(color)=>{

//   const divEle = document.getElementById("changecolor")
//   divEle.style.backgroundColor = 


// })








// here .on() method is from color picker library not from the vanilla js
  // colorPicker.on('color:change', function(color) {
  //   console.log(color.hexString);
  // });
