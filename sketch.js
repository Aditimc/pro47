var canvas ;
var groundImg, lotousImg , rainbowImg , unicornImg, ground2Img,coneImg,fenceImg,fireimg,lightningImg,bladeImg,stoneimg,bronzeImg,goldImg,silverimg,diamondImg;
var ground, lotous, rainbow , unicorn, ground2, ground3,cone,fence,fire,lightning,blade,stone,bronze,gold,silver,diamond;






function preload (){
  groundImg = loadImage("images/gr2.png");

  lotousImg = loadImage("images/lotus.png");
  rainbowImg = loadImage("images/bg.png");
  unicornImg = loadAnimation("images/unicorn/uni1.png","images/unicorn/uni2.png","images/unicorn/uni3.png","images/unicorn/uni4.png","images/unicorn/uni5.png","images/unicorn/uni6.png","images/unicorn/uni7.png");
  ground2Img = loadImage("images/gr.png");
  ground3img = loadImage ("images/gr3.png");

  goldImg = loadImage("images/rewards/gold.png");
  bronzeImg = loadImage("images/rewards/bronze.png");
  silverImg = loadImage("images/rewards/silver.png");
  diamondImg = loadImage("images/rewards/diamond.png");

  fireImg = loadImage ("images/obstacles/fire.png")
  lightningImg = loadImage ("images/obstacles/lightning.png")
  fenceImg = loadImage ("images/obstacles/fence.png")
  ninjaBladeImg = loadImage ("images/obstacles/ninjaBlade.png")
  stoneImg = loadImage ("images/obstacles/stone.png")
  coneImg = loadImage ("images/obstacles/cone.png")
}





function setup() {
    canvas = createCanvas (displayWidth-30,displayHeight-95)

    ground = createSprite ((displayWidth/2)-500,displayHeight-270);
    ground.addImage (ground2Img);
    ground.scale = 0.2;
    ground.velocityX = -2;

    ground2 = createSprite ((displayWidth/2)+250,displayHeight-300);
    ground2.addImage (groundImg);
    ground2.scale = 1.7;
    ground2.velocityX = -2;

    ground3 = createSprite (displayWidth,displayHeight-190);
    ground3.addImage (ground3img);
    ground3.velocityX= -2;

    rainbow = createSprite (displayWidth/2,160);
    rainbow.addImage (rainbowImg)

    unicorn = createSprite (displayWidth/2,displayHeight-315,displayWidth,300);
    unicorn.addAnimation("running",unicornImg)
    unicorn.scale=2.5;
    unicorn.velocityX = 1;



}

function draw() {
  background("lightblue");
  if (ground.x <-150) {
  ground.x = displayWidth+250;
  }

  if (ground2.x <0) {
    ground2.x = displayWidth+100;
    }
camera.position.x = unicorn.x;


spawnObstacles ();
spawnRewards ();

drawSprites();

}

function spawnObstacles () {
  if (frameCount%200===0) {
    obstacle = createSprite(displayWidth,displayHeight-350);
    obstacle.velocityX=-5;
    var rand = Math.round (random(1,6));

  switch (rand){
    case 1 : {obstacle.addImage (coneImg)
   obstacle.scale = 1 ;
   obstacle.y = displayHeight - 200
  }
   break;
   case 2 : {obstacle.addImage (fenceImg)
    obstacle.scale = 1;
    obstacle.y = displayHeight - 200
   }
   break;
   case 3 : {obstacle.addImage (fireImg)
    obstacle.scale = 0.5
    obstacle.y = displayHeight - 200
    }
   break;
   case 4 : {obstacle.addImage (lightningImg)
    obstacle.scale = 1;
    obstacle.y = displayHeight - 350
  }
   break;
   case 5 : {obstacle.addImage (ninjaBladeImg)
   obstacle.scale = 0.4;
   obstacle.y = displayHeight - 350
}
   break;
   case 6 : {obstacle.addImage (stoneImg)
    obstacle.scale = 0.5;
    obstacle.y = displayHeight - 200
  }
   break;


  default: console.log("no obstacle")
  break;
}
    obstacle.lifetime=displayHeight/5;
    //obstacle.scale=0.18;
    //obstacle.debug=true;
    //obstacle.setCollider("rectangle",0,0,350,350);
    //obstacleGroup.add(obstacle);

  }


}


function spawnRewards (){
  if (frameCount%500===0) {
reward = createSprite(displayWidth,displayHeight-350);
reward.velocityX=-5;
    var randN= Math.round (random(1,10));

    switch (randN){
      case 1 : {reward.addImage (bronzeImg)
     reward.scale = 0.5 ;
     reward.y = displayHeight - 200
     }
      break;

      case 2 : {reward.addImage (bronzeImg)
        reward.scale = 0.5;
        reward.y = displayHeight - 200
        }
         break;

       case 3 : {reward.addImage (bronzeImg)
          reward.scale = 0.5 ;
          reward.y = displayHeight - 200
          }
           break;

        case 4 : {reward.addImage (bronzeImg)
            reward.scale = 0.5;
            reward.y = displayHeight - 200
            }
             break;

        case 5 : {reward.addImage (silverImg)
              reward.scale = 0.5;
              reward.y = displayHeight - 200
              }
               break;

        case 6 : {reward.addImage (silverImg)
                reward.scale = 0.5 ;
                reward.y = displayHeight - 200
                }
                break;

          case 7 : {reward.addImage (silverImg)
                  reward.scale = 0.5;
                  reward.y = displayHeight - 200
                  }
          break;

                      case 8 : {reward.addImage (goldImg)
                    reward.scale = 0.5 ;
                    reward.y = displayHeight - 200
                    }
              break;

              case 9 : {reward.addImage (goldImg)
                      reward.scale = 0.5 ;
                      reward.y = displayHeight - 200
                      }
                break;

            case 10: {reward.addImage (diamondImg)
              reward.scale = 0.5 ;
                        reward.y = displayHeight - 200
                        }
            break;

}



  }
}