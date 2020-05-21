

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var rotationSpeedY = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
int check = 0;

function spin(){
 	myOtherBox.object3D.rotation.x += rotationSpeed *(-1);
 	console.log(myOtherBox.object3D.rotation.x);

  myOtherBox.object3D.rotation.y += rotationSpeedY;
  console.log(myOtherBox.object3D.rotation.y);

  myOtherBox.object3D.rotation.z += rotationSpeed;
  console.log(myOtherBox.object3D.rotation.z);
}

function positionRight(){
  if (int check =< 25) {
    myOtherBox.object3D.position.x += 0.5;
  }

  else {
    myOtherBox.object3D.position.x -= 0.5;
  }

  check++;
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(position, 16);
