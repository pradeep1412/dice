var randomno =()=>{
  return Math.floor((Math.random()*6)+1);
}
let player1rollvalue = 0
player1rollvalue = randomno()
let path1 = "./images/white_dice_"+player1rollvalue+".png";

var player1 = document.querySelector(".img1");
player1.setAttribute("src",path1)
let player2rollvalue = 0
player2rollvalue = randomno()
let path2 = "./images/dark_dice_"+player2rollvalue+".png";

var player2 = document.querySelector(".img2");
player2.setAttribute("src",path2);

if(player1rollvalue > player2rollvalue){
  document.querySelector('p').innerHTML = "Player 1 wins! 🚩"
}else if(player1rollvalue < player2rollvalue){
  document.querySelectorAll('p')[1].innerHTML = "Player 2 wins! 🚩"
}else{
  document.querySelector('h1').innerHTML = "🚩 Draw! 🚩"
}
