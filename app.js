var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 45;
var distance = 20;
context.fillStyle = 'rgba(255,165,0,.5)';

for(var i = 0; i < 10; i++){
  context.fillRect(distance, distance, size, size);
  distance += size / 2;
}