if (window.performance.navigation.type === 1) {
var randomNumber1 = Math.floor(Math.random()*3) + 1;
var randomNumber2 = Math.floor(Math.random()*3) + 1;
var i = "images/image"+ randomNumber1 +".png";
var i2 = "images/image"+ randomNumber2 +".png";
document.querySelectorAll("img")[0].setAttribute("src",i);
document.querySelectorAll("img")[1].setAttribute("src",i2);

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw !";
}
else if(randomNumber1 === 1 && randomNumber2 === 3){
  document.querySelector("h1").innerHTML = "🚩 Player 1 !";
}
else if(randomNumber1 === 2 && randomNumber2 === 1){
  document.querySelector("h1").innerHTML = "🚩 Player 1 !";
}
else if(randomNumber1 === 3 && randomNumber2 === 2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 !";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 ! 🚩";
}
}
