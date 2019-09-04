
var canvas,
    ctx,
    width = 600,
    height = 600,
    bonuses = [];

function clearCanvas() {
 ctx.clearRect(0,0,width,height);
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

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  enemy = new Image();
  enemy.src = 'assets/8bit_enemy.png';
  ship = new Image();
  ship.src = 'assets/ship.png';
  bonus = new Image();
  bonus.src = 'assets/bonusBomb.png'
  setInterval(gameLoop, 25);
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
}


function gameLoop() {
  clearCanvas();
  hitTest();
  moveEnemies();
  moveLaser();
  moveBonuses();
  moveLaser2();
  drawEnemies();
  drawShip();
  drawLaser();
  drawBonuses();
  drawLaser2();
  spawnEnemy();
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
  if (e.keyCode == 88 && lasers.length <= laserTotal) {lasers.push([ship_x + 25, ship_y - 20, 4, 20]); lasers2.push([ship_x + 25, ship_y + 20, 4, 20]);}

}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;