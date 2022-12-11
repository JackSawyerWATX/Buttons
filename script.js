function dochange() {
    let text = "Go ahead and pick one!";
    if (confirm(text) == true) {
      text = "You clicked OK and got this JavaScript function."
    } else {
      text = "You clicked CANCEL and got a different JavaScript function."
    }
    document.getElementById("demo").innerHTML = text;
  }
  
  function dochange2() {
      let text = "Choose WISELY!\nOkay or Cancel.";
    if (confirm(text) == true) {
      text = "You have chosen WISELY!";
    } else {
      text = "You have chosen POORLY!";
    }
    document.getElementById("demo").innerHTML = text;
  }