var canvas,
    ctx,
    width = 600,
    height = 600,
    bonus_w = 50,
    bonus_h = 50,
    bonuses = [],
    alive=true,
    lives = 3,
    gameStarted = false,
    score = 0;
//TODO : Ajouter des sons et une musique en fond (demande de FX) plus important qu'une interface selon lui, et plus intéressant à présenter
function clearCanvas() {
 ctx.clearRect(0,0,width,height);
}

function playSong (){
  musique.play();
}

function gameStart() {
  startSong.pause();
  startSong.currentTime = 0;
 gameStarted = true;
 canvas.removeEventListener('click', gameStart, false);
}

function scoreTotal() {
  ctx.font = 'bold 18px VT323';
  ctx.fillStyle = '#fff';
  ctx.fillText('Score: ', 490, 30);
  ctx.fillText(score, 550, 30);
  ctx.fillText('Lives:', 10, 30);
  ctx.fillText(lives, 68, 30);
  if (!gameStarted) {
    ctx.font = 'bold 50px VT323';
    ctx.fillText('Best Shooter 3000', width / 2 - 170, height / 2);
    ctx.font = 'bold 20px VT323';
    ctx.fillText('Click to Play', width / 2 - 55, height / 2 + 30);
    ctx.fillText('Use arrow keys to move', width / 2 - 90, height / 2 + 60);
    ctx.fillText('Use the x key to shoot', width / 2 - 90, height / 2 + 90);
    startSong.loop = false;
    startSong.play();
  }
  if (!alive) {
    ctx.fillText('Game Over !', 245, height / 2);
    ctx.fillRect((width / 2) - 60, (height / 2) + 10,100,40);
    ctx.fillStyle = '#000';
    ctx.fillText('Retry ?', 260, (height / 2) + 35);
    canvas.addEventListener('click', retryButton, false);
  }
 }

function retryButton(e) {
  var cursorPos = getCursorPos(e);
  if (cursorPos.x > (width / 2) - 53 && cursorPos.x < (width / 2) + 47 && cursorPos.y > (height / 2) + 10 && cursorPos.y < (height / 2) + 50) {
    alive = true;
    lives = 3;
    score = 0;
    reset();
    canvas.removeEventListener('click', retryButton, false);
  }
 }
 
 function cursorPosition(x,y) {
  this.x = x;
  this.y = y;
 }

 function getCursorPos(e) {
  var x;
  var y;
  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  var cursorPos = new cursorPosition(x, y);
  return cursorPos;
 }

function drawBonuses() {
 for (var i = 0; i < bonuses.length; i++) {
      ctx.drawImage(bonus, bonuses[i][0], bonuses[i][1]);
 }
}

function moveBonuses() {
  for (var i = 0; i < bonuses.length; i++) {
   if (bonuses[i][1] < height) {
     bonuses[i][1] += bonuses[i][4];
   } else if (bonuses[i][1] > height - 1) {
      bonuses.splice(i, 1);
    }
  }
}

function checkLives() {
  lives -= 1;
  if (lives > 0) {
    reset();
  } else if (lives == 0) {
    alive = false;
    loseSong.play();
    musique.pause();
    musique.currentTime = 0;
  }
 }
 
 function reset() {
  var enemy_reset_x = 50;
  ship_x = (width / 2) - 25, ship_y = height - 75, ship_w = 50, ship_h = 57;
  for (var i = 0; i < enemies.length; i++) {
    enemies[i][0] = enemy_reset_x;
    enemies[i][1] = -45;
    enemy_reset_x = enemy_reset_x + enemy_w + 60;
    bonuses.splice(i,1);
  }
 }

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  enemy = new Image();
  enemy.src = 'assets/8bit_enemy.png';
  ship = new Image();
  ship.src = 'assets/ship.png';
  bonus = new Image();
  bonus.src = 'assets/bonusS.png';
  starfield = new Image();
  starfield.src = 'assets/starfield.jpg';
  //setInterval(gameLoop, 25);
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
  canvas.addEventListener('click', gameStart, false);
  gameLoop();
}

function gameLoop() {
  clearCanvas();
  drawStarfield();
  if (alive && gameStarted && lives > 0) {
  playSong();
  scoreTotal();
    hitTest();
    moveEnemies();
    moveLaser();
    moveBonuses();
    drawEnemies();
    drawShip();
    drawLaser();
    drawBonuses();
    shipCollision();
    shipCollisionBonus();
    spawnEnemy();
}
scoreTotal();
game = setTimeout(gameLoop, 1000 / 30);
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
  if (e.keyCode == 88 && lasers.length <= laserTotal) {lasers.push([ship_x + 25, ship_y - 10, 4, 20]); lasers2.push([ship_x + 25, ship_y + 40, 4, 20]);shootSong.play()}
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;