var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


var goalpostleft,goalpostright, ground,ball,player1,player2,players;

function preload(){
  ground = loadImage("images/0000.png")
  goalpostright = loadImage("images/goal post 1.png")
  goalpostleft = loadImage("images/goal post 2.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.stop();
  }

}
