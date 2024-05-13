var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 250,
    // Set the initial color to pure red
    color: "#f00",
    margin:15,
  });
  

var hex = colorPicker.color.hexString;
console.log(hex);