
var canvas,
    ctx,
    width = 600,
    height = 600,
    bonus_w = 50,
    bonus_h = 50,
    bonuses = [],
    alive=true,
    musique = new Audio('assets/SweetDreams.mp3'),
    hitSong = new Audio("hit.wav"),
    shootSong = new Audio("shoot.wav"),
    bonusSong = new Audio("bonus.wav"),
    score = 0;
//TODO : Ajouter des sons et une musique en fond (demande de FX) plus important qu'une interface selon lui, et plus intéressant à présenter
function clearCanvas() {
 ctx.clearRect(0,0,width,height);
}

function scoreTotal() {
  console.log("ctx");
  ctx.font = 'bold 18px Arial';
  ctx.fillStyle = '#fff';
  ctx.fillText('Score: ', 490,30);
  ctx.fillText(score, 550,30);
}
function playSong (){
  musique.volume=2;
  musique.play();
}
function drawBonuses() {
 // TODO: corriger l'erreur suivante:
 /*
 ship.js:64 Uncaught TypeError: Cannot read property '0' of undefined
    at shipCollisionBonus (ship.js:64)
    at gameLoop (jeux.js:69)
    */
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
  playSong();
  scoreTotal();
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
    shipCollisionBonus();
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
  if (e.keyCode == 88 && lasers.length <= laserTotal) {lasers.push([ship_x + 25, ship_y - 10, 4, 20]); lasers2.push([ship_x + 25, ship_y + 40, 4, 20]);}
}


function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;