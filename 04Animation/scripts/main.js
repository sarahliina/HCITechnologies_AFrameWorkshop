

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
  myOtherBox.rotation.x += rotationSpeed;
  console.log(myOtherBox.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
