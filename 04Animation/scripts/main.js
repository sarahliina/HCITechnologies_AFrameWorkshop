

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var rotationSpeedY = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var check = 0;

function spin(){
 	myOtherBox.object3D.rotation.x += rotationSpeed *(-1);
 	console.log(myOtherBox.object3D.rotation.x);

  myOtherBox.object3D.rotation.y += rotationSpeedY;
  console.log(myOtherBox.object3D.rotation.y);

  myOtherBox.object3D.rotation.z += rotationSpeed;
  console.log(myOtherBox.object3D.rotation.z);
}

function positionX(){
  if (check <= 10) {
    myOtherBox.object3D.position.y += 0.05;
  }

  else if (check > 10){
    myOtherBox.object3D.position.y = myOtherBox.object3D.position.y - 0.05;
  }

  check++;
  if (check==20) {
    check = 0;
  }
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(positionX, 16);
