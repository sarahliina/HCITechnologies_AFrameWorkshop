

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var rotationSpeedY = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
 	myOtherBox.object3D.rotation.x += rotationSpeed *(-1);
 	console.log(myOtherBox.object3D.rotation.x);

  myOtherBox.object3D.rotation.y += rotationSpeedY;
  console.log(myOtherBox.object3D.rotation.y);

  myOtherBox.object3D.rotation.z += rotationSpeed;
  console.log(myOtherBox.object3D.rotation.z);
}

function position(){
  myOtherBox.object3D.position.y += 0.4;
}

setInterval(spin, 16); //equivalent to 60 fps

setInterval(position, 16);
