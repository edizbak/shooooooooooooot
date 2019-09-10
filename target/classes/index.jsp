<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>HTML5 Shooter 4000</title>
<link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' />
<style>
body {
  padding:0;
  margin:0;
  background-image:url("assets/starfield.jpg");
}
canvas {
  display:block;
  margin:30px auto 0;
  border:1px dashed #ccc;
  background:#000;
}
#playerName{
	position: relative;
	margin-top: -288px;
	margin-left: 42%;
	width: 100px;
	visibility: hidden;
}

#hallOfFameBody td{
	padding: 5px;
	min-width: 60px;
}
</style>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script type="text/javascript" src="scripts/jeux.js"></script>
<script type="text/javascript" src="scripts/ennemi.js"></script>
<script type="text/javascript" src="scripts/ship.js"></script>
<script type="text/javascript" src="scripts/starfield.js"></script>
<script type="text/javascript" src="scripts/song.js"></script>
<script type="text/javascript" src="scripts/scoring.js"></script>

</head>

<body>
  <canvas id="canvas" width="600" height="600"></canvas>
  <div id="playerName">
  	<input type="text" name="player" id="playName">
  </div>

  <!-- Modal -->
<div class="modal fade" id="hallOfFame" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hall of Fame</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="hallOfFameBody">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>