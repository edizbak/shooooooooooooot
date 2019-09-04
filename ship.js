var rightKey = false,
leftKey = false,
upKey = false,
downKey = false,
ship_x = (width / 2) - 25, 
ship_y = height - 75, 
ship_w = 50, 
ship_h = 50,
ship;
var laserTotal = 2, lasers = [];
var laserTotal2 = 2, lasers2 = [];
function drawShip() {
    if (rightKey) ship_x += 5;
    else if (leftKey) ship_x -= 5;
    if (upKey) ship_y -= 5;
    else if (downKey) ship_y += 5;
    if (ship_x <= 0) ship_x = 0;
    if ((ship_x + ship_w) >= width) ship_x = width - ship_w;
     if (ship_y <= 0) ship_y = 0;
    if ((ship_y + ship_h) >= height) ship_y = height - ship_h;
     ctx.drawImage(ship, ship_x, ship_y);
   
   }

function drawLaser() {
    if (lasers.length)
      for (var i = 0; i < lasers.length; i++) {
        ctx.fillStyle = '#f00';
        ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3])
      }
  }
function drawLaser2() {
    if (lasers2.length)
      for (var i = 0; i < lasers2.length; i++) {
        ctx.fillStyle = '#f00';
        ctx.fillRect(lasers2[i][0],lasers2[i][1],lasers2[i][2],lasers2[i][3])
      }
  }

  function moveLaser() {
    for (var i = 0; i < lasers.length; i++) {
      if (lasers[i][1] > -11) {
        lasers[i][1] -= 10;
      } else if (lasers[i][1] < -10) {
        lasers.splice(i, 1);
      }
    }
  }
  function moveLaser2() {
    for (var i = 0; i < lasers2.length; i++) {
      if (lasers2[i][1] > -11) {
        lasers2[i][1] += 10;
      } else if (lasers2[i][1] < -10) {
        lasers2.splice(i, 1);
      }
    }
  }

