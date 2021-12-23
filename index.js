var btnArray = document.querySelectorAll(".drum");
// for click  q
for( var i = 0; i < btnArray.length; i++)
{
  btnArray[i].addEventListener("click", function(){
    var buttonHTML = this.innerHTML;
    check(buttonHTML);
    btnAnimation(buttonHTML);
  })
}
//for key board
document.addEventListener("keypress", function(event){
  check(event.key);
  btnAnimation(event.key);

})
//check the input is required
function check(input){
  switch (input) {
    case "w":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    case"a":
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;
    case"s":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    case"d":
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case"j":
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case"k":
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case"l":
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    default: console.log("error");
  }
}
function btnAnimation(currentKey)
{
  var keyElement = document.querySelector("."+currentKey);
  keyElement.classList.add("pressed");
  setTimeout(function(){
    keyElement.classList.remove("pressed");}
    ,200
  );
}
