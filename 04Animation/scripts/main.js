

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.10;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
  myOtherBox.object3D.rotation.x += rotationSpeed * (-1);
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
