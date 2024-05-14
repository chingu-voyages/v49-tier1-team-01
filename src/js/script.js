var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 250,
    // Set the initial color to pure red
    color: "#f00",
    margin:15,

    // color wheel will not fade to black when the lightness decreases.
    wheelLightness:false,
    borderWidth:2,
    borderColor:"#fff",
  });

// here we put the hex value in the box 

const hexbox = document.getElementById("hexbox")
// for testing purpose 
console.log(hexbox)

colorPicker.on(["color:init","color:change"],(color)=>{
  hexbox.innerHTML = color.hexString})

  







// here .on() method is from color picker library not from the vanilla js
  // colorPicker.on('color:change', function(color) {
  //   console.log(color.hexString);
  // });
