var canvas;

var rainbow, unicorn;
var rainbowImg, unicornImg;

var ground, ground2, ground3, ground4, invisibleGround, ground3X, ground4X;
var groundImg, ground2Img, ground3Img, ground4Img;

var cone, fence, fire, lightning, blade, stone;
var coneImg, fenceImg, fireImg, lightningImg, bladeImg, stoneImg;

var bronze, gold, silver, diamond;
var bronzeImg, goldImg, silverImg, diamondImg;


function preload() {
  groundImg = loadImage('images/gr.png');
  ground2Img = loadImage('images/gr2.png');
  ground3Img = loadImage('images/gr3.png');
  ground4Img = loadImage('images/gr4.png')

  rainbowImg = loadImage('images/bg.png');
  unicornImg = loadAnimation(
    'images/unicorn/uni1.png',
    'images/unicorn/uni2.png',
    'images/unicorn/uni3.png',
    'images/unicorn/uni4.png',
    'images/unicorn/uni5.png',
    'images/unicorn/uni6.png',
    'images/unicorn/uni7.png'
  );

  goldImg = loadImage('images/rewards/gold.png');
  bronzeImg = loadImage('images/rewards/bronze.png');
  silverImg = loadImage('images/rewards/silver.png');
  diamondImg = loadImage('images/rewards/diamond.png');

  fireImg = loadImage('images/obstacles/fire.png');
  lightningImg = loadImage('images/obstacles/lightning.png');
  fenceImg = loadImage('images/obstacles/fence.png');
  ninjaBladeImg = loadImage('images/obstacles/ninjaBlade.png');
  stoneImg = loadImage('images/obstacles/stone.png');
  coneImg = loadImage('images/obstacles/cone.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  invisibleGround = createSprite(windowWidth/2, windowHeight-20, windowWidth, 20);
  invisibleGround.visible = false;

  ground = createSprite(440, windowHeight - 176);
  ground.addImage(ground2Img);
  ground.scale = 1.7;
  ground.velocityX = -2;
  ground.debug = false;

  ground2 = createSprite(windowWidth / 2 + 510, windowHeight - 176);
  ground2.addImage(ground2Img);
  ground2.scale = 1.7;
  ground2.velocityX = -2;
  ground2.debug = false;

  ground3 = createSprite(windowWidth+580, windowHeight - 176);
  ground3.addImage(ground2Img);
  ground3.scale = 1.7;
  ground3.velocityX = -2;
  ground3.debug = false;
  ground3X = ground3.x

  rainbow = createSprite(windowWidth / 2, 160);
  rainbow.addImage(rainbowImg);

  unicorn = createSprite(200,windowHeight - 130);
  unicorn.addAnimation('running', unicornImg);
  unicorn.scale = 2;
  unicorn.debug = false;
  unicorn.setCollider("rectangle",0,0,200,110);
  //unicorn.velocityX = 1;
}

function draw() {
  background('lightblue');

  

 if (ground.x < - 450) {
    ground.x = ground3X-20;
  }

  if (ground2.x < - 450) {
    ground2.x = ground3X-20;
  }

  if (ground3.x < - 450) {
    ground3.x = ground3X-20;
  }

  spawnObstacles();
  spawnRewards();

  unicorn.collide(invisibleGround);

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(windowWidth, windowHeight - 350);
    obstacle.velocityX = -5;
    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1:
        {
          obstacle.addImage(coneImg);
          obstacle.scale = 0.5;
          obstacle.y = windowHeight - 200;
        }
        break;
      case 2:
        {
          obstacle.addImage(fenceImg);
          obstacle.scale = 1;
          obstacle.y = windowHeight - 200;
        }
        break;
      case 3:
        {
          obstacle.addImage(fireImg);
          obstacle.scale = 0.2;
          obstacle.y = windowHeight - 200;
        }
        break;
      case 4:
        {
          obstacle.addImage(lightningImg);
          obstacle.scale = 1;
          obstacle.y = windowHeight - 350;
        }
        break;
      case 5:
        {
          obstacle.addImage(ninjaBladeImg);
          obstacle.scale = 0.4;
          obstacle.y = windowHeight - 350;
        }
        break;
      case 6:
        {
          obstacle.addImage(stoneImg);
          obstacle.scale = 0.5;
          obstacle.y = windowHeight - 200;
        }
        break;

      default:
        console.log('no obstacle');
        break;
    }
    obstacle.lifetime = windowHeight / 5;

    //obstacle.debug=true;
    //obstacle.setCollider("rectangle",0,0,350,350);
    //obstacleGroup.add(obstacle);
  }
}

function spawnRewards() {
  if (frameCount % 500 === 0) {
    reward = createSprite(windowWidth, windowHeight - 350);
    reward.velocityX = -5;
    var randN = Math.round(random(1, 10));

    switch (randN) {
      case 1:
        {
          reward.addImage(bronzeImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 2:
        {
          reward.addImage(bronzeImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 3:
        {
          reward.addImage(bronzeImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 4:
        {
          reward.addImage(bronzeImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 5:
        {
          reward.addImage(silverImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 6:
        {
          reward.addImage(silverImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 7:
        {
          reward.addImage(silverImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 8:
        {
          reward.addImage(goldImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 9:
        {
          reward.addImage(goldImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;

      case 10:
        {
          reward.addImage(diamondImg);
          reward.scale = 0.5;
          reward.y = windowHeight - 200;
        }
        break;
    }
  }
}
