function dochange() {
    let text = "clicked Cancel button with JavaScript function";
    if (confirm(text) == true) {
      text = "clicked OK button with JavaScript function"
    }
    document.getElementById("demo").innerHTML = text;
  }
  
  function dochange2() {
      let text = "Choose WISELY!\nOkay or Nope.";
    if (confirm(text) == true) {
      text = "Bye.";
    } else {
      text = "Pfft!";
    }
    document.getElementById("demo").innerHTML = text;
  }