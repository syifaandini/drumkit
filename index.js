var jumlah = document.querySelectorAll(".drum").length;

//Cursor Click
for (var i=0; i<jumlah; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonClick = this.innerHTML;
    bunyi(buttonClick);
    buttonAnimation(buttonClick);
  });
}

//Keyboard pressed
document.addEventListener("keydown", function(event){
    var keyBoard = event.key;
    bunyi(keyBoard);
    buttonAnimation(keyBoard);
});

//Sound function
function bunyi(key){
  switch (key) {
    case "w":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    default: console.log(buttonClick);

  }
}

//Animation function
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
