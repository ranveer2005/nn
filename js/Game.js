class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(displayWidth/6,displayHeight*7/8,20,40)
    player2 = createSprite(displayWidth*7/8,displayHeight*7/8,20,40)
    players = [player1,player2];
    ball = createSprite(displayWidth*9.6/20,displayHeight*9/10,20,20)
  }

  play(){
    form.hide();
    //console.log(player.distance)
    Player.getPlayerInfo();
    //player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background(ground)
      //var display_position = 100;
      image(goalpostright,displayWidth*9/10,displayHeight*3/4,100,100);
      image(goalpostleft,displayWidth/20,displayHeight*3/4,100,100);
      
      
      var index = 0;
      
      
      
      
      drawSprites();
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        //x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

       }

    
      } 
             if (keyDown(RIGHT_ARROW)){
          players[player.index].x = players[player.index].x + 10

      }  
      if (keyDown(LEFT_ARROW)){
        players[player.index].x = players[player.index].x - 10

          
      } 
    
  }
  stop(){
    console.log("gameOver")
    console.log(player.rank)
  }
}

